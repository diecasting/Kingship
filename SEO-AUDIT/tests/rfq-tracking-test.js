const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("static/js/rfq-lead-tracking.js", "utf8");

async function runScenario(response) {
  let submitHandler;
  let fetchCalls = 0;
  const button = {
    disabled: false,
    textContent: "Submit RFQ",
  };
  const status = {
    textContent: "",
    style: {},
    setAttribute() {},
  };
  const form = {
    action: "https://formspree.io/f/xpqgbdly",
    dataset: {},
    checkValidity: () => true,
    reportValidity() {},
    matches: () => true,
    querySelector(selector) {
      if (selector === "button[type=\"submit\"]") return button;
      if (selector === ".rfq-status") return status;
      if (selector === "[name=\"material\"]") return { value: "Aluminum-ADC12" };
      return null;
    },
  };
  const context = {
    document: {
      documentElement: { lang: "de-DE" },
      addEventListener(type, handler) {
        if (type === "submit") submitHandler = handler;
      },
      createElement() {
        return status;
      },
    },
    location: { pathname: "/de/contact/" },
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

  return { context, form, button, status, prevented, fetchCalls: () => fetchCalls };
}

async function main() {
  const ok = await runScenario({ ok: true });
  assert.equal(ok.prevented, true);
  assert.equal(ok.fetchCalls(), 1);
  assert.equal(ok.form.dataset.submitting, "1");
  assert.equal(ok.button.disabled, true);
  assert.equal(ok.context.dataLayer.length, 1);
  assert.equal(ok.context.dataLayer[0].event, "rfqSuccess");
  assert.equal(ok.context.dataLayer[0].form_location, "contact");
  assert.equal(ok.context.dataLayer[0].material, "Aluminum-ADC12");
  assert.match(ok.button.textContent, /eingegangen/);

  const duplicateGate = await runScenario({
    ok: false,
    json: async () => ({ errors: { message: "Required" } }),
  });
  assert.equal(duplicateGate.prevented, true);
  assert.equal(duplicateGate.fetchCalls(), 1);
  assert.equal(duplicateGate.form.dataset.submitting, "");
  assert.equal(duplicateGate.button.disabled, false);
  assert.match(duplicateGate.status.textContent, /message/);
  assert.equal(duplicateGate.status.style.color, "#dc2626");

  console.log("rfq-tracking-test: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
