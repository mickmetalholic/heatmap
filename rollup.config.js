import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

// TODO: add es and cjs format
// TODO: add production configuration
// TODO: dev server
export default {
  input: './index.js',
  output: {
    name: 'heatmap',
    file: './dist/heatmap.js',
    format: 'umd'
  },
  plugins: [
    json({
      exclude: ['src', 'node_modules/**']
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel()
  ],
  treeshake: true,
  sourceMap: true
};
