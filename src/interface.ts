export interface GradientColor {
  stop: number;
  color: string;
}

export interface Data {
  x: number;
  y: number;
}

export interface DefaultConfig {
  radius?: number;
  color?: GradientColor[];
}

export interface Config extends DefaultConfig {
  canvas: HTMLCanvasElement;
}
