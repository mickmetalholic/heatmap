import defaultConfig from './defaultConfig';
import getGradientColorScale from './colorPalette';
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
    // draw transparent circles
    const { ctx, data } = this;
    getCircleImg(ctx, data);
    // generate gradient color palette
    this.gradientColorScale = getGradientColorScale(this.config.color);
    // colorize according to alpha value
    this.colorize();
  }

  colorize() {
    const { gradientColorScale, ctx } = this;
    const imgData = ctx.getImageData(0, 0, 300, 300);
    const pixelData = imgData.data;
    pixelData.forEach((e, i, arr) => {
      if (i % 4 !== 3 || e === 0) { return; }
      const color = gradientColorScale(e / 255);
      // FIXME: get rid of regexp
      [, arr[i - 3], arr[i - 2], arr[i - 1]] = color.match(/rgb\((\d+)\,\s?(\d+)\,\s?(\d+)\)/);
      // TODO: opacity
    });
    this.ctx.putImageData(imgData, 0, 0);
  }
}
