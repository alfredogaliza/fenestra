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

var _actions = require("../actions");

var _propTypes = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('load-styles')("/* fenestra */\n.fenestra-desktop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #606060; }\n\n.fenestra-desktop-windows {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  overflow: auto; }\n\n.fenestra-desktop-maximized\n.fenestra-desktop-windows {\n  overflow: hidden; }\n\n.fenestra-desktop-moving\n.fenestra-desktop-windows {\n  overflow: hidden; }\n\n.fenestra-desktop-icons {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start; }\n\n.fenestra-desktop-icon {\n  width: 150px;\n  min-height: 80px;\n  margin: 5px 0 0 5px;\n  padding: 0px;\n  display: block;\n  background-color: #404040 !important; }\n\n.fenestra-desktop-windows-holder {\n  position: relative;\n  top: 0;\n  left: 0;\n  background-color: transparent; }\n\n.fenestra-taskbar {\n  position: absolute;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  background-color: #F0F0F0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 1000; }\n\n.fenestra-taskbar-buttons {\n  overflow: auto;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.fenestra-taskbar-button {\n  margin: 5px;\n  padding: 5px;\n  margin-right: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: solid #808080 1px;\n  background-color: #808080;\n  color: #FFFFFF;\n  border-radius: 6px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.fenestra-taskbar-button-active {\n  background-color: #202020; }\n\n.fenestra-taskbar-button-desktop {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  margin: 5px;\n  margin-left: auto !important;\n  width: 40px;\n  height: 40px;\n  white-space: nowrap;\n  overflow: visible;\n  text-overflow: clip; }\n\n.fenestra-window {\n  position: absolute;\n  background-color: #FFFFFF;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 1;\n  border: solid #606060 1px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px; }\n\n.fenestra-window-active {\n  z-index: 2; }\n\n.fenestra-window-maximized {\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  border-radius: 0px;\n  border: none; }\n\n.fenestra-window-minimized {\n  display: none; }\n\n.fenestra-window-title {\n  cursor: default;\n  width: 100%;\n  padding: 5px !important;\n  font-weight: bold;\n  background-color: #808080;\n  color: #FFFFFF;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n\n.fenestra-window-active\n.fenestra-window-title {\n  background-color: #202020; }\n\n.fenestra-window-title-buttons {\n  margin-left: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n\n.fenestra-window-body {\n  width: 100%;\n  padding: 0;\n  position: relative;\n  overflow: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch;\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n          align-self: stretch;\n  margin: 0px; }\n\n.fenestra-window-footer {\n  width: 100%;\n  height: 30px;\n  margin-top: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  background-color: #E0E0E0;\n  border-top: solid white 1px;\n  border-left: solid white 1px;\n  border-right: solid #404040 1px;\n  border-bottom: solid #404040 1px; }\n\n.fenestra-window-maximized\n.fenestra-window-footer {\n  border: none; }\n\n.fenestra-window-resize {\n  cursor: nwse-resize;\n  color: black !important;\n  margin-left: auto;\n  margin-right: 2px;\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  padding: 0 !important;\n  text-decoration: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  background-color: transparent; }\n\n.fenestra-window-maximized\n.fenestra-window-resize {\n  display: none; }\n\n.fenestra-desktop-background {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: -1;\n  width: 100%; }\n\n.fenestra-datatable-header {\n  cursor: default; }\n\n.fenestra-datatable-actions {\n  width: 1%;\n  text-align: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n\n.fenestra-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none; }\n\n.fenestra-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #FFFFFF;\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.25);\n  text-align: center;\n  z-index: 100000;\n  font-size: 60pt; }\n\n.fenestra-taskbar-button-windows {\n  display: none !important; }\n\n@media (max-width: 576px) {\n  body {\n    overflow-y: hidden; }\n  .fenestra-taskbar-button-windows {\n    display: block !important; }\n  .fenestra-taskbar-button-windows:focus + .fenestra-taskbar-buttons {\n    display: block !important;\n    bottom: 50px;\n    left: 0px;\n    right: 0px;\n    max-height: 200px; }\n  .fenestra-taskbar-buttons {\n    display: none;\n    position: absolute;\n    background-color: #F0F0F0;\n    border: solid white 1px;\n    padding: 5px;\n    overflow-y: auto;\n    height: auto; }\n  .fenestra-taskbar-buttons .fenestra-taskbar-button {\n    display: block;\n    width: 100%;\n    margin: 5px 0px; } }\n");
/**
 * Componente da Aplicação Fenestra.
 * @extends {React.Component}
 */


var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  /**
   * PropTypes da classe.
   */

  /**
   * Valores Pardrão das propriedades.
   */
  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.store = (0, _redux.createStore)((0, _redux.combineReducers)({
      fenestra: _reducers.default
    }));

    _this.store.dispatch((0, _actions.setData)(_this.props.data));

    return _this;
  }
  /**
   * Renderiza o componente.
   */


  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(_Desktop.default, null));
    }
  }]);

  return App;
}(_react.default.Component);

_defineProperty(App, "propTypes", _propTypes.appPropTypes);

_defineProperty(App, "defaultProps", {
  data: {
    windows: [],
    icons: []
  }
  /**
   * Método construtor da classe. Ao ser instanciada, a aplicação gera um novo Store
   * para ser utilizado pelos componentes.
   * @param {Object} props Propriedades a serem passadas ao componente
   */

});

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsImZlbmVzdHJhIiwiZGlzcGF0Y2giLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcHBQcm9wVHlwZXMiLCJ3aW5kb3dzIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7SUFJTUEsRzs7Ozs7QUFFRjs7OztBQUtBOzs7QUFlQSxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsNkVBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsd0JBQVksNEJBQWdCO0FBQUNDLE1BQUFBLFFBQVEsRUFBUkE7QUFBRCxLQUFoQixDQUFaLENBQWI7O0FBQ0EsVUFBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CLHNCQUFRLE1BQUtILEtBQUwsQ0FBV0ksSUFBbkIsQ0FBcEI7O0FBSGU7QUFJbEI7QUFFRDs7Ozs7Ozs2QkFHUztBQUNMLGFBQ0ksNkJBQUMsb0JBQUQ7QUFBVSxRQUFBLEtBQUssRUFBRSxLQUFLSDtBQUF0QixTQUNJLDZCQUFDLGdCQUFELE9BREosQ0FESjtBQUtIOzs7O0VBckNhSSxlQUFNQyxTOztnQkFBbEJQLEcsZUFLaUJRLHVCOztnQkFMakJSLEcsa0JBVW9CO0FBQ2xCSyxFQUFBQSxJQUFJLEVBQUU7QUFDRkksSUFBQUEsT0FBTyxFQUFFLEVBRFA7QUFFRkMsSUFBQUEsS0FBSyxFQUFFO0FBRkw7QUFNVjs7Ozs7O0FBUHNCLEM7O2VBOEJYVixHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvQXBwXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZmVuZXN0cmEgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9EZXNrdG9wJztcblxuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgYXBwUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vKipcbiAqIENvbXBvbmVudGUgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAgICBcblxuICAgIC8qKlxuICAgICAqIFByb3BUeXBlcyBkYSBjbGFzc2UuXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IGFwcFByb3BUeXBlcztcblxuICAgIC8qKlxuICAgICAqIFZhbG9yZXMgUGFyZHLDo28gZGFzIHByb3ByaWVkYWRlcy5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3aW5kb3dzOiBbXSxcbiAgICAgICAgICAgIGljb25zOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTcOpdG9kbyBjb25zdHJ1dG9yIGRhIGNsYXNzZS4gQW8gc2VyIGluc3RhbmNpYWRhLCBhIGFwbGljYcOnw6NvIGdlcmEgdW0gbm92byBTdG9yZVxuICAgICAqIHBhcmEgc2VyIHV0aWxpemFkbyBwZWxvcyBjb21wb25lbnRlcy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHJpZWRhZGVzIGEgc2VyZW0gcGFzc2FkYXMgYW8gY29tcG9uZW50ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyh7ZmVuZXN0cmF9KSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2V0RGF0YSh0aGlzLnByb3BzLmRhdGEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJpemEgbyBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4gICAgICAgICAgICAgICAgPERlc2t0b3AgLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19