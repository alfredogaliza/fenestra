"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("../reducers"));

var _Desktop = _interopRequireDefault(require("./Desktop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

require('load-styles')("/* fenestra */\n.fenestra-desktop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #606060; }\n\n.fenestra-desktop-windows {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  overflow: auto; }\n\n.fenestra-desktop-icons {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start; }\n\n.fenestra-desktop-icon {\n  width: 150px;\n  min-height: 80px;\n  margin: 5px 0 0 5px;\n  padding: 0px;\n  display: block;\n  background-color: #404060; }\n\n.fenestra-desktop-windows-holder {\n  position: relative;\n  top: 0;\n  left: 0;\n  background-color: transparent; }\n\n.fenestra-taskbar {\n  position: absolute;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  background-color: #F0F0F0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 1000; }\n\n.fenestra-taskbar-buttons {\n  overflow: auto;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.fenestra-taskbar-button {\n  margin: 5px;\n  padding: 5px;\n  margin-right: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: solid #808080 1px;\n  background-color: #808080;\n  color: #FFFFFF;\n  border-radius: 6px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.fenestra-taskbar-button-active {\n  background-color: #202020; }\n\n.fenestra-taskbar-button-desktop {\n  display: block;\n  margin: 5px;\n  margin-left: auto;\n  width: 40px;\n  height: 40px;\n  white-space: nowrap;\n  overflow: visible;\n  text-overflow: clip; }\n\n.fenestra-window {\n  position: absolute;\n  background-color: #FFFFFF;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 1;\n  border: solid #606060 1px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px; }\n\n.fenestra-window-active {\n  z-index: 2; }\n\n.fenestra-window-maximized {\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  border-radius: 0px; }\n\n.fenestra-window-minimized {\n  display: none; }\n\n.fenestra-window-title {\n  cursor: default;\n  width: 100%;\n  padding: 5px !important;\n  font-weight: bold;\n  background-color: #808080;\n  color: #FFFFFF;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n\n.fenestra-window-active\n.fenestra-window-title {\n  background-color: #202020; }\n\n.fenestra-window-title-buttons {\n  margin-left: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n\n.fenestra-window-body {\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  overflow: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n          align-self: stretch;\n  margin: 0px; }\n\n.fenestra-window-footer {\n  width: 100%;\n  height: 30px;\n  margin-top: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  background-color: #E0E0E0;\n  border-top: solid white 1px;\n  border-left: solid white 1px;\n  border-right: solid #404040 1px;\n  border-bottom: solid #404040 1px; }\n\n.fenestra-window-resize {\n  cursor: nwse-resize;\n  color: black !important;\n  margin-left: auto;\n  margin-right: 2px;\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  padding: 0 !important;\n  text-decoration: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  background-color: transparent; }\n\n.fenestra-desktop-background {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: -1;\n  width: 100%; }\n\n.fenestra-datatable-header {\n  cursor: default; }\n\n.fenestra-datatable-actions {\n  width: 1%;\n  text-align: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n\n.fenestra-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none; }\n\n.fenestra-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #FFFFFF;\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.25);\n  text-align: center;\n  z-index: 100000;\n  font-size: 60pt; }\n");

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.store = (0, _redux.createStore)((0, _redux.combineReducers)(_objectSpread({
      fenestra: _reducers.default
    }, _this.props.reducers)));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(_Desktop.default, {
        background: this.props.background,
        data: this.props.data
      }));
    }
  }]);

  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsImZlbmVzdHJhIiwicmVkdWNlcnMiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNQSxHOzs7OztBQUVGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw2RUFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSx3QkFDVDtBQUNJQyxNQUFBQSxRQUFRLEVBQVJBO0FBREosT0FFTyxNQUFLRixLQUFMLENBQVdHLFFBRmxCLEVBRFMsQ0FBYjtBQUZlO0FBUWxCOzs7OzZCQUVRO0FBQ0wsYUFDSSw2QkFBQyxvQkFBRDtBQUFVLFFBQUEsS0FBSyxFQUFFLEtBQUtGO0FBQXRCLFNBQ0ksNkJBQUMsZ0JBQUQ7QUFBUyxRQUFBLFVBQVUsRUFBRSxLQUFLRCxLQUFMLENBQVdJLFVBQWhDO0FBQTRDLFFBQUEsSUFBSSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0s7QUFBN0QsUUFESixDQURKO0FBS0g7Ozs7RUFsQmFDLGVBQU1DLFM7O2VBcUJUUixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGZlbmVzdHJhIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCBEZXNrdG9wIGZyb20gJy4vRGVza3RvcCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgICAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAgICAgICAgIGZlbmVzdHJhLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMucmVkdWNlcnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICA8RGVza3RvcCBiYWNrZ3JvdW5kPXt0aGlzLnByb3BzLmJhY2tncm91bmR9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=