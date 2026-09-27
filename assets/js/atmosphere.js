/*
 * Shared atmosphere helpers for the calculators.
 *
 * Pressure follows the International Standard Atmosphere (ISA) barometric
 * formula; the boiling point of water follows the Antoine equation using
 * Stull's coefficients, which cover the whole range of pressures encountered
 * on Earth's surface.
 *
 * This file is a Hugo template: the ISA constants come from
 * data/atmosphere.yaml, which layouts/_partials/atmosphere/pressure.html also
 * reads to show oxygen on objective pages. If you change the formula in
 * pressureAt(), change it there too.
 */
(function (global) {
  "use strict";

  var P0 = {{ hugo.Data.atmosphere.sea_level_pressure }}; // sea-level pressure, hPa
  var T0 = {{ hugo.Data.atmosphere.sea_level_temperature }}; // sea-level temperature, K
  var L = {{ hugo.Data.atmosphere.lapse_rate }}; // tropospheric lapse rate, K/m
  var EXP = {{ hugo.Data.atmosphere.exponent }}; // g0*M/(R*L)
  var TROPOPAUSE = {{ hugo.Data.atmosphere.tropopause }}; // m
  var P11 = P0 * Math.pow(1 - (L * TROPOPAUSE) / T0, EXP);
  var STRAT = {{ hugo.Data.atmosphere.stratosphere_rate }}; // g0*M/(R*T11), 1/m

  // Antoine coefficients for water, pressure in mmHg, temperature in °C.
  var ANTOINE_A = 8.07131;
  var ANTOINE_B = 1730.63;
  var ANTOINE_C = 233.426;
  var HPA_TO_MMHG = 0.7500617;

  function pressureAt(metres) {
    if (metres <= TROPOPAUSE) {
      return P0 * Math.pow(1 - (L * metres) / T0, EXP);
    }
    return P11 * Math.exp(-STRAT * (metres - TROPOPAUSE));
  }

  function pressureRatio(metres) {
    return pressureAt(metres) / P0;
  }

  function boilingPointAt(metres) {
    var mmHg = pressureAt(metres) * HPA_TO_MMHG;
    return ANTOINE_B / (ANTOINE_A - Math.log(mmHg) / Math.LN10) - ANTOINE_C;
  }

  global.Atmosphere = {
    SEA_LEVEL_PRESSURE: P0,
    TROPOPAUSE: TROPOPAUSE,
    pressureAt: pressureAt,
    pressureRatio: pressureRatio,
    boilingPointAt: boilingPointAt
  };
})(window);
