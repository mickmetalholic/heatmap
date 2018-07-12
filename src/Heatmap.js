import { defaultConfig } from './defaultConfig';
import { getGradientColorData } from './colorPalette';

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

    // 3. colorize acording to alpha value
  }
}