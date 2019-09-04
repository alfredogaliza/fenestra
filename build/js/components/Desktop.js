"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("../actions");

var _Taskbar = _interopRequireDefault(require("./Taskbar"));

var _propTypes2 = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
* @typedef {Object} IconData - Dados de um ícone a ser posicionado no Desktop
* @property {string} icon - Classe css referente a um ícone do Font Awesome 4.7
* @property {string} title - Título abaixo do ícone
* @property {module:Fenestra/Components/Window~WindowData} window - Propriedades da Janela a ser aberta ao clicar no ícone
*/

/**
 * Componente do Desktop da Aplicação Fenestra.
 * @extends {React.Component}
 */
var Desktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Desktop, _React$Component);

  function Desktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Desktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Desktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "desktopRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "windowsRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "initialSwipe", null);

    _defineProperty(_assertThisInitialized(_this), "currentSwipe", null);

    return _this;
  }

  _createClass(Desktop, [{
    key: "componentDidUpdate",

    /**
     * Método chamado quando o desktop é atualizado. Caso haja uma janela maximizada,
     * o conteiner deverá ser rolado até a posição inicial para que não
     * haja visão parcial da janela.
     * @method
     */
    value: function componentDidUpdate() {
      if (this.props.isMaximized) {
        this.windowsRef.current.scrollTop = 0;
        this.windowsRef.current.scrollLeft = 0;
      }
    }
    /**
     * PropTypes do componente.
     */

  }, {
    key: "moveMouse",
    value: function moveMouse(x, y) {
      if (this.props.options.autohideTaskbar) {
        var limit = this.desktopRef.current.offsetTop + this.desktopRef.current.offsetHeight - this.props.options.taskbarHeight;

        if (y > limit) {
          this.props.showTaskbar();
        }
      }

      this.props.move(x, y);
    }
    /**
     * Transforma a janela através do evento de toque, além de salvar a posição atual do swipe
     * @param {integer} x Posição X onde ocorreu o evento
     * @param {integer} y Posição Y onde ocorreu o evento
     */

  }, {
    key: "moveTouch",
    value: function moveTouch(x, y) {
      if (this.props.options.autohideTaskbar) {
        this.currentSwipe = y;
      }

      this.props.move(x, y);
    }
    /**
     * Inicia um movimento de Toque no desktop. Após 300ms o swipe será invalidado
     * @param {integer} y Posição Y inicial do toque
     */

  }, {
    key: "startTouch",
    value: function startTouch(y) {
      var _this2 = this;

      if (this.props.options.autohideTaskbar) {
        this.initialSwipe = y;
        setTimeout(function () {
          _this2.initialSwipe = null;
        }, 300);
      }
    }
    /**
     * Finaliza o swipe
     */

  }, {
    key: "endTouch",
    value: function endTouch() {
      if (this.props.options.autohideTaskbar) {
        var limit = this.desktopRef.current.offsetTop + this.desktopRef.current.offsetHeight - this.props.options.taskbarHeight;

        if (this.initialSwipe > limit && this.currentSwipe < this.initialSwipe) {
          this.props.showTaskbar();
        } else if (this.currentSwipe > limit && this.currentSwipe > limit) {
          this.props.hideTaskbar();
        }
      }

      this.initialSwipe = null;
      this.props.endMove();
    }
    /**
     * Método de renderização do Componente
     * @method
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var icons = this.props.icons.map(function (icon, key) {
        return _react["default"].createElement("button", {
          title: icon.title,
          key: key,
          type: "button",
          className: "fenestra-desktop-icon",
          onClick: function onClick() {
            return icon.window ? _this3.props.open(icon.window.props, icon.window.template, icon.window.templateProps) : null;
          }
        }, _react["default"].createElement("i", {
          className: icon.icon
        }), _react["default"].createElement("br", null), _react["default"].createElement("span", {
          className: "small"
        }, icon.title));
      });
      var windows = this.props.windows.map(function (window) {
        var Component = window.component;
        return _react["default"].createElement(Component, _extends({
          key: window.key
        }, window.props), window.content);
      });
      var bottomStyle = {
        bottom: this.props.options.showTaskbar ? this.props.options.taskbarHeight : 0
      };
      return _react["default"].createElement("div", {
        ref: this.desktopRef,
        className: "fenestra-desktop " + this.props.options.className + (this.props.isMaximized ? "fenestra-desktop-maximized" : "") + (this.props.isMoving ? " fenestra-desktop-moving" : ""),
        onMouseMove: function onMouseMove(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this3.moveMouse(pageX, pageY);
        },
        onMouseUp: function onMouseUp() {
          return _this3.props.endMove();
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.props.endMove();
        },
        onTouchStart: function onTouchStart(event) {
          return _this3.startTouch(event.touches[0].pageY);
        },
        onTouchMove: function onTouchMove(event) {
          return _this3.moveTouch(event.touches[0].pageX, event.touches[0].pageY);
        },
        onTouchEnd: function onTouchEnd() {
          return _this3.endTouch();
        },
        onTouchCancel: function onTouchCancel() {
          return _this3.endTouch();
        }
      }, _react["default"].createElement(_Taskbar["default"], {
        minimize: function minimize(key, _minimize) {
          return _this3.props.minimize(key, _minimize);
        }
      }), _react["default"].createElement("div", {
        className: "fenestra-desktop-windows",
        style: bottomStyle,
        ref: this.windowsRef
      }, windows), _react["default"].createElement("div", {
        className: "fenestra-desktop-icons",
        style: bottomStyle
      }, icons));
    }
  }]);

  return Desktop;
}(_react["default"].Component);

_defineProperty(Desktop, "propTypes", {
  icons: _propTypes["default"].arrayOf(_propTypes2.iconPropTypes),
  windows: _propTypes["default"].arrayOf(_propTypes2.windowStatePropTypes),
  isMoving: _propTypes["default"].bool,
  isMaximized: _propTypes["default"].bool,
  open: _propTypes["default"].func,
  openIcon: _propTypes["default"].func,
  activate: _propTypes["default"].func,
  minimize: _propTypes["default"].func,
  maximize: _propTypes["default"].func,
  startMove: _propTypes["default"].func,
  startResize: _propTypes["default"].func,
  move: _propTypes["default"].func,
  endMove: _propTypes["default"].func,
  close: _propTypes["default"].func,
  setLoading: _propTypes["default"].func,
  setFooter: _propTypes["default"].func,
  setData: _propTypes["default"].func,
  options: _propTypes["default"].object
  /**
   * Propriedade padrão do componente.
   */

});

_defineProperty(Desktop, "defaultProps", {
  icons: [],
  windows: [],
  isMoving: false,
  isMaximized: false,
  open: function open() {
    return undefined;
  },
  openIcon: function openIcon() {
    return undefined;
  },
  activate: function activate() {
    return undefined;
  },
  minimize: function minimize() {
    return undefined;
  },
  maximize: function maximize() {
    return undefined;
  },
  startMove: function startMove() {
    return undefined;
  },
  startResize: function startResize() {
    return undefined;
  },
  move: function move() {
    return undefined;
  },
  endMove: function endMove() {
    return undefined;
  },
  close: function close() {
    return undefined;
  },
  setLoading: function setLoading() {
    return undefined;
  },
  setFooter: function setFooter() {
    return undefined;
  },
  setData: function setData() {
    return undefined;
  },
  options: {
    msgs: {}
  }
  /**
   * Transforma a janela, além de mostrar a barra de tarefas, caso esteja oculta.
   * @param {integer} x Posição X onde ocorreu o evento
   * @param {integer} y Posição Y onde ocorreu o evento
   */

});

var _default = (0, _reactRedux.connect)(_actions.boundDesktopProps, _actions.boundDesktopActions)(Desktop);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByb3BzIiwiaXNNYXhpbWl6ZWQiLCJ3aW5kb3dzUmVmIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ4IiwieSIsIm9wdGlvbnMiLCJhdXRvaGlkZVRhc2tiYXIiLCJsaW1pdCIsImRlc2t0b3BSZWYiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ0YXNrYmFySGVpZ2h0Iiwic2hvd1Rhc2tiYXIiLCJtb3ZlIiwiY3VycmVudFN3aXBlIiwiaW5pdGlhbFN3aXBlIiwic2V0VGltZW91dCIsImhpZGVUYXNrYmFyIiwiZW5kTW92ZSIsImljb25zIiwibWFwIiwiaWNvbiIsImtleSIsInRpdGxlIiwid2luZG93Iiwib3BlbiIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsIndpbmRvd3MiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250ZW50IiwiYm90dG9tU3R5bGUiLCJib3R0b20iLCJjbGFzc05hbWUiLCJpc01vdmluZyIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlTW91c2UiLCJldmVudCIsInN0YXJ0VG91Y2giLCJ0b3VjaGVzIiwibW92ZVRvdWNoIiwiZW5kVG91Y2giLCJtaW5pbWl6ZSIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJpY29uUHJvcFR5cGVzIiwid2luZG93U3RhdGVQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIm9wZW5JY29uIiwiYWN0aXZhdGUiLCJtYXhpbWl6ZSIsInN0YXJ0TW92ZSIsInN0YXJ0UmVzaXplIiwiY2xvc2UiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsIm9iamVjdCIsInVuZGVmaW5lZCIsIm1zZ3MiLCJib3VuZERlc2t0b3BQcm9wcyIsImJvdW5kRGVza3RvcEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7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QUU7QUFDTHlELElBQUFBLElBQUksRUFBRTtBQUREO0FBS2I7Ozs7OztBQXZCc0IsQzs7ZUE4SVgseUJBQVFDLDBCQUFSLEVBQTJCQyw0QkFBM0IsRUFBZ0R0RSxPQUFoRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvRGVza3RvcFxuICogQHNlZSBtb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZERlc2t0b3BBY3Rpb25zXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBib3VuZERlc2t0b3BBY3Rpb25zLCBib3VuZERlc2t0b3BQcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgVGFza2JhciBmcm9tIFwiLi9UYXNrYmFyXCI7XG5pbXBvcnQgeyBpY29uUHJvcFR5cGVzLCB3aW5kb3dTdGF0ZVByb3BUeXBlcyB9IGZyb20gJy4uL3Byb3AtdHlwZXMnO1xuXG5cbi8qKlxuKiBAdHlwZWRlZiB7T2JqZWN0fSBJY29uRGF0YSAtIERhZG9zIGRlIHVtIMOtY29uZSBhIHNlciBwb3NpY2lvbmFkbyBubyBEZXNrdG9wXG4qIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uIC0gQ2xhc3NlIGNzcyByZWZlcmVudGUgYSB1bSDDrWNvbmUgZG8gRm9udCBBd2Vzb21lIDQuN1xuKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSBUw610dWxvIGFiYWl4byBkbyDDrWNvbmVcbiogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93RGF0YX0gd2luZG93IC0gUHJvcHJpZWRhZGVzIGRhIEphbmVsYSBhIHNlciBhYmVydGEgYW8gY2xpY2FyIG5vIMOtY29uZVxuKi9cblxuLyoqXG4gKiBDb21wb25lbnRlIGRvIERlc2t0b3AgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBEZXNrdG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogUmVmZXLDqm5jaWEgYW8gRWxlbWVudG8gZG8gRGVza3RvcC5cbiAgICAgKi9cbiAgICBkZXNrdG9wUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcsOqbmNpYSBhbyBDb250YWluZXIgZGFzIGphbmVsYXMuXG4gICAgICovXG4gICAgd2luZG93c1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgLyoqXG4gICAgICogUG9zacOnw6NvIFkgZG8gdG9xdWUgaW5pY2lhbFxuICAgICAqL1xuICAgIGluaXRpYWxTd2lwZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBQb3Npw6fDo28gWSBkbyB0b3F1ZSBhdHVhbFxuICAgICAqL1xuICAgIGN1cnJlbnRTd2lwZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBNw6l0b2RvIGNoYW1hZG8gcXVhbmRvIG8gZGVza3RvcCDDqSBhdHVhbGl6YWRvLiBDYXNvIGhhamEgdW1hIGphbmVsYSBtYXhpbWl6YWRhLFxuICAgICAqIG8gY29udGVpbmVyIGRldmVyw6Egc2VyIHJvbGFkbyBhdMOpIGEgcG9zacOnw6NvIGluaWNpYWwgcGFyYSBxdWUgbsOjb1xuICAgICAqIGhhamEgdmlzw6NvIHBhcmNpYWwgZGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzTWF4aW1pemVkKSB7XG4gICAgICAgICAgICB0aGlzLndpbmRvd3NSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dzUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpY29uczogUHJvcFR5cGVzLmFycmF5T2YoaWNvblByb3BUeXBlcyksXG4gICAgICAgIHdpbmRvd3M6IFByb3BUeXBlcy5hcnJheU9mKHdpbmRvd1N0YXRlUHJvcFR5cGVzKSxcbiAgICAgICAgaXNNb3Zpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBpc01heGltaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvcGVuSWNvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGFjdGl2YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWluaW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBtYXhpbWl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0YXJ0TW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0YXJ0UmVzaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGVuZE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldExvYWRpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ByaWVkYWRlIHBhZHLDo28gZG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpY29uczogW10sXG4gICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICBpc01vdmluZzogZmFsc2UsXG4gICAgICAgIGlzTWF4aW1pemVkOiBmYWxzZSxcbiAgICAgICAgb3BlbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvcGVuSWNvbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtaW5pbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtYXhpbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRSZXNpemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBlbmRNb3ZlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGNsb3NlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldExvYWRpbmc6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0Rm9vdGVyOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldERhdGE6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbXNnczoge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybWEgYSBqYW5lbGEsIGFsw6ltIGRlIG1vc3RyYXIgYSBiYXJyYSBkZSB0YXJlZmFzLCBjYXNvIGVzdGVqYSBvY3VsdGEuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB4IFBvc2nDp8OjbyBYIG9uZGUgb2NvcnJldSBvIGV2ZW50b1xuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0geSBQb3Npw6fDo28gWSBvbmRlIG9jb3JyZXUgbyBldmVudG9cbiAgICAgKi9cbiAgICBtb3ZlTW91c2UoeCwgeSkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYXV0b2hpZGVUYXNrYmFyKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5kZXNrdG9wUmVmLmN1cnJlbnQub2Zmc2V0VG9wICsgdGhpcy5kZXNrdG9wUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gdGhpcy5wcm9wcy5vcHRpb25zLnRhc2tiYXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmICh5ID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dUYXNrYmFyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMubW92ZSh4LCB5KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybWEgYSBqYW5lbGEgYXRyYXbDqXMgZG8gZXZlbnRvIGRlIHRvcXVlLCBhbMOpbSBkZSBzYWx2YXIgYSBwb3Npw6fDo28gYXR1YWwgZG8gc3dpcGVcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHggUG9zacOnw6NvIFggb25kZSBvY29ycmV1IG8gZXZlbnRvXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB5IFBvc2nDp8OjbyBZIG9uZGUgb2NvcnJldSBvIGV2ZW50b1xuICAgICAqL1xuICAgIG1vdmVUb3VjaCh4LCB5KSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hdXRvaGlkZVRhc2tiYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN3aXBlID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMubW92ZSh4LCB5KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaWNpYSB1bSBtb3ZpbWVudG8gZGUgVG9xdWUgbm8gZGVza3RvcC4gQXDDs3MgMzAwbXMgbyBzd2lwZSBzZXLDoSBpbnZhbGlkYWRvXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB5IFBvc2nDp8OjbyBZIGluaWNpYWwgZG8gdG9xdWVcbiAgICAgKi9cbiAgICBzdGFydFRvdWNoKHkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hdXRvaGlkZVRhc2tiYXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN3aXBlID0geTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmluaXRpYWxTd2lwZSA9IG51bGwgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmFsaXphIG8gc3dpcGVcbiAgICAgKi9cbiAgICBlbmRUb3VjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hdXRvaGlkZVRhc2tiYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5kZXNrdG9wUmVmLmN1cnJlbnQub2Zmc2V0VG9wICsgdGhpcy5kZXNrdG9wUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gdGhpcy5wcm9wcy5vcHRpb25zLnRhc2tiYXJIZWlnaHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsU3dpcGUgPiBsaW1pdCAmJiB0aGlzLmN1cnJlbnRTd2lwZSA8IHRoaXMuaW5pdGlhbFN3aXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93VGFza2JhcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTd2lwZSA+IGxpbWl0ICYmIHRoaXMuY3VycmVudFN3aXBlID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVUYXNrYmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsU3dpcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByb3BzLmVuZE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNw6l0b2RvIGRlIHJlbmRlcml6YcOnw6NvIGRvIENvbXBvbmVudGVcbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGljb25zID0gdGhpcy5wcm9wcy5pY29ucy5tYXAoKGljb24sIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXtpY29uLnRpdGxlfSBrZXk9e2tleX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3AtaWNvblwiIG9uQ2xpY2s9eygpID0+IGljb24ud2luZG93ID8gdGhpcy5wcm9wcy5vcGVuKGljb24ud2luZG93LnByb3BzLCBpY29uLndpbmRvdy50ZW1wbGF0ZSwgaWNvbi53aW5kb3cudGVtcGxhdGVQcm9wcykgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uLmljb259PjwvaT48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic21hbGxcIj57aWNvbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSB0aGlzLnByb3BzLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBDb21wb25lbnQgPSB3aW5kb3cuY29tcG9uZW50O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGtleT17d2luZG93LmtleX0gey4uLndpbmRvdy5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3cuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L0NvbXBvbmVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJvdHRvbVN0eWxlID0ge1xuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnByb3BzLm9wdGlvbnMuc2hvd1Rhc2tiYXIgPyB0aGlzLnByb3BzLm9wdGlvbnMudGFza2JhckhlaWdodCA6IDBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuZGVza3RvcFJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcImZlbmVzdHJhLWRlc2t0b3AgXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMuY2xhc3NOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaXNNYXhpbWl6ZWQgPyBcImZlbmVzdHJhLWRlc2t0b3AtbWF4aW1pemVkXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmlzTW92aW5nID8gXCIgZmVuZXN0cmEtZGVza3RvcC1tb3ZpbmdcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBwYWdlWCwgcGFnZVkgfSkgPT4gdGhpcy5tb3ZlTW91c2UocGFnZVgsIHBhZ2VZKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtldmVudCA9PiB0aGlzLnN0YXJ0VG91Y2goZXZlbnQudG91Y2hlc1swXS5wYWdlWSl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e2V2ZW50ID0+IHRoaXMubW92ZVRvdWNoKGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9eygpID0+IHRoaXMuZW5kVG91Y2goKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoQ2FuY2VsPXsoKSA9PiB0aGlzLmVuZFRvdWNoKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhc2tiYXIgbWluaW1pemU9eyhrZXksIG1pbmltaXplKSA9PiB0aGlzLnByb3BzLm1pbmltaXplKGtleSwgbWluaW1pemUpfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC13aW5kb3dzXCIgc3R5bGU9e2JvdHRvbVN0eWxlfSByZWY9e3RoaXMud2luZG93c1JlZn0+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3dzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC1pY29uc1wiIHN0eWxlPXtib3R0b21TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29uc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoYm91bmREZXNrdG9wUHJvcHMsIGJvdW5kRGVza3RvcEFjdGlvbnMpKERlc2t0b3ApOyJdfQ==