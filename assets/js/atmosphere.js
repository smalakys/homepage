/*
 * Shared atmosphere helpers for the digital garden calculators.
 *
 * Pressure follows the International Standard Atmosphere (ISA) barometric
 * formula; the boiling point of water follows the Antoine equation using
 * Stull's coefficients, which cover the whole range of pressures encountered
 * on Earth's surface.
 */
(function (global) {
  "use strict";

  var P0 = 1013.25; // sea-level pressure, hPa
  var T0 = 288.15; // sea-level temperature, K
  var L = 0.0065; // tropospheric lapse rate, K/m
  var EXP = 5.2559; // g0*M/(R*L)
  var TROPOPAUSE = 11000; // m
  var P11 = P0 * Math.pow(1 - (L * TROPOPAUSE) / T0, EXP);
  var STRAT = 0.00015769; // g0*M/(R*T11), 1/m

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
