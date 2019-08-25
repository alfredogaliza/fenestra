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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsImZlbmVzdHJhIiwiZGlzcGF0Y2giLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcHBQcm9wVHlwZXMiLCJ3aW5kb3dzIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsRzs7Ozs7QUFFRjs7OztBQUtBOzs7QUFlQSxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsNkVBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsd0JBQVksNEJBQWdCO0FBQUNDLE1BQUFBLFFBQVEsRUFBUkE7QUFBRCxLQUFoQixDQUFaLENBQWI7O0FBQ0EsVUFBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CLHNCQUFRLE1BQUtILEtBQUwsQ0FBV0ksSUFBbkIsQ0FBcEI7O0FBSGU7QUFJbEI7QUFFRDs7Ozs7Ozs2QkFHUztBQUNMLGFBQ0ksNkJBQUMsb0JBQUQ7QUFBVSxRQUFBLEtBQUssRUFBRSxLQUFLSDtBQUF0QixTQUNJLDZCQUFDLGdCQUFELE9BREosQ0FESjtBQUtIOzs7O0VBckNhSSxlQUFNQyxTOztnQkFBbEJQLEcsZUFLaUJRLHVCOztnQkFMakJSLEcsa0JBVW9CO0FBQ2xCSyxFQUFBQSxJQUFJLEVBQUU7QUFDRkksSUFBQUEsT0FBTyxFQUFFLEVBRFA7QUFFRkMsSUFBQUEsS0FBSyxFQUFFO0FBRkw7QUFNVjs7Ozs7O0FBUHNCLEM7O2VBOEJYVixHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvQXBwXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZmVuZXN0cmEgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9EZXNrdG9wJztcblxuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgYXBwUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBkYSBBcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7ICAgIFxuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRhIGNsYXNzZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0gYXBwUHJvcFR5cGVzO1xuXG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBQYXJkcsOjbyBkYXMgcHJvcHJpZWRhZGVzLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICAgICAgaWNvbnM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNw6l0b2RvIGNvbnN0cnV0b3IgZGEgY2xhc3NlLiBBbyBzZXIgaW5zdGFuY2lhZGEsIGEgYXBsaWNhw6fDo28gZ2VyYSB1bSBub3ZvIFN0b3JlXG4gICAgICogcGFyYSBzZXIgdXRpbGl6YWRvIHBlbG9zIGNvbXBvbmVudGVzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcmllZGFkZXMgYSBzZXJlbSBwYXNzYWRhcyBhbyBjb21wb25lbnRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzKHtmZW5lc3RyYX0pKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXREYXRhKHRoaXMucHJvcHMuZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcml6YSBvIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICA8RGVza3RvcCAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=