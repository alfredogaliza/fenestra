"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BoundWindow = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("../actions");

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
 * @typedef {Object} WindowProps  - Propriedades da janela
 * @property {Object} style - Propriedades de estilo da janela (top, left, width, height)
 * @property {string} title - Título da janela
 * @property {string} footer - Rodapé da janela
 * @property {boolean} active - Indica se a janela está ativa
 * @property {boolean} maximized - Indica se a janela está maximizada
 * @property {boolean} minimized - Indica se a janela está minimizada
 * @property {boolean} resizeable - Indica se a janela é redimensionável
 * @property {boolean} moveable - Indica se a janela é movimentável
 * @property {boolean} minimizeable - Indica se a janela é minimizável
 * @property {boolean} closeable - Indica se a janela é fechável
 * @property {boolean} noFooter - Indica se o rodapé deverá ser ocultado
 */

/**
* @typedef {Object} WindowData - Dados de uma janela a ser aberta
* @property {module:Fenestra/Components/Window~WindowProps} props - Propriedades da Janela
* @property {*} template - Componente renderizável de conteúdo da janela
* @property {Object} templateProps - Propriedades a serem injetados no template
*/

/**
* @typedef {Object} WindowState Estado de uma janela armazenado em um Store Redux.
* @property {module:Fenestra/Reducers~WinKey} key Identificador da Janela
* @property {module:Fenestra/Components/Window~WindowProps} props Propriedades da Janela
* @property {module:Fenestra/Components/Window~BoundWindow} component Componente da Janela conectada ao redux
* @property {*} content Componente do Conteúdo da Janela
*/

/**
 * Janela da Aplicação Fenestra
 * @extends {React.Component}
 */
var Window =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Window);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Window)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "close", function (event) {
      event.stopPropagation();

      if (!_this.props.options.confirmOnClose || global.confirm(_this.props.options.msgs.closeDialog + _this.props.title + "?")) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMaximize", function (event) {
      event.stopPropagation();

      _this.props.maximize(!_this.props.maximized);
    });

    _defineProperty(_assertThisInitialized(_this), "minimize", function (event) {
      event.stopPropagation();

      _this.props.minimize();
    });

    _defineProperty(_assertThisInitialized(_this), "tapped", false);

    return _this;
  }

  _createClass(Window, [{
    key: "startTouch",
    value: function startTouch(x, y, event) {
      var _this2 = this;

      if (this.tapped) {
        this.toggleMaximize(event);
      } else {
        this.tapped = true;
        setTimeout(function () {
          _this2.tapped = false;
        }, 300);
        this.props.startMove(x, y);
      }
    }
    /**
     * Renderiza o componente.
     * @method
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var loading = this.props.isLoading ? _react["default"].createElement("div", {
        className: "fenestra-loading"
      }, _react["default"].createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : null;
      return _react["default"].createElement("div", {
        className: "fenestra-window" + (this.props.active ? " fenestra-window-active" : "") + (this.props.maximized ? " fenestra-window-maximized" : "") + (this.props.noFooter ? " fenestra-window-nofooter" : "") + (this.props.minimized ? " fenestra-window-minimized" : ""),
        style: !this.props.maximized ? this.props.style : null,
        onMouseDown: function onMouseDown() {
          return _this3.props.activate();
        },
        onTouchStart: function onTouchStart() {
          return _this3.props.activate();
        }
      }, _react["default"].createElement("div", {
        className: "fenestra-window-header",
        style: {
          borderRadius: this.props.maximized ? 0 : undefined
        },
        onDoubleClick: function onDoubleClick(e) {
          return _this3.toggleMaximize(e);
        },
        onMouseDown: function onMouseDown(e) {
          return _this3.props.startMove(e.pageX, e.pageY);
        },
        onTouchStart: function onTouchStart(event) {
          return _this3.startTouch(event.touches[0].pageX, event.touches[0].pageY, event);
        }
      }, _react["default"].createElement("span", {
        className: "fenestra-window-header-title"
      }, this.props.title), _react["default"].createElement("div", {
        className: "fenestra-window-header-buttons"
      }, _react["default"].createElement("button", {
        title: this.props.options.msgs.minimizeWindow,
        type: "button",
        className: this.props.minimizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.minimize(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-window-minimize"
      })), "\xA0", _react["default"].createElement("button", {
        title: this.props.options.msgs.maximizeWindow,
        type: "button",
        className: this.props.resizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.toggleMaximize(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-window-" + (this.props.maximized ? "restore" : "maximize")
      })), "\xA0", _react["default"].createElement("button", {
        title: this.props.options.msgs.closeWindow,
        type: "button",
        className: this.props.closeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.close(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-remove"
      })))), _react["default"].createElement("div", {
        className: "fenestra-window-body"
      }, this.props.children, loading), _react["default"].createElement("div", {
        className: "fenestra-window-footer"
      }, this.props.footer, "\xA0"), _react["default"].createElement("button", {
        title: this.props.options.msgs.resizeWindow,
        type: "button",
        className: "fenestra-window-resize",
        onMouseDown: function onMouseDown(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this3.props.startResize(pageX, pageY);
        },
        onTouchStart: function onTouchStart(e) {
          return _this3.props.startResize(e.touches[0].pageX, e.touches[0].pageY);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-expand fa-flip-horizontal"
      })));
    }
  }]);

  return Window;
}(_react["default"].Component);
/**
 * @typedef {module:Fenestra/Components/Window~Window} BoundWindow Janela Conectada ao Store Redux
 */

/**
 * Cria um novo componente com as propriedades ligadas à chave
 * redux da janela aberta pelo Fenestra.
 * @class
 * @param {module:Fenestra/Reducers~WinKey} key Identificador da janela
 * @returns {module:Fenestra/Components/Window~BoundWindow} Componente com as propriedades ligadas ao Redux
 */


_defineProperty(Window, "propTypes", {
  title: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].element,
  isLoading: _propTypes["default"].bool,
  open: _propTypes["default"].func,
  activate: _propTypes["default"].func,
  minimize: _propTypes["default"].func,
  maximize: _propTypes["default"].func,
  startMove: _propTypes["default"].func,
  startResize: _propTypes["default"].func,
  close: _propTypes["default"].func,
  setLoading: _propTypes["default"].func,
  setFooter: _propTypes["default"].func,
  setData: _propTypes["default"].func,
  options: _propTypes["default"].object
  /**
   * Propriedades padrão do Componente
   */

});

_defineProperty(Window, "defaultProps", {
  title: undefined,
  children: null,
  isLoading: false,
  open: function open() {
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
  options: {}
  /**
   * Fecha a janela.
   * @method
   * @param {Object} event Evento gerado pela ação
   */

});

var BoundWindow = function BoundWindow(key) {
  return (0, _reactRedux.connect)((0, _actions.boundWindowProps)(key), (0, _actions.boundWindowActions)(key))(Window);
};

exports.BoundWindow = BoundWindow;
var _default = Window;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy5qc3giXSwibmFtZXMiOlsiV2luZG93IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9wdGlvbnMiLCJjb25maXJtT25DbG9zZSIsImdsb2JhbCIsImNvbmZpcm0iLCJtc2dzIiwiY2xvc2VEaWFsb2ciLCJ0aXRsZSIsImNsb3NlIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsIngiLCJ5IiwidGFwcGVkIiwidG9nZ2xlTWF4aW1pemUiLCJzZXRUaW1lb3V0Iiwic3RhcnRNb3ZlIiwibG9hZGluZyIsImlzTG9hZGluZyIsImFjdGl2ZSIsIm5vRm9vdGVyIiwibWluaW1pemVkIiwic3R5bGUiLCJhY3RpdmF0ZSIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsImUiLCJwYWdlWCIsInBhZ2VZIiwic3RhcnRUb3VjaCIsInRvdWNoZXMiLCJtaW5pbWl6ZVdpbmRvdyIsIm1pbmltaXplYWJsZSIsIm1heGltaXplV2luZG93IiwicmVzaXplYWJsZSIsImNsb3NlV2luZG93IiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyZXNpemVXaW5kb3ciLCJzdGFydFJlc2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJib29sIiwib3BlbiIsImZ1bmMiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsIm9iamVjdCIsIkJvdW5kV2luZG93Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBOzs7O0lBSU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REErQ00sVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLE1BQUFBLEtBQUss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RUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTWlCLFNBQU47QUFBQSxHQVBRO0FBUWxCVCxFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNUyxTQUFOO0FBQUEsR0FSTztBQVNsQmUsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTWYsU0FBTjtBQUFBLEdBVEs7QUFVbEJsQixFQUFBQSxLQUFLLEVBQUU7QUFBQSxXQUFNa0IsU0FBTjtBQUFBLEdBVlc7QUFXbEJ5QixFQUFBQSxVQUFVLEVBQUU7QUFBQSxXQUFNekIsU0FBTjtBQUFBLEdBWE07QUFZbEIwQixFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNMUIsU0FBTjtBQUFBLEdBWk87QUFhbEIyQixFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFNM0IsU0FBTjtBQUFBLEdBYlM7QUFjbEJ6QixFQUFBQSxPQUFPLEVBQUU7QUFHYjs7Ozs7O0FBakJzQixDOztBQW9KbkIsSUFBTXNELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFJLHlCQUFRLCtCQUFpQkEsR0FBakIsQ0FBUixFQUErQixpQ0FBbUJBLEdBQW5CLENBQS9CLEVBQXdEM0QsTUFBeEQsQ0FBSjtBQUFBLENBQXZCOzs7ZUFFUUEsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGJvdW5kV2luZG93QWN0aW9ucywgYm91bmRXaW5kb3dQcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd1Byb3BzICAtIFByb3ByaWVkYWRlcyBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZSAtIFByb3ByaWVkYWRlcyBkZSBlc3RpbG8gZGEgamFuZWxhICh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSBUw610dWxvIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGZvb3RlciAtIFJvZGFww6kgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBhdGl2YVxuICogQHByb3BlcnR5IHtib29sZWFufSBtYXhpbWl6ZWQgLSBJbmRpY2Egc2UgYSBqYW5lbGEgZXN0w6EgbWF4aW1pemFkYVxuICogQHByb3BlcnR5IHtib29sZWFufSBtaW5pbWl6ZWQgLSBJbmRpY2Egc2UgYSBqYW5lbGEgZXN0w6EgbWluaW1pemFkYVxuICogQHByb3BlcnR5IHtib29sZWFufSByZXNpemVhYmxlIC0gSW5kaWNhIHNlIGEgamFuZWxhIMOpIHJlZGltZW5zaW9uw6F2ZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbW92ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgbW92aW1lbnTDoXZlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBtaW5pbWl6ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgbWluaW1pesOhdmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNsb3NlYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBmZWNow6F2ZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbm9Gb290ZXIgLSBJbmRpY2Egc2UgbyByb2RhcMOpIGRldmVyw6Egc2VyIG9jdWx0YWRvXG4gKi9cblxuLyoqXG4qIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd0RhdGEgLSBEYWRvcyBkZSB1bWEgamFuZWxhIGEgc2VyIGFiZXJ0YVxuKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dQcm9wc30gcHJvcHMgLSBQcm9wcmllZGFkZXMgZGEgSmFuZWxhXG4qIEBwcm9wZXJ0eSB7Kn0gdGVtcGxhdGUgLSBDb21wb25lbnRlIHJlbmRlcml6w6F2ZWwgZGUgY29udGXDumRvIGRhIGphbmVsYVxuKiBAcHJvcGVydHkge09iamVjdH0gdGVtcGxhdGVQcm9wcyAtIFByb3ByaWVkYWRlcyBhIHNlcmVtIGluamV0YWRvcyBubyB0ZW1wbGF0ZVxuKi9cblxuLyoqXG4qIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd1N0YXRlIEVzdGFkbyBkZSB1bWEgamFuZWxhIGFybWF6ZW5hZG8gZW0gdW0gU3RvcmUgUmVkdXguXG4qIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IElkZW50aWZpY2Fkb3IgZGEgSmFuZWxhXG4qIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBwcm9wcyBQcm9wcmllZGFkZXMgZGEgSmFuZWxhXG4qIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fkJvdW5kV2luZG93fSBjb21wb25lbnQgQ29tcG9uZW50ZSBkYSBKYW5lbGEgY29uZWN0YWRhIGFvIHJlZHV4XG4qIEBwcm9wZXJ0eSB7Kn0gY29udGVudCBDb21wb25lbnRlIGRvIENvbnRlw7pkbyBkYSBKYW5lbGFcbiovXG5cbi8qKlxuICogSmFuZWxhIGRhIEFwbGljYcOnw6NvIEZlbmVzdHJhXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRvIENvbXBvbmVudGUuXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgYWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBtaW5pbWl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1heGltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3RhcnRNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3RhcnRSZXNpemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldExvYWRpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ByaWVkYWRlcyBwYWRyw6NvIGRvIENvbXBvbmVudGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgb3BlbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtaW5pbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtYXhpbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRSZXNpemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgY2xvc2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0TG9hZGluZzogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXRGb290ZXI6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0RGF0YTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zOiB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZlY2hhIGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnRvIGdlcmFkbyBwZWxhIGHDp8Ojb1xuICAgICAqL1xuICAgIGNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMub3B0aW9ucy5jb25maXJtT25DbG9zZSB8fCBnbG9iYWwuY29uZmlybSh0aGlzLnByb3BzLm9wdGlvbnMubXNncy5jbG9zZURpYWxvZyArIHRoaXMucHJvcHMudGl0bGUgKyBcIj9cIikpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsdGVybmEgbyBlc3RhZG8gbWF4aW1pemFkbyBkYSBqYW5lbGE7XG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudG8gZ2VyYWRvIHBlbGEgYcOnw6NvXG4gICAgICovXG4gICAgdG9nZ2xlTWF4aW1pemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMubWF4aW1pemUoIXRoaXMucHJvcHMubWF4aW1pemVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbWl6YSBhIGphbmVsYS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50byBnZXJhZG8gcGVsYSBhw6fDo29cbiAgICAgKi9cbiAgICBtaW5pbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBzZSBqw6EgaG91dmUgdW0gdG9xdWUuIFV0aWxpemFkbyBwYXJhIGRldGVjdGFyIG8gdG9xdWUgZHVwbG8uXG4gICAgICovXG4gICAgdGFwcGVkID0gZmFsc2U7XG5cbiAgICBzdGFydFRvdWNoKHgsIHksIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcHBlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNYXhpbWl6ZShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy50YXBwZWQgPSBmYWxzZSB9LCAzMDApO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFydE1vdmUoeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJpemEgbyBjb21wb25lbnRlLlxuICAgICAqIEBtZXRob2RcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMucHJvcHMuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJmZW5lc3RyYS13aW5kb3dcIiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmFjdGl2ZSAgICA/IFwiIGZlbmVzdHJhLXdpbmRvdy1hY3RpdmVcIiAgICA6IFwiXCIpK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyBcIiBmZW5lc3RyYS13aW5kb3ctbWF4aW1pemVkXCIgOiBcIlwiKStcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubm9Gb290ZXIgID8gXCIgZmVuZXN0cmEtd2luZG93LW5vZm9vdGVyXCIgIDogXCJcIikrIFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5taW5pbWl6ZWQgPyBcIiBmZW5lc3RyYS13aW5kb3ctbWluaW1pemVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17IXRoaXMucHJvcHMubWF4aW1pemVkID8gdGhpcy5wcm9wcy5zdHlsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IHRoaXMucHJvcHMubWF4aW1pemVkID8gMCA6IHVuZGVmaW5lZCB9fVxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVNYXhpbWl6ZShlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5wcm9wcy5zdGFydE1vdmUoZS5wYWdlWCwgZS5wYWdlWSl9XG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZXZlbnQgPT4gdGhpcy5zdGFydFRvdWNoKGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVksIGV2ZW50KX1cbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWhlYWRlci10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1oZWFkZXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5vcHRpb25zLm1zZ3MubWluaW1pemVXaW5kb3d9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMubWluaW1pemVhYmxlID8gXCJcIiA6IFwiZC1ub25lXCJ9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm1pbmltaXplKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aW5kb3ctbWluaW1pemVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMub3B0aW9ucy5tc2dzLm1heGltaXplV2luZG93fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnJlc2l6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIn0gb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTWF4aW1pemUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBmYS13aW5kb3ctXCIgKyAodGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyBcInJlc3RvcmVcIiA6IFwibWF4aW1pemVcIil9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5vcHRpb25zLm1zZ3MuY2xvc2VXaW5kb3d9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xvc2VhYmxlID8gXCJcIiA6IFwiZC1ub25lXCJ9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsb3NlKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZW1vdmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWJvZHlcIj5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ31cblxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9Jm5ic3A7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLm9wdGlvbnMubXNncy5yZXNpemVXaW5kb3d9IHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctcmVzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyh7IHBhZ2VYLCBwYWdlWSB9KSA9PiB0aGlzLnByb3BzLnN0YXJ0UmVzaXplKHBhZ2VYLCBwYWdlWSl9XG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0UmVzaXplKGUudG91Y2hlc1swXS5wYWdlWCwgZS50b3VjaGVzWzBdLnBhZ2VZKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV4cGFuZCBmYS1mbGlwLWhvcml6b250YWxcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd30gQm91bmRXaW5kb3cgSmFuZWxhIENvbmVjdGFkYSBhbyBTdG9yZSBSZWR1eFxuICovXG5cbi8qKlxuICogQ3JpYSB1bSBub3ZvIGNvbXBvbmVudGUgY29tIGFzIHByb3ByaWVkYWRlcyBsaWdhZGFzIMOgIGNoYXZlXG4gKiByZWR1eCBkYSBqYW5lbGEgYWJlcnRhIHBlbG8gRmVuZXN0cmEuXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IElkZW50aWZpY2Fkb3IgZGEgamFuZWxhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fkJvdW5kV2luZG93fSBDb21wb25lbnRlIGNvbSBhcyBwcm9wcmllZGFkZXMgbGlnYWRhcyBhbyBSZWR1eFxuICovXG5leHBvcnQgY29uc3QgQm91bmRXaW5kb3cgPSBrZXkgPT4gY29ubmVjdChib3VuZFdpbmRvd1Byb3BzKGtleSksIGJvdW5kV2luZG93QWN0aW9ucyhrZXkpKShXaW5kb3cpO1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7Il19