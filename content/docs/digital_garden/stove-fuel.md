---
title: "Stove Fuel"
weight: 2
---

# Stove Fuel

How much gas to carry? This starts with the energy needed to melt and heat the water you plan to use, then adjusts for stove efficiency, altitude and a safety reserve.

<div class="calculator" id="fuel-calculator">
  <div class="calculator-inputs calculator-grid">
    <div class="calculator-field">
      <label for="fuel-people">People</label>
      <input type="number" id="fuel-people" min="1" max="50" step="1" value="2" inputmode="numeric" />
    </div>
    <div class="calculator-field">
      <label for="fuel-days">Days</label>
      <input type="number" id="fuel-days" min="1" max="120" step="1" value="5" inputmode="numeric" />
    </div>
    <div class="calculator-field">
      <label for="fuel-water">Water per person per day (L)</label>
      <input type="number" id="fuel-water" min="0" max="20" step="0.5" value="3" inputmode="decimal" />
    </div>
    <div class="calculator-field">
      <label for="fuel-water-temp">Starting water temperature (°C)</label>
      <input type="number" id="fuel-water-temp" min="0" max="30" step="1" value="10" inputmode="decimal" />
    </div>
    <div class="calculator-field">
      <label for="fuel-snow">Melted from snow: <span id="fuel-snow-value">0%</span></label>
      <input type="range" id="fuel-snow" min="0" max="100" step="5" value="0" />
    </div>
    <div class="calculator-field">
      <label for="fuel-stove">Stove system</label>
      <select id="fuel-stove">
        <option data-efficiency="64" value="reactor-1" selected>MSR Reactor 1.0 L</option>
        <option data-efficiency="71" value="reactor-17">MSR Reactor 1.7 L / 2.5 L</option>
        <option data-efficiency="58" value="windburner">MSR WindBurner</option>
        <option data-efficiency="60" value="jetboil-flash">Jetboil Flash</option>
        <option data-efficiency="60" value="jetboil-minimo">Jetboil MiniMo / Sumo</option>
        <option data-efficiency="52" value="pocketrocket-screen">MSR PocketRocket 2, with windscreen</option>
        <option data-efficiency="42" value="pocketrocket-bare">MSR PocketRocket 2, no windscreen</option>
        <option data-efficiency="48" value="upright-screen">Upright canister stove, with windscreen</option>
        <option data-efficiency="40" value="upright-bare">Upright canister stove, no windscreen</option>
        <option value="custom">Custom efficiency…</option>
      </select>
    </div>
    <div class="calculator-field calculator-hidden" id="fuel-efficiency-field">
      <label for="fuel-efficiency">Efficiency (%)</label>
      <input type="number" id="fuel-efficiency" min="1" max="100" step="1" value="60" inputmode="decimal" />
    </div>
    <div class="calculator-field">
      <label for="fuel-altitude">Altitude</label>
      <div class="calculator-pair">
        <input type="number" id="fuel-altitude" min="0" max="9000" step="100" value="3000" inputmode="decimal" />
        <select id="fuel-altitude-units" aria-label="Altitude units">
          <option value="m" selected>m</option>
          <option value="ft">ft</option>
        </select>
      </div>
    </div>
    <div class="calculator-field">
      <label for="fuel-canister">Canister size</label>
      <select id="fuel-canister">
        <option value="110">110 g</option>
        <option value="227" selected>227 g (MSR IsoPro)</option>
        <option value="230">230 g</option>
        <option value="450">450 g</option>
      </select>
    </div>
    <div class="calculator-field">
      <label for="fuel-margin">Safety margin</label>
      <select id="fuel-margin">
        <option value="0">none</option>
        <option value="10">+10%</option>
        <option value="20" selected>+20%</option>
        <option value="30">+30%</option>
        <option value="50">+50%</option>
      </select>
    </div>
  </div>
  <p class="calculator-result" aria-live="polite">
    <strong id="fuel-grams">&ndash;</strong>
    <span class="calculator-note">of canister gas</span>
  </p>
  <p class="calculator-detail">
    <strong id="fuel-canisters">&ndash;</strong> &mdash; so carry <strong id="fuel-carry">&ndash;</strong><br />
    <span id="fuel-water-total">&ndash;</span> of water &middot; <span id="fuel-energy">&ndash;</span> &middot; <span id="fuel-altitude-factor">&ndash;</span> &middot; <span id="fuel-per-day">&ndash;</span><br />
    Water boils at <span id="fuel-boil">&ndash;</span> at this altitude
  </p>
</div>

## How it works

Everything follows from the energy needed to get water to a boil, and how much of the fuel's energy actually ends up in the pot.

### Energy required

Liquid water only needs heating. Snow additionally has to be melted first, which is where most winter fuel goes:

{{< katex display=true >}}
Q_\text{liquid} = m \, c_w \, (T_\text{ref} - T_0) \qquad Q_\text{snow} = m \, (L_f + c_w \, (T_\text{ref} - T_0))
{{< /katex >}}

where *m* is the mass of water in kg (1 L ≈ 1 kg), *c<sub>w</sub>* = 4.186 kJ/(kg·K) is the specific heat of liquid water, *L<sub>f</sub>* = 334 kJ/kg is the latent heat of fusion of ice, *T*<sub>0</sub> is the starting temperature and *T*<sub>ref</sub> = 100 °C. Liquid-water heating uses the input starting temperature; snow is still treated as 0→100 °C. The endpoint remains 100 °C at every altitude so the calculator never recommends less fuel merely because water boils sooner on a high mountain.

That latent-heat term explains much of the extra fuel needed in winter. Melting a kilogram of snow and heating it to the reference temperature takes about **1.8 times** the energy of heating a kilogram of water that was already liquid at 0 °C, and over twice that of 15 °C stream water. Mountaineers have noticed this for a long time — it is sometimes called the [Shipton rule](https://doi.org/10.1016/j.wem.2017.08.003), the observation that melting the ice takes about as long again as heating the resulting water.

### Boiling point at altitude

Air pressure falls with altitude, and water boils when its vapour pressure matches the ambient pressure — so it boils cooler the higher you go. Pressure comes from the International Standard Atmosphere barometric formula (the same one behind the [Altitude & Oxygen](../altitude-oxygen/) calculator), and the boiling point from the Antoine equation:

{{< katex display=true >}}
\log_{10} P = A - \frac{B}{T_b + C} \quad \Longrightarrow \quad T_b = \frac{B}{A - \log_{10} P} - C
{{< /katex >}}

with *P* in mmHg, *T<sub>b</sub>* in °C, and Stull's coefficients for water *A* = 8.07131, *B* = 1730.63, *C* = 233.426. That gives 100 °C at sea level, 90 °C at 3,000 m and 80 °C at 6,000 m.

The boiling point is shown as useful context, but it does **not** reduce the fuel estimate. In strict thermodynamic terms a lower boiling point makes a boil cheaper. In expedition practice that saving is overwhelmed by colder equipment and surroundings, poorer canister output, greater heat loss, wind exposure, and less oxygen per litre of air available to the burner. A pot reaching 80 °C at 6,000 m is also not equivalent to a 100 °C sea-level boil for cooking.

### High-altitude allowance

There is no published universal efficiency curve for backpacking stoves at altitude, so the calculator uses a deliberately simple planning heuristic:

| Altitude | Added fuel |
|---:|---:|
| 0–2,000 m | 0% |
| 3,000 m | 5% |
| 5,000 m | 15% |
| 7,000 m | 25% |
| 9,000 m | 35% |

Above 2,000 m the allowance rises by **5% per 1,000 m**, capped at 35%. This is not presented as a combustion-efficiency measurement. It is a combined operating allowance for the conditions that predictably accompany altitude: falling air and oxygen density, colder stove and pot hardware, reduced canister output as the fuel gets colder, and greater heat loss. The progression is intentionally modest at trekking altitudes and conservative on 6,000–8,000 m expeditions.

This treatment follows the practical approach recommended by [REI's fuel-planning guidance](https://www.rei.com/learn/expert-advice/how-much-stove-fuel-should-i-take-on-my-backpacking-trip.html): start from measured stove consumption, then allow for elevation and cold rather than assuming bench-test performance. MSR's explanation of [canister fuels in cold and at altitude](https://cascadedesigns.com/blogs/msr-gear-guides/ins-outs-canister-fuels) describes why canister pressure and fuel composition make the real result system- and temperature-dependent.

### Fuel required

The reference energy is divided by the useful fraction of the fuel's heat, then multiplied by the altitude allowance and the chosen safety reserve:

{{< katex display=true >}}
m_\text{fuel} = \frac{Q_\text{reference}}{\eta \cdot \text{LHV}} \times f_h \times (1 + r)
{{< /katex >}}

where *η* is the thermal efficiency of the stove system, *f<sub>h</sub>* is the high-altitude allowance, *r* is the safety margin, and LHV = 45.8 MJ/kg is the lower heating value of an 80/20 isobutane/propane blend — [the composition MSR publishes for IsoPro](https://cascadedesigns.com/en-ca/products/msr-isopro-fuel). Lower heating value is the right choice here because a camping stove vents its exhaust to the air and never recovers the heat of condensation from the water vapour it produces.

**References:** water and ice properties from the [NIST/IAPWS steam tables](https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir5078.pdf); fuel heating values from the [US DOE Alternative Fuels Data Center](https://afdc.energy.gov/fuels/properties) and the [IPCC default net calorific values](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_1_Ch1_Introduction.pdf); atmospheric model from the [U.S. Standard Atmosphere, 1976](https://ntrs.nasa.gov/citations/19770009539).

## Stove presets

Efficiency is the one number in the model that cannot be derived from physics, so it has to come from measurement. Manufacturers do not publish thermal efficiency, but most publish **how many litres a canister will boil**, and that can be turned back into an efficiency. Assuming the usual 1 L from 20 °C to 100 °C at sea level:

{{< katex display=true >}}
\eta = \frac{c_w \, \Delta T}{g_{\text{per L}} \cdot \text{LHV}} = \frac{4.186 \times 80}{g_{\text{per L}} \times 45.8}
{{< /katex >}}

| Stove system | Published figure | g per litre | Implied *η* | Used here | Source |
|---|---|---:|---:|---:|---|
| MSR Reactor 1.0 L | 20 L per 227 g | 11.35 | 64% | **64%** | [MSR](https://cascadedesigns.com/products/reactor-stove-systems) |
| MSR Reactor 1.7 / 2.5 L | 22 L per 227 g | 10.32 | 71% | **71%** | [MSR](https://cascadedesigns.com/products/reactor-stove-systems) |
| MSR WindBurner | 18 L per 227 g | 12.61 | 58% | **58%** | [MSR](https://cascadedesigns.com/products/windburner-personal-stove-system) |
| Jetboil Flash | 10 L per 100 g | 10.00 | 73% | **60%** | [Jetboil](https://jetboil.johnsonoutdoors.com/us/shop/stoves-systems/flash-cooking-system) |
| Jetboil MiniMo / Sumo | 12 L per 100 g | 8.33 | 88% | **60%** | [Jetboil](https://jetboil.johnsonoutdoors.com/us/shop/stoves-systems/minimo-cooking-system) |
| MSR PocketRocket 2, with windscreen | 16 L per 227 g | 14.19 | 52% | **52%** | [MSR](https://cascadedesigns.com/products/pocketrocket-2-stove) |
| MSR PocketRocket 2, no windscreen | — | — | — | **42%** | derated, see below |
| Upright canister stove, with windscreen | — | — | — | **48%** | [BPL](https://backpackinglight.com/canister_stove_efficiency_p1/) |
| Upright canister stove, no windscreen | — | — | — | **40%** | [BPL](https://backpackinglight.com/canister_stove_efficiency_p1/) |

Two of these are capped rather than used as published. Jetboil's MiniMo figure implies 88% thermal efficiency, which is not a credible number for any real cooking system and almost certainly reflects a warmer start, a lower boil endpoint, or generous rounding. The Flash's implied 73% sits at the very top of what independent testing supports. Both are pulled back to a conservative 60%.

The generic entries come from independent measurement rather than manufacturer claims. [Backpacking Light's StoveBench protocol](https://backpackinglight.com/stovebench/) weighs fuel to 0.1 g against a measured temperature rise, and the efficiencies it produces for ordinary canister stoves and pots cluster around 30–50%. Roger Caffin's [heat-exchanger pot test](https://backpackinglight.com/heat-exchanger-pot-test-hx-haa-caffin/) is the cleanest evidence for why the integrated systems do better: the same pot with its fins removed used about 1.48 g more per half-litre, roughly a 20% penalty.

Treat the single figures as nominal. A more honest statement of each is a band: Reactor 58–75%, WindBurner 50–70%, integrated Jetboil-type 50–75%, upright canister with a good windscreen 38–58%, bare upright burner 30–50%. The calculator shows one number to stay readable, but the real uncertainty is roughly ±10 percentage points.

### Why only some stoves have a windscreen option

Wind is not a global input in this calculator, but it is not ignored either — it is built into the presets for the two designs where it dominates.

An **exposed upright burner** like the PocketRocket 2 holds the pot on supports above an open flame, with nothing between the burner and a crosswind. A windscreen is by far the largest efficiency lever available to it. Manufacturer boil figures are still-air bench results, so the published value is used for the windscreened case and derated about 20% for the bare case.

An **integrated system** like the Reactor, WindBurner or a Jetboil encloses the burner inside the pot's heat-exchanger skirt, so it is already shielded. Hikin' Jim's [side-by-side wind testing](https://adventuresinstoving.blogspot.com/2014/11/msr-windboiler-wind-testing.html) found the WindBurner showed no discernible performance loss in gusts forecast around 56 km/h — conditions in which an exposed-burner Jetboil Sol repeatedly failed to boil at all. Offering a windscreen toggle for these would be inventing precision that does not exist, so the calculator does not.

## Limitations

- **Snow is assumed to start at 0 °C.** Liquid-water start temperature is now configurable, but snow temperature below freezing is still not modelled. Snow at −20 °C needs roughly 40 kJ/kg more to reach freezing point, about 5% on top of the melt-and-boil total.
- **The altitude allowance is a heuristic, not a measured efficiency curve.** Its +5% per 1,000 m above 2,000 m combines several effects that cannot be separated reliably in the field: thinner air, cold equipment, weaker fuel delivery from a cold canister, and heat loss. A warm, sheltered Reactor may beat it; an exposed upright stove in a storm may use far more. Do not add another generic altitude percentage on top of it.
- **Wind is only modelled through the windscreen presets** — and in the field it may well be the largest single factor. An exposed burner in moderate wind can use 1.3–2.5 times the fuel, and in strong wind may never reach a boil at all, at which point no multiplier means anything.
- **Cold attacks the canister, not just the water.** Isobutane boils at −12 °C and n-butane at around −0.5 °C, so vapour pressure collapses as things get cold, and running the stove chills the canister further still. Propane boils off preferentially, so a half-used canister performs worse in the cold than a fresh one. This "canister fade" is a failure mode, not a quantity problem — carrying more fuel does not fix it. Keep canisters in your sleeping bag, and consider a stove with a pressure regulator or an invertible remote canister.
- **Efficiency belongs to the system, not the burner.** Pot diameter, lid, heat-exchanger geometry and how hard you run the flame can matter more than the badge on the stove. Running at full throttle is usually less efficient than a moderate setting.
- **Manufacturer figures are marketing.** "Litres boiled per canister" rarely states the starting temperature, elevation, flame setting, or what counted as a boil. They are used here because they are the only per-model data available, not because they are rigorous.
- **Only boiling is modelled.** Simmering, priming, relighting, spilled pots and long idle time all burn fuel and are covered solely by the safety margin.
- **Snow density does not change the energy** — a kilogram of water is a kilogram of water — but it changes everything about the experience. Dry powder means many more pot refills, more handling and more lost heat than dense spring snow.
- **Weigh your own canister.** The most useful thing you can do is weigh one before and after a representative trip. Your own measured grams per day beats any model on this page.
- **This is a planning estimate, not a safety guarantee.** On a serious expedition, follow route-specific guidance and carry a genuine reserve. For scale, the [Denali rangers](https://www.nps.gov/dena/planyourvisit/mountainfaqs.htm) suggest a US gallon of white gas per person for three weeks, plus a spare gallon for the group.

{{< atmosphere >}}

<script>
(function () {
  var ids = ["people", "days", "water", "water-temp", "snow", "stove", "efficiency", "altitude", "altitude-units", "canister", "margin"];
  var el = {};
  ids.forEach(function (id) { el[id] = document.getElementById("fuel-" + id); });

  var out = {};
  ["grams", "canisters", "carry", "water-total", "energy", "altitude-factor", "per-day", "boil", "snow-value"].forEach(function (id) {
    out[id] = document.getElementById("fuel-" + id);
  });

  var effField = document.getElementById("fuel-efficiency-field");

  var C_WATER = 4.186;  // kJ/(kg K)
  var L_FUSION = 334;   // kJ/kg
  var LHV = 45.8;       // kJ/g, 80/20 isobutane/propane
  var MAX_ALTITUDE = 9000; // m
  var REFERENCE_BOIL = 100; // °C; altitude is handled by the allowance

  function altitudeFactor(metres) {
    var added = Math.max(0, metres - 2000) / 1000 * 0.05;
    return 1 + Math.min(added, 0.35);
  }

  function blank() {
    Object.keys(out).forEach(function (k) {
      if (k !== "snow-value") { out[k].textContent = "–"; }
    });
  }

  function update() {
    var snow = parseFloat(el.snow.value);
    out["snow-value"].textContent = snow + "%";

    var isCustom = el.stove.value === "custom";
    effField.classList.toggle("calculator-hidden", !isCustom);

    var preset = el.stove.options[el.stove.selectedIndex].getAttribute("data-efficiency");
    var people = parseFloat(el.people.value);
    var days = parseFloat(el.days.value);
    var perDay = parseFloat(el.water.value);
    var waterTemp = parseFloat(el["water-temp"].value);
    var efficiency = (isCustom ? parseFloat(el.efficiency.value) : parseFloat(preset)) / 100;
    var altitude = parseFloat(el.altitude.value);
    var canister = parseFloat(el.canister.value);
    var margin = parseFloat(el.margin.value) / 100;

    if ([people, days, perDay, waterTemp, efficiency, altitude].some(isNaN) ||
        people <= 0 || days <= 0 || perDay < 0 || altitude < 0 ||
        waterTemp < 0 || waterTemp > 30 ||
        efficiency <= 0 || efficiency > 1) {
      blank();
      return;
    }

    var metres = el["altitude-units"].value === "ft" ? altitude * 0.3048 : altitude;
    if (metres > MAX_ALTITUDE) {
      blank();
      return;
    }

    var boil = Atmosphere.boilingPointAt(metres);
    var highAltitudeFactor = altitudeFactor(metres);
    var litres = people * days * perDay;
    var fromSnow = litres * snow / 100;
    var fromLiquid = litres - fromSnow;

    var liquidHeating = C_WATER * (REFERENCE_BOIL - waterTemp); // kJ/kg
    var snowHeating = C_WATER * REFERENCE_BOIL; // kJ/kg, 0→100 °C reference
    var energy = fromLiquid * liquidHeating + fromSnow * (L_FUSION + snowHeating);
    var grams = energy / (efficiency * LHV) * highAltitudeFactor * (1 + margin);

    out.grams.textContent = Math.round(grams) + " g";
    var count = grams / canister;
    out.canisters.textContent = count.toFixed(2) + " × " + canister + " g canisters";
    out.carry.textContent = Math.ceil(count - 0.001) + " canisters";
    out["water-total"].textContent = (Math.round(litres * 10) / 10) + " L";
    out.energy.textContent = Math.round(energy).toLocaleString("en-US") + " kJ";
    out["altitude-factor"].textContent = highAltitudeFactor === 1
      ? "no altitude allowance"
      : "+" + Math.round((highAltitudeFactor - 1) * 100) + "% for altitude";
    out["per-day"].textContent = Math.round(grams / (people * days)) + " g per person per day";
    out.boil.textContent = boil.toFixed(1) + " °C";
  }

  ids.forEach(function (id) { el[id].addEventListener("input", update); });
  update();
})();
</script>
