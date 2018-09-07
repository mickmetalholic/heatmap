import { scaleLinear } from 'd3-scale';

function getGradientColorScale(colors) {
  var domain = colors.map(function (color) {
    return color.stop;
  });
  var range = colors.map(function (color) {
    return color.color;
  });
  return scaleLinear().domain(domain).range(range);
}

export default getGradientColorScale;