const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("static/js/rfq-lead-tracking.js", "utf8");

async function runScenario({
  lang = "en",
  formValid = true,
  files = [],
  initialCustomValidity = "",
  response = { ok: true },
}) {
  let submitHandler;
  let fetchCalls = 0;
  let reportValidityCalls = 0;

  const button = {
    disabled: false,
    textContent: "SEND TECHNICAL RFQ",
  };
  const status = {
    textContent: "",
    style: {},
    setAttribute() {},
  };
  const fileInput = {
    files,
    customValidity: initialCustomValidity,
    reportValidityCalls: 0,
    focused: false,
    setCustomValidity(message) {
      this.customValidity = message;
    },
    reportValidity() {
      this.reportValidityCalls += 1;
    },
    focus() {
      this.focused = true;
    },
  };
  const form = {
    action: "https://formspree.io/f/xpqgbdly",
    dataset: {},
    checkValidity: () => formValid,
    reportValidity() {
      reportValidityCalls += 1;
    },
    matches: () => true,
    querySelector(selector) {
      if (selector === "button[type=\"submit\"]") return button;
      if (selector === ".rfq-status") return status;
      if (selector === "[name=\"material\"]") return { value: "Aluminum-ADC12" };
      if (selector === "input[type=\"file\"][name=\"attachment\"]") return fileInput;
      return null;
    },
  };
  const context = {
    document: {
      documentElement: { lang },
      addEventListener(type, handler) {
        if (type === "submit") submitHandler = handler;
      },
      createElement() {
        return status;
      },
    },
    location: { pathname: "/contact/" },
    FormData: class {},
    fetch: async () => {
      fetchCalls += 1;
      return response;
    },
    dataLayer: [],
    console,
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(source, context);

  let prevented = false;
  await submitHandler({
    target: form,
    preventDefault() {
      prevented = true;
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 0));

  return {
    context,
    form,
    button,
    status,
    fileInput,
    prevented,
    fetchCalls: () => fetchCalls,
    reportValidityCalls: () => reportValidityCalls,
  };
}

async function main() {
  const noFile = await runScenario({ files: [] });
  assert.equal(noFile.form.checkValidity(), true);
  assert.equal(noFile.fetchCalls(), 1);
  assert.equal(noFile.prevented, true);
  assert.match(noFile.status.textContent, /received/i);

  const validFile = await runScenario({
    files: [{ name: "test.step", size: 1024, type: "application/octet-stream" }],
  });
  assert.equal(validFile.fetchCalls(), 1);
  assert.equal(validFile.fileInput.customValidity, "");

  const clearedStaleFileError = await runScenario({
    files: [],
    initialCustomValidity: "The selected file exceeds the 25 MB upload limit.",
  });
  assert.equal(clearedStaleFileError.fetchCalls(), 1);
  assert.equal(clearedStaleFileError.fileInput.customValidity, "");

  const oversizedFile = await runScenario({
    files: [{ name: "oversized.step", size: 25 * 1024 * 1024 + 1 }],
  });
  assert.equal(oversizedFile.fetchCalls(), 0);
  assert.equal(oversizedFile.fileInput.focused, true);
  assert.equal(oversizedFile.fileInput.reportValidityCalls, 1);
  assert.match(oversizedFile.status.textContent, /25 MB/);

  for (const lang of ["en", "de", "es", "fr", "it", "ja", "ko"]) {
    const localizedOversize = await runScenario({
      lang,
      files: [{ name: "oversized.step", size: 25 * 1024 * 1024 + 1 }],
    });
    assert.equal(localizedOversize.fetchCalls(), 0);
    assert.ok(localizedOversize.status.textContent.length > 0);
    assert.equal(
      localizedOversize.fileInput.customValidity,
      localizedOversize.status.textContent,
    );
  }

  const missingRequired = await runScenario({ formValid: false });
  assert.equal(missingRequired.fetchCalls(), 0);
  assert.equal(missingRequired.reportValidityCalls(), 1);
  assert.equal(missingRequired.status.textContent, "");

  const serverFileError = await runScenario({
    files: [{ name: "test.step", size: 1024 }],
    response: {
      ok: false,
      json: async () => ({
        errors: [
          {
            field: "attachment",
            code: "NO_FILE_UPLOADS",
            message: "File uploads are not supported for this form",
          },
        ],
      }),
    },
  });
  assert.equal(serverFileError.fetchCalls(), 1);
  assert.doesNotMatch(serverFileError.status.textContent, /Please check: 0/);
  assert.match(serverFileError.status.textContent, /File uploads are not available/i);

  const unsupportedFileType = await runScenario({
    files: [{ name: "unsupported.exe", size: 1024, type: "application/octet-stream" }],
    response: {
      ok: false,
      json: async () => ({
        errors: [
          {
            field: "attachment",
            message: "File type is not accepted",
          },
        ],
      }),
    },
  });
  assert.equal(unsupportedFileType.fetchCalls(), 1);
  assert.doesNotMatch(unsupportedFileType.status.textContent, /Please check: 0/);
  assert.match(
    unsupportedFileType.status.textContent,
    /attachment: File type is not accepted/,
  );

  const legacyObjectError = await runScenario({
    response: {
      ok: false,
      json: async () => ({ errors: { message: "Required" } }),
    },
  });
  assert.match(legacyObjectError.status.textContent, /message: Required/);

  console.log("rfq-file-optional-test: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
