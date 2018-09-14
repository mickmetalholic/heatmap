import { IDefaultConfig } from './interface';

const defaultConfig: IDefaultConfig = {
  // TODO:
  // color
  color: [
    {
      color: '#F00',
      stop: 1,
    },
    {
      color: 'yellow',
      stop: 0.75,
    },
    {
      color: '#0F0',
      stop: 0.55,
    },
    {
      color: '#00F',
      stop: 0,
    },
  ],
  // data point radius
  radius: 20,
};

export default defaultConfig;
