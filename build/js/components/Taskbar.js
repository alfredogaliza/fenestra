"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _propTypes = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
        return _react["default"].createElement("button", {
          title: window.props.title,
          key: window.key,
          className: "fenestra-taskbar-button " + (window.props.active ? "active" : ""),
          onMouseDown: function onMouseDown() {
            return _this3.toggle(window);
          }
        }, window.props.title);
      });
      return _react["default"].createElement("nav", {
        className: "fenestra-taskbar" + (this.props.options.showTaskbar ? "" : " fenestra-taskbar-hidden"),
        style: {
          height: this.props.options.taskbarHeight,
          bottom: this.props.options.showTaskbar ? 0 : -this.props.options.taskbarHeight
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.leave();
        }
      }, _react["default"].createElement("button", {
        title: this.props.options.msgs.showWindows,
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-windows"
      }, _react["default"].createElement("i", {
        className: "fa fa-window-restore"
      })), _react["default"].createElement("div", {
        className: "fenestra-taskbar-buttons",
        style: {
          bottom: this.props.options.taskbarHeight
        }
      }, buttons), _react["default"].createElement("button", {
        title: this.props.options.msgs.showDesktop,
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-desktop",
        onClick: function onClick() {
          return _this3.minimizeAll();
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-desktop"
      })));
    }
  }]);

  return Taskbar;
}(_react["default"].Component);

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

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsIm9wdGlvbnMiLCJhdXRvaGlkZVRhc2tiYXIiLCJzZXRUaW1lb3V0IiwiaGlkZVRhc2tiYXIiLCJhdXRvaGlkZVRpbWVvdXQiLCJidXR0b25zIiwibWFwIiwidGl0bGUiLCJ0b2dnbGUiLCJzaG93VGFza2JhciIsImhlaWdodCIsInRhc2tiYXJIZWlnaHQiLCJib3R0b20iLCJsZWF2ZSIsIm1zZ3MiLCJzaG93V2luZG93cyIsInNob3dEZXNrdG9wIiwibWluaW1pemVBbGwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRhc2tiYXJQcm9wVHlwZXMiLCJ1bmRlZmluZWQiLCJib3VuZFRhc2tiYXJQcm9wcyIsImJvdW5kVGFza2JhckFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQThCWSxZQUFNO0FBQ2hCLFlBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQUMsTUFBTSxFQUFJO0FBQ2pDLGNBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQjtBQUNILE9BRkQ7QUFHSCxLOzs7Ozs7OzJCQWJNRixNLEVBQVE7QUFDWCxXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsS0FBaEM7QUFDQSxXQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JILE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsQ0FBQ0YsTUFBTSxDQUFDSSxNQUF4QztBQUNIO0FBRUQ7Ozs7Ozs7O0FBVUE7Ozs7NEJBSU87QUFBQTs7QUFDSCxVQUFJLEtBQUtQLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQkMsZUFBdkIsRUFBdUM7QUFDbkNDLFFBQUFBLFVBQVUsQ0FBQztBQUFBLGlCQUFNLE1BQUksQ0FBQ1YsS0FBTCxDQUFXVyxXQUFYLEVBQU47QUFBQSxTQUFELEVBQWlDLEtBQUtYLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQkksZUFBcEQsQ0FBVjtBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs2QkFJUztBQUFBOztBQUNMLFVBQU1DLE9BQU8sR0FBRyxLQUFLYixLQUFMLENBQVdDLE9BQVgsQ0FBbUJhLEdBQW5CLENBQXVCLFVBQUFYLE1BQU0sRUFBSTtBQUM3QyxlQUNJO0FBQVEsVUFBQSxLQUFLLEVBQUVBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhZSxLQUE1QjtBQUFtQyxVQUFBLEdBQUcsRUFBRVosTUFBTSxDQUFDRSxHQUEvQztBQUFvRCxVQUFBLFNBQVMsRUFBRSw4QkFBOEJGLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhTyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEVBQS9ELENBQS9EO0FBQW1JLFVBQUEsV0FBVyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDUyxNQUFMLENBQVliLE1BQVosQ0FBTjtBQUFBO0FBQWhKLFdBQ0tBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhZSxLQURsQixDQURKO0FBS0gsT0FOZSxDQUFoQjtBQU9BLGFBQ0k7QUFDSSxRQUFBLFNBQVMsRUFBRSxzQkFBc0IsS0FBS2YsS0FBTCxDQUFXUSxPQUFYLENBQW1CUyxXQUFuQixHQUFnQyxFQUFoQyxHQUFxQywwQkFBM0QsQ0FEZjtBQUVJLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE1BQU0sRUFBRSxLQUFLbEIsS0FBTCxDQUFXUSxPQUFYLENBQW1CVyxhQUE1QjtBQUEyQ0MsVUFBQUEsTUFBTSxFQUFFLEtBQUtwQixLQUFMLENBQVdRLE9BQVgsQ0FBbUJTLFdBQW5CLEdBQWdDLENBQWhDLEdBQW9DLENBQUMsS0FBS2pCLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQlc7QUFBM0csU0FGWDtBQUdJLFFBQUEsWUFBWSxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDRSxLQUFMLEVBQU47QUFBQTtBQUhsQixTQUtJO0FBQVEsUUFBQSxLQUFLLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQmMsSUFBbkIsQ0FBd0JDLFdBQXZDO0FBQW9ELFFBQUEsSUFBSSxFQUFDLFFBQXpEO0FBQWtFLFFBQUEsU0FBUyxFQUFDO0FBQTVFLFNBQ0k7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLFFBREosQ0FMSixFQVFJO0FBQUssUUFBQSxTQUFTLEVBQUMsMEJBQWY7QUFBMEMsUUFBQSxLQUFLLEVBQUU7QUFBQ0gsVUFBQUEsTUFBTSxFQUFFLEtBQUtwQixLQUFMLENBQVdRLE9BQVgsQ0FBbUJXO0FBQTVCO0FBQWpELFNBQ0tOLE9BREwsQ0FSSixFQVdJO0FBQVEsUUFBQSxLQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXUSxPQUFYLENBQW1CYyxJQUFuQixDQUF3QkUsV0FBdkM7QUFBb0QsUUFBQSxJQUFJLEVBQUMsUUFBekQ7QUFBa0UsUUFBQSxTQUFTLEVBQUMseURBQTVFO0FBQXNJLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQyxXQUFMLEVBQU47QUFBQTtBQUEvSSxTQUNJO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixRQURKLENBWEosQ0FESjtBQWlCSDs7OztFQTNFaUJDLGtCQUFNQyxTOztnQkFBdEI1QixPLGVBS2lCNkIsMkI7O2dCQUxqQjdCLE8sa0JBVW9CO0FBQ2xCRSxFQUFBQSxPQUFPLEVBQUUsRUFEUztBQUVsQkssRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTXVCLFNBQU47QUFBQTtBQUdkOzs7Ozs7O0FBTHNCLEM7O2VBb0VYLHlCQUFRQywwQkFBUixFQUEyQkMsNEJBQTNCLEVBQWdEaEMsT0FBaEQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBGZW5lc3RyYS9Db21wb25lbnRzL1Rhc2tiYXJcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJvdW5kVGFza2JhckFjdGlvbnMsIGJvdW5kVGFza2JhclByb3BzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyB0YXNrYmFyUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBkYSBCYXJyYSBkZSBUYXJlZmFzIGRhIEFwbGljYcOnw6NvIEZlbmVzdHJhLlxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgVGFza2JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZG8gQ29tcG9uZW50ZVxuICAgICAqL1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB0YXNrYmFyUHJvcFR5cGVzOyAgICBcblxuICAgIC8qKlxuICAgICAqIFByb3ByaWVkYWRlIHBhZHLDo28gZG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB3aW5kb3dzOiBbXSxcbiAgICAgICAgYWN0aXZhdGU6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVybmEgYSB2aXN1YWxpemHDp8Ojby9hdGl2YcOnw6NvIGRhIGphbmVsYSBjb3JyZXNwb25kZW50ZSBhb1xuICAgICAqIGJvdMOjbyBjbGljYWRvLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge1dpbmRvd1N0YXRlfSB3aW5kb3dcbiAgICAgKi9cbiAgICB0b2dnbGUod2luZG93KSB7XG4gICAgICAgIHRoaXMucHJvcHMubWluaW1pemUod2luZG93LmtleSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzLmFjdGl2YXRlKHdpbmRvdy5rZXksICF3aW5kb3cuYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbWl6YSB0b2RhcyBhcyBqYW5lbGFzLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICBtaW5pbWl6ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy53aW5kb3dzLmZvckVhY2god2luZG93ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluaW1pemUod2luZG93LmtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBvIGNvbnRhZG9yIHBhcmEgZXNjb25kZXIgYSBiYXJyYSBkZSB0YXJlZmFzLCBjYXNvIGVzdGVqYSBjb25maWd1cmFkby5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgbGVhdmUoKXtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hdXRvaGlkZVRhc2tiYXIpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmhpZGVUYXNrYmFyKCksIHRoaXMucHJvcHMub3B0aW9ucy5hdXRvaGlkZVRpbWVvdXQpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE3DqXRvZG8gZGUgcmVuZGVyaXphw6fDo28gZG8gY29tcG9uZW50ZS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9wcy53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXt3aW5kb3cucHJvcHMudGl0bGV9IGtleT17d2luZG93LmtleX0gY2xhc3NOYW1lPXtcImZlbmVzdHJhLXRhc2tiYXItYnV0dG9uIFwiICsgKHdpbmRvdy5wcm9wcy5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIil9IG9uTW91c2VEb3duPXsoKSA9PiB0aGlzLnRvZ2dsZSh3aW5kb3cpfT5cbiAgICAgICAgICAgICAgICAgICAge3dpbmRvdy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmZW5lc3RyYS10YXNrYmFyXCIgKyAodGhpcy5wcm9wcy5vcHRpb25zLnNob3dUYXNrYmFyPyBcIlwiIDogXCIgZmVuZXN0cmEtdGFza2Jhci1oaWRkZW5cIil9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMub3B0aW9ucy50YXNrYmFySGVpZ2h0LCBib3R0b206IHRoaXMucHJvcHMub3B0aW9ucy5zaG93VGFza2Jhcj8gMCA6IC10aGlzLnByb3BzLm9wdGlvbnMudGFza2JhckhlaWdodH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLmxlYXZlKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5vcHRpb25zLm1zZ3Muc2hvd1dpbmRvd3N9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbi13aW5kb3dzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1yZXN0b3JlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b25zXCIgc3R5bGU9e3tib3R0b206IHRoaXMucHJvcHMub3B0aW9ucy50YXNrYmFySGVpZ2h0fX0+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMub3B0aW9ucy5tc2dzLnNob3dEZXNrdG9wfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b24gZmVuZXN0cmEtdGFza2Jhci1idXR0b24tZGVza3RvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWluaW1pemVBbGwoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRlc2t0b3BcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoYm91bmRUYXNrYmFyUHJvcHMsIGJvdW5kVGFza2JhckFjdGlvbnMpKFRhc2tiYXIpOyJdfQ==