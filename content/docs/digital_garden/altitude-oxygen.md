---
title: "Altitude & Oxygen"
weight: 1
---

# Altitude & Oxygen

A quick calculator for alpinists: enter the altitude you're heading to and see the atmospheric pressure there relative to sea level. Since oxygen makes up a constant ~20.9% of dry air, that pressure ratio is also the relative amount of oxygen available per breath compared to sea level.

<div class="oxygen-calculator" id="oxygen-calculator">
  <div class="oxygen-calculator-inputs">
    <input type="number" id="oxygen-altitude" min="0" max="44000" step="1" value="7500" inputmode="decimal" aria-label="Altitude" />
    <select id="oxygen-units" aria-label="Units">
      <option value="m" selected>metres</option>
      <option value="ft">feet</option>
    </select>
  </div>
  <p class="oxygen-calculator-result" aria-live="polite">
    <strong id="oxygen-percent">&ndash;</strong>
    <span class="oxygen-calculator-note">of sea-level oxygen</span>
  </p>
  <p class="oxygen-calculator-detail">
    Equivalent to <strong id="oxygen-fraction">&ndash;</strong> O&#8322; at sea level<br />
    Pressure <strong id="oxygen-pressure">&ndash;</strong> hPa
  </p>
</div>

## How it works

The calculator uses the International Standard Atmosphere (ISA) barometric formula. Up to the tropopause at 11 km, temperature decreases linearly with altitude and pressure follows:

{{< katex display=true >}}
p = p_0 \left(1 - \frac{L h}{T_0}\right)^{\frac{g_0 M}{R L}} \approx p_0 \left(1 - 2.2558 \times 10^{-5} \, h\right)^{5.2559}
{{< /katex >}}

where *h* is the altitude in metres, *p*<sub>0</sub> = 1013.25 hPa is the sea-level pressure, *L* = 0.0065 K/m is the standard temperature lapse rate, *T*<sub>0</sub> = 288.15 K is the sea-level standard temperature, *g*<sub>0</sub> = 9.807 m/s², *M* = 0.02897 kg/mol is the molar mass of air, and *R* = 8.3145 J/(mol·K). Above 11 km the formula switches to the isothermal stratosphere layer. Because the oxygen fraction of air stays essentially constant, the pressure ratio *p*/*p*<sub>0</sub> directly gives the relative availability of oxygen.

**Reference:** [U.S. Standard Atmosphere, 1976](https://ntrs.nasa.gov/citations/19770009539) (NASA TM X-74335), see also the [barometric formula](https://en.wikipedia.org/wiki/Barometric_formula).

## Limitations

- This is a standard-atmosphere model: it assumes average conditions and ignores weather. Actual pressure at a given altitude varies by a few percent with weather systems and temperature.
- Real pressure at very high altitudes is also affected by latitude and season — Everest summit pressure, for instance, fluctuates roughly between 325 and 343 hPa over the year.
- The physiological effect of altitude (acclimatization, fitness, rate of ascent) matters far more than the raw number for how you'll actually feel.
- Not medical advice — don't use it to make safety decisions on the mountain.

<script>
(function () {
  var altitude = document.getElementById("oxygen-altitude");
  var units = document.getElementById("oxygen-units");
  var percent = document.getElementById("oxygen-percent");
  var fraction = document.getElementById("oxygen-fraction");
  var pressure = document.getElementById("oxygen-pressure");

  // ISA constants
  var P0 = 1013.25;   // sea-level pressure, hPa
  var T0 = 288.15;    // sea-level temperature, K
  var L = 0.0065;     // tropospheric lapse rate, K/m
  var EXP = 5.2559;   // g0*M/(R*L)
  var TROPOPAUSE = 11000; // m
  var P11 = P0 * Math.pow(1 - L * TROPOPAUSE / T0, EXP);
  var T11 = T0 - L * TROPOPAUSE;
  var STRAT = 0.00015769; // g0*M/(R*T11), 1/m

  function pressureAt(m) {
    if (m <= TROPOPAUSE) {
      return P0 * Math.pow(1 - L * m / T0, EXP);
    }
    return P11 * Math.exp(-STRAT * (m - TROPOPAUSE));
  }

  function update() {
    var value = parseFloat(altitude.value);
    if (isNaN(value) || value < 0) {
      percent.textContent = "–";
      fraction.textContent = "–";
      pressure.textContent = "–";
      return;
    }
    var metres = units.value === "ft" ? value * 0.3048 : value;
    if (metres > 44000) {
      percent.textContent = "–";
      fraction.textContent = "–";
      pressure.textContent = "–";
      return;
    }
    var p = pressureAt(metres);
    percent.textContent = Math.round(p / P0 * 100) + "%";
    fraction.textContent = (20.95 * p / P0).toFixed(1) + "%";
    pressure.textContent = Math.round(p);
  }

  altitude.addEventListener("input", update);
  units.addEventListener("input", update);
  update();
})();
</script>
