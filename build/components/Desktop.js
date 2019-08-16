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
          key: key,
          type: "button",
          className: "btn btn-secondary btn-lg fenestra-desktop-icon",
          onClick: function onClick() {
            return _this2.props.openIcon(icon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByb3BzIiwiaXNNYXhpbWl6ZWQiLCJ3aW5kb3dzUmVmIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJpY29ucyIsIm1hcCIsImljb24iLCJrZXkiLCJvcGVuSWNvbiIsInRpdGxlIiwid2luZG93cyIsIndpbmRvdyIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImNvbnRlbnQiLCJpc01vdmluZyIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlIiwiZXZlbnQiLCJ0b3VjaGVzIiwiZW5kTW92ZSIsIm1pbmltaXplIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImljb25Qcm9wVHlwZXMiLCJ3aW5kb3dTdGF0ZVByb3BUeXBlcyIsImJvb2wiLCJvcGVuIiwiZnVuYyIsImFjdGl2YXRlIiwibWF4aW1pemUiLCJzdGFydE1vdmUiLCJzdGFydFJlc2l6ZSIsImNsb3NlIiwic2V0TG9hZGluZyIsInNldEZvb3RlciIsInNldERhdGEiLCJ1bmRlZmluZWQiLCJib3VuZERlc2t0b3BQcm9wcyIsImJvdW5kRGVza3RvcEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQzs7Ozs7OztBQU9EOzs7O0lBSU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFNV0MsZUFBTUMsU0FBTixFOzs7Ozs7OztBQUViOzs7Ozs7eUNBTXFCO0FBQ2pCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxXQUFmLEVBQTJCO0FBQ3ZCLGFBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCQyxTQUF4QixHQUFvQyxDQUFwQztBQUNBLGFBQUtGLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCRSxVQUF4QixHQUFxQyxDQUFyQztBQUNIO0FBQ0o7QUFFRDs7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V0FBTVEsU0FBTjtBQUFBLEdBUFE7QUFRbEJoQixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNZ0IsU0FBTjtBQUFBLEdBUlE7QUFTbEJQLEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU1PLFNBQU47QUFBQSxHQVRRO0FBVWxCTixFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNTSxTQUFOO0FBQUEsR0FWTztBQVdsQkwsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTUssU0FBTjtBQUFBLEdBWEs7QUFZbEJwQixFQUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFNb0IsU0FBTjtBQUFBLEdBWlk7QUFhbEJqQixFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFNaUIsU0FBTjtBQUFBLEdBYlM7QUFjbEJKLEVBQUFBLEtBQUssRUFBRTtBQUFBLFdBQU1JLFNBQU47QUFBQSxHQWRXO0FBZWxCSCxFQUFBQSxVQUFVLEVBQUU7QUFBQSxXQUFNRyxTQUFOO0FBQUEsR0FmTTtBQWdCbEJGLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU1FLFNBQU47QUFBQSxHQWhCTztBQWlCbEJELEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU1DLFNBQU47QUFBQTtBQUdiOzs7OztBQXBCc0IsQzs7ZUFpRVgseUJBQVFDLDBCQUFSLEVBQTJCQyw0QkFBM0IsRUFBZ0Q3QyxPQUFoRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvRGVza3RvcFxuICogQHNlZSBtb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZERlc2t0b3BBY3Rpb25zXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBib3VuZERlc2t0b3BBY3Rpb25zLCBib3VuZERlc2t0b3BQcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgVGFza2JhciBmcm9tIFwiLi9UYXNrYmFyXCI7XG5pbXBvcnQgeyBpY29uUHJvcFR5cGVzLCB3aW5kb3dTdGF0ZVByb3BUeXBlcyB9IGZyb20gJy4uL3Byb3AtdHlwZXMnO1xuXG5cbiAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEljb25EYXRhIC0gRGFkb3MgZGUgdW0gw61jb25lIGEgc2VyIHBvc2ljaW9uYWRvIG5vIERlc2t0b3BcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uIC0gQ2xhc3NlIGNzcyByZWZlcmVudGUgYSB1bSDDrWNvbmUgZG8gRm9udCBBd2Vzb21lIDQuN1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlIC0gVMOtdHVsbyBhYmFpeG8gZG8gw61jb25lXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dEYXRhfSB3aW5kb3cgLSBQcm9wcmllZGFkZXMgZGEgSmFuZWxhIGEgc2VyIGFiZXJ0YSBhbyBjbGljYXIgbm8gw61jb25lXG4gKi9cblxuLyoqXG4gKiBDb21wb25lbnRlIGRvIERlc2t0b3AgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBEZXNrdG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogUmVmZXLDqm5jaWEgYW8gQ29udGFpbmVyIGRhcyBKYW5lbGFzLlxuICAgICAqL1xuICAgIHdpbmRvd3NSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIC8qKlxuICAgICAqIE3DqXRvZG8gY2hhbWFkbyBxdWFuZG8gbyBkZXNrdG9wIMOpIGF0dWFsaXphZG8uIENhc28gaGFqYSB1bWEgamFuZWxhIG1heGltaXphZGEsXG4gICAgICogbyBjb250ZWluZXIgZGV2ZXLDoSBzZXIgcm9sYWRvIGF0w6kgYSBwb3Npw6fDo28gaW5pY2lhbCBwYXJhIHF1ZSBuw6NvXG4gICAgICogaGFqYSB2aXPDo28gcGFyY2lhbCBkYSBqYW5lbGEuXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNNYXhpbWl6ZWQpe1xuICAgICAgICAgICAgdGhpcy53aW5kb3dzUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMud2luZG93c1JlZi5jdXJyZW50LnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRvIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWNvbnM6IFByb3BUeXBlcy5hcnJheU9mKGljb25Qcm9wVHlwZXMpLFxuICAgICAgICB3aW5kb3dzOiBQcm9wVHlwZXMuYXJyYXlPZih3aW5kb3dTdGF0ZVByb3BUeXBlcyksXG4gICAgICAgIGlzTW92aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaXNNYXhpbWl6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb3Blbkljb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1pbmltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF4aW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydFJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBlbmRNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRMb2FkaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0Rm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0RGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9wcmllZGFkZSBwYWRyw6NvIGRvIGNvbXBvbmVudGUuXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaWNvbnM6IFtdLFxuICAgICAgICB3aW5kb3dzOiBbXSxcbiAgICAgICAgaXNNb3Zpbmc6IGZhbHNlLFxuICAgICAgICBpc01heGltaXplZDogZmFsc2UsXG4gICAgICAgIG9wZW46ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb3Blbkljb246ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbWluaW1pemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbWF4aW1pemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3ZlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0UmVzaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgZW5kTW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBjbG9zZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXRMb2FkaW5nOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldEZvb3RlcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXREYXRhOiAoKSA9PiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNw6l0b2RvIGRlIHJlbmRlcml6YcOnw6NvIGRvIENvbXBvbmVudGVcbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGljb25zID0gdGhpcy5wcm9wcy5pY29ucy5tYXAoKGljb24sIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17a2V5fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGZlbmVzdHJhLWRlc2t0b3AtaWNvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbkljb24oaWNvbil9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb24uaWNvbn0+PC9pPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbFwiPntpY29uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93cyA9IHRoaXMucHJvcHMud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHdpbmRvdy5jb21wb25lbnQ7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQga2V5PXt3aW5kb3cua2V5fSB7Li4ud2luZG93LnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAge3dpbmRvdy5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZlbmVzdHJhLWRlc2t0b3BcIisodGhpcy5wcm9wcy5pc01heGltaXplZD8gXCIgZmVuZXN0cmEtZGVza3RvcC1tYXhpbWl6ZWRcIiA6IFwiXCIpKyh0aGlzLnByb3BzLmlzTW92aW5nPyBcIiBmZW5lc3RyYS1kZXNrdG9wLW1vdmluZ1wiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyh7IHBhZ2VYLCBwYWdlWSB9KSA9PiB0aGlzLnByb3BzLm1vdmUocGFnZVgsIHBhZ2VZKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17ZXZlbnQgPT4gdGhpcy5wcm9wcy5tb3ZlKGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoQ2FuY2VsPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3Atd2luZG93c1wiIHJlZj17dGhpcy53aW5kb3dzUmVmfT5cbiAgICAgICAgICAgICAgICAgICAge3dpbmRvd3N9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1kZXNrdG9wLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpY29uc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGFza2JhciBtaW5pbWl6ZT17KGtleSwgbWluaW1pemUpID0+IHRoaXMucHJvcHMubWluaW1pemUoa2V5LCBtaW5pbWl6ZSl9IC8+XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGJvdW5kRGVza3RvcFByb3BzLCBib3VuZERlc2t0b3BBY3Rpb25zKShEZXNrdG9wKTsiXX0=