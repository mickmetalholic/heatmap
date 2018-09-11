const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const version = require('./package.json').version;

const banner = `/*
 * heatmap v${version}
 * Released under the MIT License.
 */`;

const input = './es/index.js';
const baseOutput = {
  name: 'Heatmap',
  format: 'umd',
};
const devOutput = baseOutput;
const prodOutput = Object.assign({}, baseOutput, { banner });
const plugins = [
  json({
    exclude: ['src', 'node_modules/**'],
  }),
  resolve({
    jsnext: true,
    main: true,
  }),
];

const baseConfig = {
  allowRealFiles: true,
  input,
  plugins,
};

const prodConfig = Object.assign({}, baseConfig, {
  output: prodOutput,
});
const devConfig = Object.assign({}, baseConfig, {
  output: devOutput,
});

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
