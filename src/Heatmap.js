import { defaultConfig } from './defaultConfig';

export class Heatmap {
  constructor(config) {
    Object.assign(this, config, defaultConfig);
  }
}