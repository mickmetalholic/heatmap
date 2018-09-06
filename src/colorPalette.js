import { prop, forEach, compose, chunk } from './util';
import { scaleLinear } from 'd3-scale';

// function addColor(gradient) {
//   return color => gradient.addColorStop(prop('stop', color), prop('color', color));
// }

// const addColors = compose(forEach, addColor);

// // Array -> Array
// export const getGradientColorData = colors => {
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   const gradient = ctx.createLinearGradient(0, 0, 0, 255);

//   addColors(gradient)(colors);

//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, 1, 255);
//   const { data } = ctx.getImageData(0, 0, 1, 255);
//   return chunk(data, 4);
// };

function getGradientColorScale(colors) {
  const domain = colors.map(color => color.stop);
  const range = colors.map(color => color.color);
  return scaleLinear().domain(domain).range(range);
}

export default getGradientColorScale;
