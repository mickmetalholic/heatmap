import { defaultConfig } from './defaultConfig';
import { getGradientColorData } from './colorPalette';

import getCircleImg from './drawCircles';

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
    const gradientColorData = getGradientColorData(this.config.color);
    // 2. draw transparent circles

    const { data, ctx } = this;
    data.forEach(datum => {
      const circleImg = getCircleImg({r: 15});
      ctx.drawImage(circleImg, datum.x, datum.y);
    })

    // 3. colorize according to alpha value
  }
}
