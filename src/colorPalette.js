import { prop, forEach, compose } from './util';

function addColor(gradient) {
  return color => gradient.addColorStop(prop('stop', color), prop('color', color));
}

const addColors = compose(forEach, addColor);

// Array -> Array
export const getGradientColorData = colors => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 255);

  addColors(gradient)(colors);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1, 255);
  return ctx.getImageData(0, 0, 1, 255).data;
};
