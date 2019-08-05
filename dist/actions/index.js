"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundWindowActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.DEFAULT_PROPS = exports.TRANSFORM_RESIZE = exports.TRANSFORM_MOVE = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

var actionType = _interopRequireWildcard(require("./types"));

var _EmptyTemplate = _interopRequireDefault(require("../components/EmptyTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_WIDTH = 600;
exports.DEFAULT_WIDTH = DEFAULT_WIDTH;
var DEFAULT_HEIGHT = 400;
exports.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
var TRANSFORM_MOVE = 1;
exports.TRANSFORM_MOVE = TRANSFORM_MOVE;
var TRANSFORM_RESIZE = 2;
exports.TRANSFORM_RESIZE = TRANSFORM_RESIZE;
var DEFAULT_PROPS = {
  style: {
    zIndex: 2,
    display: 'block',
    position: 'relative',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    top: global.window ? (global.window.innerHeight - DEFAULT_HEIGHT - 50) / 2 : 0,
    left: global.window ? (global.window.innerHeight - DEFAULT_WIDTH) / 2 : 0
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
  var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _EmptyTemplate["default"];
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
      return dispatch(_activate(key));
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
    }
  };
};

exports.boundTaskbarActions = boundTaskbarActions;

var boundWindowActions = function boundWindowActions(key) {
  return function (dispatch) {
    return {
      open: function open(props, template, templateProps) {
        return dispatch(_open(props, template, templateProps));
      },
      activate: function activate() {
        return dispatch(_activate(key));
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
        var footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return dispatch(_setFooter(key, footer));
      },
      setData: function setData(data) {
        return dispatch(_setData(data));
      }
    };
  };
};

exports.boundWindowActions = boundWindowActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRSQU5TRk9STV9NT1ZFIiwiVFJBTlNGT1JNX1JFU0laRSIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInpJbmRleCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwiZ2xvYmFsIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJsZWZ0IiwiYWN0aXZlIiwibWF4aW1pemVkIiwicmVzaXplYWJsZSIsIm1vdmVhYmxlIiwibWluaW1pemVhYmxlIiwiY2xvc2VhYmxlIiwibWluaW1pemVkIiwiZm9vdGVyIiwidGl0bGUiLCJvcGVuIiwicHJvcHMiLCJ0ZW1wbGF0ZSIsIkVtcHR5VGVtcGxhdGUiLCJ0ZW1wbGF0ZVByb3BzIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGUiLCJXSU5ET1dfT1BFTiIsImNsb3NlIiwia2V5IiwiV0lORE9XX0NMT1NFIiwiYWN0aXZhdGUiLCJXSU5ET1dfQUNUSVZBVEUiLCJtaW5pbWl6ZSIsIldJTkRPV19NSU5JTUlaRSIsIm1heGltaXplIiwiV0lORE9XX01BWElNSVpFIiwic3RhcnRUcmFuc2Zvcm0iLCJ4IiwieSIsInRyYW5zZm9ybVR5cGUiLCJXSU5ET1dfU1RBUlRfVFJBTlNGT1JNIiwidHJhbnNmb3JtIiwiV0lORE9XX1RSQU5TRk9STSIsImVuZFRyYW5zZm9ybSIsIldJTkRPV19FTkRfVFJBTlNGT1JNIiwic2V0TG9hZGluZyIsImlzTG9hZGluZyIsIlNFVF9MT0FESU5HIiwic2V0RGF0YSIsImRhdGEiLCJpY29ucyIsIndpbmRvd3MiLCJTRVRfREFUQSIsInNldEZvb3RlciIsIlNFVF9GT09URVIiLCJib3VuZERlc2t0b3BBY3Rpb25zIiwiZGlzcGF0Y2giLCJvcGVuSWNvbiIsIm1pbiIsIm1heCIsInN0YXJ0TW92ZSIsInN0YXJ0UmVzaXplIiwibW92ZSIs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LGVBQUlPLFFBQVEsQ0FBQ1IsUUFBTyxDQUFDQyxJQUFELENBQVIsQ0FBWjtBQUFBO0FBVnVDLEtBQUw7QUFBQSxHQUFqQjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBFbXB0eVRlbXBsYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wdHlUZW1wbGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gNjAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gNDAwO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGT1JNX01PVkUgPSAxO1xuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9SRVNJWkUgPSAyO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QUyA9IHtcbiAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogREVGQVVMVF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX0hFSUdIVCxcbiAgICAgICAgdG9wOiBnbG9iYWwud2luZG93PyAoZ2xvYmFsLndpbmRvdy5pbm5lckhlaWdodCAtIERFRkFVTFRfSEVJR0hUIC0gNTApIC8gMiA6IDAsXG4gICAgICAgIGxlZnQ6IGdsb2JhbC53aW5kb3c/IChnbG9iYWwud2luZG93LmlubmVySGVpZ2h0IC0gREVGQVVMVF9XSURUSCkgLyAyIDogMCxcbiAgICB9LFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBtYXhpbWl6ZWQ6IGZhbHNlLFxuICAgIHJlc2l6ZWFibGU6IHRydWUsXG4gICAgbW92ZWFibGU6IHRydWUsXG4gICAgbWluaW1pemVhYmxlOiB0cnVlLFxuICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICBtaW5pbWl6ZWQ6IGZhbHNlLFxuICAgIGZvb3RlcjogXCJcIixcbiAgICB0aXRsZTogXCJOb3ZhIEphbmVsYVwiXG59O1xuXG5leHBvcnQgY29uc3Qgb3BlbiA9IChwcm9wcyA9IERFRkFVTFRfUFJPUFMsIHRlbXBsYXRlID0gRW1wdHlUZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19PUEVOLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLi4uREVGQVVMVF9QUk9QUyxcbiAgICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZVByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQ0xPU0UsXG4gICAgICAgIGtleVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKGtleSwgYWN0aXZlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQUNUSVZBVEUsXG4gICAgICAgIGtleSwgYWN0aXZlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbWluaW1pemUgPSAoa2V5LCBtaW5pbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01JTklNSVpFLFxuICAgICAgICBrZXksIG1pbmltaXplXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbWF4aW1pemUgPSAoa2V5LCBtYXhpbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01BWElNSVpFLFxuICAgICAgICBrZXksIG1heGltaXplXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RhcnRUcmFuc2Zvcm0gPSAoa2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfU1RBUlRfVFJBTlNGT1JNLFxuICAgICAgICBrZXksIHgsIHksIHRyYW5zZm9ybVR5cGVcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm0gPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1RSQU5TRk9STSxcbiAgICAgICAgeCwgeVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVuZFRyYW5zZm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19FTkRfVFJBTlNGT1JNLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAoa2V5LCBpc0xvYWRpbmcpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfTE9BRElORyxcbiAgICBrZXksIGlzTG9hZGluZ1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXREYXRhID0gKGRhdGEgPSB7aWNvbnM6IFtdLCB3aW5kb3dzOiBbXX0pID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfREFUQSxcbiAgICBkYXRhXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEZvb3RlciA9IChrZXksIGZvb3RlcikgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9GT09URVIsXG4gICAga2V5LCBmb290ZXJcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmREZXNrdG9wQWN0aW9ucyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb3BlbjogKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBvcGVuSWNvbjogKHsgd2luZG93OiB7IHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyB9IH0pID0+IGRpc3BhdGNoKG9wZW4ocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSksXG4gICAgYWN0aXZhdGU6IChrZXkpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSkpLFxuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAoa2V5LCBtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fTU9WRSkpLFxuICAgIHN0YXJ0UmVzaXplOiAoa2V5LCB4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBtb3ZlOiAoeCwgeSkgPT4gZGlzcGF0Y2godHJhbnNmb3JtKHgsIHkpKSxcbiAgICBlbmRNb3ZlOiAoKSA9PiBkaXNwYXRjaChlbmRUcmFuc2Zvcm0oKSksXG4gICAgY2xvc2U6IChrZXkpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChrZXksIGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChrZXksIGZvb3RlciA9IFwiXCIpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IGRhdGEgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRUYXNrYmFyQWN0aW9ucyA9IGRpc3BhdGNoID0+ICh7XG4gICAgbWluaW1pemU6IChrZXksIG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSlcbn0pO1xuXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXkpKSxcbiAgICBtaW5pbWl6ZTogKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6IChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX1JFU0laRSkpLCAgICBcbiAgICBjbG9zZTogKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogKGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChmb290ZXIgPSBcIlwiKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiBkYXRhID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTsiXX0=