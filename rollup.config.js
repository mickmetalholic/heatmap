const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');

// TODO: add production configuration
// TODO: dev server
module.exports = {
  input: './es/index.js',
  plugins: [
    json({
      exclude: ['src', 'node_modules/**']
    }),
    resolve({
      jsnext: true,
      main: true
    })
  ]
};
