---
title: "Eliminating Sub-Surface Porosity in Aluminum Die Casting: ADC12 & A380 Optimization"
description: "An expert-level engineering guide to eliminating sub-surface porosity in ADC12 and A380 aluminum die casting using vacuum venting, PQ2 mold flow analysis, and precision shot sleeve velocity tuning."
keywords: ["sub-surface porosity aluminum die casting", "ADC12 porosity control", "A380 die casting defects", "vacuum venting design die casting", "shot speed profiling"]
date: 2026-07-05
---

In precision aluminum die casting, sub-surface porosity is one of the most insidious defects. Unlike surface blisters or macro-shrinkage cavities, sub-surface porosity remains hidden until the skin layer (0.5 mm to 1.2 mm) is removed during [CNC machining](https://alumcasting.com/manufacturing-capabilities/) or surface treatment. For high-pressure die cast (HPDC) components utilizing ADC12 and A380 alloys, this defect leads to catastrophic structural failures, pressure-test leaks, and aesthetic rejects after anodizing or powder coating.

As a metallurgist, addressing this requires moving away from guesswork and looking directly at the physics of the injection cycle. Sub-surface porosity is driven by two main mechanisms: gas entrapment (turbulent flow trapping air/die lubricant vapors) and localized solidification shrinkage. 

Here is the engineering blueprint to systematically eliminate this defect.

---

## 1. Multi-Stage Shot Speed Control and Gate Velocity Optimization

The transition from the first stage (V1) to the second stage (V2) of the injection stroke is where most air entrapment occurs. If the slow shot speed is too high, a premature wave forms in the shot sleeve, trapping air before it reaches the runner system.

### Slow Shot Velocity (V1) and Critical Sleeve Filling
The slow shot velocity must be calculated based on the sleeve filling percentage. For A380 and ADC12, the critical velocity (Vc) ensures a smooth, uninterrupted wave front that pushes air ahead of the molten metal:

$$Vc = 0.5 \times \sqrt{g \times h}$$

Where g is the acceleration due to gravity and h is the height of the empty space in the sleeve. 

* **Actionable Rule:** Keep V1 between **0.15 m/s to 0.35 m/s**. Accelerate to V2 only when the molten metal has completely filled the runner and reached the gates (typically at 90-95% of total sleeve volume).

### Fast Shot Velocity (V2) and Gate Shear
Once the metal hits the gate, high velocity is required to fill the cavity before solidification begins. However, excessive gate velocity creates atomic-scale atomization, trapping micro-bubbles just under the mold skin.

* For **ADC12** ([ADC12 alloy properties guide](https://alumcasting.com/aluminum-alloy-adc12-properties-engineering-guide/)), gate velocity should be restricted to **35 - 45 m/s**.
* For **A380** ([A380 aluminum alloy properties](https://alumcasting.com/a380-aluminum-die-casting-alloy-properties/)), gate velocity can be pushed to **40 - 50 m/s** to overcome its slight sluggishness in fluid transition.

---

## 2. Advanced Vacuum Venting System Design

Passive venting is rarely sufficient. For air-tight requirements, [vacuum-assisted die casting](https://alumcasting.com/vacuum-assisted-die-casting-vs-conventional-hpdc-air-tightness/) is mandatory.

### Chill Block and Valve Placement
To prevent sub-surface gas from being compressed against the cavity walls, the vacuum system must evacuate the cavity down to an absolute pressure of **less than 80 mbar** within milliseconds.

* **Venting Cross-Section:** The minimum vent area must scale with the shot weight. For a standard 1.5 kg A380 casting, ensure a minimum vent cross-sectional area of **40 mm^2 to 60 mm^2** at the exit splits.
* **Profile Path:** Utilize a corrugated "chill block" configuration to drop the kinetic energy of the metal wavefront.
* **Actuation Timing:** Trigger the vacuum valve early in the slow-shot phase (V1) and cut it off precisely **0.02 seconds** before the fast-shot phase (V2) peak pressure is reached.

---

## 3. Mold Flow Analysis (PQ^2) & Thermal Parameters

Fixing porosity requires aligning the machine's hydraulic capability (P) with the die's flow characteristic (Q^2). Learn more about [die casting defects and solutions](https://alumcasting.com/die-casting-defects-solutions-pro-guide/).

### Critical Mold Flow & Thermal Targets
* **Fraction Solidification Parameter:** In your simulation software, monitor the Fraction Solid (FS) metric. If the FS reaches 0.3 (30% solid) before the filling is 98% complete, sub-surface porosity is guaranteed.
* **Mold Pre-heating:** Maintain fixed oil-regulated die temperatures. Read our guide on [cost-down DFM design for die casting molds](https://alumcasting.com/cost-down-dfm-design-aluminum-die-casting-molds/) to optimize your thermal management.

---

## Process Parameter Reference Table

| Process Parameter | ADC12 Optimization | A380 Optimization | Metallurgical Justification |
| :--- | :--- | :--- | :--- |
| **Pouring Temp** | 640 - 660 C | 650 - 670 C | A380 requires +10 C due to wider range. |
| **Slow Shot (V1)** | 0.20 - 0.28 m/s | 0.18 - 0.25 m/s | Prevents wave rollover. |
| **Fast Shot (V2)** | 3.8 - 4.5 m/s | 4.0 - 4.8 m/s | Ensures rapid filling. |
| **Intensification** | 75 - 85 MPa | 85 - 100 MPa | Counters shrinkage. |
| **Vacuum Level** | < 70 mbar | < 60 mbar | Removes residual gases. |

---

## Conclusion: The Ultimate Check

If you have optimized your V1/V2 profiling and installed vacuum venting, yet porosity persists, look at your **die lubricant**. If you need structural integrity for critical parts, consider our [pore-free die casting services](https://alumcasting.com/pore-free-die-casting-weldable-automotive-structural-parts/) or consult our team for [custom die casting for EV powertrain components](https://alumcasting.com/custom-aluminum-die-casting-for-ev-powertrain-components/). 

**Ready to optimize your casting process?** [Contact our engineering team today](https://alumcasting.com/contact/).

<section class="w-full mt-6">
  <div class="max-w-3xl mx-auto">
    {{< rfq_form >}}
  </div>
</section>