import { Heatmap } from '../../src/index';

test('new heatmap instance', () => {
  const config = {
    canvas: document.createElement('canvas'),
  };
  const hm = new Heatmap(config);
  expect(hm).toBeDefined();
});
