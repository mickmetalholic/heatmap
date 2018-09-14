import { ScaleLinear, scaleLinear } from 'd3-scale';
import { IGradientColor } from './interface';

function getGradientColorScale(
  colors: IGradientColor[]
): ScaleLinear<string, string> {
  const domain: number[] = colors.map(color => color.stop);
  const range: string[] = colors.map(color => color.color);
  return scaleLinear<string>()
    .domain(domain)
    .range(range);
}

export default getGradientColorScale;
