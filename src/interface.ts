export interface IGradientColor {
  stop: number;
  color: string;
}

export interface IData {
  x: number;
  y: number;
}

export interface IDefaultConfig {
  radius?: number;
  color?: IGradientColor[];
}

export interface IConfig extends IDefaultConfig {
  canvas: HTMLCanvasElement;
}
