"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _propTypes = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Componente da Barra de Tarefas da Aplicação Fenestra.
 * @extends {React.Component}
 */
var Taskbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Taskbar, _React$Component);

  function Taskbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Taskbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Taskbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "minimizeAll", function () {
      _this.props.windows.forEach(function (window) {
        _this.props.minimize(window.key);
      });
    });

    return _this;
  }

  _createClass(Taskbar, [{
    key: "toggle",
    value: function toggle(window) {
      this.props.minimize(window.key, false);
      this.props.activate(window.key, !window.active);
    }
    /**
     * Minimiza todas as janelas.
     * @method
     */

  }, {
    key: "render",

    /**
     * Método de renderização do componente.
     * @method
     */
    value: function render() {
      var _this2 = this;

      var buttons = this.props.windows.map(function (window) {
        return _react.default.createElement("button", {
          key: window.key,
          className: "btn btn-outline-secondary fenestra-taskbar-button " + (window.props.active ? "active" : ""),
          onMouseDown: function onMouseDown() {
            return _this2.toggle(window);
          }
        }, window.props.title);
      });
      return _react.default.createElement("nav", {
        className: "fenestra-taskbar"
      }, _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-windows"
      }, _react.default.createElement("i", {
        className: "fa fa-window-restore"
      })), _react.default.createElement("div", {
        className: "fenestra-taskbar-buttons"
      }, buttons), _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-desktop",
        onClick: function onClick() {
          return _this2.minimizeAll();
        }
      }, _react.default.createElement("i", {
        className: "fa fa-desktop"
      })));
    }
  }]);

  return Taskbar;
}(_react.default.Component);

_defineProperty(Taskbar, "propTypes", _propTypes.taskbarPropTypes);

_defineProperty(Taskbar, "defaultProps", {
  windows: [],
  activate: function activate() {
    return undefined;
  }
  /**
   * Alterna a visualização/ativação da janela correspondente ao
   * botão clicado.
   * @method
   * @param {WindowState} window
   */

});

var _default = (0, _reactRedux.connect)(_actions.boundTaskbarProps, _actions.boundTaskbarActions)(Taskbar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsImJ1dHRvbnMiLCJtYXAiLCJ0b2dnbGUiLCJ0aXRsZSIsIm1pbmltaXplQWxsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0YXNrYmFyUHJvcFR5cGVzIiwidW5kZWZpbmVkIiwiYm91bmRUYXNrYmFyUHJvcHMiLCJib3VuZFRhc2tiYXJBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUE4QlksWUFBTTtBQUNoQixZQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUFDLE1BQU0sRUFBSTtBQUNqQyxjQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0I7QUFDSCxPQUZEO0FBR0gsSzs7Ozs7OzsyQkFiTUYsTSxFQUFRO0FBQ1gsV0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CRCxNQUFNLENBQUNFLEdBQTNCLEVBQWdDLEtBQWhDO0FBQ0EsV0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CSCxNQUFNLENBQUNFLEdBQTNCLEVBQWdDLENBQUNGLE1BQU0sQ0FBQ0ksTUFBeEM7QUFDSDtBQUVEOzs7Ozs7OztBQVVBOzs7OzZCQUlTO0FBQUE7O0FBQ0wsVUFBTUMsT0FBTyxHQUFHLEtBQUtSLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlEsR0FBbkIsQ0FBdUIsVUFBQU4sTUFBTSxFQUFJO0FBQzdDLGVBQ0k7QUFBUSxVQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDRSxHQUFwQjtBQUF5QixVQUFBLFNBQVMsRUFBRSx3REFBd0RGLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhTyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEVBQXpGLENBQXBDO0FBQWtJLFVBQUEsV0FBVyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDRyxNQUFMLENBQVlQLE1BQVosQ0FBTjtBQUFBO0FBQS9JLFdBQ0tBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhVyxLQURsQixDQURKO0FBS0gsT0FOZSxDQUFoQjtBQU9BLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsU0FBUyxFQUFDO0FBQWhDLFNBQ0k7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLFFBREosQ0FESixFQUlJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNLSCxPQURMLENBSkosRUFPSTtBQUFRLFFBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsUUFBQSxTQUFTLEVBQUMsbUZBQWhDO0FBQW9ILFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDSSxXQUFMLEVBQU47QUFBQTtBQUE3SCxTQUNJO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixRQURKLENBUEosQ0FESjtBQWFIOzs7O0VBN0RpQkMsZUFBTUMsUzs7Z0JBQXRCZixPLGVBS2lCZ0IsMkI7O2dCQUxqQmhCLE8sa0JBVW9CO0FBQ2xCRSxFQUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkssRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTVUsU0FBTjtBQUFBO0FBR2Q7Ozs7Ozs7QUFMc0IsQzs7ZUFzRFgseUJBQVFDLDBCQUFSLEVBQTJCQyw0QkFBM0IsRUFBZ0RuQixPQUFoRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvVGFza2JhclxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYm91bmRUYXNrYmFyQWN0aW9ucywgYm91bmRUYXNrYmFyUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHRhc2tiYXJQcm9wVHlwZXMgfSBmcm9tICcuLi9wcm9wLXR5cGVzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGRhIEJhcnJhIGRlIFRhcmVmYXMgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBUYXNrYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFByb3BUeXBlcyBkbyBDb21wb25lbnRlXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHRhc2tiYXJQcm9wVHlwZXM7ICAgIFxuXG4gICAgLyoqXG4gICAgICogUHJvcHJpZWRhZGUgcGFkcsOjbyBkbyBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYSBhIHZpc3VhbGl6YcOnw6NvL2F0aXZhw6fDo28gZGEgamFuZWxhIGNvcnJlc3BvbmRlbnRlIGFvXG4gICAgICogYm90w6NvIGNsaWNhZG8uXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7V2luZG93U3RhdGV9IHdpbmRvd1xuICAgICAqL1xuICAgIHRvZ2dsZSh3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aXZhdGUod2luZG93LmtleSwgIXdpbmRvdy5hY3RpdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltaXphIHRvZGFzIGFzIGphbmVsYXMuXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIG1pbmltaXplQWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLndpbmRvd3MuZm9yRWFjaCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTcOpdG9kbyBkZSByZW5kZXJpemHDp8OjbyBkbyBjb21wb25lbnRlLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXt3aW5kb3cua2V5fSBjbGFzc05hbWU9e1wiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBcIiArICh3aW5kb3cucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbk1vdXNlRG93bj17KCkgPT4gdGhpcy50b2dnbGUod2luZG93KX0+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3cucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2JhclwiID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uIGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uLXdpbmRvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LXJlc3RvcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbi1kZXNrdG9wXCIgb25DbGljaz17KCkgPT4gdGhpcy5taW5pbWl6ZUFsbCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGVza3RvcFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChib3VuZFRhc2tiYXJQcm9wcywgYm91bmRUYXNrYmFyQWN0aW9ucykoVGFza2Jhcik7Il19