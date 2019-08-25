"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("../actions");

var _Taskbar = _interopRequireDefault(require("./Taskbar"));

var _propTypes2 = require("../prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _defineProperty(_assertThisInitialized(_this), "windowsRef", _react.default.createRef());

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
    key: "render",
    value: function render() {
      var _this2 = this;

      var icons = this.props.icons.map(function (icon, key) {
        return _react.default.createElement("button", {
          title: icon.title,
          key: key,
          type: "button",
          className: "fenestra-desktop-icon",
          onClick: function onClick() {
            return icon.window ? _this2.props.open(icon.window.props, icon.window.template, icon.window.templateProps) : null;
          }
        }, _react.default.createElement("i", {
          className: icon.icon
        }), _react.default.createElement("br", null), _react.default.createElement("span", {
          className: "small"
        }, icon.title));
      });
      var windows = this.props.windows.map(function (window) {
        var Component = window.component;
        return _react.default.createElement(Component, _extends({
          key: window.key
        }, window.props), window.content);
      });
      return _react.default.createElement("div", {
        className: "fenestra-desktop" + (this.props.isMaximized ? " fenestra-desktop-maximized" : "") + (this.props.isMoving ? " fenestra-desktop-moving" : ""),
        onMouseMove: function onMouseMove(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this2.props.move(pageX, pageY);
        },
        onTouchMove: function onTouchMove(event) {
          return _this2.props.move(event.touches[0].pageX, event.touches[0].pageY);
        },
        onMouseUp: function onMouseUp() {
          return _this2.props.endMove();
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.props.endMove();
        },
        onTouchEnd: function onTouchEnd() {
          return _this2.props.endMove();
        },
        onTouchCancel: function onTouchCancel() {
          return _this2.props.endMove();
        }
      }, _react.default.createElement("div", {
        className: "fenestra-desktop-windows",
        ref: this.windowsRef
      }, windows), _react.default.createElement("div", {
        className: "fenestra-desktop-icons"
      }, icons), _react.default.createElement(_Taskbar.default, {
        minimize: function minimize(key, _minimize) {
          return _this2.props.minimize(key, _minimize);
        }
      }));
    }
  }]);

  return Desktop;
}(_react.default.Component);

_defineProperty(Desktop, "propTypes", {
  icons: _propTypes.default.arrayOf(_propTypes2.iconPropTypes),
  windows: _propTypes.default.arrayOf(_propTypes2.windowStatePropTypes),
  isMoving: _propTypes.default.bool,
  isMaximized: _propTypes.default.bool,
  open: _propTypes.default.func,
  openIcon: _propTypes.default.func,
  activate: _propTypes.default.func,
  minimize: _propTypes.default.func,
  maximize: _propTypes.default.func,
  startMove: _propTypes.default.func,
  startResize: _propTypes.default.func,
  move: _propTypes.default.func,
  endMove: _propTypes.default.func,
  close: _propTypes.default.func,
  setLoading: _propTypes.default.func,
  setFooter: _propTypes.default.func,
  setData: _propTypes.default.func
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
  }
  /**
   * Método de renderização do Componente
   * @method
   */

});

var _default = (0, _reactRedux.connect)(_actions.boundDesktopProps, _actions.boundDesktopActions)(Desktop);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByb3BzIiwiaXNNYXhpbWl6ZWQiLCJ3aW5kb3dzUmVmIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJpY29ucyIsIm1hcCIsImljb24iLCJrZXkiLCJ0aXRsZSIsIndpbmRvdyIsIm9wZW4iLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlUHJvcHMiLCJ3aW5kb3dzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29udGVudCIsImlzTW92aW5nIiwicGFnZVgiLCJwYWdlWSIsIm1vdmUiLCJldmVudCIsInRvdWNoZXMiLCJlbmRNb3ZlIiwibWluaW1pemUiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaWNvblByb3BUeXBlcyIsIndpbmRvd1N0YXRlUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJvcGVuSWNvbiIsImFjdGl2YXRlIiwibWF4aW1pemUiLCJzdGFydE1vdmUiLCJzdGFydFJlc2l6ZSIsImNsb3NlIiwic2V0TG9hZGluZyIsInNldEZvb3RlciIsInNldERhdGEiLCJ1bmRlZmluZWQiLCJib3VuZERlc2t0b3BQcm9wcyIsImJvdW5kRGVza3RvcEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQzs7Ozs7OztBQU9EOzs7O0lBSU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFNV0MsZUFBTUMsU0FBTixFOzs7Ozs7OztBQUViOzs7Ozs7eUNBTXFCO0FBQ2pCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxXQUFmLEVBQTJCO0FBQ3ZCLGFBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCQyxTQUF4QixHQUFvQyxDQUFwQztBQUNBLGFBQUtGLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCRSxVQUF4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QU8sRUFBRSxFQUZTO0FBR2xCSSxFQUFBQSxRQUFRLEVBQUUsS0FIUTtBQUlsQmxCLEVBQUFBLFdBQVcsRUFBRSxLQUpLO0FBS2xCVyxFQUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFNOEIsU0FBTjtBQUFBLEdBTFk7QUFNbEJULEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU1TLFNBQU47QUFBQSxHQU5RO0FBT2xCUixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNUSxTQUFOO0FBQUEsR0FQUTtBQVFsQmhCLEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU1nQixTQUFOO0FBQUEsR0FSUTtBQVNsQlAsRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTU8sU0FBTjtBQUFBLEdBVFE7QUFVbEJOLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU1NLFNBQU47QUFBQSxHQVZPO0FBV2xCTCxFQUFBQSxXQUFXLEVBQUU7QUFBQSxXQUFNSyxTQUFOO0FBQUEsR0FYSztBQVlsQnBCLEVBQUFBLElBQUksRUFBRTtBQUFBLFdBQU1vQixTQUFOO0FBQUEsR0FaWTtBQWFsQmpCLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU1pQixTQUFOO0FBQUEsR0FiUztBQWNsQkosRUFBQUEsS0FBSyxFQUFFO0FBQUEsV0FBTUksU0FBTjtBQUFBLEdBZFc7QUFlbEJILEVBQUFBLFVBQVUsRUFBRTtBQUFBLFdBQU1HLFNBQU47QUFBQSxHQWZNO0FBZ0JsQkYsRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTUUsU0FBTjtBQUFBLEdBaEJPO0FBaUJsQkQsRUFBQUEsT0FBTyxFQUFFO0FBQUEsV0FBTUMsU0FBTjtBQUFBO0FBR2I7Ozs7O0FBcEJzQixDOztlQWlFWCx5QkFBUUMsMEJBQVIsRUFBMkJDLDRCQUEzQixFQUFnRC9DLE9BQWhELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGUgRmVuZXN0cmEvQ29tcG9uZW50cy9EZXNrdG9wXG4gKiBAc2VlIG1vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kRGVza3RvcEFjdGlvbnNcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGJvdW5kRGVza3RvcEFjdGlvbnMsIGJvdW5kRGVza3RvcFByb3BzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBUYXNrYmFyIGZyb20gXCIuL1Rhc2tiYXJcIjtcbmltcG9ydCB7IGljb25Qcm9wVHlwZXMsIHdpbmRvd1N0YXRlUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cblxuIC8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSWNvbkRhdGEgLSBEYWRvcyBkZSB1bSDDrWNvbmUgYSBzZXIgcG9zaWNpb25hZG8gbm8gRGVza3RvcFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGljb24gLSBDbGFzc2UgY3NzIHJlZmVyZW50ZSBhIHVtIMOtY29uZSBkbyBGb250IEF3ZXNvbWUgNC43XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSBUw610dWxvIGFiYWl4byBkbyDDrWNvbmVcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd0RhdGF9IHdpbmRvdyAtIFByb3ByaWVkYWRlcyBkYSBKYW5lbGEgYSBzZXIgYWJlcnRhIGFvIGNsaWNhciBubyDDrWNvbmVcbiAqL1xuXG4vKipcbiAqIENvbXBvbmVudGUgZG8gRGVza3RvcCBkYSBBcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIERlc2t0b3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICAvKipcbiAgICAgKiBSZWZlcsOqbmNpYSBhbyBDb250YWluZXIgZGFzIEphbmVsYXMuXG4gICAgICovXG4gICAgd2luZG93c1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgLyoqXG4gICAgICogTcOpdG9kbyBjaGFtYWRvIHF1YW5kbyBvIGRlc2t0b3Agw6kgYXR1YWxpemFkby4gQ2FzbyBoYWphIHVtYSBqYW5lbGEgbWF4aW1pemFkYSxcbiAgICAgKiBvIGNvbnRlaW5lciBkZXZlcsOhIHNlciByb2xhZG8gYXTDqSBhIHBvc2nDp8OjbyBpbmljaWFsIHBhcmEgcXVlIG7Do29cbiAgICAgKiBoYWphIHZpc8OjbyBwYXJjaWFsIGRhIGphbmVsYS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc01heGltaXplZCl7XG4gICAgICAgICAgICB0aGlzLndpbmRvd3NSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dzUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpY29uczogUHJvcFR5cGVzLmFycmF5T2YoaWNvblByb3BUeXBlcyksXG4gICAgICAgIHdpbmRvd3M6IFByb3BUeXBlcy5hcnJheU9mKHdpbmRvd1N0YXRlUHJvcFR5cGVzKSxcbiAgICAgICAgaXNNb3Zpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBpc01heGltaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvcGVuSWNvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGFjdGl2YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWluaW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBtYXhpbWl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0YXJ0TW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0YXJ0UmVzaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGVuZE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldExvYWRpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXREYXRhOiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ByaWVkYWRlIHBhZHLDo28gZG8gY29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpY29uczogW10sXG4gICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICBpc01vdmluZzogZmFsc2UsXG4gICAgICAgIGlzTWF4aW1pemVkOiBmYWxzZSxcbiAgICAgICAgb3BlbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvcGVuSWNvbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtaW5pbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtYXhpbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRSZXNpemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBlbmRNb3ZlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGNsb3NlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldExvYWRpbmc6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0Rm9vdGVyOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldERhdGE6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE3DqXRvZG8gZGUgcmVuZGVyaXphw6fDo28gZG8gQ29tcG9uZW50ZVxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLnByb3BzLmljb25zLm1hcCgoaWNvbiwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e2ljb24udGl0bGV9IGtleT17a2V5fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC1pY29uXCIgb25DbGljaz17KCkgPT4gaWNvbi53aW5kb3c/IHRoaXMucHJvcHMub3BlbihpY29uLndpbmRvdy5wcm9wcyxpY29uLndpbmRvdy50ZW1wbGF0ZSxpY29uLndpbmRvdy50ZW1wbGF0ZVByb3BzKTogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aWNvbi5pY29ufT48L2k+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+e2ljb24udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aW5kb3dzID0gdGhpcy5wcm9wcy53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LmNvbXBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCBrZXk9e3dpbmRvdy5rZXl9IHsuLi53aW5kb3cucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmVuZXN0cmEtZGVza3RvcFwiKyh0aGlzLnByb3BzLmlzTWF4aW1pemVkPyBcIiBmZW5lc3RyYS1kZXNrdG9wLW1heGltaXplZFwiIDogXCJcIikrKHRoaXMucHJvcHMuaXNNb3Zpbmc/IFwiIGZlbmVzdHJhLWRlc2t0b3AtbW92aW5nXCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KHsgcGFnZVgsIHBhZ2VZIH0pID0+IHRoaXMucHJvcHMubW92ZShwYWdlWCwgcGFnZVkpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXtldmVudCA9PiB0aGlzLnByb3BzLm1vdmUoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hDYW5jZWw9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC13aW5kb3dzXCIgcmVmPXt0aGlzLndpbmRvd3NSZWZ9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3AtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2ljb25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYXNrYmFyIG1pbmltaXplPXsoa2V5LCBtaW5pbWl6ZSkgPT4gdGhpcy5wcm9wcy5taW5pbWl6ZShrZXksIG1pbmltaXplKX0gLz5cbiAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoYm91bmREZXNrdG9wUHJvcHMsIGJvdW5kRGVza3RvcEFjdGlvbnMpKERlc2t0b3ApOyJdfQ==