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
      }, _react["default"].createElement("a", {
        title: this.props.options.msgs.showWindows,
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-windows",
        tabindex: "-1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsIm9wdGlvbnMiLCJhdXRvaGlkZVRhc2tiYXIiLCJzZXRUaW1lb3V0IiwiaGlkZVRhc2tiYXIiLCJhdXRvaGlkZVRpbWVvdXQiLCJidXR0b25zIiwibWFwIiwidGl0bGUiLCJ0b2dnbGUiLCJzaG93VGFza2JhciIsImhlaWdodCIsInRhc2tiYXJIZWlnaHQiLCJib3R0b20iLCJsZWF2ZSIsIm1zZ3MiLCJzaG93V2luZG93cyIsInNob3dEZXNrdG9wIiwibWluaW1pemVBbGwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRhc2tiYXJQcm9wVHlwZXMiLCJ1bmRlZmluZWQiLCJib3VuZFRhc2tiYXJQcm9wcyIsImJvdW5kVGFza2JhckFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQThCWSxZQUFNO0FBQ2hCLFlBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQUMsTUFBTSxFQUFJO0FBQ2pDLGNBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQjtBQUNILE9BRkQ7QUFHSCxLOzs7Ozs7OzJCQWJNRixNLEVBQVE7QUFDWCxXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsS0FBaEM7QUFDQSxXQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JILE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsQ0FBQ0YsTUFBTSxDQUFDSSxNQUF4QztBQUNIO0FBRUQ7Ozs7Ozs7O0FBVUE7Ozs7NEJBSU87QUFB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YXNrYmFyXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBib3VuZFRhc2tiYXJBY3Rpb25zLCBib3VuZFRhc2tiYXJQcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgdGFza2JhclByb3BUeXBlcyB9IGZyb20gJy4uL3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudGUgZGEgQmFycmEgZGUgVGFyZWZhcyBkYSBBcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFRhc2tiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRvIENvbXBvbmVudGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0gdGFza2JhclByb3BUeXBlczsgICAgXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcmllZGFkZSBwYWRyw6NvIGRvIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgd2luZG93czogW10sXG4gICAgICAgIGFjdGl2YXRlOiAoKSA9PiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcm5hIGEgdmlzdWFsaXphw6fDo28vYXRpdmHDp8OjbyBkYSBqYW5lbGEgY29ycmVzcG9uZGVudGUgYW9cbiAgICAgKiBib3TDo28gY2xpY2Fkby5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtXaW5kb3dTdGF0ZX0gd2luZG93XG4gICAgICovXG4gICAgdG9nZ2xlKHdpbmRvdykge1xuICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKHdpbmRvdy5rZXksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmF0ZSh3aW5kb3cua2V5LCAhd2luZG93LmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWluaW1pemEgdG9kYXMgYXMgamFuZWxhcy5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgbWluaW1pemVBbGwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMud2luZG93cy5mb3JFYWNoKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKHdpbmRvdy5rZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgbyBjb250YWRvciBwYXJhIGVzY29uZGVyIGEgYmFycmEgZGUgdGFyZWZhcywgY2FzbyBlc3RlamEgY29uZmlndXJhZG8uXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIGxlYXZlKCl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYXV0b2hpZGVUYXNrYmFyKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5oaWRlVGFza2JhcigpLCB0aGlzLnByb3BzLm9wdGlvbnMuYXV0b2hpZGVUaW1lb3V0KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNw6l0b2RvIGRlIHJlbmRlcml6YcOnw6NvIGRvIGNvbXBvbmVudGUuXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17d2luZG93LnByb3BzLnRpdGxlfSBrZXk9e3dpbmRvdy5rZXl9IGNsYXNzTmFtZT17XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBcIiArICh3aW5kb3cucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbk1vdXNlRG93bj17KCkgPT4gdGhpcy50b2dnbGUod2luZG93KX0+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3cucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZmVuZXN0cmEtdGFza2JhclwiICsgKHRoaXMucHJvcHMub3B0aW9ucy5zaG93VGFza2Jhcj8gXCJcIiA6IFwiIGZlbmVzdHJhLXRhc2tiYXItaGlkZGVuXCIpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLm9wdGlvbnMudGFza2JhckhlaWdodCwgYm90dG9tOiB0aGlzLnByb3BzLm9wdGlvbnMuc2hvd1Rhc2tiYXI/IDAgOiAtdGhpcy5wcm9wcy5vcHRpb25zLnRhc2tiYXJIZWlnaHR9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5sZWF2ZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXt0aGlzLnByb3BzLm9wdGlvbnMubXNncy5zaG93V2luZG93c30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZlbmVzdHJhLXRhc2tiYXItYnV0dG9uIGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uLXdpbmRvd3NcIiB0YWJpbmRleD0nLTEnPiBcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LXJlc3RvcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b25zXCIgc3R5bGU9e3tib3R0b206IHRoaXMucHJvcHMub3B0aW9ucy50YXNrYmFySGVpZ2h0fX0+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMub3B0aW9ucy5tc2dzLnNob3dEZXNrdG9wfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b24gZmVuZXN0cmEtdGFza2Jhci1idXR0b24tZGVza3RvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWluaW1pemVBbGwoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRlc2t0b3BcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoYm91bmRUYXNrYmFyUHJvcHMsIGJvdW5kVGFza2JhckFjdGlvbnMpKFRhc2tiYXIpOyJdfQ==