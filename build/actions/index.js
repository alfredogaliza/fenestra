"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.boundIconActions = exports.boundWindowActions = exports.boundTemplateActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.DEFAULT_PROPS = exports.TRANSFORM_RESIZE = exports.TRANSFORM_MOVE = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

var actionType = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var EmptyTemplate = function EmptyTemplate(props) {
  return null;
};

var _open = function open() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PROPS;
  var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EmptyTemplate;
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
    isMaximized: state.fenestra.windows.some(function (window) {
      return window.props.active && window.props.maximized;
    }),
    isMoving: state.fenestra.transformType !== null && state.fenestra.transformKey !== null
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

var boundIconActions = function boundIconActions(dispatch) {
  return {
    openIcon: function openIcon(icon) {
      return icon.window ? dispatch(_open(icon.window.props, icon.window.template, icon.window.templateProps)) : false;
    }
  };
};

exports.boundIconActions = boundIconActions;
var _default = {
  open: _open,
  close: _close,
  activate: _activate,
  minimize: _minimize2,
  maximize: _maximize2,
  startTransform: startTransform,
  transform: transform,
  endTransform: endTransform,
  setLoading: _setLoading,
  setFooter: _setFooter,
  setData: _setData
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRSQU5TRk9STV9NT1ZFIiwiVFJBTlNGT1JNX1JFU0laRSIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2ZSIsIm1heGltaXplZCIsInJlc2l6ZWFibGUiLCJtb3ZlYWJsZSIsIm1pbmltaXplYWJsZSIsImNsb3NlYWJsZSIsIm1pbmltaXplZCIsImZvb3RlciIsInRpdGxlIiwiRW1wdHlUZW1wbGF0ZSIsInByb3BzIiwib3BlbiIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlIiwiV0lORE9XX09QRU4iLCJjbG9zZSIsImtleSIsIldJTkRPV19DTE9TRSIsImFjdGl2YXRlIiwiV0lORE9XX0FDVElWQVRFIiwibWluaW1pemUiLCJXSU5ET1dfTUlOSU1JWkUiLCJtYXhpbWl6ZSIsIldJTkRPV19NQVhJTUlaRSIsInN0YXJ0VHJhbnNmb3JtIiwieCIsInkiLCJ0cmFuc2Zvcm1UeXBlIiwiV0lORE9XX1NUQVJUX1RSQU5TRk9STSIsInRyYW5zZm9ybSIsIldJTkRPV19UUkFOU0ZPUk0iLCJlbmRUcmFuc2Zvcm0iLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsInNldExvYWRpbmciLCJpc0xvYWRpbmciLCJTRVRfTE9BRElORyIsInNldERhdGEiLCJkYXRhIiwiaWNvbnMiLCJ3aW5kb3dzIiwiU0VUX0RBVEEiLCJzZXRGb290ZXIiLCJTRVRfRk9PVEVSIiwiYm91bmREZXNrdG9wUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwiaXNNYXhpbWl6ZWQiLCJzb21lIiwid2luZG93IiwiaXNNb3ZpbmciLCJ0cmFuc2Zvcm1LZXkiLCJib3VuZERlc2t0b3BBY3Rpb25zIiwiZGlzcGF0Y2giLCJvcGVuSWNvbiIsIm1pbiIsIm1heCIsInN0YXJ0TW92ZSIsInN0YXJ0UmVzaXplIiwibW92ZSIsImVuZE1vdmUiLCJib3VuZFRhc2tiYXJBY3Rpb25zIiwiYm91bmRUZW1wbGF0ZUFjdGlvbnMiLCJib3VuZFdpbmRvd0FjdGlvbnMiLCJib3VuZEljb25BY3Rpb25zIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLEdBQXRCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxHQUF2Qjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsQ0FBdkI7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3pCQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsR0FBRyxFQUFFLENBREY7QUFFSEMsSUFBQUEsSUFBSSxFQUFFLENBRkg7QUFHSEMsSUFBQUEsS0FBSyxFQUFFUixhQUhKO0FBSUhTLElBQUFBLE1BQU0sRUFBRVI7QUFKTCxHQURrQjtBQU96QlMsRUFBQUEsTUFBTSxFQUFFLElBUGlCO0FBUXpCQyxFQUFBQSxTQUFTLEVBQUUsS0FSYztBQVN6QkMsRUFBQUEsVUFBVSxFQUFFLElBVGE7QUFVekJDLEVBQUFBLFFBQVEsRUFBRSxJQVZlO0FBV3pCQyxFQUFBQSxZQUFZLEVBQUUsSUFYVztBQVl6QkMsRUFBQUEsU0FBUyxFQUFFLElBWmM7QUFhekJDLEVBQUFBLFNBQVMsRUFBRSxLQWJjO0FBY3pCQyxFQUFBQSxNQUFNLEVBQUUsRUFkaUI7QUFlekJDLEVBQUFBLEtBQUssRUFBRTtBQWZrQixDQUF0Qjs7O0FBa0JQLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsSUFBWDtBQUFBLENBQXRCOztBQUVPLElBQU1DLEtBQUksR0FBRyxTQUFQQSxJQUFPLEdBQXlFO0FBQUEsTUFBeEVELEtBQXdFLHVFQUFoRWhCLGFBQWdFO0FBQUEsTUFBakRrQixRQUFpRCx1RUFBdENILGFBQXNDO0FBQUEsTUFBdkJJLGFBQXVC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QyxRQUFoQyxFQUEwQ3VELElBQUksQ0FBQ2hCLE1BQUwsQ0FBWXRDLGFBQXRELENBQUwsQ0FBckIsR0FBa0csS0FBNUc7QUFBQTtBQUQrQixHQUFMO0FBQUEsQ0FBakM7OztlQUtRO0FBQ1hGLEVBQUFBLElBQUksRUFBSkEsS0FEVztBQUVYTyxFQUFBQSxLQUFLLEVBQUxBLE1BRlc7QUFHWEcsRUFBQUEsUUFBUSxFQUFSQSxTQUhXO0FBSVhFLEVBQUFBLFFBQVEsRUFBUkEsVUFKVztBQUtYRSxFQUFBQSxRQUFRLEVBQVJBLFVBTFc7QUFNWEUsRUFBQUEsY0FBYyxFQUFkQSxjQU5XO0FBT1hLLEVBQUFBLFNBQVMsRUFBVEEsU0FQVztBQVFYRSxFQUFBQSxZQUFZLEVBQVpBLFlBUlc7QUFTWEUsRUFBQUEsVUFBVSxFQUFWQSxXQVRXO0FBVVhRLEVBQUFBLFNBQVMsRUFBVEEsVUFWVztBQVdYTCxFQUFBQSxPQUFPLEVBQVBBO0FBWFcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gMzAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gMjAwO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGT1JNX01PVkUgPSAxO1xuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9SRVNJWkUgPSAyO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QUyA9IHtcbiAgICBzdHlsZToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfSEVJR0hUXG4gICAgfSxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbWF4aW1pemVkOiBmYWxzZSxcbiAgICByZXNpemVhYmxlOiB0cnVlLFxuICAgIG1vdmVhYmxlOiB0cnVlLFxuICAgIG1pbmltaXplYWJsZTogdHJ1ZSxcbiAgICBjbG9zZWFibGU6IHRydWUsXG4gICAgbWluaW1pemVkOiBmYWxzZSxcbiAgICBmb290ZXI6IFwiXCIsXG4gICAgdGl0bGU6IFwiTm92YSBKYW5lbGFcIlxufTtcblxuY29uc3QgRW1wdHlUZW1wbGF0ZSA9IChwcm9wcykgPT4gbnVsbDtcblxuZXhwb3J0IGNvbnN0IG9wZW4gPSAocHJvcHMgPSBERUZBVUxUX1BST1BTLCB0ZW1wbGF0ZSA9IEVtcHR5VGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfT1BFTixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMsXG4gICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVQcm9wc1xuICAgIH07XG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0NMT1NFLFxuICAgICAgICBrZXlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9IChrZXksIGFjdGl2ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0FDVElWQVRFLFxuICAgICAgICBrZXksIGFjdGl2ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1pbmltaXplID0gKGtleSwgbWluaW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NSU5JTUlaRSxcbiAgICAgICAga2V5LCBtaW5pbWl6ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1heGltaXplID0gKGtleSwgbWF4aW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NQVhJTUlaRSxcbiAgICAgICAga2V5LCBtYXhpbWl6ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXJ0VHJhbnNmb3JtID0gKGtleSwgeCwgeSwgdHJhbnNmb3JtVHlwZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1NUQVJUX1RSQU5TRk9STSxcbiAgICAgICAga2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19UUkFOU0ZPUk0sXG4gICAgICAgIHgsIHlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbmRUcmFuc2Zvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfRU5EX1RSQU5TRk9STSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGtleSwgaXNMb2FkaW5nKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0xPQURJTkcsXG4gICAga2V5LCBpc0xvYWRpbmdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0RGF0YSA9IChkYXRhID0ge2ljb25zOiBbXSwgd2luZG93czogW119KSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0RBVEEsXG4gICAgZGF0YVxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRGb290ZXIgPSAoa2V5LCBmb290ZXIpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfRk9PVEVSLFxuICAgIGtleSwgZm9vdGVyXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kRGVza3RvcFByb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpY29uczogc3RhdGUuZmVuZXN0cmEuaWNvbnMsXG4gICAgd2luZG93czogc3RhdGUuZmVuZXN0cmEud2luZG93cyxcbiAgICBpc01heGltaXplZDogc3RhdGUuZmVuZXN0cmEud2luZG93cy5zb21lKHdpbmRvdyA9PiB3aW5kb3cucHJvcHMuYWN0aXZlICYmIHdpbmRvdy5wcm9wcy5tYXhpbWl6ZWQpLFxuICAgIGlzTW92aW5nOiBzdGF0ZS5mZW5lc3RyYS50cmFuc2Zvcm1UeXBlICE9PSBudWxsICYmIHN0YXRlLmZlbmVzdHJhLnRyYW5zZm9ybUtleSAhPT0gbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIG9wZW5JY29uOiAoeyB3aW5kb3c6IHsgcHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzIH0gfSkgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogKGtleSwgYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogKGtleSwgbWluID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWluaW1pemUoa2V5LCBtaW4pKSxcbiAgICBtYXhpbWl6ZTogKGtleSwgbWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBzdGFydE1vdmU6IChrZXksIHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fUkVTSVpFKSksXG4gICAgbW92ZTogKHgsIHkpID0+IGRpc3BhdGNoKHRyYW5zZm9ybSh4LCB5KSksXG4gICAgZW5kTW92ZTogKCkgPT4gZGlzcGF0Y2goZW5kVHJhbnNmb3JtKCkpLFxuICAgIGNsb3NlOiAoa2V5KSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAoa2V5LCBpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAoa2V5LCBmb290ZXIgPSBcIlwiKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiBkYXRhID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kVGFza2JhckFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kVGVtcGxhdGVBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAgICAgICAgICAgKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogICAgICAgKGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSksXG4gICAgbWluaW1pemU6ICAgICAgIChtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAgICAgICAobWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBjbG9zZTogICAgICAgICAgKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogICAgIChpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAgICAgIChmb290ZXIgPSBudWxsKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiAgICAgICAgKGRhdGEpID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvdW5kV2luZG93QWN0aW9ucyA9IChrZXkpID0+IGRpc3BhdGNoID0+ICh7XG4gICAgb3BlbjogICAgICAgICAgIChwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpID0+IGRpc3BhdGNoKG9wZW4ocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSksXG4gICAgYWN0aXZhdGU6ICAgICAgIChhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAgICAgICAobWluID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWluaW1pemUoa2V5LCBtaW4pKSxcbiAgICBtYXhpbWl6ZTogICAgICAgKG1heCA9IHRydWUpID0+IGRpc3BhdGNoKG1heGltaXplKGtleSwgbWF4KSksXG4gICAgc3RhcnRNb3ZlOiAgICAgICh4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9NT1ZFKSksXG4gICAgc3RhcnRSZXNpemU6ICAgICh4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSwgICAgXG4gICAgY2xvc2U6ICAgICAgICAgICgpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6ICAgICAoaXNMb2FkaW5nID0gdHJ1ZSkgPT4gZGlzcGF0Y2goc2V0TG9hZGluZyhrZXksIGlzTG9hZGluZykpLFxuICAgIHNldEZvb3RlcjogICAgICAoZm9vdGVyID0gbnVsbCkgPT4gZGlzcGF0Y2goc2V0Rm9vdGVyKGtleSwgZm9vdGVyKSksXG4gICAgc2V0RGF0YTogICAgICAgIChkYXRhKSA9PiBkaXNwYXRjaChzZXREYXRhKGRhdGEpKVxufSk7XG5cbmV4cG9ydCBjb25zdCBib3VuZEljb25BY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuSWNvbjogKGljb24pID0+IGljb24ud2luZG93PyBkaXNwYXRjaChvcGVuKGljb24ud2luZG93LnByb3BzLCBpY29uLndpbmRvdy50ZW1wbGF0ZSwgaWNvbi53aW5kb3cudGVtcGxhdGVQcm9wcykpIDogZmFsc2Vcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcGVuLFxuICAgIGNsb3NlLFxuICAgIGFjdGl2YXRlLFxuICAgIG1pbmltaXplLFxuICAgIG1heGltaXplLFxuICAgIHN0YXJ0VHJhbnNmb3JtLFxuICAgIHRyYW5zZm9ybSxcbiAgICBlbmRUcmFuc2Zvcm0sXG4gICAgc2V0TG9hZGluZyxcbiAgICBzZXRGb290ZXIsXG4gICAgc2V0RGF0YVxufTsiXX0=