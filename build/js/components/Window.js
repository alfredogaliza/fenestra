"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BoundWindow = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("../actions");

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

      if (global.confirm(_this.props.msgs.closeDialog + _this.props.title + "?")) {
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

    return _this;
  }

  _createClass(Window, [{
    key: "render",

    /**
     * Renderiza o componente.
     * @method
     */
    value: function render() {
      var _this2 = this;

      var loading = this.props.isLoading ? _react.default.createElement("div", {
        className: "fenestra-loading"
      }, _react.default.createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : null;
      return _react.default.createElement("div", {
        className: "fenestra-window " + (this.props.active ? "fenestra-window-active" : "") + " " + (this.props.maximized ? "fenestra-window-maximized" : "") + " " + (this.props.minimized ? "fenestra-window-minimized" : ""),
        style: !this.props.maximized ? this.props.style : null,
        onMouseDown: function onMouseDown() {
          return _this2.props.activate();
        },
        onTouchStart: function onTouchStart() {
          return _this2.props.activate();
        }
      }, _react.default.createElement("div", {
        className: "fenestra-window-header",
        style: {
          borderRadius: this.props.maximized ? 0 : undefined
        },
        onDoubleClick: function onDoubleClick(e) {
          return _this2.toggleMaximize(e);
        },
        onMouseDown: function onMouseDown(e) {
          return _this2.props.startMove(e.pageX, e.pageY);
        },
        onTouchStart: function onTouchStart(event) {
          return _this2.props.startMove(event.touches[0].pageX, event.touches[0].pageY);
        }
      }, _react.default.createElement("span", {
        className: "fenestra-window-header-title"
      }, this.props.title), _react.default.createElement("div", {
        className: "fenestra-window-header-buttons"
      }, _react.default.createElement("button", {
        title: this.props.msgs.minimizeWindow,
        type: "button",
        className: this.props.minimizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this2.minimize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-minimize"
      })), "\xA0", _react.default.createElement("button", {
        title: this.props.msgs.maximizeWindow,
        type: "button",
        className: this.props.resizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this2.toggleMaximize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-" + (this.props.maximized ? "restore" : "maximize")
      })), "\xA0", _react.default.createElement("button", {
        title: this.props.msgs.closeWindow,
        type: "button",
        className: this.props.closeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-remove"
      })))), _react.default.createElement("div", {
        className: "fenestra-window-body"
      }, this.props.children, loading), _react.default.createElement("div", {
        className: "fenestra-window-footer"
      }, this.props.footer, _react.default.createElement("button", {
        title: this.props.msgs.resizeWindow,
        type: "button",
        className: "fenestra-window-resize",
        onMouseDown: function onMouseDown(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this2.props.startResize(pageX, pageY);
        },
        onTouchStart: function onTouchStart(e) {
          return _this2.props.startResize(e.touches[0].pageX, e.touches[0].pageY);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-expand fa-flip-horizontal"
      }))));
    }
  }]);

  return Window;
}(_react.default.Component);
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
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.element,
  isLoading: _propTypes.default.bool,
  open: _propTypes.default.func,
  activate: _propTypes.default.func,
  minimize: _propTypes.default.func,
  maximize: _propTypes.default.func,
  startMove: _propTypes.default.func,
  startResize: _propTypes.default.func,
  close: _propTypes.default.func,
  setLoading: _propTypes.default.func,
  setFooter: _propTypes.default.func,
  setData: _propTypes.default.func
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
  }
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
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy5qc3giXSwibmFtZXMiOlsiV2luZG93IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJnbG9iYWwiLCJjb25maXJtIiwicHJvcHMiLCJtc2dzIiwiY2xvc2VEaWFsb2ciLCJ0aXRsZSIsImNsb3NlIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJhY3RpdmUiLCJtaW5pbWl6ZWQiLCJzdHlsZSIsImFjdGl2YXRlIiwiYm9yZGVyUmFkaXVzIiwidW5kZWZpbmVkIiwiZSIsInRvZ2dsZU1heGltaXplIiwic3RhcnRNb3ZlIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoZXMiLCJtaW5pbWl6ZVdpbmRvdyIsIm1pbmltaXplYWJsZSIsIm1heGltaXplV2luZG93IiwicmVzaXplYWJsZSIsImNsb3NlV2luZG93IiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyZXNpemVXaW5kb3ciLCJzdGFydFJlc2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJib29sIiwib3BlbiIsImZ1bmMiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsIkJvdW5kV2luZG93Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNDOzs7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUQ7Ozs7SUFJTUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQTZDTSxVQUFDQyxLQUFELEVBQVc7QUFDZkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLE1BQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsV0FBaEIsR0FBOEIsTUFBS0Ys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QSxPQUFPLEVBQUVULG1CQUFVTTtBQUd2Qjs7OztBQWhCbUIsQzs7Z0JBTGpCN0MsTSxrQkF3Qm9CO0FBQ2xCUSxFQUFBQSxLQUFLLEVBQUVZLFNBRFc7QUFFbEJhLEVBQUFBLFFBQVEsRUFBRSxJQUZRO0FBR2xCbkIsRUFBQUEsU0FBUyxFQUFFLEtBSE87QUFJbEI4QixFQUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFNeEIsU0FBTjtBQUFBLEdBSlk7QUFLbEJGLEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU1FLFNBQU47QUFBQSxHQUxRO0FBTWxCUixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNUSxTQUFOO0FBQUEsR0FOUTtBQU9sQlYsRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTVUsU0FBTjtBQUFBLEdBUFE7QUFRbEJHLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU1ILFNBQU47QUFBQSxHQVJPO0FBU2xCZ0IsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTWhCLFNBQU47QUFBQSxHQVRLO0FBVWxCWCxFQUFBQSxLQUFLLEVBQUU7QUFBQSxXQUFNVyxTQUFOO0FBQUEsR0FWVztBQVdsQjBCLEVBQUFBLFVBQVUsRUFBRTtBQUFBLFdBQU0xQixTQUFOO0FBQUEsR0FYTTtBQVlsQjJCLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0zQixTQUFOO0FBQUEsR0FaTztBQWFsQjRCLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU01QixTQUFOO0FBQUE7QUFHYjs7Ozs7O0FBaEJzQixDOztBQStIbkIsSUFBTTZCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFJLHlCQUFRLCtCQUFpQkEsR0FBakIsQ0FBUixFQUErQixpQ0FBbUJBLEdBQW5CLENBQS9CLEVBQXdEbEQsTUFBeEQsQ0FBSjtBQUFBLENBQXZCOzs7ZUFFUUEsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGJvdW5kV2luZG93QWN0aW9ucywgYm91bmRXaW5kb3dQcm9wcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd1Byb3BzICAtIFByb3ByaWVkYWRlcyBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZSAtIFByb3ByaWVkYWRlcyBkZSBlc3RpbG8gZGEgamFuZWxhICh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSBUw610dWxvIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGZvb3RlciAtIFJvZGFww6kgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZSAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBhdGl2YVxuICogQHByb3BlcnR5IHtib29sZWFufSBtYXhpbWl6ZWQgLSBJbmRpY2Egc2UgYSBqYW5lbGEgZXN0w6EgbWF4aW1pemFkYVxuICogQHByb3BlcnR5IHtib29sZWFufSBtaW5pbWl6ZWQgLSBJbmRpY2Egc2UgYSBqYW5lbGEgZXN0w6EgbWluaW1pemFkYVxuICogQHByb3BlcnR5IHtib29sZWFufSByZXNpemVhYmxlIC0gSW5kaWNhIHNlIGEgamFuZWxhIMOpIHJlZGltZW5zaW9uw6F2ZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbW92ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgbW92aW1lbnTDoXZlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBtaW5pbWl6ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgbWluaW1pesOhdmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNsb3NlYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBmZWNow6F2ZWxcbiAqL1xuXG4gLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXaW5kb3dEYXRhIC0gRGFkb3MgZGUgdW1hIGphbmVsYSBhIHNlciBhYmVydGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBwcm9wcyAtIFByb3ByaWVkYWRlcyBkYSBKYW5lbGFcbiAqIEBwcm9wZXJ0eSB7Kn0gdGVtcGxhdGUgLSBDb21wb25lbnRlIHJlbmRlcml6w6F2ZWwgZGUgY29udGXDumRvIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtPYmplY3R9IHRlbXBsYXRlUHJvcHMgLSBQcm9wcmllZGFkZXMgYSBzZXJlbSBpbmpldGFkb3Mgbm8gdGVtcGxhdGVcbiAqL1xuXG4gLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXaW5kb3dTdGF0ZSBFc3RhZG8gZGUgdW1hIGphbmVsYSBhcm1hemVuYWRvIGVtIHVtIFN0b3JlIFJlZHV4LlxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgSWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBwcm9wcyBQcm9wcmllZGFkZXMgZGEgSmFuZWxhXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35Cb3VuZFdpbmRvd30gY29tcG9uZW50IENvbXBvbmVudGUgZGEgSmFuZWxhIGNvbmVjdGFkYSBhbyByZWR1eFxuICogQHByb3BlcnR5IHsqfSBjb250ZW50IENvbXBvbmVudGUgZG8gQ29udGXDumRvIGRhIEphbmVsYVxuICovXG5cbi8qKlxuICogSmFuZWxhIGRhIEFwbGljYcOnw6NvIEZlbmVzdHJhXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzIGRvIENvbXBvbmVudGUuXG4gICAgICovXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgYWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBtaW5pbWl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1heGltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3RhcnRNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3RhcnRSZXNpemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldExvYWRpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9wcmllZGFkZXMgcGFkcsOjbyBkbyBDb21wb25lbnRlXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIG9wZW46ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbWluaW1pemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbWF4aW1pemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3ZlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0UmVzaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGNsb3NlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldExvYWRpbmc6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0Rm9vdGVyOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldERhdGE6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZlY2hhIGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnRvIGdlcmFkbyBwZWxhIGHDp8Ojb1xuICAgICAqL1xuICAgIGNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZ2xvYmFsLmNvbmZpcm0odGhpcy5wcm9wcy5tc2dzLmNsb3NlRGlhbG9nICsgdGhpcy5wcm9wcy50aXRsZSArIFwiP1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYSBvIGVzdGFkbyBtYXhpbWl6YWRvIGRhIGphbmVsYTtcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50byBnZXJhZG8gcGVsYSBhw6fDo29cbiAgICAgKi9cbiAgICB0b2dnbGVNYXhpbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhpbWl6ZSghdGhpcy5wcm9wcy5tYXhpbWl6ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltaXphIGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnRvIGdlcmFkbyBwZWxhIGHDp8Ojb1xuICAgICAqL1xuICAgIG1pbmltaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaXphIG8gY29tcG9uZW50ZS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIFwiZmVuZXN0cmEtd2luZG93IFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuYWN0aXZlID8gXCJmZW5lc3RyYS13aW5kb3ctYWN0aXZlXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWF4aW1pemVkXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWluaW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWluaW1pemVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17IXRoaXMucHJvcHMubWF4aW1pemVkID8gdGhpcy5wcm9wcy5zdHlsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IHRoaXMucHJvcHMubWF4aW1pemVkID8gMCA6IHVuZGVmaW5lZCB9fVxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVNYXhpbWl6ZShlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5wcm9wcy5zdGFydE1vdmUoZS5wYWdlWCwgZS5wYWdlWSl9XG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zdGFydE1vdmUoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSl9XG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1oZWFkZXItdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctaGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMubXNncy5taW5pbWl6ZVdpbmRvd30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5taW5pbWl6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIn0gb25DbGljaz17KGUpID0+IHRoaXMubWluaW1pemUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1taW5pbWl6ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5tc2dzLm1heGltaXplV2luZG93fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnJlc2l6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIn0gb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTWF4aW1pemUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBmYS13aW5kb3ctXCIgKyAodGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyBcInJlc3RvcmVcIiA6IFwibWF4aW1pemVcIil9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5tc2dzLmNsb3NlV2luZG93fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsb3NlYWJsZSA/IFwiXCIgOiBcImQtbm9uZVwifSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVtb3ZlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMubXNncy5yZXNpemVXaW5kb3d9IHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LXJlc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KHsgcGFnZVgsIHBhZ2VZIH0pID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUocGFnZVgsIHBhZ2VZKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0UmVzaXplKGUudG91Y2hlc1swXS5wYWdlWCwgZS50b3VjaGVzWzBdLnBhZ2VZKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leHBhbmQgZmEtZmxpcC1ob3Jpem9udGFsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93fSBCb3VuZFdpbmRvdyBKYW5lbGEgQ29uZWN0YWRhIGFvIFN0b3JlIFJlZHV4XG4gKi9cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gY29tcG9uZW50ZSBjb20gYXMgcHJvcHJpZWRhZGVzIGxpZ2FkYXMgw6AgY2hhdmVcbiAqIHJlZHV4IGRhIGphbmVsYSBhYmVydGEgcGVsbyBGZW5lc3RyYS5cbiAqIEBjbGFzc1xuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgSWRlbnRpZmljYWRvciBkYSBqYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+Qm91bmRXaW5kb3d9IENvbXBvbmVudGUgY29tIGFzIHByb3ByaWVkYWRlcyBsaWdhZGFzIGFvIFJlZHV4XG4gKi9cbmV4cG9ydCBjb25zdCBCb3VuZFdpbmRvdyA9IGtleSA9PiBjb25uZWN0KGJvdW5kV2luZG93UHJvcHMoa2V5KSwgYm91bmRXaW5kb3dBY3Rpb25zKGtleSkpKFdpbmRvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdzsiXX0=