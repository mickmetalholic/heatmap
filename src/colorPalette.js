import { forEach, compose } from './util';

export const getGradientColorData = (colors) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 255);

  _addColors(gradient)(colors);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1, 255);
  return ctx.getImageData(0, 0, 1, 255).data;
};

const _addColor = gradient => color =>
  gradient.addColorStop(color.stop, color.color);

const _addColors = compose(forEach, _addColor);