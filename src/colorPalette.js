import { scaleLinear } from 'd3-scale/src';


function getGradientColorScale(colors) {
  const domain = colors.map(color => color.stop);
  const range = colors.map(color => color.color);
  return scaleLinear().domain(domain).range(range);
}

export default getGradientColorScale;
