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
    key: "leave",

    /**
     * Define o contador para esconder a barra de tarefas, caso esteja configurado.
     * @method
     */
    value: function leave() {
      var _this2 = this;

      if (this.props.options.autohideTaskbar) {
        setTimeout(function () {
          return _this2.props.hideTaskbar();
        }, this.props.options.autohideTimeout);
      }
    }
    /**
     * Método de renderização do componente.
     * @method
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var buttons = this.props.windows.map(function (window) {
        return _react.default.createElement("button", {
          title: window.props.title,
          key: window.key,
          className: "fenestra-taskbar-button " + (window.props.active ? "active" : ""),
          onMouseDown: function onMouseDown() {
            return _this3.toggle(window);
          }
        }, window.props.title);
      });
      return _react.default.createElement("nav", {
        className: "fenestra-taskbar" + (this.props.options.showTaskbar ? "" : " fenestra-taskbar-hidden"),
        style: {
          height: this.props.options.taskbarHeight,
          bottom: this.props.options.showTaskbar ? 0 : -this.props.options.taskbarHeight
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.leave();
        }
      }, _react.default.createElement("button", {
        title: this.props.options.msgs.showWindows,
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-windows"
      }, _react.default.createElement("i", {
        className: "fa fa-window-restore"
      })), _react.default.createElement("div", {
        className: "fenestra-taskbar-buttons",
        style: {
          bottom: this.props.options.taskbarHeight
        }
      }, buttons), _react.default.createElement("button", {
        title: this.props.options.msgs.showDesktop,
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-desktop",
        onClick: function onClick() {
          return _this3.minimizeAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsIm9wdGlvbnMiLCJhdXRvaGlkZVRhc2tiYXIiLCJzZXRUaW1lb3V0IiwiaGlkZVRhc2tiYXIiLCJhdXRvaGlkZVRpbWVvdXQiLCJidXR0b25zIiwibWFwIiwidGl0bGUiLCJ0b2dnbGUiLCJzaG93VGFza2JhciIsImhlaWdodCIsInRhc2tiYXJIZWlnaHQiLCJib3R0b20iLCJsZWF2ZSIsIm1zZ3MiLCJzaG93V2luZG93cyIsInNob3dEZXNrdG9wIiwibWluaW1pemVBbGwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRhc2tiYXJQcm9wVHlwZXMiLCJ1bmRlZmluZWQiLCJib3VuZFRhc2tiYXJQcm9wcyIsImJvdW5kVGFza2JhckFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQThCWSxZQUFNO0FBQ2hCLFlBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQUMsTUFBTSxFQUFJO0FBQ2pDLGNBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQjtBQUNILE9BRkQ7QUFHSCxLOzs7Ozs7OzJCQWJNRixNLEVBQVE7QUFDWCxXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsS0FBaEM7QUFDQSxXQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JILE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsQ0FBQ0YsTUFBTSxDQUFDSSxNQUF4QztBQUNIO0FBRUQ7Ozs7Ozs7O0FBVUE7Ozs7NEJBSU87QUFBQTs7QUFDSCxVQUFJLEtBQUtQLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQkMsZUFBdkIsRUFBdUM7QUFDbkNDLFFBQUFBLFVBQVUsQ0FBQztBQUFBLGlCQUFNLE1BQUksQ0FBQ1YsS0FBTCxDQUFXVyxXQUFYLEVBQU47QUFBQSxTQUFELEVBQWlDLEtBQUtYLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQkksZUFBcEQsQ0FBVjtBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs2QkFJUztBQUFBOztBQUNMLFVBQU1DLE9BQU8sR0FBRyxLQUFLYixLQUFMLENBQVdDLE9BQVgsQ0FBbUJhLEdBQW5CLENBQXVCLFVBQUFYLE1BQU0sRUFBSTtBQUM3QyxlQUNJO0FBQVEsVUFBQSxLQUFLLEVBQUVBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhZSxLQUE1QjtBQUFtQyxVQUFBLEdBQUcsRUFBRVosTUFBTSxDQUFDRSxHQUEvQztBQUFvRCxVQUFBLFNBQVMsRUFBRSw4QkFBOEJGLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhTyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEVBQS9ELENBQS9EO0FBQW1JLFVBQUEsV0FBVyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDUyxNQUFMLENBQVliLE1BQVosQ0FBTjtBQUFBO0FBQWhKLFdBQ0tBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhZSxLQURsQixDQURKO0FBS0gsT0FOZSxDQUFoQjtBQU9BLGFBQ0k7QUFDSSxRQUFBLFNBQVMsRUFBRSxzQkFBc0IsS0FBS2YsS0FBTCxDQUFXUSxPQUFYLENBQW1CUyxXQUFuQixHQUFnQyxFQUFoQyxHQUFxQywwQkFBM0QsQ0FEZjtBQUVJLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE1BQU0sRUFBRSxLQUFLbEIsS0FBTCxDQUFXUSxPQUFYLENBQW1CVyxhQUE1QjtBQUEyQ0MsVUFBQUEsTUFBTSxFQUFFLEtBQUtwQixLQUFMLENBQVdRLE9BQVgsQ0FBbUJTLFdBQW5CLEdBQWdDLENBQWhDLEdBQW9DLENBQUMsS0FBS2pCLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQlc7QUFBM0csU0FGWDtBQUdJLFFBQUEsWUFBWSxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDRSxLQUFMLEVBQU47QUFBQTtBQUhsQixTQUtJO0FBQVEsUUFBQSxLQUFLLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQmMsSUFBbkIsQ0FBd0JDLFdBQXZDO0FBQW9ELFFBQUEsSUFBSSxFQUFDLFFBQXpEO0FBQWtFLFFBQUEsU0FBUyxFQUFDO0FBQTVFLFNBQ0k7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLFFBREosQ0FMSixFQVFJO0FBQUssUUFBQSxTQUFTLEVBQUMsMEJBQWY7QUFBMEMsUUFBQSxLQUFLLEVBQUU7QUFBQ0gsVUFBQUEsTUFBTSxFQUFFLEtBQUtwQixLQUFMLENBQVdRLE9BQVgsQ0FBbUJXO0FBQTVCO0FBQWpELFNBQ0tOLE9BREwsQ0FSSixFQVdJO0FBQVEsUUFBQSxLQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXUSxPQUFYLENBQW1CYyxJQUFuQixDQUF3QkUsV0FBdkM7QUFBb0QsUUFBQSxJQUFJLEVBQUMsUUFBekQ7QUFBa0UsUUFBQSxTQUFTLEVBQUMseURBQTVFO0FBQXNJLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQyxXQUFMLEVBQU47QUFBQTtBQUEvSSxTQUNJO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixRQURKLENBWEosQ0FESjtBQWlCSDs7OztFQTNFaUJDLGVBQU1DLFM7O2dCQUF0QjVCLE8sZUFLaUI2QiwyQjs7Z0JBTGpCN0IsTyxrQkFVb0I7QUFDbEJFLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCSyxFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNdUIsU0FBTjtBQUFBO0FBR2Q7Ozs7Ozs7QUFMc0IsQzs7ZUFvRVgseUJBQVFDLDBCQUFSLEVBQTJCQyw0QkFBM0IsRUFBZ0RoQyxPQUFoRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvVGFza2JhclxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYm91bmRUYXNrYmFyQWN0aW9ucywgYm91bmRUYXNrYmFyUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHRhc2tiYXJQcm9wVHlwZXMgfSBmcm9tICcuLi9wcm9wLXR5cGVzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGRhIEJhcnJhIGRlIFRhcmVmYXMgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBUYXNrYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFByb3BUeXBlcyBkbyBDb21wb25lbnRlXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHRhc2tiYXJQcm9wVHlwZXM7ICAgIFxuXG4gICAgLyoqXG4gICAgICogUHJvcHJpZWRhZGUgcGFkcsOjbyBkbyBjb21wb25lbnRlLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYSBhIHZpc3VhbGl6YcOnw6NvL2F0aXZhw6fDo28gZGEgamFuZWxhIGNvcnJlc3BvbmRlbnRlIGFvXG4gICAgICogYm90w6NvIGNsaWNhZG8uXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7V2luZG93U3RhdGV9IHdpbmRvd1xuICAgICAqL1xuICAgIHRvZ2dsZSh3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aXZhdGUod2luZG93LmtleSwgIXdpbmRvdy5hY3RpdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltaXphIHRvZGFzIGFzIGphbmVsYXMuXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIG1pbmltaXplQWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLndpbmRvd3MuZm9yRWFjaCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIG8gY29udGFkb3IgcGFyYSBlc2NvbmRlciBhIGJhcnJhIGRlIHRhcmVmYXMsIGNhc28gZXN0ZWphIGNvbmZpZ3VyYWRvLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICBsZWF2ZSgpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmF1dG9oaWRlVGFza2Jhcil7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlkZVRhc2tiYXIoKSwgdGhpcy5wcm9wcy5vcHRpb25zLmF1dG9oaWRlVGltZW91dCk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTcOpdG9kbyBkZSByZW5kZXJpemHDp8OjbyBkbyBjb21wb25lbnRlLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3dpbmRvdy5wcm9wcy50aXRsZX0ga2V5PXt3aW5kb3cua2V5fSBjbGFzc05hbWU9e1wiZmVuZXN0cmEtdGFza2Jhci1idXR0b24gXCIgKyAod2luZG93LnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiKX0gb25Nb3VzZURvd249eygpID0+IHRoaXMudG9nZ2xlKHdpbmRvdyl9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZlbmVzdHJhLXRhc2tiYXJcIiArICh0aGlzLnByb3BzLm9wdGlvbnMuc2hvd1Rhc2tiYXI/IFwiXCIgOiBcIiBmZW5lc3RyYS10YXNrYmFyLWhpZGRlblwiKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5vcHRpb25zLnRhc2tiYXJIZWlnaHQsIGJvdHRvbTogdGhpcy5wcm9wcy5vcHRpb25zLnNob3dUYXNrYmFyPyAwIDogLXRoaXMucHJvcHMub3B0aW9ucy50YXNrYmFySGVpZ2h0fX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMubGVhdmUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLm9wdGlvbnMubXNncy5zaG93V2luZG93c30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZlbmVzdHJhLXRhc2tiYXItYnV0dG9uIGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uLXdpbmRvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LXJlc3RvcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbnNcIiBzdHlsZT17e2JvdHRvbTogdGhpcy5wcm9wcy5vcHRpb25zLnRhc2tiYXJIZWlnaHR9fT5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5vcHRpb25zLm1zZ3Muc2hvd0Rlc2t0b3B9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbi1kZXNrdG9wXCIgb25DbGljaz17KCkgPT4gdGhpcy5taW5pbWl6ZUFsbCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGVza3RvcFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChib3VuZFRhc2tiYXJQcm9wcywgYm91bmRUYXNrYmFyQWN0aW9ucykoVGFza2Jhcik7Il19