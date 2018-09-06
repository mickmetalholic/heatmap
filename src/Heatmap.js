import { defaultConfig } from './defaultConfig';
import getGradientColorScale from './colorPalette';

import getCircleImg from './drawCircles';

import { chunk, flatten } from './util';

export class Heatmap {
  constructor(config) {
    this.config = Object.assign({}, config, defaultConfig);
    this.ctx = config.canvas.getContext('2d');
  }

  setData(data) {
    this.data = data;
  }

  render() {
    // 1. generate gradient color palette
    this.gradientColorScale = getGradientColorScale(this.config.color);
    // 2. draw transparent circles
    const { data } = this;
    this.circleImg = getCircleImg(data);
    // 3. colorize according to alpha value
    this.colorize();
  }

  colorize() {
    const { gradientColorScale, circleImg } = this;
    const imgData = circleImg.getContext('2d').getImageData(0, 0, 300, 300);
    const pixelData = imgData.data;
    pixelData.forEach((e, i, arr) => {
      if (i % 4 !== 3 || e === 0) { return; }
      const color = gradientColorScale(e / 255);
      [, arr[i - 3], arr[i - 2], arr[i - 1]] = color.match(/rgb\((\d+)\,\s?(\d+)\,\s?(\d+)\)/);
      // arr[i] = 255;
    });
    this.ctx.putImageData(imgData, 0, 0);
  }
}
