---
title: "Individual variability"
weight: 60
---

# Why Altitude Hits Some People Harder Than Others

Two climbers, same hut, same ascent profile, same night. One sleeps fine and eats breakfast. The other spends the night vomiting and goes down in the morning. Neither is fitter, younger or more experienced than the other in any way that predicts the outcome.

This variability is real, it is partly measurable, and it is one of the least well understood parts of altitude physiology by climbers. It is also routinely overstated — people build an identity around being "good at altitude" or "bad at altitude" when what they actually have is a modest propensity swamped by how fast they went up.

> [!NOTE]
> This is the sixth and final entry in a series on altitude. It assumes the mechanisms from [acclimatization](../acclimatization/) and the illness definitions from [altitude illness](../altitude-illness/).

## 1. How Much Variation Is There, Really?

The cleanest quantification comes from **Schneider and colleagues (2002)**, who studied 827 mountaineers ascending to the Capanna Margherita at 4,559 m and split them by self-reported prior susceptibility:

| | Fast ascent, no pre-exposure | Pre-exposure only | Slow ascent only | Both |
|---|---|---|---|---|
| **Susceptible** | **58%** | 29% | 33% | **7%** |
| **Non-susceptible** | **31%** | 16% | 11% | **4%** |

Read this table carefully, because it contains the whole argument.

**Susceptibility is real**: 58% versus 31% on the same aggressive profile is close to a doubling of risk. The odds ratio for susceptible versus non-susceptible was **2.9**.

**But strategy dominates it.** A susceptible climber going up slowly with pre-exposure has a 7% risk. A non-susceptible climber going up fast without pre-exposure has a 31% risk — **more than four times higher**. The "bad at altitude" person who plans well beats the "good at altitude" person who doesn't.

> [!IMPORTANT]
> Susceptibility roughly doubles your risk. Ascent strategy moves it by a factor of about eight. **Most repeat altitude illness is repeat behaviour, not repeat physiology.**

Notably, in that same cohort, **age, sex, training status, BMI, alcohol and smoking were all non-significant.**

## 2. Is Susceptibility Repeatable?

Reasonably, yes. Prior AMS predicts future AMS with an odds ratio around 2.9 in Schneider's data. In Richalet's risk score, a history of severe altitude illness is the **single heaviest-weighted item**, worth 2.5 points on a 0–12 scale.

But the WMS 2024 guidelines add a necessary corrective:

> A history of acute altitude illness does not necessarily reflect high risk with all future ascents, as a slower ascent rate or lower target elevation on subsequent trips may help avoid problems.

Susceptibility is a **propensity, not a fixed trait**. Treat it as a reason to plan more conservatively, not as a diagnosis.

## 3. Hypoxic Ventilatory Response: The Overstated Predictor

The **hypoxic ventilatory response (HVR)** is how vigorously your breathing increases when oxygen falls. It varies several-fold between healthy people, is partly heritable, and is blunted by endurance training, by age, and by alcohol and sedatives.

It is widely assumed that a low HVR predicts altitude illness. The evidence is weaker than the assumption.

**Bärtsch and colleagues (2002)** found that HVR measured **at low altitude** did **not** differ between people who did and did not go on to develop AMS at 4,559 m, and no low-altitude HVR parameter correlated with risk. Measured **on arrival at high altitude**, HVR was significantly lower in the AMS group. Their conclusion was blunt: susceptibility to AMS cannot be predicted by low-altitude HVR testing.

> [!NOTE]
> Low HVR is more consistently associated with **HAPE** than with AMS. If you have a personal or family history of pulmonary oedema at altitude, ventilatory and pulmonary vascular testing is more likely to be informative than it is for garden-variety AMS.

## 4. The One Test That Does Predict: The Richalet Score

The best-validated risk prediction tool comes from **Canouï-Poitrine, Richalet and colleagues (*PLOS ONE*, 2014)**, built from 1,017 analysed patients out of 4,727 attendees at a Paris altitude medicine clinic over twenty years.

**The test.** You exercise at about 30% of maximal aerobic power while breathing 11.5% oxygen — equivalent to roughly 4,800 m. Three variables are measured: how much you desaturate, your ventilatory response relative to that desaturation, and your cardiac response relative to it.

**The outcome predicted** is *severe* high altitude illness: severe AMS, HAPE or HACE, pooled.

For people **with** previous high-altitude experience, the score (range 0–12) is:

```
2.5 × history of severe altitude illness
+ 2.0 × planned ascent > 400 m/day
+ 1.5 × history of migraine
+ 1.0 × destination is Aconcagua, Mont Blanc or Ladakh
+ 0.5 × age under 46
+ 0.5 × regular physical activity
+ 3.0 × hypoxic ventilatory response at exercise < 0.68 L/min/kg
    (or 1.0 if between 0.68 and 0.94)
+ 1.0 × hypoxic cardiac response at exercise < 0.72 b/min/%
```

**Performance:**

| | With prior experience | Without |
|---|---|---|
| Clinical variables only (AUC) | 0.84 | 0.72 |
| Clinical + hypoxic test (AUC) | **0.91** | **0.89** |
| Cut-off | 5 | 5.5 |
| Sensitivity | 87% | 87% |
| Specificity | 82% | 73% |

Adding the physiological test improved discrimination by 7% in experienced climbers and **17% in those with no altitude history** — which is exactly the group with no other information to go on.

> [!TIP]
> Two items in that formula are worth staring at. **Being under 46 increases your score. So does regular physical activity.** Both are counter-intuitive, both are statistically real, and both are covered below.

> [!WARNING]
> Caveats matter here. The score was **internally validated only** — no external validation in that paper. Outcomes were ascertained by postal questionnaire, creating recall and responder bias. The cohort was self-selected people attending an altitude medicine clinic, so it is probably enriched for prior problems. And the test requires a metabolic cart under hypoxia, available at relatively few centres.

## 5. Genetics: Fascinating, and Almost Irrelevant to You

High-altitude populations have solved the same problem three different ways, which is one of the better natural experiments in human biology.

| Population | Haemoglobin at altitude | Saturation | Key genes | Chronic mountain sickness |
|---|---|---|---|---|
| **Tibetan** | Near sea-level (low for altitude) | Low | EPAS1, EGLN1, PPARA | **~1.2%** |
| **Han Chinese in Tibet** | Elevated | Low | — | ~5.6% |
| **Andean (Aymara, Quechua)** | **High** | Intermediate | EGLN1 (different variants), NOS2A, PRKAA1 | **~15.6%** |
| **Ethiopian (Amhara)** | Near sea-level | **Near sea-level (~95%)** | Not established | Low |

**The Tibetan solution** is the counter-intuitive one: *don't* make more red cells. The adaptive EPAS1 haplotype is associated with **lower** haemoglobin at altitude, avoiding the viscosity, thrombosis and right-heart costs of polycythaemia. That haplotype turns out to be **introgressed from Denisovans** — near-identical to the archaic sequence, essentially absent outside the region (Huerta-Sánchez and colleagues, *Nature*, 2014).

**The Andean solution** is the textbook one: markedly raised haemoglobin. It works, and it carries a price — chronic mountain sickness is roughly ten times more common than in Tibetans.

**The Ethiopian solution** is the strange one: at 3,530 m, Amhara highlanders show haemoglobin close to sea-level values **and** oxygen saturation close to sea-level values. Neither polycythaemia nor hypoxaemia. Nobody has explained it.

### Sherpa physiology beyond haemoglobin

The **Xtreme Everest 2** study (Horscroft and colleagues, *PNAS*, 2017) compared Sherpa and lowlander muscle at 5,300 m:

- **Preserved muscle phosphocreatine.** Lowlanders' muscle energy buffer ran down with sustained altitude exposure; Sherpa muscle maintained or increased it.
- **Greater mitochondrial coupling efficiency** — more ATP per molecule of oxygen. Lower mitochondrial density, but better efficiency, which is the opposite of naive expectation.
- **Lower capacity for fatty acid oxidation**, with a shift toward carbohydrate. Glucose yields more ATP per unit oxygen than fat, so under oxygen limitation carbohydrate is the cheaper fuel. This directly inverts the endurance-athlete dogma of training fat oxidation.
- **Less oxidative damage** in muscle at altitude.

> [!IMPORTANT]
> **None of this genetic variation is relevant to your expedition planning.** There is no validated genetic test that predicts a lowlander's risk of altitude illness. The EPAS1 and EGLN1 variants are adaptations to lifelong residence, and consumer genotyping panels marketing "altitude genes" are not evidence-based.

## 6. The Factors That Do Vary Between Lowlanders

### Age — and the surprise

Older people get **less** AMS, not more. A 1993 study of over 3,000 tourists at moderate altitude in Colorado found travellers under 60 had roughly **twice the AMS risk** of those over 60. A systematic review and a recent meta-analysis both report older age as protective, with a relative risk around **0.78**. Richalet's score corroborates it: age under 46 adds half a point.

Two hypotheses: age-related loss of brain volume leaves more room for cerebral swelling, and older travellers simply ascend more slowly and exert themselves less.

> [!CAUTION]
> Lower AMS risk in older people does **not** mean lower overall risk at altitude. Cardiovascular events, arrhythmia and the consequences of comorbidity all rise with age. On Everest, climbers over 59 had an overall death rate of **4.1% versus 0.9%**, and a post-summit descent death rate of **10.5% versus 1.1%**. AMS is not an old person's disease; altitude is still harder on older bodies.

### Fitness — the other surprise

Covered in detail in the [pre-acclimatization](../pre-acclimatization/) article, but restated because it belongs here: **regular physical activity increases the Richalet score.** The likely explanation is behavioural — fit people ascend faster and push harder before slowing down — plus the fact that highly trained athletes desaturate more during hard exercise in the first place. Fitness determines what you can do at altitude, not whether you get sick.

### Migraine — one of the most robust risk factors

A history of migraine is worth **1.5 points** in Richalet's score. Field data show migraineurs at 4,300 m were roughly **2.5 times more likely to develop any headache**, and dramatically more likely to develop a migraine-type headache.

> [!TIP]
> If you get migraines, three practical points. Carry your usual abortive medication. Know that a migraine at altitude is diagnostically confusing, because AMS is diagnosed largely on headache. And do not assume a familiar-feeling headache is "just my migraine" — at altitude, treat any headache as altitude-related until proven otherwise.

### Patent foramen ovale and HAPE

A **patent foramen ovale (PFO)** is a small flap-valve opening between the heart's upper chambers that fails to close after birth. A 2006 *JAMA* study found PFO in **56% of HAPE-susceptible people versus 11% of HAPE-resistant** at low altitude, and 69% versus 16% at high altitude — an odds ratio around 11. Those with large PFOs had substantially worse hypoxaemia at altitude (mean saturation 65% versus 77%).

> [!NOTE]
> PFO is present in roughly a quarter of the general population, so it is **neither necessary nor sufficient** for HAPE. Think of it as an amplifier: right-to-left shunting under raised pulmonary pressures worsens hypoxaemia, which worsens hypoxic pulmonary vasoconstriction, which worsens the shunt. **No guideline recommends PFO screening or closure for HAPE prevention.** Do not go and get a bubble study on the strength of this.

### Sex, BMI and other contested factors

**Sex** is genuinely unresolved. Richalet's score assigns half a point for female sex — but only in the model for people with no previous altitude exposure; it was non-significant in the experienced group. Schneider found no sex effect. Some studies suggest women report more AMS symptoms, but HAPE appears more common in men.

**BMI and obesity** show weak evidence at best. Schneider found no effect. There is some evidence that obesity worsens nocturnal desaturation, but sleep-disordered breathing is a more defensible concern than BMI itself.

**Home altitude** is real and underrated. Living at moderate altitude is protective. A resident of Innsbruck or Denver has a genuine advantage over a resident of Amsterdam on the same itinerary — free staging, permanently.

### Pre-existing conditions

Briefly, and with the strong caveat that these need individual medical advice:

- **Asthma:** well-controlled asthma is not a contraindication. Cold dry air and exertion are the triggers. Some asthmatics actually improve at altitude, with fewer dust mites and allergens.
- **COPD:** real risk of severe hypoxaemia. Pre-travel assessment is essential.
- **Pulmonary hypertension:** a strong contraindication, with risk of right-heart decompensation. Related: unilateral absence of a pulmonary artery is a classic cause of HAPE at unusually low elevations.
- **Sickle cell trait:** generally tolerated at moderate altitude; small increased risk of splenic infarction higher up, especially with exertion and dehydration. Sickle cell **disease** should not go to high altitude without specialist support.
- **Pregnancy:** healthy pregnancy is generally considered safe to about 2,500 m. Above that the evidence is thin, and evacuation options are poor.
- Also worth flagging: recent heart attack or unstable angina, poorly controlled arrhythmia, uncontrolled hypertension, prior HACE, and obstructive sleep apnoea.

## 7. HAPE Susceptibility Is the One Thing You Can Test

Unlike AMS, HAPE susceptibility has a measurable phenotype: **exaggerated, uneven hypoxic pulmonary vasoconstriction**.

**Dehnert and colleagues (2005)** used hypoxic stress echocardiography — 12% oxygen for two hours, measuring pulmonary artery pressure. HAPE-susceptible people showed systolic pulmonary artery pressure of **48 ± 10 mmHg versus 38 ± 3 mmHg** in controls, with **77% sensitivity and 93% specificity**.

Recurrence in susceptible individuals ascending rapidly is high — commonly cited around **60%** on a rapid two-day ascent to 4,559 m — and much lower with slow ascent. That is why the WMS restricts pharmacological prophylaxis to people with a history of HAPE, especially multiple episodes.

> [!IMPORTANT]
> Testing is a specialist procedure and is only sensible for someone with a prior episode, or an unexplained history of severe desaturation. The primary prevention is still slow ascent. Nifedipine and tadalafil are for known susceptibles, not for everyone.

## 8. Building Your Own Altitude Profile

You cannot get a useful genetic test, and the good physiological test is available at a handful of clinics. What you can do is collect your own data properly.

**Record every trip:**

1. **Sleeping altitude each night**, and **metres of sleeping-altitude gain per day**. This is the exposure variable that matters — not the day's high point.
2. **Lake Louise AMS score** each evening and morning. Record the number, not "I felt rough."
3. **Resting saturation and heart rate**, under identical conditions: seated, at least five minutes' rest, warm hands, same finger, same device, same time of day. Morning before rising is best.
4. **Symptom timing** relative to arrival at each new altitude.
5. **Drugs taken** — dose, timing, and whether started before or after ascent. A trip on acetazolamide is not comparable to one without.
6. **Confounders**: hydration, alcohol, sleep, illness, exertion, calories, pack weight.
7. **Recovery pattern**: did symptoms resolve with a rest day at the same altitude, or only on descent, and after how many metres?

**How to reason about it:**

- **Change one variable at a time.** If you add a tent protocol, acetazolamide and an extra rest day all at once, you have learned nothing.
- **Use the same route as a control** where you can. Repeating the same hut approach is far more informative than comparing unlike trips.
- **Accept that n=1 is noisy.** Altitude illness is probabilistic. One symptom-free trip on an aggressive profile does not prove you are immune; one bad trip does not prove you are susceptible. Look for patterns across at least three comparable trips.
- **The most actionable thing you will learn is your personal ascent-rate ceiling**, not your "type."

> [!CAUTION]
> On pulse oximetry, the WMS is worth quoting almost in full: oxygen saturation changes rapidly in response to small changes in oxygen tension at altitude, device accuracy declines below 80% saturation, and the normal saturation at a given elevation "may not be known with certainty and should be viewed as a range of values, rather than a specific number." **Clinical decisions should not be based on small differences in saturation over time or among individuals.**
>
> What it *is* useful for: spotting an individual who is a clear outlier from their group at the same altitude — a classic early HAPE flag — and tracking your own trend across a rest day. What it is **not** useful for: deciding whether someone has AMS. That remains a symptom-based clinical diagnosis with no test.

Note also that consumer wrist-based saturation readings are markedly less accurate than fingertip oximetry, and that both have documented accuracy bias in people with darker skin pigmentation.

## The Bottom Line

- **Individual variability is real but modest.** Susceptibility roughly doubles risk. Ascent rate moves it eightfold. Plan around the bigger lever.
- **Susceptibility is repeatable enough to plan around, but it is a propensity, not a diagnosis.** A bad history is a reason to go slower, not a reason to stay home.
- **The counter-intuitive risk factors are real**: being younger and being fitter both *raise* predicted risk of severe altitude illness, almost certainly because both encourage faster ascent and harder effort.
- **Migraine is one of the strongest individual predictors**, and it is diagnostically confusing at altitude.
- **Genetics is fascinating and useless to you.** High-altitude populations have three distinct solutions, none of which you can buy, and no consumer test predicts a lowlander's risk.
- **HAPE susceptibility is the one thing genuinely testable**, and only worth testing if you have a history.
- **Your own log beats every test you can't get.** Record sleeping altitude, symptom scores and conditions systematically, change one thing at a time, and you will eventually find your personal ascent-rate ceiling. That number is worth more than knowing your "type."

## Frequently Asked Questions

### I've never been above 3,000 m. How do I know if I'll cope?

You largely don't, and that is the honest answer. This is precisely the group where clinical prediction performs worst — the Richalet model based on clinical variables alone achieved an area under the curve of only 0.72 in people with no altitude history, versus 0.84 in the experienced. It is also the group where the hypoxic exercise test adds the most, improving discrimination by 17%.

If you have no history and are planning something serious — 5,000 m or above, or a compressed itinerary — a formal hypoxic exercise test at an altitude medicine clinic is genuinely worth considering. Failing that, plan your first trip to a conservative profile with generous rest days and treat it as data collection, not as a performance. Log it properly and you will have something useful for every trip afterwards.

### Why would being fit make altitude sickness *more* likely?

The association is real but the mechanism is probably behavioural rather than physiological. Fit people ascend faster, carry more, stop less, and tolerate a great deal of discomfort before slowing down — all of which increases the rate at which they outrun their acclimatization. The clearest evidence is Richalet's, where regular physical activity carries a positive weight in a score built to predict severe altitude illness.

There is a plausible physiological contribution too. Highly trained endurance athletes desaturate more during hard exercise than untrained people, a phenomenon called exercise-induced arterial hypoxaemia, and some have blunted chemosensitivity from years of training. But no adequately powered study has directly compared altitude illness rates in elite endurance athletes against matched controls, so treat the physiological half as a hypothesis. The behavioural half is well supported and, conveniently, is the half you can control.

### Should I get tested for a PFO if I've had HAPE?

Probably not on the strength of the PFO association alone. The association is strong — roughly an elevenfold odds ratio — but a patent foramen ovale is present in about a quarter of the general population, so it is neither necessary nor sufficient for HAPE, and no guideline recommends screening or closure for this indication.

What is worth pursuing after a HAPE episode is different: a hypoxic stress echocardiogram to characterise your pulmonary vascular response, which has around 77% sensitivity and 93% specificity for the susceptible phenotype, and a discussion about prophylactic nifedipine or tadalafil for future ascents. Both of those change what you do. A bubble study mostly doesn't.

### My partner gets sick at 3,500 m and I don't. Are we just built differently?

Partly, but check the confounders before concluding it. In Schneider's data, susceptible and non-susceptible climbers differed by roughly a factor of two — meaningful, but far less than the eightfold effect of ascent strategy. Before attributing it to physiology, ask whether you sleep at different altitudes, whether one of you is carrying more, drinking less, sleeping worse, or arriving from a higher home elevation.

Also check the things that genuinely differ between individuals and are easy to miss: a migraine history, a much lower home altitude, a habit of pushing pace on the first day. And be aware that the observed difference may partly be reporting. Altitude illness is diagnosed on subjective symptoms, and people vary a great deal in how readily they name a headache. Both of you scoring yourselves formally each evening for a few trips will tell you more than any amount of theorising.
