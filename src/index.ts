import defaultConfig from './defaultConfig';
import getGradientColorScale from './colorPalette';
import getCircleImg from './drawCircles';
import { Config, Data } from './interface';

export class Heatmap {
  config: Config;
  ctx: CanvasRenderingContext2D;
  data: Data[];
  gradientColorScale: (number) => string;

  constructor(config: Config) {
    this.config = (<any>Object).assign({}, config, defaultConfig);
    this.ctx = config.canvas.getContext('2d');
  }

  setData(data: Data[]) {
    this.data = data;
  }

  render() {
    // draw transparent circles
    const { ctx, data }: { ctx: CanvasRenderingContext2D; data: Data[] } = this;
    getCircleImg(ctx, data);
    // generate gradient color palette
    this.gradientColorScale = getGradientColorScale(this.config.color);
    // colorize according to alpha value
    this.colorize();
  }

  colorize() {
    const {
      gradientColorScale,
      ctx,
    }: {
      gradientColorScale: (number) => string;
      ctx: CanvasRenderingContext2D;
    } = this;
    const imgData: ImageData = ctx.getImageData(0, 0, 300, 300);
    const pixelData: Uint8ClampedArray = imgData.data;
    pixelData.forEach((e: number, i: number, arr: Uint8ClampedArray) => {
      if (i % 4 !== 3 || e === 0) {
        return;
      }
      const color: string = gradientColorScale(e / 255);
      // FIXME: get rid of regexp
      [, arr[i - 3], arr[i - 2], arr[i - 1]] = color
        .match(/rgb\((\d+)\,\s?(\d+)\,\s?(\d+)\)/)
        .map(Number);
      // TODO: opacity
    });
    this.ctx.putImageData(imgData, 0, 0);
  }
}
