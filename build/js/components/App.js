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
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsImZlbmVzdHJhIiwiZGlzcGF0Y2giLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcHBQcm9wVHlwZXMiLCJ3aW5kb3dzIiwiaWNvbnMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLEc7Ozs7O0FBRUY7Ozs7QUFLQTs7O0FBZ0JBLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw2RUFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSx3QkFBWSw0QkFBZ0I7QUFBQ0MsTUFBQUEsUUFBUSxFQUFSQTtBQUFELEtBQWhCLENBQVosQ0FBYjs7QUFDQSxVQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0Isc0JBQVEsTUFBS0gsS0FBTCxDQUFXSSxJQUFuQixDQUFwQjs7QUFIZTtBQUlsQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ0wsYUFDSSw2QkFBQyxvQkFBRDtBQUFVLFFBQUEsS0FBSyxFQUFFLEtBQUtIO0FBQXRCLFNBQ0ksNkJBQUMsZ0JBQUQsT0FESixDQURKO0FBS0g7Ozs7RUF0Q2FJLGVBQU1DLFM7O2dCQUFsQlAsRyxlQUtpQlEsdUI7O2dCQUxqQlIsRyxrQkFVb0I7QUFDbEJLLEVBQUFBLElBQUksRUFBRTtBQUNGSSxJQUFBQSxPQUFPLEVBQUUsRUFEUDtBQUVGQyxJQUFBQSxLQUFLLEVBQUUsRUFGTDtBQUdGQyxJQUFBQSxPQUFPLEVBQUU7QUFIUDtBQU9WOzs7Ozs7QUFSc0IsQzs7ZUErQlhYLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgRmVuZXN0cmEvQ29tcG9uZW50cy9BcHBcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBmZW5lc3RyYSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgRGVza3RvcCBmcm9tICcuL0Rlc2t0b3AnO1xuXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBhcHBQcm9wVHlwZXMgfSBmcm9tICcuLi9wcm9wLXR5cGVzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGRhIEFwbGljYcOnw6NvIEZlbmVzdHJhLlxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgICAgXG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZGEgY2xhc3NlLlxuICAgICAqL1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSBhcHBQcm9wVHlwZXM7XG5cbiAgICAvKipcbiAgICAgKiBWYWxvcmVzIFBhcmRyw6NvIGRhcyBwcm9wcmllZGFkZXMuXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2luZG93czogW10sXG4gICAgICAgICAgICBpY29uczogW10sXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTcOpdG9kbyBjb25zdHJ1dG9yIGRhIGNsYXNzZS4gQW8gc2VyIGluc3RhbmNpYWRhLCBhIGFwbGljYcOnw6NvIGdlcmEgdW0gbm92byBTdG9yZVxuICAgICAqIHBhcmEgc2VyIHV0aWxpemFkbyBwZWxvcyBjb21wb25lbnRlcy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHJpZWRhZGVzIGEgc2VyZW0gcGFzc2FkYXMgYW8gY29tcG9uZW50ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyh7ZmVuZXN0cmF9KSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2V0RGF0YSh0aGlzLnByb3BzLmRhdGEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJpemEgbyBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4gICAgICAgICAgICAgICAgPERlc2t0b3AgLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19