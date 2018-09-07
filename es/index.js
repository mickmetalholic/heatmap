function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import defaultConfig from './defaultConfig';
import getGradientColorScale from './colorPalette';
import getCircleImg from './drawCircles';
export var Heatmap =
/*#__PURE__*/
function () {
  function Heatmap(config) {
    _classCallCheck(this, Heatmap);

    this.config = Object.assign({}, config, defaultConfig);
    this.ctx = config.canvas.getContext('2d');
  }

  _createClass(Heatmap, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
  }, {
    key: "render",
    value: function render() {
      // draw transparent circles
      var ctx = this.ctx,
          data = this.data;
      getCircleImg(ctx, data); // generate gradient color palette

      this.gradientColorScale = getGradientColorScale(this.config.color); // colorize according to alpha value

      this.colorize();
    }
  }, {
    key: "colorize",
    value: function colorize() {
      var gradientColorScale = this.gradientColorScale,
          ctx = this.ctx;
      var imgData = ctx.getImageData(0, 0, 300, 300);
      var pixelData = imgData.data;
      pixelData.forEach(function (e, i, arr) {
        if (i % 4 !== 3 || e === 0) {
          return;
        }

        var color = gradientColorScale(e / 255); // FIXME: get rid of regexp

        var _color$match = color.match(/rgb\((\d+)\,\s?(\d+)\,\s?(\d+)\)/);

        var _color$match2 = _slicedToArray(_color$match, 4);

        arr[i - 3] = _color$match2[1];
        arr[i - 2] = _color$match2[2];
        arr[i - 1] = _color$match2[3];
      });
      this.ctx.putImageData(imgData, 0, 0);
    }
  }]);

  return Heatmap;
}();