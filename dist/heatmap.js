(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.heatmap = {})));
}(this, (function (exports) { 'use strict';

  var defaultConfig = {
    // TODO:
    radius: 20
  };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Heatmap = function Heatmap(config) {
    _classCallCheck(this, Heatmap);

    Object.assign(this, config, defaultConfig);
  };

  var version = "0.0.1";

  exports.Heatmap = Heatmap;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
