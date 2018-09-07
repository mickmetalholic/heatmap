"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _d3Scale = require("d3-scale");

function getGradientColorScale(colors) {
  var domain = colors.map(function (color) {
    return color.stop;
  });
  var range = colors.map(function (color) {
    return color.color;
  });
  return (0, _d3Scale.scaleLinear)().domain(domain).range(range);
}

var _default = getGradientColorScale;
exports.default = _default;