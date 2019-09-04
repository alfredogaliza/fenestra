"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("../reducers"));

var _Desktop = _interopRequireDefault(require("./Desktop"));

var _actions = require("../actions");

var _propTypes = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      fenestra: _reducers["default"]
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
      return _react["default"].createElement(_reactRedux.Provider, {
        store: this.store
      }, _react["default"].createElement(_Desktop["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

_defineProperty(App, "propTypes", _propTypes.appPropTypes);

_defineProperty(App, "defaultProps", {
  data: {
    windows: [],
    icons: [],
    options: {}
  }
  /**
   * Método construtor da classe. Ao ser instanciada, a aplicação gera um novo Store
   * para ser utilizado pelos componentes.
   * @param {Object} props Propriedades a serem passadas ao componente
   */

});

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsImZlbmVzdHJhIiwiZGlzcGF0Y2giLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcHBQcm9wVHlwZXMiLCJ3aW5kb3dzIiwiaWNvbnMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLEc7Ozs7O0FBRUY7Ozs7QUFLQTs7O0FBZ0JBLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw2RUFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSx3QkFBWSw0QkFBZ0I7QUFBQ0MsTUFBQUEsUUFBUSxFQUFSQTtBQUFELEtBQWhCLENBQVosQ0FBYjs7QUFDQSxVQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0Isc0JBQVEsTUFBS0gsS0FBTCxDQUFXSSxJQUFuQixDQUFwQjs7QUFIZTtBQUlsQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ0wsYUFDSSxnQ0FBQyxvQkFBRDtBQUFVLFFBQUEsS0FBSyxFQUFFLEtBQUtIO0FBQXRCLFNBQ0ksZ0NBQUMsbUJBQUQsT0FESixDQURKO0FBS0g7Ozs7RUF0Q2FJLGtCQUFNQyxTOztnQkFBbEJQLEcsZUFLaUJRLHVCOztnQkFMakJSLEcsa0JBVW9CO0FBQ2xCSyxFQUFBQSxJQUFJLEVBQUU7QUFDRkksSUFBQUEsT0FBTyxFQUFFLEVBRFA7QUFFRkMsSUFBQUEsS0FBSyxFQUFFLEVBRkw7QUFHRkMsSUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFPVjs7Ozs7O0FBUnNCLEM7O2VBK0JYWCxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvQXBwXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZmVuZXN0cmEgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IERlc2t0b3AgZnJvbSAnLi9EZXNrdG9wJztcblxuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgYXBwUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBkYSBBcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7ICAgIFxuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRhIGNsYXNzZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0gYXBwUHJvcFR5cGVzO1xuXG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBQYXJkcsOjbyBkYXMgcHJvcHJpZWRhZGVzLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICAgICAgaWNvbnM6IFtdLFxuICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE3DqXRvZG8gY29uc3RydXRvciBkYSBjbGFzc2UuIEFvIHNlciBpbnN0YW5jaWFkYSwgYSBhcGxpY2HDp8OjbyBnZXJhIHVtIG5vdm8gU3RvcmVcbiAgICAgKiBwYXJhIHNlciB1dGlsaXphZG8gcGVsb3MgY29tcG9uZW50ZXMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3ByaWVkYWRlcyBhIHNlcmVtIHBhc3NhZGFzIGFvIGNvbXBvbmVudGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMoe2ZlbmVzdHJhfSkpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldERhdGEodGhpcy5wcm9wcy5kYXRhKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaXphIG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxuICAgICAgICAgICAgICAgIDxEZXNrdG9wIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==