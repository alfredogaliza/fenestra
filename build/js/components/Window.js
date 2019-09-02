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

      var loading = this.props.isLoading ? _react.default.createElement("div", {
        className: "fenestra-loading"
      }, _react.default.createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : null;
      return _react.default.createElement("div", {
        className: "fenestra-window" + (this.props.active ? " fenestra-window-active" : "") + (this.props.maximized ? " fenestra-window-maximized" : "") + (this.props.noFooter ? " fenestra-window-nofooter" : "") + (this.props.minimized ? " fenestra-window-minimized" : ""),
        style: !this.props.maximized ? this.props.style : null,
        onMouseDown: function onMouseDown() {
          return _this3.props.activate();
        },
        onTouchStart: function onTouchStart() {
          return _this3.props.activate();
        }
      }, _react.default.createElement("div", {
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
      }, _react.default.createElement("span", {
        className: "fenestra-window-header-title"
      }, this.props.title), _react.default.createElement("div", {
        className: "fenestra-window-header-buttons"
      }, _react.default.createElement("button", {
        title: this.props.options.msgs.minimizeWindow,
        type: "button",
        className: this.props.minimizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.minimize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-minimize"
      })), "\xA0", _react.default.createElement("button", {
        title: this.props.options.msgs.maximizeWindow,
        type: "button",
        className: this.props.resizeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.toggleMaximize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-" + (this.props.maximized ? "restore" : "maximize")
      })), "\xA0", _react.default.createElement("button", {
        title: this.props.options.msgs.closeWindow,
        type: "button",
        className: this.props.closeable ? "" : "d-none",
        onClick: function onClick(e) {
          return _this3.close(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-remove"
      })))), _react.default.createElement("div", {
        className: "fenestra-window-body"
      }, this.props.children, loading), _react.default.createElement("div", {
        className: "fenestra-window-footer"
      }, this.props.footer, "\xA0"), _react.default.createElement("button", {
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
      }, _react.default.createElement("i", {
        className: "fa fa-expand fa-flip-horizontal"
      })));
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
  setData: _propTypes.default.func,
  options: _propTypes.default.object
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
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy5qc3giXSwibmFtZXMiOlsiV2luZG93IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9wdGlvbnMiLCJjb25maXJtT25DbG9zZSIsImdsb2JhbCIsImNvbmZpcm0iLCJtc2dzIiwiY2xvc2VEaWFsb2ciLCJ0aXRsZSIsImNsb3NlIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsIngiLCJ5IiwidGFwcGVkIiwidG9nZ2xlTWF4aW1pemUiLCJzZXRUaW1lb3V0Iiwic3RhcnRNb3ZlIiwibG9hZGluZyIsImlzTG9hZGluZyIsImFjdGl2ZSIsIm5vRm9vdGVyIiwibWluaW1pemVkIiwic3R5bGUiLCJhY3RpdmF0ZSIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsImUiLCJwYWdlWCIsInBhZ2VZIiwic3RhcnRUb3VjaCIsInRvdWNoZXMiLCJtaW5pbWl6ZVdpbmRvdyIsIm1pbmltaXplYWJsZSIsIm1heGltaXplV2luZG93IiwicmVzaXplYWJsZSIsImNsb3NlV2luZG93IiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyZXNpemVXaW5kb3ciLCJzdGFydFJlc2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJib29sIiwib3BlbiIsImZ1bmMiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsIm9iamVjdCIsIkJvdW5kV2luZG93Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBOzs7O0lBSU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REErQ00sVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLE1BQUFBLEtBQUss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QUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNaUIsU0FBTjtBQUFBLEdBUFE7QUFRbEJULEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU1TLFNBQU47QUFBQSxHQVJPO0FBU2xCZSxFQUFBQSxXQUFXLEVBQUU7QUFBQSxXQUFNZixTQUFOO0FBQUEsR0FUSztBQVVsQmxCLEVBQUFBLEtBQUssRUFBRTtBQUFBLFdBQU1rQixTQUFOO0FBQUEsR0FWVztBQVdsQnlCLEVBQUFBLFVBQVUsRUFBRTtBQUFBLFdBQU16QixTQUFOO0FBQUEsR0FYTTtBQVlsQjBCLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0xQixTQUFOO0FBQUEsR0FaTztBQWFsQjJCLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU0zQixTQUFOO0FBQUEsR0FiUztBQWNsQnpCLEVBQUFBLE9BQU8sRUFBRTtBQUdiOzs7Ozs7QUFqQnNCLEM7O0FBb0puQixJQUFNc0QsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFNBQUkseUJBQVEsK0JBQWlCQSxHQUFqQixDQUFSLEVBQStCLGlDQUFtQkEsR0FBbkIsQ0FBL0IsRUFBd0QzRCxNQUF4RCxDQUFKO0FBQUEsQ0FBdkI7OztlQUVRQSxNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgYm91bmRXaW5kb3dBY3Rpb25zLCBib3VuZFdpbmRvd1Byb3BzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93UHJvcHMgIC0gUHJvcHJpZWRhZGVzIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlIC0gUHJvcHJpZWRhZGVzIGRlIGVzdGlsbyBkYSBqYW5lbGEgKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZSAtIFTDrXR1bG8gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZm9vdGVyIC0gUm9kYXDDqSBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlIC0gSW5kaWNhIHNlIGEgamFuZWxhIGVzdMOhIGF0aXZhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1heGltaXplZCAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBtYXhpbWl6YWRhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pbmltaXplZCAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBtaW5pbWl6YWRhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlc2l6ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgcmVkaW1lbnNpb27DoXZlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBtb3ZlYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBtb3ZpbWVudMOhdmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pbmltaXplYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBtaW5pbWl6w6F2ZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2xvc2VhYmxlIC0gSW5kaWNhIHNlIGEgamFuZWxhIMOpIGZlY2jDoXZlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBub0Zvb3RlciAtIEluZGljYSBzZSBvIHJvZGFww6kgZGV2ZXLDoSBzZXIgb2N1bHRhZG9cbiAqL1xuXG4vKipcbiogQHR5cGVkZWYge09iamVjdH0gV2luZG93RGF0YSAtIERhZG9zIGRlIHVtYSBqYW5lbGEgYSBzZXIgYWJlcnRhXG4qIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBwcm9wcyAtIFByb3ByaWVkYWRlcyBkYSBKYW5lbGFcbiogQHByb3BlcnR5IHsqfSB0ZW1wbGF0ZSAtIENvbXBvbmVudGUgcmVuZGVyaXrDoXZlbCBkZSBjb250ZcO6ZG8gZGEgamFuZWxhXG4qIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZW1wbGF0ZVByb3BzIC0gUHJvcHJpZWRhZGVzIGEgc2VyZW0gaW5qZXRhZG9zIG5vIHRlbXBsYXRlXG4qL1xuXG4vKipcbiogQHR5cGVkZWYge09iamVjdH0gV2luZG93U3RhdGUgRXN0YWRvIGRlIHVtYSBqYW5lbGEgYXJtYXplbmFkbyBlbSB1bSBTdG9yZSBSZWR1eC5cbiogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgSWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIFByb3ByaWVkYWRlcyBkYSBKYW5lbGFcbiogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+Qm91bmRXaW5kb3d9IGNvbXBvbmVudCBDb21wb25lbnRlIGRhIEphbmVsYSBjb25lY3RhZGEgYW8gcmVkdXhcbiogQHByb3BlcnR5IHsqfSBjb250ZW50IENvbXBvbmVudGUgZG8gQ29udGXDumRvIGRhIEphbmVsYVxuKi9cblxuLyoqXG4gKiBKYW5lbGEgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmFcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFdpbmRvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZG8gQ29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1pbmltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF4aW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydFJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0TG9hZGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldEZvb3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldERhdGE6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvcHJpZWRhZGVzIHBhZHLDo28gZG8gQ29tcG9uZW50ZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRpdGxlOiB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBvcGVuOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGFjdGl2YXRlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG1pbmltaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG1heGltaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFJlc2l6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBjbG9zZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXRMb2FkaW5nOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldEZvb3RlcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXREYXRhOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG9wdGlvbnM6IHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmVjaGEgYSBqYW5lbGEuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudG8gZ2VyYWRvIHBlbGEgYcOnw6NvXG4gICAgICovXG4gICAgY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5vcHRpb25zLmNvbmZpcm1PbkNsb3NlIHx8IGdsb2JhbC5jb25maXJtKHRoaXMucHJvcHMub3B0aW9ucy5tc2dzLmNsb3NlRGlhbG9nICsgdGhpcy5wcm9wcy50aXRsZSArIFwiP1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYSBvIGVzdGFkbyBtYXhpbWl6YWRvIGRhIGphbmVsYTtcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50byBnZXJhZG8gcGVsYSBhw6fDo29cbiAgICAgKi9cbiAgICB0b2dnbGVNYXhpbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhpbWl6ZSghdGhpcy5wcm9wcy5tYXhpbWl6ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltaXphIGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnRvIGdlcmFkbyBwZWxhIGHDp8Ojb1xuICAgICAqL1xuICAgIG1pbmltaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHNlIGrDoSBob3V2ZSB1bSB0b3F1ZS4gVXRpbGl6YWRvIHBhcmEgZGV0ZWN0YXIgbyB0b3F1ZSBkdXBsby5cbiAgICAgKi9cbiAgICB0YXBwZWQgPSBmYWxzZTtcblxuICAgIHN0YXJ0VG91Y2goeCwgeSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFwcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1heGltaXplKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnRhcHBlZCA9IGZhbHNlIH0sIDMwMCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJ0TW92ZSh4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcml6YSBvIGNvbXBvbmVudGUuXG4gICAgICogQG1ldGhvZFxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcImZlbmVzdHJhLXdpbmRvd1wiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuYWN0aXZlICAgID8gXCIgZmVuZXN0cmEtd2luZG93LWFjdGl2ZVwiICAgIDogXCJcIikrXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1heGltaXplZCA/IFwiIGZlbmVzdHJhLXdpbmRvdy1tYXhpbWl6ZWRcIiA6IFwiXCIpK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5ub0Zvb3RlciAgPyBcIiBmZW5lc3RyYS13aW5kb3ctbm9mb290ZXJcIiAgOiBcIlwiKSsgXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1pbmltaXplZCA/IFwiIGZlbmVzdHJhLXdpbmRvdy1taW5pbWl6ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXshdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyB0aGlzLnByb3BzLnN0eWxlIDogbnVsbH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gdGhpcy5wcm9wcy5hY3RpdmF0ZSgpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4gdGhpcy5wcm9wcy5hY3RpdmF0ZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShlLnBhZ2VYLCBlLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtldmVudCA9PiB0aGlzLnN0YXJ0VG91Y2goZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSwgZXZlbnQpfVxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctaGVhZGVyLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWhlYWRlci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLm9wdGlvbnMubXNncy5taW5pbWl6ZVdpbmRvd30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5taW5pbWl6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIn0gb25DbGljaz17KGUpID0+IHRoaXMubWluaW1pemUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1taW5pbWl6ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17dGhpcy5wcm9wcy5vcHRpb25zLm1zZ3MubWF4aW1pemVXaW5kb3d9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMucmVzaXplYWJsZSA/IFwiXCIgOiBcImQtbm9uZVwifSBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVNYXhpbWl6ZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtcImZhIGZhLXdpbmRvdy1cIiArICh0aGlzLnByb3BzLm1heGltaXplZCA/IFwicmVzdG9yZVwiIDogXCJtYXhpbWl6ZVwiKX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLm9wdGlvbnMubXNncy5jbG9zZVdpbmRvd30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbG9zZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIn0gb25DbGljaz17KGUpID0+IHRoaXMuY2xvc2UoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlbW92ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctYm9keVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvb3Rlcn0mbmJzcDtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMub3B0aW9ucy5tc2dzLnJlc2l6ZVdpbmRvd30gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1yZXNpemVcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KHsgcGFnZVgsIHBhZ2VZIH0pID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUocGFnZVgsIHBhZ2VZKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUoZS50b3VjaGVzWzBdLnBhZ2VYLCBlLnRvdWNoZXNbMF0ucGFnZVkpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhwYW5kIGZhLWZsaXAtaG9yaXpvbnRhbFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93fSBCb3VuZFdpbmRvdyBKYW5lbGEgQ29uZWN0YWRhIGFvIFN0b3JlIFJlZHV4XG4gKi9cblxuLyoqXG4gKiBDcmlhIHVtIG5vdm8gY29tcG9uZW50ZSBjb20gYXMgcHJvcHJpZWRhZGVzIGxpZ2FkYXMgw6AgY2hhdmVcbiAqIHJlZHV4IGRhIGphbmVsYSBhYmVydGEgcGVsbyBGZW5lc3RyYS5cbiAqIEBjbGFzc1xuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgSWRlbnRpZmljYWRvciBkYSBqYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+Qm91bmRXaW5kb3d9IENvbXBvbmVudGUgY29tIGFzIHByb3ByaWVkYWRlcyBsaWdhZGFzIGFvIFJlZHV4XG4gKi9cbmV4cG9ydCBjb25zdCBCb3VuZFdpbmRvdyA9IGtleSA9PiBjb25uZWN0KGJvdW5kV2luZG93UHJvcHMoa2V5KSwgYm91bmRXaW5kb3dBY3Rpb25zKGtleSkpKFdpbmRvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdzsiXX0=