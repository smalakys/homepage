---
title: "The death zone"
weight: 40
---

# The Death Zone: Where Acclimatization Stops Working

Everything in the acclimatization article assumes the body is winning — slowly, expensively, but winning. Somewhere above 5,500 metres that stops being true. The adaptations keep running, but a second process runs alongside them and eventually overtakes them: deterioration. Above roughly 7,000–8,000 metres, time at altitude is no longer an investment. It is purely a debit.

This is the part of altitude physiology that most directly kills people, and it is also the part most distorted by popular writing. This article covers what is actually measured up there, why the ceiling sits where it does, and what the mortality data say about how climbers really die.

> [!NOTE]
> This is the fourth entry in a series on altitude. It builds on [acclimatization](../acclimatization/), [performance](../altitude-and-performance/) and [altitude illness](../altitude-illness/), and assumes you have the basics from those.

## 1. Where the Name Comes From, and Why the Number Is Arbitrary

The term was coined by **Edouard Wyss-Dunant**, a Swiss doctor who led the 1952 Swiss Everest expedition. He wrote it in German as *Todeszone*; the English translation in *The Mountain World 1953* renders it as "lethal zone" and "mortal zone." The phrase "death zone" is a later back-translation.

Two details from the original matter:

- **His threshold was about 7,770 m (25,500 ft)** — the altitude of the Everest South Col, not 8,000 m. The round 8,000 m figure came later, and it stuck largely because it coincides with the fourteen 8000-metre peaks. It is a mountaineering convention, not a physiological cliff.
- He described the zone as one where **recuperation is non-existent**, and where the only strategy is to live on reserves for the three or four days needed to attack the summit. That framing has held up well.

He also declared 8,500 m the physiological limit without oxygen apparatus. Reinhold Messner and Peter Habeler demolished that in 1978.

The altitude bands used in the literature are conventions too, but useful ones:

| Band | Altitude |
|---|---|
| Intermediate / moderate | ~1,500–2,500 m |
| High altitude | ~2,500–3,500 m |
| Very high altitude | ~3,500–5,500 m |
| Extreme altitude | above ~5,500 m |
| "Death zone" (convention) | above 8,000 m |

The physiologically meaningful boundary is **~5,500 m**, near the limit of permanent human habitation and roughly where atmospheric pressure is half that at sea level. Everything above it is borrowed time; the death zone is just where the interest rate becomes ruinous.

## 2. Everest Is Climbable Partly by Geographical Luck

The single most under-appreciated fact in extreme-altitude physiology is that **the summit of Everest has more air pressure than the textbook atmosphere model predicts**, and that this difference is the margin that makes unaided ascent possible.

The measured summit pressure is **253 Torr** (33.7 kPa), about one third of sea level. Chris Pizzo measured it on the summit in October 1981 during the American Medical Research Expedition to Everest; David Breashears measured 252.5 Torr in May 1997. Two independent measurements sixteen years apart, agreeing within about 1 Torr.

The **ICAO Standard Atmosphere predicts only 236 Torr** at 8,848 m. The measured value is roughly 17 Torr higher. The reason is the **equatorial bulge of the atmosphere**: solar heating makes the tropical stratosphere thicker, so pressure at a given altitude is higher near the equator and lower toward the poles. Everest sits at 28°N — squarely in the favourable band.

John West quantified why this matters. Near the summit, {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} is extraordinarily sensitive to inspired oxygen pressure — about **63 ml·min⁻¹ per Torr**. Inspired oxygen pressure follows from barometric pressure directly:

{{< katex display=true >}}
PiO_2 = FiO_2 \times (PB - 47)
{{< /katex >}}

where 47 mmHg is water vapour pressure in the airways. At 253 Torr that gives {{< katex >}}PiO_2 \approx 43{{< /katex >}} mmHg and a {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} of roughly 1,070 ml/min. At the standard-atmosphere 236 Torr it would be about 39.5 mmHg — and {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} would fall by about 21%, to roughly 850 ml/min.

> [!IMPORTANT]
> West's conclusion was that a mountain of identical height at a higher latitude would very probably be unclimbable without supplementary oxygen. Everest is not just the highest mountain — it is the highest mountain in the best possible place.

The same arithmetic explains why winter matters. Summit pressure swings from about **255 Torr in July–August to about 243 Torr in January**. That 12 Torr costs roughly 12% of an already minimal aerobic capacity. Add jet-stream winds, an average South Col temperature near −28 °C instead of −12 °C, and three fewer hours of daylight, and the winter mountain is a categorically different problem.

> [!NOTE]
> There is a genuine dispute here. West wrote in 1999 that Everest had not been climbed in midwinter without supplementary oxygen; Huey and Eguskitza noted in 2001 that Ang Rita summited without oxygen on 22 December 1987. The disagreement is probably definitional — 22 December is barely into calendar winter, and pressures have not yet reached the January minimum.

## 3. What the Blood Actually Looks Like Up There

In 2007 the **Caudwell Xtreme Everest** expedition did something that had never been done: they drew arterial blood from climbers descending from the Everest summit, at **8,400 m on the Balcony**, breathing ambient air, and ran it on a portable blood gas analyser. Four climbers were sampled. The results were published by Grocott and colleagues in the *New England Journal of Medicine* in 2009.

| Variable | Value at 8,400 m | Normal at sea level |
|---|---|---|
| {{< katex >}}PaO_2{{< /katex >}} (arterial oxygen pressure) | **24.6 mmHg** (range 19.1–29.5) | 90–100 mmHg |
| {{< katex >}}PaCO_2{{< /katex >}} (arterial carbon dioxide) | **13.3 mmHg** (range 10.3–15.7) | 35–45 mmHg |
| pH | **7.53** | 7.35–7.45 |
| Arterial oxygen content | **145.8 ml/L** | ~200 ml/L |
| Alveolar–arterial oxygen difference | **5.4 mmHg** | small, and should shrink at altitude |

Translated into ordinary clinical terms:

- A {{< katex >}}PaO_2{{< /katex >}} below **60 mmHg** on room air defines respiratory failure and triggers oxygen therapy in any hospital. Below about 40 mmHg an unacclimatized patient is usually obtunded. **A patient arriving in an emergency department with a {{< katex >}}PaO_2{{< /katex >}} of 24.6 mmHg would be intubated immediately.** These climbers were walking downhill.
- The lowest individual value, **19.1 mmHg**, is among the lowest ever recorded in a conscious, ambulant human.
- A {{< katex >}}PaCO_2{{< /katex >}} of 13.3 mmHg represents roughly a three- to four-fold increase in alveolar ventilation. That extreme hyperventilation is the whole reason alveolar oxygen can be defended at all.
- pH 7.53 is a **respiratory alkalosis** that renal bicarbonate excretion has not fully compensated. As covered in the acclimatization article, this left-shifts the oxyhaemoglobin curve, which helps load oxygen in the lungs at very low pressures — a net advantage at this extreme, and a cost lower down.

Two findings deserve emphasis. First, **arterial oxygen content was defended up to about 7,100 m** by rising haemoglobin, then fell off a cliff. The body protects oxygen *content* long after it has lost the battle for oxygen *pressure*. Second, the **alveolar–arterial gradient of 5.4 mmHg is abnormally wide** for that altitude — it should be approaching zero. The authors' interpretation was that apparently healthy summiteers may carry a degree of subclinical pulmonary oedema, or hit a genuine diffusion limit.

> [!TIP]
> If you see "pH above 7.7 on the Everest summit" quoted, that is a different measurement. It comes from the 1981 AMREE expedition, where Pizzo collected **alveolar gas** on the actual summit and arterial pH was **calculated**, not measured. The summit is more extreme than the Balcony. Both numbers are real; they are not interchangeable.

## 4. Why Acclimatization Runs Out

Acclimatization and deterioration are two processes running at once. Below about 5,300 m acclimatization wins. Somewhere between 5,300 and 5,800 m the balance flips, and above roughly 7,000 m deterioration wins so decisively that every additional hour is a net loss.

The evidence for where the line sits is unusually concrete:

- **La Rinconada, Peru (~5,100 m)** is the highest permanently inhabited settlement on earth.
- In 1935 Ancel Keys and D.B. Dill observed that miners working the Aucanquilcha sulphur mine at ~5,950 m **refused to live at a camp near the mine** and instead walked up daily from ~5,300 m. That is an empirical, self-selected demonstration of the habitation ceiling.
- Griffith Pugh's **Silver Hut expedition (1960–61)**, which put scientists at 5,800 m for months, concluded that 5,800 m was too high for complete adjustment, and that around 5,300 m — in some cases 4,600 m — was nearer the real limit.

> [!IMPORTANT]
> This is why modern Everest climbers start supplemental oxygen at around 7,200 m on the Lhotse Face. It is almost exactly the altitude Wyss-Dunant identified in 1953 as the point where reserves begin to be consumed irreversibly.

The old mountaineers had the concept before they had the physiology. T. Howard Somervell called it **high altitude deterioration** after Everest 1922 and 1924; the older term was "mountain lassitude." George Mallory wrote in 1922 that at high altitude even the strongest might suffer a loss of muscular power — *and he will not recover up there*. The standard modern definition is barely different: weight loss, poor appetite, slow recovery from fatigue, lethargy, irritability, loss of will to start new tasks, slowed mental processing, dulled affect.

## 5. Deterioration and Cachexia: The Numbers

The best data come from a chamber, which is exactly what makes them useful. **Operation Everest III (COMEX '97)** put eight men through a simulated ascent in a hypobaric chamber with **unlimited food**, no cold, no wind, no load-carrying and no climbing:

| Stage | Altitude | Weight change |
|---|---|---|
| 1 | 5,000 m | −2.0 kg (−2.7%) |
| 2 | 6,000 m | −2.8 kg (−3.8%) |
| 3 | 7,000 m | −3.6 kg (−4.8%) |
| 4 | **8,000 m** | **−4.7 kg (−6.3%)** |

Warm, dry, sheltered, sedentary, eating whatever they wanted — and still down 6.3% of body mass in 28 days. **Hypoxia alone drives the wasting.** On a real expedition, cold, workload, dehydration and food logistics stack on top of that.

Operation Everest II (40 days to a simulated 8,848 m) produced around **7.4 kg** of loss, disproportionately lean tissue, confirmed by CT scanning of limb muscle.

A defensible working figure: **roughly 0.5–1.5 kg per week above 5,000 m**, accelerating with altitude, with total losses of **5–10% of body mass** routine on a full 8,000 m expedition.

The mechanisms, in rough order of importance:

1. **Hypoxic anorexia.** The dominant driver — appetite collapses even with food freely available. Leptin and ghrelin are the usual suspects, but the leptin evidence is genuinely inconsistent, partly because falling fat mass lowers leptin anyway.
2. **Raised basal metabolic rate.** Real, but mostly an *acute* effect driven by sympathetic activation; it attenuates with prolonged exposure. The popular claim that you burn hugely more calories for weeks is not well supported.
3. **Gut malabsorption.** Documented above ~5,000 m, secondary in magnitude.
4. **Muscle catabolism.** Wasting predominates above 5,000 m, with hypoxia inhibiting muscle protein synthesis. There is an argument that smaller fibres are partly adaptive, because they shorten oxygen diffusion distance.
5. **Fluid loss.** Massive ventilation of cold dry air, altitude diuresis, plasma volume contraction. A large fraction of early "weight loss" is water, which is why daily weights mislead.

> [!TIP]
> Aggressive feeding does defend body mass at high — though not extreme — altitude. In one study at 4,300 m, deliberately increasing intake to match measured metabolic rate limited loss to **0.9 kg over two weeks**. Eating is a countermeasure, not a nicety. It just stops working somewhere above 6,000 m.

## 6. The Brain: What Is Established and What Is Not

The most important cognitive evidence at extreme altitude comes not from a lab but from a mortality study.

**Firth and colleagues (*BMJ*, 2008)** analysed 94 deaths above 8,000 m on Everest between 1921 and 2006. The symptoms recorded in non-survivors were:

| Symptom | Number of cases |
|---|---|
| Profound fatigue / exhaustion | **34** |
| Confusion or coma | **21** |
| Ataxia (loss of coordination) | **12** |
| Respiratory disturbance | 5 |
| Nausea or vomiting | 3 |
| **Headache** | **0** |

> [!CAUTION]
> Above 8,000 metres, the classic warning signs of altitude illness are not the ones that show up. Headache, nausea and vomiting were essentially absent in fatal cases. **Do not wait for a headache. Watch for someone falling behind, stumbling, or making no sense.** Of the 94 deaths, 34 climbers fell behind their team before becoming debilitated. Falling behind was itself the early marker.

The same study found that **median summit time was 09:00–09:59 for survivors and 13:00–13:59 for non-survivors** (P<0.001). Of 32 fatal falls above 8,000 m, 8 involved climbers described as confused or exhausted — so the "trauma" category substantially masks cognitive failure as the real proximate cause.

Wilfrid Noyce, on the South Col in 1953, captured the danger precisely: the top layers of his brain were probably dormant up there, and yet he thought he was as alert as at sea level.

The best laboratory work is **Hornbein and colleagues (*NEJM*, 1989)**, combining real climbers with Operation Everest II chamber subjects. They found declines in visual long-term memory, persistent verbal memory deficits, roughly twice as many aphasic errors after exposure, and deficits still measurable 1 to 30 days after descent. The most counter-intuitive finding: **a higher hypoxic ventilatory response was associated with greater verbal memory deficits.** The proposed reason is that vigorous hyperventilation drives greater hypocapnia and therefore greater cerebral vasoconstriction — the very response that lets you climb higher may cost your brain more.

On permanent damage, be sceptical of what you have read:

| Claim | Status |
|---|---|
| Cognition, reaction time and memory are impaired *while at* extreme altitude | **Well established** |
| Impaired judgement is a major proximate cause of death above 8,000 m | **Strongly supported** (Firth 2008) |
| Deficits can persist days to weeks after descent | **Supported** (Hornbein 1989) |
| Extreme-altitude climbing causes permanent structural brain damage | **Contested, not established** |
| Cortical microhaemorrhages occur after extreme exposure | **Supported**, clinical significance unknown |

The widely cited claim of permanent damage traces to **Fayed and colleagues (2006)**, who imaged 35 climbers after expeditions and found cortical atrophy, enlarged Virchow-Robin spaces and subcortical lesions. The study had no baseline pre-expedition imaging, small numbers, and — crucially — its objective quantitative arm, MR spectroscopy, was **negative**. A properly prospective cohort with before-and-after imaging (**Kottke and colleagues, 2015**, on a 7,126 m expedition) found increased cerebrospinal fluid fraction and decreased white matter fraction, plus microhaemorrhages concentrated in those who went highest and desaturated most — but **did not replicate the focal lesion finding**.

The honest summary: extreme altitude demonstrably impairs your brain *during* the climb, in ways that kill people. The long-term picture is unresolved.

## 7. Supplemental Oxygen and What It Actually Buys

The naive model — "2 litres per minute equals 7,000 m, 4 litres equals 6,300 m" — is repeated everywhere and is misleading, because **the achieved oxygen fraction from an open-circuit mask is not a fixed function of flow rate**. It depends on the ratio of oxygen flow to your minute ventilation.

This was Griffith Pugh's central insight in 1952–53, and it is why the British open-circuit system worked where the 1952 Swiss closed-circuit system failed:

- **At rest**, ventilation at extreme altitude might be 15–25 L/min. Two litres of pure oxygen is a meaningful fraction of inspired gas.
- **Climbing hard**, ventilation can exceed **150–200 L/min**. The same two litres is diluted into ten times the gas volume, and the benefit collapses toward ambient air.

In other words, **the same flow rate helps most when you need it least.** The 1952 Swiss sets, derived from mining rescue equipment, delivered adequate oxygen only at rest — which is precisely the failure mode.

> [!WARNING]
> A climber who has breathed supplemental oxygen for twelve hours and then loses it is worse off than one who never used it. Their ventilatory drive has been partially suppressed by the higher arterial oxygen, and they will be higher, more tired, and later in the day than they would otherwise have got.

The mortality statistics anchor the debate. From Huey and Eguskitza's analysis of 1978–1999 data, death rates **during descent from the summit**:

| Peak | Without supplemental O₂ | With supplemental O₂ |
|---|---|---|
| Everest | **8.3%** | **3.0%** |
| K2 | **18.8%** | **0%** |

Their own caveat is worth keeping: this is observational, and climbers who go without oxygen are a self-selected population — more experienced, but also more risk-tolerant, often on harder routes in smaller teams. As they put it, you cannot randomise K2 climbers into oxygen and no-oxygen groups.

## 8. How Long Can You Actually Stay?

Wyss-Dunant's original operating rule still holds: live on your reserves for the **three or four days** needed for the summit attempt, having first recuperated lower down. His own 1952 expedition spent about three days in the lethal zone.

The documented extremes:

- **Willi Bauer, K2, August 1986** — the survival record above 8,000 m at roughly **10 days**, five days of it camped at 8,500 m. Instructive mainly because **five of the seven climbers trapped in that storm died**.
- **Babu Chiri Sherpa, May 1999** — **21 hours on the Everest summit** in a small tent, without sleeping. Frequently reported as done without supplemental oxygen, though accounts differ.
- **Messner and Habeler, 8 May 1978** — the first ascent of Everest without supplemental oxygen, refuting half a century of physiological pessimism. Both described profound cognitive slowing near the summit.

One striking fact for perspective: Edward Norton reached about 8,570 m without oxygen in 1924. **The unaided altitude record then did not move for 54 years.**

The real limit is not a clock. It is the intersection of three curves: deteriorating cognition, exhausted reserves, and a fixed daylight and weather window. Firth's summit-time data suggest that in operational terms the binding constraint on Everest is usually **hours, not days**.

Alexander Kellas predicted in 1920 that the unaided climbing rate near the summit would be about **90–110 vertical metres per hour**. A century of climbing has not much improved on his estimate.

## 9. How People Actually Die

Firth's dataset covers **14,138 mountaineers on Everest, 1921–2006**, with 212 deaths.

- **Overall mortality above base camp: 1.3%**
- **82.3% of climber deaths occurred during or after the day of a summit attempt** — despite expeditions lasting around 60 days
- Of the 94 deaths above 8,000 m: **56% during descent from the summit**, 17% after turning back, 10% during the ascent
- The descent-dominant pattern **holds with and without supplemental oxygen**

The split between climbers and Sherpas is one of the most illuminating findings in the whole literature. Incidents involving climbers occurred at a mean altitude of **7,854 m**; those involving Sherpas at **6,927 m**. Around **70% of Sherpa deaths were objective hazards** — avalanche, icefall, crevasse, rockfall — because Sherpas make repeated load-carrying trips through the lower mountain. **Climbers die high, of physiology. Sherpas die low, of the mountain.**

Fatal cerebral oedema occurs higher than fatal pulmonary oedema: mean 8,276 m versus 6,229 m.

The modern picture (**Huey and colleagues, *PLOS ONE*, 2020**, covering 3,620 first-time climbers 2006–2019) contains several findings that contradict the standard media narrative:

- **Death rate has fallen** from 1.6% (1990–2005) to 1.0% (2006–2019), while summit success roughly doubled
- **61.7% of recent deaths occurred after summiting**
- **Age is the dominant individual risk factor.** For climbers over 59, overall death rate was **4.1% versus 0.9%**; conditioned on having summited, the descent death rate was **10.5% versus 1.1%**
- **Experience does not predict survival.** Death rate was independent of prior experience. Experience raises success rates, not survival odds
- **Crowding had no detectable effect** on success or death in the 2018–19 sample, despite four-fold greater crowding — 1.0% on crowded days versus 1.2% on uncrowded days

> [!CAUTION]
> Be very careful comparing "death rates" between peaks. The figures are computed on at least three incompatible denominators: deaths per climber above base camp, deaths per summiteer, and deaths per attempt. The frightening headline percentages quoted for Annapurna and K2 are usually **deaths per summiteer** — a much smaller denominator — while Everest's 1–2% is usually deaths per climber. Compare like with like, or the comparison is meaningless.

## 10. The Sherpa Advantage, Honestly Stated

Firth's data give the cleanest quantification: during descent from the summit, **climbers died at 2.7% versus Sherpas at 0.4%** — more than a six-fold difference.

The explanation is not purely genetic, and the study's authors were careful about this. Four factors compete:

1. **Better acclimatization through exposure profile.** Sherpas spend far more time above base camp preparing the route; clients increasingly spend time low and then ascend fast.
2. **Occupational selection.** Employment selects for people who perform well at altitude.
3. **Heritable adaptation.** Real, and covered below.
4. **Social factors.** Sherpas are less likely to be climbing alone, and more likely to be rescued.

On the heritable part: Tibetans and Sherpas do **not** use the Andean strategy of massive polycythaemia. They maintain near-sea-level haemoglobin, higher resting ventilation, higher exhaled nitric oxide and greater blood flow, and have much lower rates of chronic mountain sickness. The strongest selection signals are at **EPAS1** and **EGLN1**, both in the hypoxia-sensing pathway, both associated with the *blunted* red-cell response.

The **Xtreme Everest 2** work (Horscroft and colleagues, *PNAS*, 2017) found that at 5,300 m Sherpa muscle showed greater mitochondrial efficiency — more ATP per molecule of oxygen — better preserved phosphocreatine, a metabolic shift away from fat and toward carbohydrate (which yields more ATP per unit oxygen), and lower oxidative stress markers.

> [!NOTE]
> The Sherpa advantage is expressed as **efficiency, not capacity**. It is not a bigger oxygen tank; it is cheaper oxygen consumption at the mitochondrion. Note also that this study was done at 5,300 m, not in the death zone — extrapolating the mechanism upward is reasonable, but it is extrapolation. And it does not confer immunity: 67 of the 192 deaths above base camp in Firth's series were Sherpas.

## The Bottom Line

The death zone is not a place where the rules change. It is where the same rules, applied to a third of an atmosphere, stop leaving any margin.

For anyone contemplating extreme altitude:

- **The physiological ceiling is not 8,000 m — it is around 5,300–5,800 m.** That is where acclimatization stops keeping up with deterioration. Everything above is a raid, funded by reserves you built lower down.
- **You cannot out-acclimatize the death zone.** You can only limit your exposure to it. Three or four days is the historical operating envelope, and it was written in 1953.
- **The warning signs you were taught do not apply up there.** Headache and nausea were absent in fatal cases. Ataxia, confusion, exhaustion and falling behind are the real heralds — and they appear *earlier*, not later.
- **Turn-around time is a physiological parameter, not a preference.** Survivors summited at 09:00; the dead summited at 13:00.
- **Most deaths happen on the way down**, with or without supplemental oxygen, because that is when reserves, cognition and daylight all run out at once.
- **Experience does not protect you.** It raises your chance of summiting, not your chance of surviving.

Wyss-Dunant got the essential point right seventy years ago and it has not been improved on: up there it is no longer a question of adaptation, only of how many hours the strongest are allotted.

## Frequently Asked Questions

### Is 8,000 metres a real physiological boundary?

No. It is a mountaineering convention that happens to coincide with the fourteen highest peaks. Wyss-Dunant's original threshold was about 7,770 m, and the boundary that actually matters physiologically — where acclimatization stops outpacing deterioration — is around 5,300–5,800 m. There is no step change at 8,000 m; the curve simply gets steeper as you go up, and by 8,000 m it is very steep indeed.

The practical value of the 8,000 m number is that it marks roughly where most climbers, on most peaks, are guaranteed to be operating on reserves alone. That is a useful planning heuristic even if it is not a physiological cliff.

### Why do so many people die on the descent rather than the ascent?

Several things converge at once. Reserves are exhausted, because the ascent consumed them and there is no recuperation at that altitude. Cognitive function has been degrading all day, and impaired judgement compounds every other problem. Daylight is running out. Supplemental oxygen, if used, may be running out too — and its loss hurts more after prolonged use because ventilatory drive has been partially suppressed.

There is also a selection effect in the timing. Firth's data show survivors summited around 09:00 and non-survivors around 13:00. Climbers who are slow enough to summit late are already the ones who were struggling, and they then face the descent with the least reserve and the least daylight. The descent is not intrinsically more technically dangerous — it is where all the accumulated deficits come due simultaneously.

### Does supplemental oxygen make an 8,000 m peak safe?

It makes it meaningfully safer, but not safe. The observational data show descent death rates roughly three times lower on Everest with oxygen than without. But those numbers compare self-selected populations, and the difference cannot be attributed to oxygen alone.

More importantly, oxygen changes the nature of the risk rather than removing it. It lowers your effective altitude, which lets you go higher, faster, and stay longer — which means the consequences of a regulator failure, an empty bottle, or a delayed summit are worse, not better. Messner's framing is useful: supplemental oxygen lowers the *physiological* altitude of a peak. You are climbing a different, lower mountain. Whether that is a safety measure or a way to take on more risk depends entirely on how you use the margin it buys.

### Will climbing at extreme altitude permanently damage my brain?

The honest answer is that this is unresolved, and the popular version overstates the evidence. What is well established is that cognition, memory, reaction time and judgement are demonstrably impaired *while you are up there*, and that this impairment is a major contributor to deaths above 8,000 m. What is also supported is that measurable deficits can persist for days to weeks after descent.

What is *not* established is permanent structural damage. The widely quoted 2006 imaging study lacked baseline scans, was small, and its objective spectroscopy arm found no abnormality. A later prospective study with proper before-and-after imaging did not replicate the key lesion finding, though it did find microhaemorrhages in those who went highest and desaturated most — whose clinical significance is unknown. Most people recover. A minority may not, and the evidence there is real but inconsistent.

### Why does everyone lose so much weight, and can I prevent it?

Weight loss above 5,000 m is driven primarily by hypoxic anorexia — appetite collapses even when food is freely available and conditions are comfortable. The Operation Everest III chamber data are the proof: eight men, warm, sheltered, sedentary, eating ad libitum, still lost 6.3% of body mass in 28 days at simulated altitudes up to 8,000 m. Raised metabolic rate, gut malabsorption and hypoxia-driven inhibition of muscle protein synthesis all contribute, and a significant fraction of early loss is simply fluid.

You can partially defend against it at high but not extreme altitude. Deliberately eating to a measured energy target — rather than to appetite — limited loss to under a kilogram over two weeks at 4,300 m in one study. Practically, that means eating on a schedule rather than when hungry, favouring calorie-dense food you will actually tolerate when nauseated, and prioritising carbohydrate. Above about 6,000 m the effect diminishes, and above 7,000 m you should plan around the deficit rather than expect to prevent it.
