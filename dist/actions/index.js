"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundWindowActions = exports.boundTemplateActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.DEFAULT_PROPS = exports.TRANSFORM_RESIZE = exports.TRANSFORM_MOVE = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRSQU5TRk9STV9NT1ZFIiwiVFJBTlNGT1JNX1JFU0laRSIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2ZSIsIm1heGltaXplZCIsInJlc2l6ZWFibGUiLCJtb3ZlYWJsZSIsIm1pbmltaXplYWJsZSIsImNsb3NlYWJsZSIsIm1pbmltaXplZCIsImZvb3RlciIsInRpdGxlIiwib3BlbiIsInByb3BzIiwidGVtcGxhdGUiLCJFbXB0eVRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlIiwiV0lORE9XX09QRU4iLCJjbG9zZSIsImtleSIsIldJTkRPV19DTE9TRSIsImFjdGl2YXRlIiwiV0lORE9XX0FDVElWQVRFIiwibWluaW1pemUiLCJXSU5ET1dfTUlOSU1JWkUiLCJtYXhpbWl6ZSIsIldJTkRPV19NQVhJTUlaRSIsInN0YXJ0VHJhbnNmb3JtIiwieCIsInkiLCJ0cmFuc2Zvcm1UeXBlIiwiV0lORE9XX1NUQVJUX1RSQU5TRk9STSIsInRyYW5zZm9ybSIsIldJTkRPV19UUkFOU0ZPUk0iLCJlbmRUcmFuc2Zvcm0iLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsInNldExvYWRpbmciLCJpc0xvYWRpbmciLCJTRVRfTE9BRElORyIsInNldERhdGEiLCJkYXRhIiwiaWNvbnMiLCJ3aW5kb3dzIiwiU0VUX0RBVEEiLCJzZXRGb290ZXIiLCJTRVRfRk9PVEVSIiwiYm91bmREZXNrdG9wUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwibWF4V2lkdGgiLCJNYXRoIiwibWF4IiwibWFwIiwid2luZG93IiwibWF4SGVpZ2h0IiwiYm91bmREZXNrdG9wQWN0aW9ucyIsImRpc3BhdGNoIiwib3Blbkljb24iLCJtaW4iLCJzdGFydE1vdmUiLCJzdGFydFJlc2l6ZSIsIm1vdmUiLCJlbmRNb3ZlIiwiYm91bmRUYXNrYmFyQWN0aW9ucyIsImJvdW5kVGVtcGxhdGVBY3Rpb25zIiwiYm91bmRXaW5kb3dBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLEdBQXRCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxHQUF2Qjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsQ0FBdkI7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3pCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsR0FBRyxFQUFFLENBREY7QUFFSEMsSUFBQUEsSUFBSSxFQUFFLENBRkg7QUFHSEMsSUFBQUEsS0FBSyxFQUFFUixhQUhKO0FBSUhTLElBQUFBLE1BQU0sRUFBRVI7QUFKTCxHQURrQjtBQU96QlMsRUFBQUEsTUFBTSxFQUFFLElBUGlCO0FBUXpCQyxFQUFBQSxTQUFTLEVBQUUsS0FSYztBQVN6QkMsRUFBQUEsVUFBVSxFQUFFLElBVGE7QUFVekJDLEVBQUFBLFFBQVEsRUFBRSxJQVZlO0FBV3pCQyxFQUFBQSxZQUFZLEVBQUUsSUFYVztBQVl6QkMsRUFBQUEsU0FBUyxFQUFFLElBWmM7QUFhekJDLEVBQUFBLFNBQVMsRUFBRSxLQWJjO0FBY3pCQyxFQUFBQSxNQUFNLEVBQUUsRUFkaUI7QUFlekJDLEVBQUFBLEtBQUssRUFBRTtBQWZrQixDQUF0Qjs7O0FBa0JBLElBQU1DLEtBQUksR0FBRyxTQUFQQSxJQUFPLEdBQXlFO0FBQUEsTUFBeEVDLEtBQXdFLHVFQUFoRWhCLGFBQWdFO0FBQUEsTUFBakRpQixRQUFpRCx1RUFBdENDLHNCQUFzQztBQUFBLE1BQXZCQyxhQUF1Qix1RUFBUCxFQUFPO0FBQ3pGLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxJQUFBQSxJQUFJLEVBQUVDLFVBQVUsQ0FBQ0MsV0FETjtBQUVYUCxJQUFBQSxLQUFLLG9C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QUFDQyxJQUFEO0FBQUEsZUFBVWdCLFFBQVEsQ0FBQ2pCLFFBQU8sQ0FBQ0MsSUFBRCxDQUFSLENBQWxCO0FBQUE7QUFWb0MsS0FBTDtBQUFBLEdBQWpCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEVtcHR5VGVtcGxhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXB0eVRlbXBsYXRlJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lEVEggPSAzMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9IRUlHSFQgPSAyMDA7XG5cbmV4cG9ydCBjb25zdCBUUkFOU0ZPUk1fTU9WRSA9IDE7XG5leHBvcnQgY29uc3QgVFJBTlNGT1JNX1JFU0laRSA9IDI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1BTID0ge1xuICAgIHN0eWxlOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfV0lEVEgsXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9IRUlHSFRcbiAgICB9LFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBtYXhpbWl6ZWQ6IGZhbHNlLFxuICAgIHJlc2l6ZWFibGU6IHRydWUsXG4gICAgbW92ZWFibGU6IHRydWUsXG4gICAgbWluaW1pemVhYmxlOiB0cnVlLFxuICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICBtaW5pbWl6ZWQ6IGZhbHNlLFxuICAgIGZvb3RlcjogXCJcIixcbiAgICB0aXRsZTogXCJOb3ZhIEphbmVsYVwiXG59O1xuXG5leHBvcnQgY29uc3Qgb3BlbiA9IChwcm9wcyA9IERFRkFVTFRfUFJPUFMsIHRlbXBsYXRlID0gRW1wdHlUZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19PUEVOLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLi4uREVGQVVMVF9QUk9QUyxcbiAgICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZVByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQ0xPU0UsXG4gICAgICAgIGtleVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKGtleSwgYWN0aXZlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQUNUSVZBVEUsXG4gICAgICAgIGtleSwgYWN0aXZlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbWluaW1pemUgPSAoa2V5LCBtaW5pbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01JTklNSVpFLFxuICAgICAgICBrZXksIG1pbmltaXplXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbWF4aW1pemUgPSAoa2V5LCBtYXhpbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01BWElNSVpFLFxuICAgICAgICBrZXksIG1heGltaXplXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RhcnRUcmFuc2Zvcm0gPSAoa2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfU1RBUlRfVFJBTlNGT1JNLFxuICAgICAgICBrZXksIHgsIHksIHRyYW5zZm9ybVR5cGVcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm0gPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1RSQU5TRk9STSxcbiAgICAgICAgeCwgeVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVuZFRyYW5zZm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19FTkRfVFJBTlNGT1JNLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAoa2V5LCBpc0xvYWRpbmcpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfTE9BRElORyxcbiAgICBrZXksIGlzTG9hZGluZ1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXREYXRhID0gKGRhdGEgPSB7aWNvbnM6IFtdLCB3aW5kb3dzOiBbXX0pID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfREFUQSxcbiAgICBkYXRhXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEZvb3RlciA9IChrZXksIGZvb3RlcikgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9GT09URVIsXG4gICAga2V5LCBmb290ZXJcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmREZXNrdG9wUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGljb25zOiBzdGF0ZS5mZW5lc3RyYS5pY29ucyxcbiAgICB3aW5kb3dzOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLFxuICAgIG1heFdpZHRoOiBNYXRoLm1heCgwLCAuLi5zdGF0ZS5mZW5lc3RyYS53aW5kb3dzLm1hcCh3aW5kb3cgPT4gd2luZG93LnByb3BzLnN0eWxlLmxlZnQgKyB3aW5kb3cucHJvcHMuc3R5bGUud2lkdGgpKSxcbiAgICBtYXhIZWlnaHQ6IE1hdGgubWF4KDAsIC4uLnN0YXRlLmZlbmVzdHJhLndpbmRvd3MubWFwKHdpbmRvdyA9PiB3aW5kb3cucHJvcHMuc3R5bGUudG9wICsgd2luZG93LnByb3BzLnN0eWxlLmhlaWdodCkpLFxuICAgIGlzTG9hZGluZzogc3RhdGUuZmVuZXN0cmEuaXNMb2FkaW5nXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kRGVza3RvcEFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW46IChwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpID0+IGRpc3BhdGNoKG9wZW4ocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSksXG4gICAgb3Blbkljb246ICh7IHdpbmRvdzogeyBwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMgfSB9KSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAoa2V5LCBtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fTU9WRSkpLFxuICAgIHN0YXJ0UmVzaXplOiAoa2V5LCB4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBtb3ZlOiAoeCwgeSkgPT4gZGlzcGF0Y2godHJhbnNmb3JtKHgsIHkpKSxcbiAgICBlbmRNb3ZlOiAoKSA9PiBkaXNwYXRjaChlbmRUcmFuc2Zvcm0oKSksXG4gICAgY2xvc2U6IChrZXkpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChrZXksIGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChrZXksIGZvb3RlciA9IFwiXCIpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IGRhdGEgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRUYXNrYmFyQWN0aW9ucyA9IGRpc3BhdGNoID0+ICh7XG4gICAgbWluaW1pemU6IChrZXksIG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgYWN0aXZhdGU6IChrZXksIGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRUZW1wbGF0ZUFjdGlvbnMgPSAoa2V5KSA9PiBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW46ICAgICAgICAgICAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAgICAgICAoYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogICAgICAgKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6ICAgICAgIChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIGNsb3NlOiAgICAgICAgICAoKSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAgICAgKGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6ICAgICAgKGZvb3RlciA9IG51bGwpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6ICAgICAgICAoZGF0YSkgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAgICAgICAgICAgKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogICAgICAgKGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSksXG4gICAgbWluaW1pemU6ICAgICAgIChtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAgICAgICAobWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBzdGFydE1vdmU6ICAgICAgKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogICAgKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX1JFU0laRSkpLCAgICBcbiAgICBjbG9zZTogICAgICAgICAgKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogICAgIChpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAgICAgIChmb290ZXIgPSBudWxsKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiAgICAgICAgKGRhdGEpID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTsiXX0=