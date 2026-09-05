---
title: "Altitude and performance"
weight: 20
---

# Altitude and Performance: What Thin Air Costs You

Acclimatization explains how the body adapts. This article explains what it costs you anyway — because even a fully acclimatized climber is a slower, weaker climber, and the size of that penalty is both larger and more predictable than most people expect.

The practical question is simple: how much of your sea-level engine do you actually get to use up there? The answer turns out to be surprisingly unforgiving, surprisingly early, and — in one important respect — worse for fitter people than for less fit ones.

> [!NOTE]
> This is the second entry in a series on altitude. It assumes the mechanisms covered in [acclimatization](../acclimatization/): the pressure physics, the ventilatory response, and the oxygen transport chain.

## 1. The Number That Governs Everything: {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}}

{{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} is the maximum rate at which your body can consume oxygen, usually expressed in millilitres of oxygen per kilogram of body mass per minute. It sets the ceiling on sustained aerobic work — which is exactly what climbing a mountain is.

At altitude that ceiling falls, and it starts falling far lower than most people assume.

### The rule of thumb, and its actual provenance

The commonly quoted figure is that {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} falls by about **6–7% per 1,000 m** above roughly 1,500 m.

> [!WARNING]
> That "6.3% per 1,000 m" figure is narrower than its reputation. It comes from **one study of eight endurance-trained men**, tested under acute exposure, and validated only up to 2,800 m. It is not validated in untrained people, it is not validated in acclimatized states, and it **seriously under-predicts the loss above about 4,000 m**. Use it as a planning heuristic for moderate altitude, not as physics.

The "1,500 m threshold" is also a convenience. Controlled studies detect measurable decrements in trained people from as low as **580–800 m**. For a recreational climber, a practical threshold around 1,000–1,500 m is defensible — just know it is a simplification.

### The real shape of the curve

The decline is not linear. It steepens with altitude, and at extreme altitude it collapses:

| Altitude | Approximate remaining {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} |
|---|---|
| Sea level | 100% |
| 2,000 m | ~95% |
| 3,000 m | ~83% |
| 4,000 m | ~75% |
| 5,300 m | ~68% |
| 7,000 m | **41%** (measured, Operation Everest III) |
| 8,000 m | ~33% |
| 8,848 m (Everest summit) | **~29%** (measured, Operation Everest II) |

On the Everest summit, {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} is roughly **15 ml·kg⁻¹·min⁻¹**, or about **1,070 ml/min** in absolute terms. Basal metabolism alone — just staying alive, warm and conscious — consumes something like 250–350 ml/min.

> [!IMPORTANT]
> That is the whole story of extreme altitude in one comparison. A summit climber has roughly the aerobic capacity of a patient with severe heart failure, and a large fraction of it is already committed to not dying. What remains for climbing, thinking, staying warm and getting back down is a very thin margin indeed.

The Everest summit figure rests on small samples — two subjects in West's 1983 work breathing 14% oxygen at 6,300 m, and five in a chamber study — but two independent methods agreeing makes the magnitude very likely right.

## 2. Why It Falls

Oxygen delivery is the product of how much blood you pump and how much oxygen each litre carries:

{{< katex display=true >}}
DO_2 = Q \times CaO_2
{{< /katex >}}

At altitude, both terms are attacked, and a third limitation appears that does not exist at sea level.

**Arterial oxygen content falls** because arterial saturation falls. This is the primary driver at moderate altitude.

**Maximal cardiac output falls.** In Operation Everest II — a 40-day simulated ascent to the Everest summit in a hypobaric chamber — {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} fell from about **4.0 L/min at sea level to roughly 1.2 L/min** at simulated summit conditions. Both maximal cardiac output and maximal heart rate were reduced. Stroke volume also declines, partly because plasma volume has contracted.

**Maximal heart rate falls at extreme altitude.** This surprises people. You would expect the heart to compensate by beating faster, and at moderate altitude it does — but higher up the maximum achievable heart rate drops progressively. After nine weeks at 5,260 m, measured maximum heart rate had fallen from **181 to 141 beats per minute**. You physically cannot drive the pump hard enough to compensate.

**Pulmonary diffusion becomes limiting.** At sea level, blood spends more than enough time in the pulmonary capillaries to fully load oxygen. At altitude the driving pressure gradient is small, and during hard exercise blood transits the lung faster. The result is that the lung itself becomes a bottleneck — a limitation that essentially does not exist in healthy people at sea level.

> [!NOTE]
> This is why the constraint at extreme altitude is **central, not peripheral**. The evidence is direct: after 9–10 weeks at 5,260 m, leg oxygen *extraction* remained at sea-level values — oxygen transport from blood into muscle mitochondria was unaffected. Your legs are not the problem. Your muscles could use more oxygen if it arrived. It doesn't. That is a fundamentally different kind of tired from what you feel training at home, and it is why "pushing harder" produces so little.

## 3. Does Being Fit Help or Hurt?

Both, and the distinction matters.

### The uncomfortable finding

Highly trained endurance athletes experience **exercise-induced arterial hypoxaemia (EIAH)** — their saturation falls during hard exercise even at sea level. It affects roughly half of highly trained athletes. Severity is usually graded as mild at 93–95% saturation, moderate at 88–93%, and severe below 88%.

Athletes who desaturate at sea level tend to **desaturate more at altitude and lose proportionally more {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}}**. They are starting from a position where oxygen delivery is already the binding constraint at maximum effort, and altitude compounds it.

The performance cost is measurable: in one study, preventing EIAH reduced evoked quadriceps fatigue from **−33% to −15%** after a hard effort.

### Does fitness protect against altitude illness?

No, and this is one of the most robust findings in the field.

- A study of 827 mountaineers at 4,559 m found training status **non-significant** as a determinant of AMS
- A study measuring {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} objectively by two methods found **no correlation** with AMS at 4,500 m
- In Richalet's risk-prediction score, **regular physical activity carries a positive weight** — it *increases* predicted risk of severe altitude illness

> [!TIP]
> The most likely explanation is behavioural rather than physiological. Fit people ascend faster, carry more, rest less, and tolerate more discomfort before slowing down — all of which outruns acclimatization. The "fit people get more AMS" claim should be treated as a well-supported inference, not a demonstrated fact: no adequately powered study has directly compared altitude illness rates in elite endurance athletes against matched controls.

The evidence is not entirely one-sided. A large 1993 study of Colorado tourists found self-reported poor fitness associated with more AMS — but that was cross-sectional, self-reported, and confounded with obesity, age and lung disease.

### What fitness actually buys you

A higher {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} means a higher **absolute** oxygen uptake at altitude, even if the proportional loss is the same or slightly worse. If you retain 60% of a large engine, you still have more than 60% of a small one.

More practically, fitness determines how many hours you can move under load, your reserve on a long summit day, your ability to carry, and your margin for self-rescue. It is not immunity. It is capacity.

## 4. Submaximal Work: Where You Actually Live

Almost nobody climbs at {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}}. What matters day to day is what a *fixed* effort costs.

At the same absolute workload at altitude, compared with sea level:

- **Ventilation is much higher.** You are breathing hard at a pace that would be conversational at home
- **Heart rate is higher.** At 4,300 m, a fixed workload that produced **123 beats per minute** at sea level produced **140** — because each litre of blood carries less oxygen
- **Perceived effort is higher**, and it is not in your head
- **Your lactate threshold falls in absolute terms.** The wattage or pace at which you tip into unsustainable effort is lower — sometimes dramatically

> [!TIP]
> Notice what those two heart rate findings do together. Submaximal heart rate is pushed **up** at a given workload, while maximal heart rate is pulled **down** (181 to 141 after nine weeks at 5,260 m). **Your usable heart rate range is squeezed from both ends**, which is why sea-level training zones are not merely inaccurate at altitude — they are meaningless.

The consequence for pacing is direct: **the effort that felt easy at sea level is now a moderate effort, and the moderate effort is now near-maximal.** Early in a trip, this is compounded by incomplete acclimatization.

### The lactate paradox

At extreme altitude, after acclimatization, peak blood lactate at exhaustion is *lower* than at sea level — the opposite of what you would expect if oxygen limitation forced more anaerobic metabolism. In one chamber study, peak muscle lactate at exhaustion was **39.2 mmol/kg dry weight versus 113 at sea level**.

> [!WARNING]
> Do not treat the lactate paradox as settled fact. The observation is real in chamber studies, but a field study at 4,100 m **failed to demonstrate it** — lactate release was elevated and stayed elevated. The leading alternative explanation is **reduced central motor recruitment**: your nervous system stops driving the muscles hard enough to generate lactate, rather than your muscles becoming metabolically different. The chamber and field studies may simply be measuring different things.

## 5. Does Acclimatization Give It Back?

Mostly no, and this is the finding people find hardest to accept.

You spend weeks building extra red cells. Haemoglobin rises. Oxygen-carrying capacity per litre of blood genuinely improves. And {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} recovers **only partially, if at all**.

Operation Everest II showed this cleanly: over a 40-day acclimatization, {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} remained greatly reduced at every altitude tested. Acclimatization allows survival and useful function; it does not restore peak aerobic capacity.

The decisive experiment is Calbet's. After **9–10 weeks at 5,260 m** — a hypoxic dose far larger than any altitude-training protocol — **arterial oxygen content was fully normalised to sea-level values**, and {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} still recovered only about **10% of its deficit** (2.2 to 2.4 L/min, against a sea-level 4.1). The residual limitation was **cardiac output, still down 15%**, and its redistribution away from the working legs — from 76% of output to 67%.

Cerretelli made the same point nearly fifty years ago: a **40% rise in haemoglobin** did not restore {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}}, and a residual haemoglobin elevation 25 days after descent did not raise it either.

> [!IMPORTANT]
> **The limitation at altitude is not how much oxygen your blood can carry.** That is why making more red cells does not fix it. The constraint is circulatory — a heart that cannot pump enough, distributing what it does pump away from your legs — and hypoxia imposes it in real time. In one study, the same limitation was abolished within minutes by breathing 55% oxygen.
>
> **Acclimatization is not a performance programme.** It buys you the ability to function safely and to sleep, and it dramatically reduces your risk of altitude illness. What it does not do is give you your sea-level engine back. Plan your ascent times around the reduced engine, not around the hope that you will "come good" after two weeks.

## 6. Endurance, Sprinting, and Why Mexico City Was Weird

**Endurance performance falls further than {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} does.** Time-trial studies at 4,300 m have found time increases on the order of **+43% to +52%** — a running study and a cycling study disagreeing modestly, as you would expect from different modalities and populations. Quote a range, not a point estimate.

**Sprint and power performance is preserved or improved**, because lower air density means less aerodynamic drag and short efforts do not depend on oxygen delivery. Modelling suggests the 100 m is run at roughly **102% of sea-level speed** at Mexico City's altitude.

> [!NOTE]
> The 1968 Mexico City Olympics are the standard illustration, and they are confounded. Those games were the first held on a synthetic track with fully automatic timing. The altitude effect on sprinting is real and modelled, but the raw record haul overstates it.

For a mountaineer the split matters less than it sounds: almost everything you do is aerobic, so you get the penalty and not the bonus. The one place it shows is short, powerful moves on technical ground, which feel comparatively less affected than the walk-in.

## 7. What This Means for Your Day

Two honest warnings before the numbers.

First, there is a **genuine hole in the literature here**: there are no peer-reviewed field measurements of vertical ascent rate stratified by altitude. Any table of "metres per hour at 6,000 m" is a model, not data.

Second, do not confuse **climbing speed** with **acclimatization safety**. The 500 m per day sleeping-altitude rule governs how fast you can safely *gain altitude to sleep at*. How fast you can walk uphill in a day is a different question.

With those caveats, the important insight is that **performance falls further than {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} does** — by roughly a factor of **2.3**. A 25% loss of aerobic capacity does not make you 25% slower; it makes you roughly 50% slower. This amplification has been demonstrated empirically both in controlled altitude studies and in the 4,300 m time-trial data.

So think in **time multipliers**, not percentages:

| Altitude | {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} remaining | Multiplier on sea-level ascent time |
|---|---|---|
| 2,000 m | ~95% | ~1.1× |
| 3,000 m | ~83% | ~1.3× |
| **4,000 m** | ~75% | **~1.5×** |
| 5,300 m | ~68% | ~1.7× |
| **6,000 m** | ~55% | **~2.4×** |
| 7,000 m | 41% | ~4× |
| **8,000 m** | ~33% | **~7×** |

> [!IMPORTANT]
> This is the correction that catches people out. At 4,000 m you have lost only a quarter of your aerobic capacity — but the 800 m of ascent that takes you two hours at home will take you **three**. Plan on the multiplier, not on the percentage.

A sanity check: the model above predicts 55–85 vertical metres per hour above 8,000 m. The standard South Col to Everest summit push is roughly 900 vertical metres in 8–12 hours, or **75–110 m/h** — the right order of magnitude, and slightly faster than the model, which is what you would expect from climbers on supplemental oxygen and fixed lines. **Alexander Kellas predicted 90–110 m/h near the summit in 1920.** A century of climbing has not much improved on his estimate.

The other practical points:

- **Your familiar heart rate zones are meaningless.** Pace by breathing and perceived effort. The classic test — being able to speak in short sentences without gasping — travels well
- **Guidebook times assume acclimatized parties.** On day three, add substantially
- **Carry less.** Oxygen cost is proportional to total mass, so a pack taxes you at the same percentage at every altitude — but at 8,000 m, where you have perhaps 9 ml·kg⁻¹·min⁻¹ of usable reserve above resting metabolism, that percentage is the difference between moving and not moving
- **Staging buys real speed, not just safety.** Six days at 2,200 m improved a time trial at 4,300 m by **44%** — and the improvement correlated with oxygen saturation during exercise, *not* with haemoglobin. Two days of staging bought nothing

> [!TIP]
> The single most useful practical adjustment is to stop pacing off effort and start pacing off *sustainability*. At altitude the gap between "hard but fine" and "blown, with a headache, for the rest of the day" is much narrower than at sea level, and the recovery is much slower. Going slightly too hard at 4,500 m costs you the afternoon; going slightly too hard at sea level costs you ten minutes.

## 8. What Weeks at Altitude Do to Your Muscles

Long exposure does not just fail to make you stronger. It actively degrades you.

| Finding | Result | Context |
|---|---|---|
| Muscle cross-sectional area | **−13% thigh, −15% arm**; type I fibre area **−25%** | 40 days, simulated Everest |
| Muscle CSA and mitochondria | CSA **−10%**, mitochondrial volume **−25%** | 8 weeks above 5,000 m |
| Mitochondrial density | **−21%** overall; subsarcolemmal **−73%** | 66 days, above 6,400 m |
| Mitochondrial density | **No loss** | 19 days at 5,300 m |
| Weight loss | **−7.4 kg**, intake down 43% | 40 days, chamber, unlimited food |
| Energy deficit | **2.3–2.9 MJ/day** | 6,542 m, field |

Two things stand out.

**Mitochondrial volume decreases.** This is genuinely counter-intuitive — you would expect chronic hypoxia to stimulate more mitochondria, and short exposures (19 days at 5,300 m) show no loss. But months at extreme altitude reduce mitochondrial density substantially, with the machinery of mitochondrial biogenesis itself down-regulated by about a third.

> [!WARNING]
> The comfortable old story that altitude "builds capillaries and mitochondria" is simply wrong, and the direction of the mitochondrial effect is the opposite of what most climbers assume. Chronic severe hypoxia produces **no new capillaries and no new mitochondria**. The apparent increase in capillary *density* sometimes reported is an artefact of shrinking fibres — the same capillaries packed around smaller muscle cells look denser.
>
> The timing is the practical headline: **a normal two-to-three week trek does not do this. A two-month expedition above 6,400 m does.**

**"Altitude eats your muscle" is an over-claim.** Chamber and field studies disagree about the composition of the loss — one sedentary chamber study found mostly fat-free mass, while an active field study at 6,542 m found **74% of the loss was fat**. Operation Everest III showed **63% of the loss regained within four days** of descent, which tells you much of the acute scale reading was fluid and glycogen.

Maximal strength and power are largely preserved *as long as muscle mass is maintained* — the contractile machinery itself is intact. Over a long expedition, mass is not maintained, so power falls roughly in proportion to the lost cross-sectional area.

The honest version: altitude suppresses appetite and drives a persistent energy deficit; some of the immediate weight loss is water; genuine muscle and mitochondrial loss is well documented but needs weeks to months of high exposure.

## 9. Live High Train Low: Not Your Problem

Because it dominates the popular altitude literature, it is worth explaining why LHTL is largely irrelevant to mountaineering.

**What it is.** Sleep at moderate altitude to stimulate red cell production; train at low altitude to preserve training intensity. The goal is **sea-level race performance**, not altitude tolerance.

**The evidence.** The original 1997 study found **+5% {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} and +9% red cell mass**, with a 13.4-second improvement over 5,000 m — but only in the high-live/low-train group.

**The dose.** At least **four weeks**, living at **2,000–2,500 m**, for **12+ hours a day** and ideally more like 22. Living at 1,780 m or 2,800 m did not work; 2,085 m and 2,454 m did. Haemoglobin mass rises roughly **1.1% per 100 hours**.

**Roughly 45% of people are non-responders.**

> [!CAUTION]
> Altitude training has **never been tested in a double-blind, placebo-controlled, crossover design** — a point made bluntly by five leading researchers in the field. Any claim about LHTL benefits should carry that caveat. There is also an awkward internal problem in the best dose-response study: red cell volume rose significantly in *all four* altitude groups and did not differ between them, yet performance improved only in two. That is hard to explain by red cell mass alone.

**Why it doesn't help you.** Three reasons. First, wrong objective: LHTL is engineered for athletes to whom 0.5% matters, and delivers about +5% {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} — a rounding error against the 25–70% you are about to lose to hypoxia. Second, and decisively, **the mechanism does not transfer.** Extra red cells do not buy aerobic capacity at altitude, because oxygen content is not the limitation — Calbet's subjects had arterial oxygen content fully normalised after ten weeks at 5,260 m and still recovered only a tenth of their {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} deficit. Third, **training in hypoxia is actively counterproductive** — it lowers the absolute workload you can perform, so you get fitter more slowly, for no demonstrated altitude benefit.

What a mountaineer actually needs is *staging* and *ventilatory* acclimatization — a different intervention, with a different mechanism and a better-matched evidence base. Six days at 2,200 m improved a time trial at 4,300 m by 44%, and the gain tracked oxygen saturation, not haemoglobin. See the [pre-acclimatization](../pre-acclimatization/) article for what does work.

## The Bottom Line

- **{{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} starts falling around 1,000–1,500 m** and drops roughly 6–7% per 1,000 m at moderate altitude — but the curve steepens badly above 4,000 m, and the rule of thumb comes from a single small study of trained men.
- **On the Everest summit you have about 29% of your sea-level aerobic capacity**, a large part of it committed to basal metabolism.
- **Performance falls about 2.3× further than {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} does.** Think in time multipliers: ~1.5× at 4,000 m, ~2.4× at 6,000 m, ~7× at 8,000 m.
- **The limitation is central, not peripheral.** Leg oxygen extraction stays at sea-level values; the constraint is cardiac output and its redistribution. Pushing harder achieves little.
- **Acclimatization does not restore {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}}** — even with arterial oxygen content fully normalised, it recovers only about a tenth of the deficit. It buys safety and function, not speed.
- **Fitness is capacity, not immunity.** It determines what you can do at altitude and has no protective effect against altitude illness — and highly trained athletes may actually desaturate more.
- **Your usable heart rate range is squeezed from both ends.** Pace by breathing and sustainability.
- **Weeks at extreme altitude degrade you** — muscle mass, mitochondrial density, and a persistent energy deficit. There are no new capillaries and no new mitochondria. Above 6,000 m you are spending capital, not building it.

## Frequently Asked Questions

### How much slower should I expect to be at 4,000 m?

Roughly **half as fast again** — plan on a time multiplier of about 1.5×, not on the 25% figure your aerobic capacity loss suggests. This is the trap: performance decrements run about 2.3 times larger than {{< katex >}}\dot{V}O_{2}\text{max}{{< /katex >}} decrements, so an 800 m ascent that takes you two hours at home takes about three at 4,000 m. Higher up it gets worse fast — roughly 2.4× at 6,000 m and around 7× at 8,000 m.

Two adjustments make the estimate more useful. First, add time for the first few days at any new altitude, because incomplete acclimatization compounds the hypoxic penalty. Second, remember that guidebook times generally assume an acclimatized party moving well, so on day three of a trip they are aspirational rather than descriptive. If you plan on your sea-level pace and hope acclimatization will close the gap, you will be making decisions late in the day — which the [death zone](../death-zone/) article shows is exactly the failure mode that kills people.

### Should I train with a hypoxic mask or in an altitude room?

For altitude performance, no. Exercise-in-hypoxia sessions last 30–90 minutes, which is an order of magnitude below any plausible acclimatization dose, and there is essentially no evidence that they reduce altitude illness on a subsequent ascent.

There is also a direct cost. Training in hypoxia forces you to reduce your absolute workload — less power, less speed, less load carried — for the same subjective effort. Over a training block, that means you arrive at the mountain less fit than if you had trained normally. Since a mountaineer's limiting factor is usually how many hours they can move under load, that is a bad trade. Train hard at sea level, and do your acclimatizing at altitude.

### Why does my heart rate feel wrong at altitude?

Because it is doing something different from what it does at home. At the same absolute workload at altitude, your heart rate is higher than at sea level — each litre of blood carries less oxygen, so the pump has to move more of it. That alone makes your familiar zones meaningless.

Higher up, the picture inverts. Above roughly 5,000 m, maximum achievable heart rate progressively falls, so you can find yourself unable to push your pulse anywhere near the number you associate with hard effort, while feeling completely maximal. Resting heart rate is also elevated, and it drifts as you acclimatize and as plasma volume contracts. Use breathing and perceived effort instead. The ability to speak short sentences without gasping is a far better guide than any number on your watch.

### If I get fitter, will I acclimatize faster?

No. Acclimatization is driven by hypoxic exposure — the ventilatory response, the renal acid-base correction, and the erythropoietic response — and none of those are accelerated by aerobic training. The evidence that fitness does not protect against altitude illness is consistent and, in Richalet's data, actually points the other way.

What training does do is raise your absolute capacity so that the fraction you keep at altitude is still a useful amount, and give you the durability to move for many hours under load on consecutive days. That is genuinely valuable. It is just a different thing from acclimatizing, and conflating the two is how fit people end up ascending too fast and getting sick.

### Will spending weeks at base camp make me stronger?

Almost certainly the opposite. Above roughly 5,000 m you are running a persistent energy deficit, losing muscle cross-sectional area, and — over months at extreme altitude — losing mitochondrial density. In one 40-day chamber study with unlimited food and no climbing at all, subjects lost 7.4 kg and reduced thigh muscle cross-sectional area by 13%.

The useful framing is that time at high altitude buys **acclimatization** and costs **condition**, and above a certain altitude the trade turns bad. That is why expeditions use rotations rather than parking at altitude: go up to acclimatize, come down to recover and eat. Note also that some of what you lose comes back very quickly — in one study 63% of the mass loss was regained within four days of descent, because much of it was fluid and glycogen rather than tissue.
