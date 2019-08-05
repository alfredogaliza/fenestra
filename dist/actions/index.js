"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundWindowActions = exports.boundTemplateActions = exports.boundTemplateProps = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.DEFAULT_PROPS = exports.TRANSFORM_RESIZE = exports.TRANSFORM_MOVE = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

var actionType = _interopRequireWildcard(require("./types"));

var _EmptyTemplate = _interopRequireDefault(require("../components/EmptyTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_WIDTH = 300;
exports.DEFAULT_WIDTH = DEFAULT_WIDTH;
var DEFAULT_HEIGHT = 200;
exports.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
var TRANSFORM_MOVE = 1;
exports.TRANSFORM_MOVE = TRANSFORM_MOVE;
var TRANSFORM_RESIZE = 2;
exports.TRANSFORM_RESIZE = TRANSFORM_RESIZE;
var DEFAULT_PROPS = {
  style: {
    top: 0,
    left: 0,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  active: true,
  maximized: false,
  resizeable: true,
  moveable: true,
  minimizeable: true,
  closeable: true,
  minimized: false,
  footer: "",
  title: "Nova Janela"
};
exports.DEFAULT_PROPS = DEFAULT_PROPS;

var _open = function open() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PROPS;
  var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _EmptyTemplate.default;
  var templateProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var action = {
    type: actionType.WINDOW_OPEN,
    props: _objectSpread({}, DEFAULT_PROPS, {}, props),
    template: template,
    templateProps: templateProps
  };
  return action;
};

exports.open = _open;

var _close = function close(key) {
  return {
    type: actionType.WINDOW_CLOSE,
    key: key
  };
};

exports.close = _close;

var _activate = function activate(key, active) {
  return {
    type: actionType.WINDOW_ACTIVATE,
    key: key,
    active: active
  };
};

exports.activate = _activate;

var _minimize2 = function minimize(key, _minimize) {
  return {
    type: actionType.WINDOW_MINIMIZE,
    key: key,
    minimize: _minimize
  };
};

exports.minimize = _minimize2;

var _maximize2 = function maximize(key, _maximize) {
  return {
    type: actionType.WINDOW_MAXIMIZE,
    key: key,
    maximize: _maximize
  };
};

exports.maximize = _maximize2;

var startTransform = function startTransform(key, x, y, transformType) {
  return {
    type: actionType.WINDOW_START_TRANSFORM,
    key: key,
    x: x,
    y: y,
    transformType: transformType
  };
};

exports.startTransform = startTransform;

var transform = function transform(x, y) {
  return {
    type: actionType.WINDOW_TRANSFORM,
    x: x,
    y: y
  };
};

exports.transform = transform;

var endTransform = function endTransform() {
  return {
    type: actionType.WINDOW_END_TRANSFORM
  };
};

exports.endTransform = endTransform;

var _setLoading = function setLoading(key, isLoading) {
  return {
    type: actionType.SET_LOADING,
    key: key,
    isLoading: isLoading
  };
};

exports.setLoading = _setLoading;

var _setData = function setData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    icons: [],
    windows: []
  };
  return {
    type: actionType.SET_DATA,
    data: data
  };
};

exports.setData = _setData;

var _setFooter = function setFooter(key, footer) {
  return {
    type: actionType.SET_FOOTER,
    key: key,
    footer: footer
  };
};

exports.setFooter = _setFooter;

var boundDesktopProps = function boundDesktopProps(state) {
  return {
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    maxWidth: Math.max.apply(Math, [0].concat(_toConsumableArray(state.fenestra.windows.map(function (window) {
      return window.props.style.left + window.props.style.width;
    })))),
    maxHeight: Math.max.apply(Math, [0].concat(_toConsumableArray(state.fenestra.windows.map(function (window) {
      return window.props.style.top + window.props.style.height;
    })))),
    isLoading: state.fenestra.isLoading
  };
};

exports.boundDesktopProps = boundDesktopProps;

var boundDesktopActions = function boundDesktopActions(dispatch) {
  return {
    open: function open(props, template, templateProps) {
      return dispatch(_open(props, template, templateProps));
    },
    openIcon: function openIcon(_ref) {
      var _ref$window = _ref.window,
          props = _ref$window.props,
          template = _ref$window.template,
          templateProps = _ref$window.templateProps;
      return dispatch(_open(props, template, templateProps));
    },
    activate: function activate(key) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_activate(key, active));
    },
    minimize: function minimize(key) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_minimize2(key, min));
    },
    maximize: function maximize(key) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_maximize2(key, max));
    },
    startMove: function startMove(key, x, y) {
      return dispatch(startTransform(key, x, y, TRANSFORM_MOVE));
    },
    startResize: function startResize(key, x, y) {
      return dispatch(startTransform(key, x, y, TRANSFORM_RESIZE));
    },
    move: function move(x, y) {
      return dispatch(transform(x, y));
    },
    endMove: function endMove() {
      return dispatch(endTransform());
    },
    close: function close(key) {
      return dispatch(_close(key));
    },
    setLoading: function setLoading(key) {
      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_setLoading(key, isLoading));
    },
    setFooter: function setFooter(key) {
      var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return dispatch(_setFooter(key, footer));
    },
    setData: function setData(data) {
      return dispatch(_setData(data));
    }
  };
};

exports.boundDesktopActions = boundDesktopActions;

var boundTaskbarActions = function boundTaskbarActions(dispatch) {
  return {
    minimize: function minimize(key) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_minimize2(key, min));
    },
    activate: function activate(key) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_activate(key, active));
    }
  };
};

exports.boundTaskbarActions = boundTaskbarActions;

var boundTemplateProps = function boundTemplateProps(key) {
  return function (state) {
    return {
      fenestra: state.fenestra,
      window: state.fenestra.windows.find(function (window) {
        return window.key === key;
      })
    };
  };
};

exports.boundTemplateProps = boundTemplateProps;

var boundTemplateActions = function boundTemplateActions(key) {
  return function (dispatch) {
    return {
      open: function open(props, template, templateProps) {
        return dispatch(_open(props, template, templateProps));
      },
      activate: function activate() {
        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_activate(key, active));
      },
      minimize: function minimize() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_minimize2(key, min));
      },
      maximize: function maximize() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_maximize2(key, max));
      },
      close: function close() {
        return dispatch(_close(key));
      },
      setLoading: function setLoading() {
        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_setLoading(key, isLoading));
      },
      setFooter: function setFooter() {
        var footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return dispatch(_setFooter(key, footer));
      },
      setData: function setData(data) {
        return dispatch(_setData(data));
      }
    };
  };
};

exports.boundTemplateActions = boundTemplateActions;

var boundWindowActions = function boundWindowActions(key) {
  return function (dispatch) {
    return {
      open: function open(props, template, templateProps) {
        return dispatch(_open(props, template, templateProps));
      },
      activate: function activate() {
        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_activate(key, active));
      },
      minimize: function minimize() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_minimize2(key, min));
      },
      maximize: function maximize() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_maximize2(key, max));
      },
      startMove: function startMove(x, y) {
        return dispatch(startTransform(key, x, y, TRANSFORM_MOVE));
      },
      startResize: function startResize(x, y) {
        return dispatch(startTransform(key, x, y, TRANSFORM_RESIZE));
      },
      close: function close() {
        return dispatch(_close(key));
      },
      setLoading: function setLoading() {
        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_setLoading(key, isLoading));
      },
      setFooter: function setFooter() {
        var footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return dispatch(_setFooter(key, footer));
      },
      setData: function setData(data) {
        return dispatch(_setData(data));
      }
    };
  };
};

exports.boundWindowActions = boundWindowActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRSQU5TRk9STV9NT1ZFIiwiVFJBTlNGT1JNX1JFU0laRSIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2ZSIsIm1heGltaXplZCIsInJlc2l6ZWFibGUiLCJtb3ZlYWJsZSIsIm1pbmltaXplYWJsZSIsImNsb3NlYWJsZSIsIm1pbmltaXplZCIsImZvb3RlciIsInRpdGxlIiwib3BlbiIsInByb3BzIiwidGVtcGxhdGUiLCJFbXB0eVRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlIiwiV0lORE9XX09QRU4iLCJjbG9zZSIsImtleSIsIldJTkRPV19DTE9TRSIsImFjdGl2YXRlIiwiV0lORE9XX0FDVElWQVRFIiwibWluaW1pemUiLCJXSU5ET1dfTUlOSU1JWkUiLCJtYXhpbWl6ZSIsIldJTkRPV19NQVhJTUlaRSIsInN0YXJ0VHJhbnNmb3JtIiwieCIsInkiLCJ0cmFuc2Zvcm1UeXBlIiwiV0lORE9XX1NUQVJUX1RSQU5TRk9STSIsInRyYW5zZm9ybSIsIldJTkRPV19UUkFOU0ZPUk0iLCJlbmRUcmFuc2Zvcm0iLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsInNldExvYWRpbmciLCJpc0xvYWRpbmciLCJTRVRfTE9BRElORyIsInNldERhdGEiLCJkYXRhIiwiaWNvbnMiLCJ3aW5kb3dzIiwiU0VUX0RBVEEiLCJzZXRGb290ZXIiLCJTRVRfRk9PVEVSIiwiYm91bmREZXNrdG9wUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwibWF4V2lkdGgiLCJNYXRoIiwibWF4IiwibWFwIiwid2luZG93IiwibWF4SGVpZ2h0IiwiYm91bmREZXNrdG9wQWN0aW9ucyIsImRpc3BhdGNoIiwib3Blbkljb24iLCJtaW4iLCJzdGFydE1vdmUiLCJzdGFydFJlc2l6ZSIsIm1vdmUiLCJlbmRNb3ZlIiwiYm91bmRUYXNrYmFyQWN0aW9ucyIsImJvdW5kVGVtcGxhdGVQcm9wcyIsImZpbmQiLCJib3VuZFRlbXBsYXRlQWN0aW9ucyIsImJvdW5kV2luZG93QWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGFBQWEsR0FBRyxHQUF0Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsR0FBdkI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLENBQXZCOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLENBQXpCOztBQUVBLElBQU1DLGFBQWEsR0FBRztBQUN6QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0hDLElBQUFBLEdBQUcsRUFBRSxDQURGO0FBRUhDLElBQUFBLElBQUksRUFBRSxDQUZIO0FBR0hDLElBQUFBLEtBQUssRUFBRVIsYUFISjtBQUlIUyxJQUFBQSxNQUFNLEVBQUVSO0FBSkwsR0FEa0I7QUFPekJTLEVBQUFBLE1BQU0sRUFBRSxJQVBpQjtBQVF6QkMsRUFBQUEsU0FBUyxFQUFFLEtBUmM7QUFTekJDLEVBQUFBLFVBQVUsRUFBRSxJQVRhO0FBVXpCQyxFQUFBQSxRQUFRLEVBQUUsSUFWZTtBQVd6QkMsRUFBQUEsWUFBWSxFQUFFLElBWFc7QUFZekJDLEVBQUFBLFNBQVMsRUFBRSxJQVpjO0FBYXpCQyxFQUFBQSxTQUFTLEVBQUUsS0FiYztBQWN6QkMsRUFBQUEsTUFBTSxFQUFFLEVBZGlCO0FBZXpCQyxFQUFBQSxLQUFLLEVBQUU7QUFma0IsQ0FBdEI7OztBQWtCQSxJQUFNQyxLQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUF5RTtBQUFBLE1BQXhFQyxLQUF3RSx1RUFBaEVoQixhQUFnRTtBQUFBLE1BQWpEaUIsUUFBaUQsdUVBQXRDQyxzQkFBc0M7QUFBQSxNQUF2QkMsYUFBdUIsdUVBQVAsRUFBTztBQUN6RixNQUFNQyxNQUFNLEdBQUc7QUFDWEMsSUFBQUEsSUFBSSxFQUFFQyxVQUFVLENB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Q3RDLE1BQUssQ0FBQ0MsR0FBRCxDQUFOLENBQWQ7QUFBQSxPQVBvQztBQVFwRGlCLE1BQUFBLFVBQVUsRUFBTTtBQUFBLFlBQUNDLFNBQUQsdUVBQWEsSUFBYjtBQUFBLGVBQXNCbUIsUUFBUSxDQUFDcEIsV0FBVSxDQUFDakIsR0FBRCxFQUFNa0IsU0FBTixDQUFYLENBQTlCO0FBQUEsT0FSb0M7QUFTcERPLE1BQUFBLFNBQVMsRUFBTztBQUFBLFlBQUNyQyxNQUFELHVFQUFVLElBQVY7QUFBQSxlQUFtQmlELFFBQVEsQ0FBQ1osVUFBUyxDQUFDekIsR0FBRCxFQUFNWixNQUFOLENBQVYsQ0FBM0I7QUFBQSxPQVRvQztBQVVwRGdDLE1BQUFBLE9BQU8sRUFBUyxpQkFBQ0MsSUFBRDtBQUFBLGVBQVVnQixRQUFRLENBQUNqQixRQUFPLENBQUNDLElBQUQsQ0FBUixDQUFsQjtBQUFBO0FBVm9DLEtBQUw7QUFBQSxHQUFqQjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBFbXB0eVRlbXBsYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wdHlUZW1wbGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gMzAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gMjAwO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGT1JNX01PVkUgPSAxO1xuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9SRVNJWkUgPSAyO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QUyA9IHtcbiAgICBzdHlsZToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfSEVJR0hUXG4gICAgfSxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbWF4aW1pemVkOiBmYWxzZSxcbiAgICByZXNpemVhYmxlOiB0cnVlLFxuICAgIG1vdmVhYmxlOiB0cnVlLFxuICAgIG1pbmltaXplYWJsZTogdHJ1ZSxcbiAgICBjbG9zZWFibGU6IHRydWUsXG4gICAgbWluaW1pemVkOiBmYWxzZSxcbiAgICBmb290ZXI6IFwiXCIsXG4gICAgdGl0bGU6IFwiTm92YSBKYW5lbGFcIlxufTtcblxuZXhwb3J0IGNvbnN0IG9wZW4gPSAocHJvcHMgPSBERUZBVUxUX1BST1BTLCB0ZW1wbGF0ZSA9IEVtcHR5VGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfT1BFTixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMsXG4gICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVQcm9wc1xuICAgIH07XG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0NMT1NFLFxuICAgICAgICBrZXlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9IChrZXksIGFjdGl2ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0FDVElWQVRFLFxuICAgICAgICBrZXksIGFjdGl2ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1pbmltaXplID0gKGtleSwgbWluaW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NSU5JTUlaRSxcbiAgICAgICAga2V5LCBtaW5pbWl6ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1heGltaXplID0gKGtleSwgbWF4aW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NQVhJTUlaRSxcbiAgICAgICAga2V5LCBtYXhpbWl6ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXJ0VHJhbnNmb3JtID0gKGtleSwgeCwgeSwgdHJhbnNmb3JtVHlwZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1NUQVJUX1RSQU5TRk9STSxcbiAgICAgICAga2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19UUkFOU0ZPUk0sXG4gICAgICAgIHgsIHlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbmRUcmFuc2Zvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfRU5EX1RSQU5TRk9STSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGtleSwgaXNMb2FkaW5nKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0xPQURJTkcsXG4gICAga2V5LCBpc0xvYWRpbmdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0RGF0YSA9IChkYXRhID0ge2ljb25zOiBbXSwgd2luZG93czogW119KSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0RBVEEsXG4gICAgZGF0YVxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRGb290ZXIgPSAoa2V5LCBmb290ZXIpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfRk9PVEVSLFxuICAgIGtleSwgZm9vdGVyXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kRGVza3RvcFByb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpY29uczogc3RhdGUuZmVuZXN0cmEuaWNvbnMsXG4gICAgd2luZG93czogc3RhdGUuZmVuZXN0cmEud2luZG93cyxcbiAgICBtYXhXaWR0aDogTWF0aC5tYXgoMCwgLi4uc3RhdGUuZmVuZXN0cmEud2luZG93cy5tYXAod2luZG93ID0+IHdpbmRvdy5wcm9wcy5zdHlsZS5sZWZ0ICsgd2luZG93LnByb3BzLnN0eWxlLndpZHRoKSksXG4gICAgbWF4SGVpZ2h0OiBNYXRoLm1heCgwLCAuLi5zdGF0ZS5mZW5lc3RyYS53aW5kb3dzLm1hcCh3aW5kb3cgPT4gd2luZG93LnByb3BzLnN0eWxlLnRvcCArIHdpbmRvdy5wcm9wcy5zdHlsZS5oZWlnaHQpKSxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmZlbmVzdHJhLmlzTG9hZGluZ1xufSk7XG5cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIG9wZW5JY29uOiAoeyB3aW5kb3c6IHsgcHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzIH0gfSkgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogKGtleSwgYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogKGtleSwgbWluID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWluaW1pemUoa2V5LCBtaW4pKSxcbiAgICBtYXhpbWl6ZTogKGtleSwgbWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBzdGFydE1vdmU6IChrZXksIHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fUkVTSVpFKSksXG4gICAgbW92ZTogKHgsIHkpID0+IGRpc3BhdGNoKHRyYW5zZm9ybSh4LCB5KSksXG4gICAgZW5kTW92ZTogKCkgPT4gZGlzcGF0Y2goZW5kVHJhbnNmb3JtKCkpLFxuICAgIGNsb3NlOiAoa2V5KSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAoa2V5LCBpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAoa2V5LCBmb290ZXIgPSBcIlwiKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiBkYXRhID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kVGFza2JhckFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kVGVtcGxhdGVQcm9wcyA9IChrZXkpID0+IChzdGF0ZSkgPT4gKHtcbiAgICBmZW5lc3RyYTogc3RhdGUuZmVuZXN0cmEsXG4gICAgd2luZG93OiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGtleSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRUZW1wbGF0ZUFjdGlvbnMgPSAoa2V5KSA9PiBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW46ICAgICAgICAgICAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAgICAgICAoYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogICAgICAgKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6ICAgICAgIChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIGNsb3NlOiAgICAgICAgICAoKSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAgICAgKGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6ICAgICAgKGZvb3RlciA9IG51bGwpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6ICAgICAgICAoZGF0YSkgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAgICAgICAgICAgKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogICAgICAgKGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSksXG4gICAgbWluaW1pemU6ICAgICAgIChtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAgICAgICAobWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBzdGFydE1vdmU6ICAgICAgKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogICAgKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX1JFU0laRSkpLCAgICBcbiAgICBjbG9zZTogICAgICAgICAgKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogICAgIChpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAgICAgIChmb290ZXIgPSBudWxsKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiAgICAgICAgKGRhdGEpID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTsiXX0=