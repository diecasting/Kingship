---
title: "Eliminating Sub-Surface Porosity in Aluminum Die Casting: ADC12 & A380 Optimization"
description: "An expert-level engineering guide to eliminating sub-surface porosity in ADC12 and A380 aluminum die casting using vacuum venting, PQ2 mold flow analysis, and precision shot sleeve velocity tuning."
keywords: ["sub-surface porosity aluminum die casting", "ADC12 porosity control", "A380 die casting defects", "vacuum venting design die casting", "shot speed profiling"]
date: 2026-07-05
---

In precision aluminum die casting, sub-surface porosity is one of the most insidious defects. Unlike surface blisters or macro-shrinkage cavities, sub-surface porosity remains hidden until the skin layer ($0.5\text{ mm}$ to $1.2\text{ mm}$) is removed during CNC machining or surface treatment. For high-pressure die cast (HPDC) components utilizing **ADC12** and **A380** alloys, this defect leads to catastrophic structural failures, pressure-test leaks, and aesthetic rejects after anodizing or powder coating.

As a metallurgist, addressing this requires moving away from guesswork and looking directly at the physics of the injection cycle. Sub-surface porosity is driven by two main mechanisms: **gas entrapment** (turbulent flow trapping air/die lubricant vapors) and **localized solidification shrinkage**. 

Here is the engineering blueprint to systematically eliminate this defect.

---

## 1. Multi-Stage Shot Speed Control and Gate Velocity Optimization

The transition from the first stage ($V_1$) to the second stage ($V_2$) of the injection stroke is where most air entrapment occurs. If the slow shot speed is too high, a premature wave forms in the shot sleeve, trapping air before it reaches the runner system.

### Slow Shot Velocity ($V_1$) and Critical Sleeve Filling
The slow shot velocity must be calculated based on the sleeve filling percentage. For A380 and ADC12, the critical velocity ($V_c$) ensures a smooth, uninterrupted wave front that pushes air *ahead* of the molten metal:

$$V_c = 0.5 \times \sqrt{g \times h}$$

Where $g$ is the acceleration due to gravity and $h$ is the height of the empty space in the sleeve. 
*   **Actionable Rule:** Keep $V_1$ between **$0.15\text{ m/s}$ to $0.35\text{ m/s}$**. Accelerate to $V_2$ only when the molten metal has completely filled the runner and reached the gates (typically at $90-95\%$ of total sleeve volume).

### Fast Shot Velocity ($V_2$) and Gate Shear
Once the metal hits the gate, high velocity is required to fill the cavity before solidification begins. However, excessive gate velocity creates atomic-scale atomization, trapping micro-bubbles just under the mold skin.
*   For **ADC12** (higher silicon content, tighter freezing range), gate velocity should be restricted to **$35 - 45\text{ m/s}$**.
*   For **A380** (higher copper content, wider freezing range), gate velocity can be pushed to **$40 - 50\text{ m/s}$** to overcome its slight sluggishness in fluid transition.

---

## 2. Advanced Vacuum Venting System Design

Passive venting (overflows and air vents) is rarely sufficient to eliminate sub-surface gas porosity. Active high-vacuum venting is mandatory.
### Chill Block and Valve Placement
To prevent sub-surface gas from being compressed against the cavity walls, the vacuum system must evacuate the cavity down to an absolute pressure of **less than $80\text{ mbar}$** within milliseconds.

*   **Venting Cross-Section:** The minimum vent area ($A_v$) must scale with the shot weight. For a standard $1.5\text{ kg}$ A380 casting, ensure a minimum vent cross-sectional area of **$40\text{ mm}^2$ to $60\text{ mm}^2$** at the exit splits.
*   **Profile Path:** Utilize a corrugated "chill block" configuration. The wave-like geometry rapidly drops the kinetic energy of the advancing metal wavefront, freezing the aluminum before it can penetrate and clog the vacuum extraction valve.
*   **Actuation Timing:** Trigger the vacuum valve early in the slow-shot phase ($V_1$) and cut it off precisely **$0.02$ seconds** before the fast-shot phase ($V_2$) peak pressure is reached to protect the internal vacuum lines.

---

## 3. Mold Flow Analysis ($PQ^2$) & Thermal Parameters

Fixing sub-surface porosity requires aligning the machine's hydraulic capability ($P$) with the die's flow characteristic ($Q^2$). If the mold temperature drops too quickly, the liquid metal experiences premature skin solidification, trapping gas bubbles right below the surface.

### Critical Mold Flow & Thermal Targets
*   **Fraction Solidification Parameter:** In your MAGMA or AnyCasting simulation software, monitor the **Fraction Solid (FS)** metric. If the FS reaches $0.3$ ($30\%$ solid) before the filling is $98\%$ complete, sub-surface porosity is guaranteed due to poor feeding.
*   **Mold Pre-heating:** Maintain fixed oil-regulated die temperatures. Never rely on the molten metal to heat the tool.

---

## Process Parameter Reference Table

The following matrix represents the optimized baseline parameters for eliminating sub-surface porosity on medium-to-complex structural castings ($2.0\text{ mm} - 4.5\text{ mm}$ nominal wall thickness).

| Process Parameter | ADC12 Optimization | A380 Optimization | Metallurgical Justification |
| :--- | :--- | :--- | :--- |
| **Pouring Temperature** | $640^\circ\text{C} - 660^\circ\text{C}$ | $650^\circ\text{C} - 670^\circ\text{C}$ | High fluidity reduces cold flakes; A380 requires $+10^\circ\text{C}$ due to wider liquidus-solidus range. |
| **Slow Shot Speed ($V_1$)** | $0.20 - 0.28\text{ m/s}$ | $0.18 - 0.25\text{ m/s}$ | Prevents wave rollover and air entrapment in the shot sleeve. |
| **Fast Shot Speed ($V_2$)** | $3.8 - 4.5\text{ m/s}$ | $4.0 - 4.8\text{ m/s}$ | Ensures rapid cavity filling before the alloy reaches $30\%$ fraction solid. |
| **In-Gate Velocity** | $38 - 45\text{ m/s}$ | $42 - 50\text{ m/s}$ | Balances filling rate without causing severe atomization/spraying. |
| **Specific Intensification Pressure**| $75 - 85\text{ MPa}$ | $85 - 100\text{ MPa}$ | A380 requires higher squeeze pressure to counter its higher shrinkage volumetric rate ($~4.2\%$). |
| **Die Temperature (Active)** | $210^\circ\text{C} - 240^\circ\text{C}$ | $220^\circ\text{C} - 250^\circ\text{C}$ | Prevents premature chilling of the surface layer before intensification pressure peaks. |
| **Cavity Vacuum Level** | $< 70\text{ mbar}$ | $< 60\text{ mbar}$ | Pulls residual nitrogen and die lubricant vapor out before the metal front encapsulates it. |

---

## Conclusion: The Ultimate Check

If you have optimized your $V_1/V_2$ profiling, installed active vacuum venting, and matched your thermal properties, yet sub-surface porosity persists, look at your **die lubricant**. 

Excessive water-based die spray creates localized steam pockets when contacted by $650^\circ\text{C}$ molten aluminum. If the gas can't escape through your chill blocks, it will be driven into the outer millimetre of the casting. Switch to a minimum-quantity lubrication (MQL) system or a high-flashpoint synthetic wax, blow the cavities dry for an extra 2 seconds, and you will effectively drive your sub-surface scrap rate down to zero.