---
title: "Altitude acclimatization"
weight: 10
---

# Acclimatization: How the Body Learns to Live at Altitude

Altitude is not a single problem. It is a cascade of physiological stressors: lower barometric pressure, reduced inspired oxygen, alkalosis, dehydration, altered cardiac dynamics, and the slow realignment of the body’s chemistry to a new environment. The good news is that humans are not helpless at high elevation; we are adaptable. The bad news is that adaptation is neither fast nor linear, and it is easily outrun by poor pacing.

For alpinists, acclimatization is the difference between movement that remains coordinated and movement that becomes a slow, miserable grind. It is also the difference between a summit push and a medical emergency.

This article breaks acclimatization into its core mechanisms and connects them to practical climbing decisions: how to pace, when to rest, why hydration matters, and why the body often betrays climbers when ascent exceeds adaptation.

> [!NOTE]
> This is the first entry in a series on altitude. The others cover [performance](../altitude-and-performance/), [altitude illness](../altitude-illness/), [the death zone](../death-zone/), [pre-acclimatization](../pre-acclimatization/) and [individual variability](../individual-variability/).

## 1. The Physics of Thin Air: Atmospheric Pressure, Dalton’s Law, and Diffusion Gradients

The first myth to dispel is that air at altitude somehow contains less oxygen. It does not. The fractional concentration of oxygen, {{< katex >}}FiO_2{{< /katex >}}, remains approximately 20.93% from sea level to the summit of Everest. Every breath you take on the summit is 20.93% oxygen, exactly as at sea level — there is simply a third as much of everything. What changes is not the composition of the air but the pressure exerted by that air. As altitude rises, barometric pressure falls.

This matters because oxygen availability is governed by partial pressure, not by percentage alone. Dalton’s law states that total barometric pressure is the sum of the partial pressures of each gas. At sea level, ambient pressure is roughly 760 mmHg, and inspired oxygen pressure is therefore close to {{< katex >}}0.2093 \times (760 - 47){{< /katex >}} mmHg, after subtracting water vapor pressure in the airways. At altitude, the same oxygen fraction is spread across a lower total pressure. The result is a lower inspired oxygen partial pressure.

The numbers make the point better than the prose does:

| Altitude | Barometric pressure | Inspired {{< katex >}}PO_2{{< /katex >}} | Fraction of sea level |
|---|---|---|---|
| Sea level | 760 mmHg | 149 mmHg | 100% |
| 2,500 m | ~560 mmHg | 107 mmHg | 72% |
| 4,000 m | ~462 mmHg | 87 mmHg | 58% |
| 5,300 m (Everest Base Camp) | ~400 mmHg | 74 mmHg | 50% |
| 7,000 m | ~343 mmHg | 62 mmHg | 42% |
| 8,848 m (Everest summit) | **253 mmHg** | **43 mmHg** | **29%** |

The Everest summit value of 253 mmHg is not a model output — it was measured on the summit by Chris Pizzo in 1981 and confirmed by David Breashears in 1997, sixteen years apart, agreeing within about 1 mmHg. It is also **higher than the standard atmosphere model predicts**, for reasons covered in [the death zone](../death-zone/) article, and that discrepancy is roughly the margin that makes unaided ascent possible at all.

That reduction drives a far more important process: hypobaric hypoxia (low pressure, low oxygen availability). The alveolar gas equation is a concise expression of this:

{{< katex display=true >}}
PAO_2 = FiO_2 \times (PB - PH_2O) - \frac{PaCO_2}{R}
{{< /katex >}}

where {{< katex >}}PB{{< /katex >}} is barometric pressure, {{< katex >}}PH_2O{{< /katex >}} is water vapor pressure, {{< katex >}}PaCO_2{{< /katex >}} is arterial carbon dioxide, and {{< katex >}}R{{< /katex >}} is the respiratory quotient. As barometric pressure declines, {{< katex >}}PAO_2{{< /katex >}} falls. Less oxygen reaches the alveoli, and the oxygen gradient between alveolar gas and pulmonary capillary blood shrinks.

This is where Henry’s and Fick’s laws enter the story, and it is easiest to understand if we start with a basic fact: the lungs are not magic oxygen pumps. They are a huge, very thin exchange surface designed to move oxygen from the air into blood, and to move carbon dioxide the other way. The air we breathe reaches tiny air sacs called alveoli. Each alveolus sits next to a capillary, so the air and the blood are separated by only a microscopic barrier. That barrier is thin enough that gas can move across it, but it is still a barrier, which means the gas needs a pressure difference to move efficiently.

Henry’s law explains why gas dissolves into blood in the first place: the higher the pressure of a gas in the air, the more of it will dissolve into the fluid beside it. In the lungs, oxygen is not “sucked” into the blood by the lungs themselves; it enters because the partial pressure of oxygen in the alveoli is higher than the partial pressure of oxygen in the blood returning from the tissues. The blood arriving at the lungs is relatively oxygen-poor, so oxygen diffuses inward. Carbon dioxide behaves in the opposite direction because its partial pressure is higher in the blood than in the alveoli.

Fick’s law of diffusion explains how quickly this happens: the faster the pressure gradient, the more gas crosses the membrane per unit time. In practical terms, oxygen transfer depends on the difference in oxygen pressure between alveolar air and blood, the surface area available for exchange, and how thick the barrier is. The body optimizes this by having roughly 70–100 square meters of exchange surface in the lungs, all folded into a very compact space. That is why healthy lungs are extremely efficient—under normal conditions, they can load oxygen quickly enough for the body to function.

When altitude drops the barometric pressure, the problem is not that the air suddenly contains less oxygen. The air still contains roughly 21% oxygen. The problem is that every gas, including oxygen, exerts less pressure. That means the oxygen pressure inside the alveoli falls. Lower inspired {{< katex >}}PO_2{{< /katex >}} means less oxygen can dissolve into pulmonary capillary blood, and the gradient driving oxygen from alveoli into blood becomes smaller. That is exactly what Henry’s and Fick’s laws predict: less pressure means less dissolved oxygen, and less pressure difference means less diffusion.

The result is the familiar experience of altitude: blood arriving at the lungs is still low in oxygen, but the pressure difference pushing oxygen across the membrane is weaker. In other words, the body is trying to do the same job with a smaller driving force. That is why the climber feels the earliest effects of altitude not as a failure of the lungs to hold air, but as a reduced ability to transfer oxygen quickly enough to support normal effort. The problem is not the lung’s structure—it is the lower pressure gradient driving oxygen into the bloodstream.

The climber experiences this as a drop in arterial oxygen saturation, reduced cerebral oxygenation, and an immediate sense that exertion now costs more. Acutely, this is not a failure of the lungs; it is a failure of pressure. The body is trying to move the same oxygen fraction across a smaller driving force.

> [!TIP]
> There is a practical corollary here that matters on the hill. Because saturation depends on the *shape* of the oxyhaemoglobin curve, and above about 3,500 m you are on its steep portion, a small change in oxygen pressure moves saturation several percentage points. That is why a pulse oximeter reading swings so much at altitude, and why single readings are close to meaningless. See [altitude illness](../altitude-illness/) for how to use one properly.

So when the mountain says “thin air,” it is not saying “air is different.” It is telling you that the pressure pushing oxygen into the blood is lower, and that the body must adapt to restore a useful diffusion gradient.

## 2. The Respiratory Frontline: Carotid Bodies and the Acid-Base Tug-of-War

The first line of defense against hypobaric hypoxia is the carotid body, a tiny cluster of chemoreceptors (oxygen sensors) located near the bifurcation of the carotid arteries. It senses arterial oxygen tension, especially when arterial oxygen drops below a certain threshold, and initiates the Hypoxic Ventilatory Response (HVR, the body’s faster-breathing reflex to low oxygen).

This is the abrupt, almost instinctive increase in breathing rate and depth that climbers feel on arrival at altitude. It is often described as “air hunger,” and for good reason. The carotid bodies sharpen the drive to breathe, causing hyperventilation, which raises alveolar oxygen partial pressure and helps keep arterial oxygen saturation from falling as dramatically as it otherwise would.

> [!NOTE]
> **HVR varies enormously between people — close to ten-fold among healthy individuals.** This is one of the main reasons two equally fit, equally acclimatized climbers at the same camp can have oxygen saturations several points apart and feel completely different. It is partly heritable, blunted by endurance training and by age, and suppressed by alcohol and sedatives. [Individual variability](../individual-variability/) covers what it does and doesn't predict.

The price of this response is immediate and significant: the climber blows off carbon dioxide. {{< katex >}}PaCO_2{{< /katex >}} falls, and the blood becomes alkalemic (too alkaline because {{< katex >}}CO_2{{< /katex >}} is being removed faster than the body can replace it). This is the classic acid-base tug-of-war of altitude:

- oxygen sensors command more ventilation;
- more ventilation removes {{< katex >}}CO_2{{< /katex >}};
- lower {{< katex >}}CO_2{{< /katex >}} raises pH;
- the more alkaline blood makes oxygen binding to hemoglobin easier;
- but the brain’s drive to breathe is also temporarily blunted.

This is why acclimatization is not purely a matter of “breathing harder.” It is a biochemical negotiation. Hyperventilation may improve alveolar oxygen pressure by about 25–30% in the short term, but it also creates respiratory alkalosis (blood pH rises because CO₂ is being dumped). That alkalosis shifts the oxyhemoglobin dissociation curve to the left (hemoglobin holds oxygen more tightly). At the lungs, this helps the blood grab oxygen efficiently, but in the muscles and tissues it makes the blood less willing to let oxygen go. In other words, the blood becomes excellent at picking up oxygen in the lungs, but less eager to hand it off where it is needed most.

At rest, this alkalosis reduces the brain’s normal drive to breathe. The central chemoreceptors in the brain are very sensitive to carbon dioxide and pH: when {{< katex >}}CO_2{{< /katex >}} falls and pH rises, they send a weaker signal to increase breathing. But the carotid bodies still detect low oxygen and continue urging the body to breathe more. This creates a tug-of-war. The body must hyperventilate to protect oxygen levels, yet hyperventilation lowers {{< katex >}}CO_2{{< /katex >}} enough to temporarily weaken the brain’s signal to breathe. Sleep amplifies that mismatch. During the first nights at altitude, periodic breathing is common: breathing may become deeper and faster for a while, then shallower, and may briefly pause before the cycle starts again. The body is still breathing automatically throughout the night, but the pattern becomes unstable because the low-oxygen signal and the low-{{< katex >}}CO_2{{< /katex >}} signal are pulling in opposite directions. This can disturb sleep and leave the climber feeling restless or unrefreshed.

Periodic breathing is not a rare affliction — it is close to universal. In Operation Everest II, subjects at simulated extreme altitude woke around **37 times a night**, with central apnoeas dominating much of the night, and sleep quality tracked oxygen saturation closely.

> [!IMPORTANT]
> **Broken sleep at altitude is expected, and it is not evidence that you are ill.** This is important enough that the 2018 revision of the Lake Louise score **removed sleep disturbance entirely** as a criterion for acute mountain sickness — disturbed sleep is now regarded as hypoxia doing its normal thing rather than a sign of altitude illness.
>
> A bad night at 4,000 m is not, on its own, a reason to worry. A headache is.

If periodic breathing genuinely persists and wrecks your sleep, the guideline-endorsed answer is **not** a sleeping pill — sedatives depress respiration in someone who is already hypoxaemic. It is **acetazolamide**, which treats the underlying instability by restoring the ventilatory drive that alkalosis has blunted. See the FAQ below for how that works.

This is one of the most important lessons for mountaineers: the body can compensate in the short term, but compensation is not free. It temporarily trades oxygenation for alkalosis, and the next steps in acclimatization must correct that imbalance.

## 3. Renal Compensation and Fluid Dynamics: The Hypoxia Diuresis Response

The kidneys are central to altitude acclimatization. They are not simply passive filters; they actively participate in the acid-base correction triggered by hyperventilation. In response to respiratory alkalosis, the kidneys begin to excrete bicarbonate {{< katex >}}(HCO_3^-){{< /katex >}} and sodium while retaining hydrogen ions. They also reduce the activity of the renin-angiotensin-aldosterone system, a hormonal network normally designed to conserve sodium and water.

This process is often described as the Hypoxia Diuresis Response (HDR), and its effects are profound. A climber may notice more frequent urination, less thirst than expected, and a relative sense of “dryness” even while drinking. The physiology is straightforward:

- alkalosis prompts bicarbonate dumping;
- bicarbonate loss lowers extracellular buffering capacity;
- renal sodium loss reduces plasma volume;
- blood volume contracts.

The reduction is often substantial: plasma volume can fall by 10–25% in the first days and weeks at altitude. This is not necessarily a bad thing in the acute sense, because the immediate result is hemoconcentration (blood becomes more concentrated because the liquid portion shrinks). With less plasma in circulation, hematocrit (the proportion of blood made up of red cells) can rise and the oxygen-carrying capacity of the blood may appear improved. In some contexts, the blood looks “more efficient” because there is proportionally more red cell mass per unit volume.

However, this adaptation cuts both ways. A smaller plasma volume means less total extracellular fluid, greater risk of dehydration, and a lower reserve for evaporative cooling and sweating. Climbers who ignore hydration can become dangerously dry because the body’s thirst drive is partly blunted at altitude. Worse, increasing blood viscosity can raise the workload on the heart and make the circulation more sluggish, especially during exertion. A dry, relatively hemoconcentrated climber is not an efficient climber; they are a dehydrated climber with a lot of oxygen-carrying potential but reduced effective volume to carry it around.

> [!CAUTION]
> This is the section most often over-corrected, and the over-correction is dangerous. **"Forced" or "over" hydration is explicitly listed among interventions not shown to be of benefit** in the Wilderness Medical Society guidelines, and dehydration has never been shown to increase the risk of acute mountain sickness.
>
> Drinking far more than you need causes **hyponatraemia**, whose early symptoms — headache, nausea, confusion — are indistinguishable from AMS, and whose treatment is the opposite. Drink to thirst. Note also that **urine colour does not indicate hydration status at altitude**, though a volume of at least a litre a day is a reasonable sanity check.

The honest framing is that the fluid shifts of early acclimatization are a *real* physiological process that makes you drier than you feel, and that the correct response is steady, ordinary drinking — not a litre-counting ritual.

This is why the first few days at altitude are often a “drying” phase. The body is correcting acid-base disturbances, but it is doing so by manipulating water and electrolytes in ways that can quietly compromise performance.

## 4. Cardiovascular Dynamics: Cardiac Output, Stroke Volume, and Submaximal Drift

Oxygen delivery is the product of cardiac output and arterial oxygen content:

{{< katex display=true >}}
DO_2 = Q \times CaO_2
{{< /katex >}}

where {{< katex >}}Q{{< /katex >}} is cardiac output and {{< katex >}}CaO_2{{< /katex >}} is arterial oxygen content. At altitude, the arterial blood contains less oxygen per unit volume because of lower saturation and a lower partial pressure of oxygen. To maintain oxygen delivery, the body compensates with increased heart rate and, in the early phase, a maintained or even elevated cardiac output.

This is why resting heart rate rises quickly at altitude. The body is trying to push a relatively oxygen-poor blood through the system more quickly. During exertion, the response becomes more obvious: the same workload produces a higher heart rate than it did at sea level. The climber feels each step as if the work is heavier, and indeed the cardiovascular system is working harder to maintain oxygen delivery.

But the heart does not remain unscathed by altitude. Over days and weeks, stroke volume tends to decrease, in part because of the reduced plasma volume and in part because of fluid shifts and systemic vascular changes. As a result, the heart often must compensate by increasing rate, which is why submaximal exercise at altitude is disproportionately demanding. It is also one reason that exercise intensity must be capped early in exposure. A climber can feel “fine” at a moderate pace while the cardiovascular system is already operating near its tolerated ceiling.

This explains the common observation that a fixed effort feels much harder above 2,500–3,000 meters. The cardiovascular system is not simply “tired”; it is trying to maintain oxygen delivery with a smaller content of oxygen per liter of blood and a lower stroke volume reserve. At extreme altitude, maximal heart rate is often lower than one would expect, and the body’s exercise response becomes increasingly constrained by the inability to oxygenate tissue adequately, not simply by muscular fatigue.

The measured numbers make this concrete, and they are worth internalising because they explain why training zones stop working:

| Measure | Sea level | At altitude |
|---|---|---|
| Heart rate at a fixed submaximal workload | 123 bpm | **140 bpm** at 4,300 m |
| Maximum achievable heart rate | 181 bpm | **141 bpm** after 9 weeks at 5,260 m |

> [!WARNING]
> Read those two rows together. Submaximal heart rate is pushed **up** at a given workload while maximal heart rate is pulled **down**. **Your usable heart rate range is squeezed from both ends**, which makes sea-level training zones not merely inaccurate at altitude but meaningless. Pace by breathing and perceived effort — the classic test of being able to speak short sentences without gasping travels well. [Altitude and performance](../altitude-and-performance/) covers this in detail.

This is why the best acclimatization strategies are conservative: early ascent should be built around low-intensity movement, controlled effort, and reasonable recovery. The goal is not to prove toughness but to preserve fuel, fluid, and cardiac reserve until the body has had time to adapt.

## 5. Cellular and Hematological Re-engineering: HIF-1, EPO, and 2,3-DPG

The acute response to altitude is controlled by the carotid body and the kidneys. But the longer-term response is a shift in gene expression at the cellular level. Hypoxia stabilizes a master transcription factor known as Hypoxia-Inducible Factor-1 (HIF-1, the cell’s low-oxygen alarm system). Under normal oxygen conditions, it is degraded. Under low oxygen, it becomes stable, binds to hypoxia response elements in DNA, and turns on genes that support survival in a low-oxygen environment.

Among its most important targets is erythropoietin (EPO, the hormone that tells the body to make more red blood cells), synthesized primarily in the kidneys. EPO rises within hours of hypoxic exposure and drives bone marrow to generate more red blood cells. This takes time, usually a matter of days to weeks, but it is one of the central adaptive pillars of acclimatization. More erythrocytes means more hemoglobin, and thus more potential oxygen-carrying capacity.

The process is not immediate. A new red cell takes time to mature, and the full hematological benefit generally appears over 2–3 weeks of sustained altitude exposure. This is one reason why the movement pattern of major expeditions often follows a staged profile: a climber ascends, adapts, then moves higher again as the blood becomes increasingly capable of carrying oxygen.

At the same time, red blood cells increase their concentration of 2,3-diphosphoglycerate (2,3-DPG, a molecule that helps hemoglobin release oxygen to tissues). This molecule binds to hemoglobin and shifts the oxyhemoglobin dissociation curve to the right. That change favors oxygen unloading in hypoxic tissues. In other words, the blood becomes more willing to release oxygen where it is needed, even if the lungs are working hard to load it. This is a subtle but crucial aspect of high-altitude adaptation: the body must not only load oxygen better, it must also unload it better in capillary beds that are starved of oxygen.

One essential but often overlooked factor is iron. EPO and erythropoiesis are iron-dependent processes. Low iron stores, reflected in low serum ferritin, can limit the production of hemoglobin and blunt the acclimatization response. For climbers, this is not just a blood issue; it is a performance issue. Iron deficiency can make the body appear “stuck” at altitude even when the climber is climbing and breathing correctly.

The evidence is direct: athletes with low ferritin — roughly under 20 ng/mL in women and 30 ng/mL in men — showed **no significant increase in red cell volume** after four weeks at moderate altitude, while iron-replete athletes did. Repletion restored the response.

> [!IMPORTANT]
> Correcting iron deficiency takes **8–12 weeks**, so it is useless as a last-minute fix. If you want to check, test **ferritin, transferrin saturation and CRP together** — ferritin is an acute-phase reactant, so inflammation falsely elevates it.
>
> Two honest caveats. No guideline recommends iron testing for altitude, and **no trial has shown that correcting mild deficiency reduces altitude illness**. And above roughly 100 ng/mL there is no rationale for supplementing at all — iron overload carries its own risks. **Do not take iron blind.** [Pre-acclimatization](../pre-acclimatization/) covers the evidence, including the separate and more interesting question of iron's effect on pulmonary blood pressure.

### Putting the timeline together

The individual mechanisms matter less than their **relative speeds**. Acclimatization is not one process but several, running on very different clocks, and almost every practical rule about ascent rates falls out of this table:

| Adaptation | Onset | Substantially complete |
|---|---|---|
| Hyperventilation (hypoxic ventilatory response) | Minutes | 1–2 weeks |
| EPO release | 90–120 minutes | Peaks at 24–48 h, then declines |
| Renal bicarbonate excretion | ~12–24 hours | 2–4 days |
| Plasma volume contraction | First 3 days | ~1 week |
| 2,3-DPG rise | Days | ~1 week |
| **Red cell mass increase** | **1–2 weeks** | **2–3 weeks** |

> [!TIP]
> Look at the gap between the top row and the bottom row. **Your breathing adapts in minutes; your blood takes weeks.** Everything difficult about the first few days at altitude lives in that gap — you have paid the full alkalosis price of hyperventilating, but none of the haematological benefit has arrived yet.
>
> This is also why a rest day genuinely works, why the classic Himalayan rotation exists, and why arriving somewhere and immediately going higher is the single most reliable way to make yourself ill.

Two things this table should *not* be read to imply. First, the red cell response is the slowest but not the most important — ventilatory and acid-base adaptation do most of the work that keeps you well. Second, none of this restores your performance: as covered in [altitude and performance](../altitude-and-performance/), even with arterial oxygen content fully normalised after ten weeks at 5,260 m, aerobic capacity recovered only about a tenth of its deficit.

This is why scientific acclimatization is not just about exposure. It is about the full physiological machinery: ventilation, kidneys, blood volume, cardiac performance, and iron status working together to recreate a viable oxygen supply chain.

### How long does it last?

Acclimatization decays, and faster than it is acquired. Ventilatory acclimatization fades over **days to about a week** after descent; haemoglobin mass decays over roughly **three weeks** back toward baseline.

The practical consequences:

- **Under a week between trips:** most acclimatization retained. This is the physiological basis of the Himalayan rotation — climb high, descend to base camp, re-ascend.
- **One to three weeks:** partial retention, decaying. Resting at Namche or base camp preserves far more than flying home.
- **Over three or four weeks:** plan as though you are unacclimatized again.

> [!NOTE]
> Because decay outpaces acquisition, **two ten-day trips six weeks apart do not add up to one twenty-day trip.** If you are stacking objectives in a season, the gaps matter as much as the trips.

## 6. Maladaptation: The Pathophysiology of AMS, HAPE, and HACE

Acclimatization is a biological compromise, not a guarantee. The mountain often advances faster than the body can adapt, and when that happens, the compensation mechanisms fail in ways that can become life-threatening. The main altitude illnesses are not random; they arise from predictable physiology. What follows covers the *mechanisms* — for recognition, scoring, drug doses and field decisions, see the dedicated [altitude illness](../altitude-illness/) article.

### Acute Mountain Sickness (AMS)

AMS is the mild end of a spectrum and usually appears within hours to days of ascent. Headache is the defining symptom, often combined with nausea, fatigue, dizziness, poor appetite, and sleep disruption. The pathophysiology is not fully resolved, but cerebral hypoxia, mild cerebral vasodilation (widening of blood vessels in the brain), and disturbances in the blood-brain barrier are all considered contributors. The climber may feel “weak and weird,” which is a useful warning sign if it appears early enough.

Onset is typically **6–12 hours** after arriving at a new altitude, peaking at 24–48 hours. Incidence runs roughly **10–30% between 2,500 and 3,000 m**, and can reach **58%** on a fast unstaged ascent to 4,559 m in susceptible individuals.

> [!IMPORTANT]
> Note one revision to the description above. Since the 2018 Lake Louise update, **sleep disruption is no longer counted as evidence of AMS** — it is regarded as a normal consequence of hypoxia. The diagnosis now requires a headache plus at least three points across headache, gastrointestinal symptoms, fatigue and dizziness, after six hours at altitude.

### High Altitude Pulmonary Edema (HAPE)

HAPE is a much more dangerous progression. As altitude increases, the pulmonary vasculature responds to hypoxia with vasoconstriction (narrowing of blood vessels)—Hypoxic Pulmonary Vasoconstriction (HPV). The problem is that this vascular response is uneven. Some regions of the lung vasoconstrict more than others, increasing pressure in the pulmonary circulation and in the capillaries. The elevated pressure can cause capillary stress failure, endothelial injury (damage to the blood-vessel lining), and fluid leakage into the alveoli.

This turns the lungs from a gas-exchange organ into a wet, stiff, poorly oxygenating structure. Symptoms typically include dyspnea at rest, reduced exercise tolerance, cough, crackles, and eventually marked hypoxemia. HAPE is considered a medical emergency because capillary leak can rapidly worsen the condition even if the climber appears relatively stable at first.

Roughly **2–6%** of unacclimatized people ascending rapidly above 2,500–3,000 m develop it, typically **1–5 days after arrival**, with the second night the classic moment.

> [!WARNING]
> The important detail for the field is that HAPE is a **pressure-driven mechanical leak**, not an inflammatory disease — the inflammation follows rather than causes it. That is why the early signal is *breathlessness and lost performance out of proportion to your companions*, not a dramatic cough. By the time there is pink frothy sputum, you are very late.

### High Altitude Cerebral Edema (HACE)

HACE is the cerebral counterpart to HAPE. Hypoxia induces cerebral vasodilation, but the brain’s blood flow regulation is impaired under severe altitude stress. Combined with increased permeability of the blood-brain barrier, this can lead to cerebral swelling. The result is a neurological progression: confusion, ataxia, severe headache, altered consciousness, and finally coma.

The warning signs for HACE are especially important: not simply headache, but worsening neurologic dysfunction, gait instability, and altered mental status. HACE requires urgent descending oxygen and, in severe cases, dexamethasone and evacuation.

> [!CAUTION]
> **Ataxia is the sign that turns a bad evening into an emergency.** The tandem gait test — walking four metres heel-to-toe in a straight line — takes fifteen seconds, needs no equipment, and is far more informative than any pulse oximeter reading. Test people early in a trip when they are well, so you know what their normal looks like.

The key lesson for climbers is that altitude illness is not a matter of being “weak” or “not acclimatized enough.” It is a biologically coherent progression from hypoxic stress to vascular dysfunction, and the body does not always respect the schedule the climber has planned.

## 7. The Edge of Survival: Lessons from Operation Everest II and 8,000-Meter Physiology

The best way to understand the limits of human acclimatization is to look at the extremes. At the summit of Mount Everest, barometric pressure is roughly one-third of sea level. The inspired oxygen pressure is so low that the body is operating at the edge of what is physiologically viable.

This is why Everest is not merely a climbing challenge; it is an experiment in the limits of oxygen delivery. {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} can fall to about 15 ml·kg⁻¹·min⁻¹ at the summit, which is barely above the threshold required to sustain basal metabolism. In practical terms, the body has very little reserve for work, movement, or stress. The climber is not “normal” in a high-pressure world; the climber is maintaining a state of physiological near-isolation from ordinary performance.

Historical work showed how extreme the cardiopulmonary demands become. Subjects required extraordinary hyperventilation to push alveolar {{< katex >}}PCO_2{{< /katex >}} down to very low values, and blood pH could rise above 7.7. This is not a sustainable state for normal life, but at the edge of survival, it becomes an intense but temporary compensation. It allows enough oxygen to be loaded into the blood to maintain consciousness and a minimal level of function, but only while the body is operating under severe physiological strain.

> [!NOTE]
> Two studies are easily conflated here, so it is worth separating them. The **pH above 7.7** figure comes from the **American Medical Research Expedition to Everest (1981)**, and it was *calculated* from alveolar gas samples collected on the actual summit. **Operation Everest II (1985)** was a separate 40-day hypobaric chamber study simulating the same ascent.
>
> Neither should be confused with the directly *measured* arterial blood gases from the 2007 Caudwell Xtreme Everest expedition, taken at 8,400 m: {{< katex >}}PaO_2{{< /katex >}} of **24.6 mmHg** and pH of **7.53**. A patient arriving in an emergency department with that oxygen level would be intubated immediately. These climbers were walking downhill. [The death zone](../death-zone/) covers all three in detail.

This high-altitude physiology also explains cachexia, the profound loss of appetite and muscle mass that appears above 6,000 meters. The body becomes metabolically conservative; food is less appealing, muscle wasting accelerates, and the climber feels a constant mismatch between effort and reward. This is not simply “lack of motivation.” It is a coordinated system response to chronic hypoxia, reduced food intake, and elevated catabolic stress.

The cleanest demonstration that **hypoxia alone** causes this comes from a chamber study in which eight men, warm and sheltered, doing no climbing and eating whatever they wanted, still lost **6.3% of body mass in 28 days** on a simulated ascent to 8,000 m. Caloric intake fell by 43%. On a real expedition, cold, workload and food logistics stack on top of that.

For the mountaineer, the lesson is brutal but clear: the higher the ascent, the narrower the physiological margin. Acclimatization buys time and function, but even the best-adapted climber cannot ignore the laws of gas exchange and metabolic demand.

> [!IMPORTANT]
> There is a ceiling on acclimatization itself, and it is far lower than most climbers assume. Acclimatization and deterioration run simultaneously, and the balance flips somewhere around **5,300–5,800 m** — near the limit of permanent human habitation. Above roughly 7,000 m, time at altitude is purely a debit. You do not acclimatize to the death zone; you raid it.

## 8. Tactical Acclimatization for the Alpinist: Ascent Profiles, Pacing, and Pre-Acclimation

The science of altitude adaptation matters because it informs strategy. There is a huge difference between “summit fever” and “acclimatization discipline.”

### Climb High, Sleep Low

The classic rule “climb high, sleep low” exists for a reason. It exposes the body to a higher oxygen stress during the day while allowing the night’s recovery to occur at a lower altitude, where oxygen pressure is less oppressive and sleep is more stable. This helps preserve sleep quality, reduce the burden of nighttime periodic breathing, and improve the quality of adaptation.

The guideline numbers put a figure on it. Above **3,000 m**, do not increase your **sleeping elevation** by more than **500 m per day**, and take a rest day every **3–4 days**. The UIAA is slightly more conservative at 300–500 m per day above 2,500 m.

> [!TIP]
> Note that both rules govern **sleeping altitude**, not your day's high point. That is precisely why "climb high, sleep low" works — a day trip to 5,000 m followed by a night at 4,200 m is a completely different exposure from sleeping at 5,000 m.

How much this matters is easy to under-rate. In a study of 827 mountaineers ascending to 4,559 m, a susceptible climber on a fast unstaged ascent had a **58%** chance of AMS; the same climber ascending slowly with prior exposure had **7%**. Individual susceptibility roughly doubles risk. **Ascent strategy moves it by a factor of eight.**

### Pacing Below the Ventilatory and Lactate Thresholds

The first days at altitude are not the time to test limits. A fixed effort that felt manageable at sea level will often feel disproportionately hard. Early acclimatization is best served by keeping exercise well below the ventilatory threshold and below the lactate threshold. The goal is to let the body increase ventilation and improve oxygenation without generating a massive metabolic debt. This is where a slow, controlled pace is not merely prudent; it is physiologically necessary.

Be aware also that the penalty is larger than the physiology suggests: performance decrements run about **2.3 times larger** than the loss in aerobic capacity, so at 4,000 m — where you retain roughly three-quarters of your {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} — expect ascents to take about **1.5 times as long** as they would at home.

### Hydration, Electrolytes, and Nutrition

Altitude increases fluid losses and lowers thirst sensitivity, so a climber can drift into a deficit without noticing. Drink steadily rather than waiting to feel thirsty, include electrolytes on long or hot days, and eat deliberately — appetite suppression at altitude is a physiological effect, not a preference, and the caloric deficit it creates is one of the main limiters on multi-day performance. But steady drinking is not the same as forced drinking: as covered in section 3, over-hydration prevents nothing and causes hyponatraemia. The target is ordinary, regular intake, not a litre count.

### Pre-Acclimation and Hypoxic Exposure

Modern preparation tools, such as normobaric hypoxic tents and altitude simulation, can be useful if used intelligently. They are not a replacement for real altitude exposure, but they can help create a mild, controlled hypoxic stimulus before a big expedition. Similarly, staged altitude camps allow the body to adapt in a more systematic way, and they have become a standard feature in high-altitude mountaineering.

> [!WARNING]
> The evidence bar here is higher than the marketing suggests. The Wilderness Medical Society **declines to endorse any specific pre-acclimatization protocol**, and states that only hypoxic tent exposures of **more than 8 hours a day, sustained over weeks**, are likely to offer significant benefit. **No randomised trial** has shown that a tent protocol reduces altitude illness on a subsequent expedition, and most published protocols are vendor-authored.
>
> Staging, by contrast, is well evidenced: six days at 2,200 m cut AMS at 4,300 m from **91% to 45%**. It is also free. [Pre-acclimatization](../pre-acclimatization/) sets out the full comparison.

Emerging research on cross-acclimation suggests that heat stress and hypoxia may share some physiological pathways, including heat-shock proteins (HSPs), which help protect cells from stress. These mechanisms are intriguing, but they do not replace the foundational principles of gradual ascent, pacing, and good hydration.

### What Fitness Does and Does Not Buy

One finding deserves its own heading because it is so consistently misunderstood: **sea-level aerobic fitness does not protect against altitude illness.** Training status was non-significant in the 827-mountaineer study above, and in Richalet's risk-prediction score, regular physical activity actually carries a *positive* weight — it increases predicted risk of severe altitude illness.

The likely explanation is behavioural: fit people ascend faster, carry more, rest less, and tolerate more discomfort before slowing down, all of which outruns adaptation. What fitness genuinely buys is capacity — hours of movement under load, reserve on a long summit day, and margin for self-rescue. It is not immunity, and treating it as immunity is how strong climbers get sick.

## The Bottom Line

Acclimatization is the body’s long conversation with low oxygen. It begins with faster breathing and alkalosis, moves into kidney-mediated fluid adjustments, then shifts toward hematological and cellular redesign. These adaptations are real, necessary, and powerful. But they also take time, and they are easily undermined by over-ambition.

For alpinists, the practical lesson is clear:

- **Do not confuse early hyperventilation with adaptation.** Breathing adapts in minutes; blood takes weeks. Everything hard about the first days lives in that gap.
- **Respect the kidney and fluid response, especially in the first 48–72 hours** — but drink steadily, not compulsively. Forced hydration prevents nothing and causes hyponatraemia.
- **Cap early effort and pace by breathing, not heart rate.** Your usable heart rate range is squeezed from both ends and sea-level zones are meaningless.
- **Sleep badly and don't worry about it.** Broken sleep at altitude is expected, and since 2018 it is no longer even counted as a sign of AMS. A headache is the signal that matters.
- **Use staged ascent and prudent pacing** — 500 m of sleeping altitude per day above 3,000 m, rest day every 3–4. This moves risk by a factor of eight, more than any drug, tent or amount of fitness.
- **Fitness is capacity, not immunity.** It determines what you can do up there, and has no protective effect against altitude illness.
- **Recognize that serious altitude illness is not a failure of character** but a physiological misalignment between demand and adaptation.

The mountain is not demanding that climbers become superhuman. It is demanding that they understand the physics of oxygen, respect the limits of the human body, and climb in a way that allows physiology to follow strategy. That is what acclimatization really is: not a mythic transformation, but a disciplined and measurable response to the thin air above.

> [!CAUTION]
> The FAQ below discusses prescription medicines and specific doses because the pharmacology is hard to follow without them. **This is not medical advice.** Every drug mentioned has contraindications and interactions, and doses should come from a clinician who knows your history and your itinerary.

## Frequently Asked Questions

### If I exercise after arriving at altitude, will I acclimatize faster?

Gentle movement is usually better than staying completely still, but hard exercise does not force the body to acclimatize faster. An easy walk or an unhurried acclimatization hike can increase ventilation and provide a useful, manageable stimulus. It also helps you assess how your body is responding. However, strenuous exercise adds demand at the same time that altitude is reducing oxygen supply. It can worsen headache, nausea, fatigue, dehydration, and sleep, and may leave less energy for the physiological work of adapting.

During the first days, keep the effort easy enough that you can speak in short sentences without gasping. Rest when symptoms appear, and do not ascend higher while symptoms are getting worse. The goal is regular, controlled exposure and recovery, not exhaustion. Training hard at altitude is especially inappropriate if you have symptoms of acute mountain sickness (AMS); stop ascending, rest, and descend if symptoms progress or neurological or breathing problems develop.

### How does Diamox help with acclimatization?

Diamox is the brand name for acetazolamide, a prescription medicine that inhibits carbonic anhydrase (an enzyme involved in managing carbon dioxide and acid-base balance). In the kidneys, this makes the body excrete more bicarbonate, an alkaline substance, in the urine. The resulting mild metabolic acidosis (a small increase in blood acidity) counteracts the alkalosis caused by hyperventilation. This removes some of the chemical brake on breathing, allowing the climber to breathe more deeply and consistently, especially during sleep.

That extra ventilation raises oxygen levels in the blood and reduces the unstable breathing pattern that is common during the first nights at altitude. Acetazolamide therefore helps the body begin acclimatizing sooner; it does not add oxygen to the air, replace a gradual ascent, or make it safe to ignore serious symptoms. It can also increase urination and cause tingling in the fingers, toes, or face, taste changes, nausea, or other side effects. Because it is a prescription medicine with important contraindications and interactions, its use and dose should be discussed with a qualified clinician before an expedition. Suspected HAPE or HACE remains an emergency requiring immediate descent and urgent medical treatment, whether or not the climber has taken Diamox.

The evidence is good: a meta-analysis found a pooled odds ratio of **0.36** for AMS prevention, with a number needed to treat of **6**. The standard preventive dose is **125 mg every 12 hours**, started the day before ascent, and higher doses showed no significant added benefit — which is why 125 mg became standard. Treatment dose is 250 mg every 12 hours.

> [!IMPORTANT]
> Two caveats worth knowing. The Wilderness Medical Society notes that the 125 mg dose applies to low-to-moderate risk profiles, and that **"the appropriate dose for ascent above 5,000 m is not clear"** — if you are heading to a 6,000 m peak, that uncertainty is yours. And acetazolamide is **contraindicated** after anaphylaxis to a sulfonamide or a history of Stevens-Johnson syndrome. It is also on the WADA prohibited list as a masking agent.

The distinguishing feature, and the reason it appears in an article about acclimatization at all: **acetazolamide accelerates genuine acclimatization.** Dexamethasone, below, does not — it suppresses symptoms. That difference dictates how each should be used.

### How does dexamethasone help with altitude-related brain swelling?

Dexamethasone is a corticosteroid (a medicine that changes inflammation and the behavior of blood-vessel walls). It is used for high-altitude cerebral edema (HACE), in which severe hypoxia can make the brain’s blood vessels leak more fluid and cause the brain to swell. Dexamethasone helps reduce this swelling and can improve symptoms such as severe headache, confusion, and loss of coordination. It does not increase acclimatization or remove the underlying low-oxygen problem; it buys time while the climber descends or is evacuated.

Dexamethasone is not a treatment for high-altitude pulmonary edema (HAPE), and it should never be used as a reason to delay descent. It can also cause side effects, including mood changes, stomach upset, and increased blood glucose. The dose and route should follow an expedition medical plan or professional medical advice.

For reference, the guideline regimen is **8 mg once, then 4 mg every 6 hours** for HACE, and 4 mg every 6 hours for AMS. Used beyond 5–7 days it needs a taper.

> [!WARNING]
> Because dexamethasone masks rather than fixes, **being symptom-free on dexamethasone does not mean you are well enough to go higher.** The guidelines are explicit that further ascent should be delayed until the person is asymptomatic *off* the drug. It is a medicine for getting down.

### How does nifedipine help with altitude-related lung edema?

Nifedipine is a calcium-channel blocker (a medicine that relaxes certain muscles in the walls of blood vessels). In HAPE, low oxygen can cause the small arteries in the lungs to tighten unevenly. This raises pressure in the pulmonary circulation (the blood vessels carrying blood through the lungs), forcing fluid out of capillaries and into the air sacs. Nifedipine relaxes those lung vessels, lowers pulmonary artery pressure, and can reduce the forces driving further fluid leakage.

Nifedipine does not directly remove fluid from the lungs, and it does not cure the damaged gas-exchange surface. It is an emergency treatment or preventive option for people at risk of recurrent HAPE when prescribed, but descent and supplemental oxygen remain the priorities. Because nifedipine can lower blood pressure and cause dizziness, fainting, headache, or a fast heartbeat, it should only be used according to a clinician’s instructions. Suspected HAPE requires immediate descent, oxygen if available, and urgent evacuation; medication must not delay any of these.

The guideline regimen is **extended-release 30 mg every 12 hours** (or 20 mg every 8 hours). Tadalafil 10 mg every 12 hours is an alternative, and the guidelines state there is **no role for using both together**. Prophylaxis is reserved for people with a **history of HAPE**, especially multiple episodes — recurrence in susceptible individuals ascending rapidly to 4,559 m has been reported around 60%.

### How long does it actually take to acclimatize?

There is no single answer, because acclimatization is several processes on different clocks. Ventilatory adaptation is largely done in **1–2 weeks**, renal acid-base compensation within **2–4 days**, and the red cell response takes **2–3 weeks** to deliver most of its benefit. For practical purposes, most climbers feel substantially better after about **3–5 days** at a given altitude, and near their achievable best after **2–3 weeks**.

The more useful framing is that you never finish acclimatizing to a *target* altitude — you acclimatize to wherever you are currently sleeping, and each new altitude restarts a portion of the process. That is why expeditions use rotations rather than a single push, and why the rule that matters is metres of sleeping-altitude gain per day rather than total time on the mountain.

Note also the ceiling. Above roughly 5,300–5,800 m, deterioration begins to outpace adaptation, so spending longer stops helping and starts costing you. There is no amount of time that acclimatizes you to 8,000 m.

### Why do I urinate so much at altitude, and should I be worried?

It is expected, and it is a good sign. The increased urination — sometimes called the hypoxia diuresis response — is your kidneys excreting bicarbonate to correct the alkalosis caused by hyperventilating. That correction is what allows you to keep breathing hard, so it is a core part of adaptation rather than a problem. The corollary is genuinely useful: **a climber who is not urinating much in the first days at altitude may not be acclimatizing well**, and blunted diuresis has long been treated as a soft warning sign.

Two caveats. Acetazolamide amplifies the effect considerably, so if you are taking it, expect a lot more. And while the fluid loss is real, the answer is steady ordinary drinking, not aggressive over-hydration — see the caution in section 3.

### Can I just sleep with supplemental oxygen instead of acclimatizing?

Sleeping on oxygen does raise your overnight oxygen levels and can improve sleep quality, and it is used on some commercial expeditions. But it does not substitute for acclimatization, and there is a specific physiological reason why: raising arterial oxygen partially suppresses the hypoxic ventilatory drive, so you gain less of the ventilatory and acid-base adaptation that the exposure was supposed to buy you. You wake up better rested and slightly less adapted.

That matters most when the oxygen stops. As covered in [the death zone](../death-zone/), a climber who has been breathing supplemental oxygen and then loses it is worse off than one who never used it — their ventilatory drive is blunted, and they are typically higher, more tired and later in the day than they would otherwise have been. Treat oxygen as a tool that lowers the effective altitude you are climbing, not as a shortcut through the adaptation.
