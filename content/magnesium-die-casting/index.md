---
title: "Magnesium Die Casting — AZ91D vs AM60B Alloy Selection, Design & RFQ"
description: "Magnesium HPDC in AZ91D and AM60B on a 400T–3000T range: alloy selection, thin-wall design, corrosion strategy, CNC integration and RFQ inputs for sourcing teams."
heroStyle: "background"
layout: "background"
layoutBackgroundBlur: false
disableHeroImageFilter: true
featureImage: "/img/magnesium-die-casting-banner.webp"
featureImageAlt: "High-precision magnesium alloy hot and cold chamber die casting production fleet"
showTableOfContents: false
service:
  name: "Magnesium Die Casting"
  category: "High-Pressure Die Casting"
  tagline: "Magnesium HPDC in AZ91D and AM60B on a 400T–3000T machine range, with alloy and design decisions made in DFM."
  materials:
    - "AZ91D magnesium casting alloy"
    - "AM60B magnesium casting alloy"
    - "A357 aluminium casting alloy (for Mg-vs-Al comparisons)"
  processes:
    - "High-pressure die casting (HPDC)"
    - "Thixocasting and Vacuum-Assisted Rheocast"
    - "DFM, fill and solidification review"
    - "CNC post-machining"
    - "Shot Blasting and Anodizing"
  equipment:
    - "400T–3000T HPDC machine range"
    - "Robotic Pouring Line"
    - "Machining and inspection scope defined per project"
  specifications:
    - label: "Machine tonnage"
      value: "400T – 3000T"
    - label: "Min. wall thickness (typical, project-dependent)"
      value: "1.0 – 1.2 mm, subject to material, geometry, flow distance and project conditions"
    - label: "CNC tolerance (post-machining, project-dependent)"
      value: "±0.01 mm achievable on defined features under appropriate post-machining conditions"
    - label: "Surface treatment"
      value: "Defined per project; Shot Blasting and Anodizing are confirmed processes"
  industries:
    - "Automotive"
    - "EV"
    - "Aerospace"
  applications:
    - "Structural Components"
    - "Housings & Enclosures"
    - "Safety Components"
  quality:
    - "Inspection characteristics and acceptance criteria defined per project"
    - "First-article and documentation scope agreed at RFQ"
    - "Dimensional verification method agreed against the drawing"
  seo_keywords:
    - "magnesium die casting"
    - "AZ91D vs AM60B die casting"
    - "magnesium HPDC China"
    - "AZ91D AM60B alloy selection"
    - "magnesium casting thin wall design"
    - "magnesium casting corrosion protection"
    - "magnesium die casting RFQ drawing"
  related_resources:
    - title: "AZ91D Properties Engineering Guide"
      url: "https://alumcasting.com/az91d-magnesium-die-casting-automotive-parts/"
    - title: "AM60B Alloy Properties"
      url: "https://alumcasting.com/am60b-magnesium-alloy-die-casting-suppliers/"
  wordpress_resources:
    - title: "One-stop Die Casting, CNC & Finishing"
      url: "https://alumcasting.com/one-stop-die-casting-cnc-machining-surface-finishing/"
  faq:
    - q: "Which magnesium alloys do you cast?"
      a: "AZ91D and AM60B are the confirmed magnesium casting alloys. AZ91D is the widely used general-purpose grade with a balance of castability and strength; AM60B is generally selected where ductility and impact energy absorption matter. Other grades are evaluated against project requirements during DFM rather than assumed as standard."
    - q: "What wall thickness is feasible?"
      a: "Approximately 1.0–1.2 mm is a project-dependent guide for thin-wall HPDC work. The achievable value depends on the alloy, part geometry, flow distance and the specific project conditions, and is confirmed during drawing and DFM review — not treated as an unconditional minimum."
    - q: "What CNC tolerance is achievable on a magnesium casting?"
      a: "A tolerance of ±0.01 mm can be achieved on defined features under appropriate post-machining conditions. It depends on part geometry, material, machining process and setup, datum strategy, inspection method and project requirements, and is confirmed per feature during DFM review."
    - q: "How is corrosion protection handled?"
      a: "Bare magnesium should not be assumed corrosion-resistant. Surface treatment is selected per project — Shot Blasting and Anodizing are confirmed processes, while conversion coatings, e-coating or micro-arc oxidation are general industry options to be evaluated for suitability and availability. Design measures against galvanic contact corrosion are reviewed at the same time."
    - q: "How are quality and dimensional requirements defined?"
      a: "The inspection characteristics, measurement method, sampling plan and documentation are project-specific deliverables agreed at RFQ stage. First-article inspection, PPAP documentation and CMM-based verification are examples of scope to be defined by the customer's quality system and the drawing, not automatically included capabilities. No current validity is claimed for IATF 16949 or ISO 9001 certificates."
    - q: "What do you need to quote a magnesium casting?"
      a: "A 3D model and 2D drawing with GD&T, the alloy, annual volume and lot size, wall and geometry constraints, target tolerances, surface treatment requirement, inspection and documentation scope, and whether the request is for prototypes or series production."
---

{{< center_style >}}

## Magnesium Die Casting: Alloy Selection, Thin-Wall Design and Procurement Decisions

Magnesium high-pressure die casting (HPDC) is chosen when mass reduction is a design driver rather than a marketing claim. With a density around 1.74–1.81 g/cm³ depending on the alloy, magnesium is roughly a third lighter than aluminium by volume and substantially lighter than steel — a **general material property**, not a Kingship achievement. The engineering question is not simply "is magnesium lighter?" but whether the part's stiffness, corrosion exposure, joining method, thermal duty and volume justify the alloy and process choices. This page is written for design engineers, process engineers, sourcing managers and quality engineers evaluating a magnesium casting program.

The confirmed casting machine range is 400T–3000T, with AZ91D and AM60B as the confirmed magnesium casting alloys. A357 is the confirmed aluminium casting alloy and is referenced here only where an Mg-versus-Al decision is being made. Thixocasting and Vacuum-Assisted Rheocast are available process routes; Robotic Pouring Line, Shot Blasting and Anodizing are also confirmed capabilities. Where a figure below is a general industry range rather than a Kingship specification, it is labelled as such.

### Why lightweighting is a system decision

Magnesium's low density brings a high specific strength and useful damping and EMI-shielding characteristics, which is why it appears in laptop housings, camera bodies, steering-wheel frames and electronics enclosures. Its absolute elastic modulus is lower than steel, however, so a straight material substitution rarely works: section thickness, rib layout and boss geometry usually need to change to recover bending stiffness. Thermal management can be a benefit in housings that must spread heat, but creep resistance at elevated temperature is a design limit that must be checked against the actual duty cycle. Treat the density advantage as an input to the design review, not as the conclusion of it.

### AZ91D versus AM60B: selecting the alloy

AZ91D is the widely used general-purpose magnesium die casting alloy, offering a practical balance of castability, fluidity and strength. AM60B is generally selected when elongation and impact energy absorption matter more — for example in safety-related automotive components. The two are not interchangeable at the quoting stage: they differ in fill behaviour, susceptibility to hot tearing, and how they respond to section transitions. Other grades sometimes discussed in the industry are **not confirmed Kingship materials**; a request for a different grade is handled as a project-specific technical evaluation during DFM, not as a standard offering.

| Selection criterion | AZ91D | AM60B | Design implication |
|---|---|---|---|
| Typical selection driver | General-purpose castability and strength balance | Ductility and impact energy absorption | Start from the part's failure mode, not a grade preference |
| Thin-wall filling | Good fluidity for complex housings | Requires attention to section transitions | Gate and overflow layout reviewed in DFM |
| Typical application bias | Housings, electronics enclosures, structural covers | Safety-related / impact-loaded components | Confirm with the drawing's critical characteristics |
| Corrosion approach | Surface treatment required | Surface treatment required | Never specify bare magnesium for a corrosive environment |
| Machining | Cast-skin removal and datum planning | Same, with attention to ductility and burr control | Allowance defined on the casting drawing |

### Hot-chamber and cold-chamber process considerations

Magnesium HPDC is commonly run on hot-chamber machines for smaller parts because the injection unit sits in the melt, while larger parts and higher clamping forces use cold-chamber equipment. The distinction affects cycle time, melt handling and the practical part-size envelope. Melt oxidation and chip ignition risk are managed with cover gas and disciplined housekeeping — these are **general industry safety practices**, described here as engineering context rather than as a claim about any specific factory installation. Whatever the route, fill pattern, air evacuation and solidification sequence are reviewed against the part geometry before the die is built.

### Thin-wall, draft, ribs and bosses

Thin-wall magnesium castings are attractive because they combine low mass with good fill length, but they amplify every design compromise. A wall thickness of approximately 1.0–1.2 mm is a **project-dependent guide**: the achievable value depends on the alloy, part geometry, flow distance and the specific project conditions, and must be confirmed during drawing and DFM review. Uniform walls with generous fillets reduce hot spots and shrinkage; ribs should stiffen without creating thick junctions; bosses need enough local mass for thread engagement without sinking. Draft angles, parting-line placement and ejector positions must be settled with the machining datum in mind — an ejector mark inside a sealing land is a downstream machining problem created upstream.

| Design parameter | Typical consideration | Why it is project-dependent |
|---|---|---|
| Wall thickness | ~1.0–1.2 mm as a starting guide | Alloy, flow distance, geometry, project conditions |
| Draft angle | Sufficient for reliable ejection | Surface finish requirement, die layout |
| Ribs and fillets | Uniform sections, no thick junctions | Stiffness target, shrinkage behaviour |
| Bosses and threads | Local mass for engagement | Load case, machining allowance |
| Machining allowance | Stock below the cast skin | Which faces become functional datums |

### Corrosion, surface treatment and joining

Bare magnesium should never be specified on the assumption of inherent corrosion resistance. Protection is a system: a suitable surface treatment, design measures that isolate the magnesium from dissimilar metals to avoid galvanic contact corrosion, and appropriate fastener and sealing choices. Shot Blasting and Anodizing are confirmed processes. Conversion coatings, e-coating and micro-arc oxidation are general industry options whose suitability, availability and performance must be evaluated for each project — they are not presented here as confirmed Kingship processes. Where a sealing face is machined after coating, the process sequence and masking plan belong in the RFQ.

| Surface topic | General industry options | Project decision required |
|---|---|---|
| Cleaning / texture | Shot Blasting (confirmed) | Ra target, masking of machined faces |
| Conversion / anodic layers | Anodizing (confirmed); conversion coatings as an option | Corrosion requirement, test method |
| Organic finishes | E-coating / painting as general options | Availability, thickness on functional faces |
| Micro-arc oxidation | General industry option | Suitability and availability per project |
| Galvanic isolation | Design measures, fastener and gasket choice | Mating materials and service environment |

### Machining integration: allowance, datums and chip safety

Most magnesium castings need CNC post-machining for sealing faces, threaded holes and assembly datums. The casting drawing must define the machining allowance and the stable surfaces used for the first setup; the finished-part drawing defines datum A|B|C and the geometric tolerances checked against them. A tolerance of ±0.01 mm can be achieved on defined features under appropriate post-machining conditions, but it depends on part geometry, material, machining process and setup, datum strategy, inspection method and project-specific requirements — it is confirmed during drawing and DFM review, not applied as a blanket value to every part. Magnesium's higher thermal expansion and its fine, ignitable chips also influence cutting parameters, coolant choice, chip evacuation and workshop safety procedures; these are general machining considerations to agree with the supplier. See the [CNC machining](https://kingship.alumcasting.com/cnc-machining/) page for the datum and tolerance discussion in detail.

### Dimensional stability and project quality requirements

First-article inspection, PPAP documentation and CMM-based dimensional verification are **project-specific deliverables to be agreed at RFQ stage**, not automatically included or presumed in-house capabilities. What is required depends on the customer's quality system, the end application and the drawing: which characteristics are measured, with what method, at what frequency, and with what records. Kingship works to agreed project requirements; no current validity is claimed for IATF 16949 or ISO 9001 certificates, and quality-system expectations are handled as "aligned with" requirements where applicable. A comparison of general inspection topics is below; each is a scope question, not a capability claim.

| Quality topic | What to define at RFQ |
|---|---|
| First-article inspection | Whether a report is required and its format |
| PPAP / documentation | Submission level and document list |
| Dimensional verification | Characteristics, method, sampling, acceptance criteria |
| Porosity / leak-related criteria | Whether applicable to the part, and the acceptance method |
| Change control | How drawing revisions and die modifications are approved |

### Applications and component-specific considerations

Laptop and camera housings exploit low mass, damping and EMI shielding, but need flat sealing lands and cosmetic surface control. Steering-wheel frames and seat structures favour the ductility and impact behaviour associated with AM60B. EV and electronics enclosures add thermal spreading and, in some designs, leak-tightness requirements. Automotive structural covers combine large thin walls with machined interfaces, so distortion after unclamping and after machining must be considered together. In every case the component's functional requirements — not a generic material property list — determine alloy, wall, rib and post-processing choices.

| Component type | Dominant requirement | Design / process focus |
|---|---|---|
| Electronics housings | Mass, EMI shielding, surface finish | Thin walls, flat lands, coating sequence |
| Steering-wheel / safety parts | Ductility, impact absorption | Alloy choice, section transitions |
| EV / battery enclosures | Thermal path, sealing | Flatness, agreed leak-test scope |
| Structural covers | Stiffness at low mass | Rib layout, machining datum stability |
| Camera / optical bodies | Damping, dimensional stability | Uniform walls, controlled finishing |

### Magnesium versus aluminium, and where semi-solid fits

Choosing between magnesium and aluminium is a trade-off between mass, absolute stiffness, thermal behaviour, corrosion strategy, cost and volume — not a simple substitution. A357 is the confirmed aluminium casting alloy. [Compare magnesium vs aluminium die casting](https://alumcasting.com/magnesium-vs-aluminum-die-casting/) for a broader discussion, and see [aluminium die casting](https://kingship.alumcasting.com/aluminum-die-casting/) for the aluminium route. For parts where a semi-solid route is of interest, [semi-solid rheocasting](https://kingship.alumcasting.com/semi-solid-rheocasting/) is a separate process with its own process window — the 30–65% solid-fraction range is a process window, not a universal guaranteed value. Thixocasting and Vacuum-Assisted Rheocast are confirmed process routes; the decision between HPDC and a semi-solid route belongs in DFM.

| Decision axis | Magnesium HPDC | Aluminium HPDC (A357) |
|---|---|---|
| Density | Lower — mass reduction driver | Higher |
| Absolute stiffness | Lower; section design must compensate | Higher |
| Corrosion strategy | Surface treatment + galvanic isolation essential | Anodizing available, design still matters |
| Chip / melt safety | Specific general industry precautions | Conventional |
| Alloy choice in this program | AZ91D / AM60B | A357 |

### Supplier selection and integrated programs

Ask a prospective supplier how alloy selection, gating, thin-wall feasibility and machining allowance are decided, and whether the die design is reviewed against the finished-part drawing. Clarify which surface treatments are genuinely available for your project, and define the inspection and documentation scope before comparing quotations. Keeping casting, [tooling](https://kingship.alumcasting.com/tooling/) and CNC post-machining in one program reduces vendor interfaces and shortens the DFM feedback loop; it is a coordination benefit, not a quality guarantee. See the [manufacturing capabilities](https://alumcasting.com/manufacturing-capabilities/) overview for wider context.

### RFQ: what to provide for a comparable quotation

| RFQ input | Why it is needed |
|---|---|
| 3D model (STEP / IGES) | Geometry for DFM, fill and tool-path review |
| 2D drawing with GD&T and datum A\|B\|C | Functional features and verification basis |
| Alloy (AZ91D / AM60B) or comparison request | Determines fill behaviour, properties, safety measures |
| Annual volume and lot size | Determines cavity count and process plan |
| Wall / geometry constraints | Confirms thin-wall feasibility |
| Target tolerances per feature | Distinguishes critical from non-critical dimensions |
| Surface treatment requirement | Determines finishing and masking plan |
| Inspection and documentation scope | Determines first-article, sampling and records |
| Prototype or series | Determines bridge or production tooling |

Submit the package through the [contact / RFQ page](https://kingship.alumcasting.com/contact/); the drawing and DFM review will identify which alloy, wall thickness, treatment and inspection decisions need confirmation before tooling.

<section class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 mt-12 text-center">
  <h2 class="text-3xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">Ready to Start Your Project?</h2>
  <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
    Send your 2D/3D drawings for a DFM review and a formal quotation. Our team will confirm alloy, wall thickness, surface treatment and inspection scope against your requirements.
  </p>
  <div class="flex justify-center gap-4">
    <a href="https://kingship.alumcasting.com/contact/" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">Request A Quote</a>
    <a href="https://alumcasting.com/about-alumcasting-die-casting-expert/" class="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 px-8 py-3 rounded-lg font-semibold transition">Consult an Expert</a>
  </div>
</section>

{{< rfq_form >}}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kingship Precision Magnesium Die Casting",
  "url": "https://kingship.alumcasting.com/magnesium-die-casting/"
}
</script>
