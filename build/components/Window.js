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

      if (global.confirm("Deseja fechar esta janela: " + _this.props.title + "?")) {
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
        className: "fenestra-window-title",
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
      }, _react.default.createElement("span", null, this.props.title), _react.default.createElement("div", {
        className: "fenestra-window-title-buttons"
      }, _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.minimizeable ? "" : "d-none"),
        onClick: function onClick(e) {
          return _this2.minimize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-minimize"
      })), "\xA0", _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.resizeable ? "" : "d-none"),
        onClick: function onClick(e) {
          return _this2.toggleMaximize(e);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-window-" + (this.props.maximized ? "restore" : "maximize")
      })), "\xA0", _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.closeable ? "" : "d-none"),
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
  title: "Nova Janela",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy5qc3giXSwibmFtZXMiOlsiV2luZG93IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJnbG9iYWwiLCJjb25maXJtIiwicHJvcHMiLCJ0aXRsZSIsImNsb3NlIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJhY3RpdmUiLCJtaW5pbWl6ZWQiLCJzdHlsZSIsImFjdGl2YXRlIiwiYm9yZGVyUmFkaXVzIiwidW5kZWZpbmVkIiwiZSIsInRvZ2dsZU1heGltaXplIiwic3RhcnRNb3ZlIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoZXMiLCJtaW5pbWl6ZWFibGUiLCJyZXNpemVhYmxlIiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJzdGFydFJlc2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJib29sIiwib3BlbiIsImZ1bmMiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsIkJvdW5kV2luZG93Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNDOzs7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUQ7Ozs7SUFJTUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQTZDTSxVQUFDQyxLQUFELEVBQVc7QUFDZkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLGdDQUFnQyxNQUFLQyxLQUFMLENBQVdDLEtBQTNDLEdBQW1ELEdBQWxFLENBQUosRUFBNEU7QUFDeEUsY0FBS0QsS0FBTCxDQUFXRSxLQUFYO0FBQ0g7QUFDSixLOztxRUFPZ0IsVUFBQ04sS0FBRCxFQUFXO0FBQ3hCQSxNQUFBQSxLQUFL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QUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNSCxTQUFOO0FBQUEsR0FSTztBQVNsQlksRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTVosU0FBTjtBQUFBLEdBVEs7QUFVbEJYLEVBQUFBLEtBQUssRUFBRTtBQUFBLFdBQU1XLFNBQU47QUFBQSxHQVZXO0FBV2xCc0IsRUFBQUEsVUFBVSxFQUFFO0FBQUEsV0FBTXRCLFNBQU47QUFBQSxHQVhNO0FBWWxCdUIsRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTXZCLFNBQU47QUFBQSxHQVpPO0FBYWxCd0IsRUFBQUEsT0FBTyxFQUFFO0FBQUEsV0FBTXhCLFNBQU47QUFBQTtBQUdiOzs7Ozs7QUFoQnNCLEM7O0FBK0huQixJQUFNeUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFNBQUkseUJBQVEsK0JBQWlCQSxHQUFqQixDQUFSLEVBQStCLGlDQUFtQkEsR0FBbkIsQ0FBL0IsRUFBd0Q1QyxNQUF4RCxDQUFKO0FBQUEsQ0FBdkI7OztlQUVRQSxNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgYm91bmRXaW5kb3dBY3Rpb25zLCBib3VuZFdpbmRvd1Byb3BzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93UHJvcHMgIC0gUHJvcHJpZWRhZGVzIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlIC0gUHJvcHJpZWRhZGVzIGRlIGVzdGlsbyBkYSBqYW5lbGEgKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZSAtIFTDrXR1bG8gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZm9vdGVyIC0gUm9kYXDDqSBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlIC0gSW5kaWNhIHNlIGEgamFuZWxhIGVzdMOhIGF0aXZhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1heGltaXplZCAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBtYXhpbWl6YWRhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pbmltaXplZCAtIEluZGljYSBzZSBhIGphbmVsYSBlc3TDoSBtaW5pbWl6YWRhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlc2l6ZWFibGUgLSBJbmRpY2Egc2UgYSBqYW5lbGEgw6kgcmVkaW1lbnNpb27DoXZlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBtb3ZlYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBtb3ZpbWVudMOhdmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG1pbmltaXplYWJsZSAtIEluZGljYSBzZSBhIGphbmVsYSDDqSBtaW5pbWl6w6F2ZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2xvc2VhYmxlIC0gSW5kaWNhIHNlIGEgamFuZWxhIMOpIGZlY2jDoXZlbFxuICovXG5cbiAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd0RhdGEgLSBEYWRvcyBkZSB1bWEgamFuZWxhIGEgc2VyIGFiZXJ0YVxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIC0gUHJvcHJpZWRhZGVzIGRhIEphbmVsYVxuICogQHByb3BlcnR5IHsqfSB0ZW1wbGF0ZSAtIENvbXBvbmVudGUgcmVuZGVyaXrDoXZlbCBkZSBjb250ZcO6ZG8gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGVtcGxhdGVQcm9wcyAtIFByb3ByaWVkYWRlcyBhIHNlcmVtIGluamV0YWRvcyBubyB0ZW1wbGF0ZVxuICovXG5cbiAvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd1N0YXRlIEVzdGFkbyBkZSB1bWEgamFuZWxhIGFybWF6ZW5hZG8gZW0gdW0gU3RvcmUgUmVkdXguXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSBJZGVudGlmaWNhZG9yIGRhIEphbmVsYVxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIFByb3ByaWVkYWRlcyBkYSBKYW5lbGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fkJvdW5kV2luZG93fSBjb21wb25lbnQgQ29tcG9uZW50ZSBkYSBKYW5lbGEgY29uZWN0YWRhIGFvIHJlZHV4XG4gKiBAcHJvcGVydHkgeyp9IGNvbnRlbnQgQ29tcG9uZW50ZSBkbyBDb250ZcO6ZG8gZGEgSmFuZWxhXG4gKi9cblxuLyoqXG4gKiBKYW5lbGEgZGEgQXBsaWNhw6fDo28gRmVuZXN0cmFcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFdpbmRvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wVHlwZXMgZG8gQ29tcG9uZW50ZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1pbmltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF4aW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydFJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0TG9hZGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldEZvb3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldERhdGE6IFByb3BUeXBlcy5mdW5jLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ByaWVkYWRlcyBwYWRyw6NvIGRvIENvbXBvbmVudGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0aXRsZTogXCJOb3ZhIEphbmVsYVwiLFxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgb3BlbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtaW5pbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtYXhpbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRSZXNpemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgY2xvc2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0TG9hZGluZzogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXRGb290ZXI6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0RGF0YTogKCkgPT4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmVjaGEgYSBqYW5lbGEuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudG8gZ2VyYWRvIHBlbGEgYcOnw6NvXG4gICAgICovXG4gICAgY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChnbG9iYWwuY29uZmlybShcIkRlc2VqYSBmZWNoYXIgZXN0YSBqYW5lbGE6IFwiICsgdGhpcy5wcm9wcy50aXRsZSArIFwiP1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYSBvIGVzdGFkbyBtYXhpbWl6YWRvIGRhIGphbmVsYTtcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50byBnZXJhZG8gcGVsYSBhw6fDo29cbiAgICAgKi9cbiAgICB0b2dnbGVNYXhpbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhpbWl6ZSghdGhpcy5wcm9wcy5tYXhpbWl6ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltaXphIGEgamFuZWxhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnRvIGdlcmFkbyBwZWxhIGHDp8Ojb1xuICAgICAqL1xuICAgIG1pbmltaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaXphIG8gY29tcG9uZW50ZS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIFwiZmVuZXN0cmEtd2luZG93IFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuYWN0aXZlID8gXCJmZW5lc3RyYS13aW5kb3ctYWN0aXZlXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWF4aW1pemVkXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWluaW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWluaW1pemVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17IXRoaXMucHJvcHMubWF4aW1pemVkID8gdGhpcy5wcm9wcy5zdHlsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShlLnBhZ2VYLCBlLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtldmVudCA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LXRpdGxlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMubWluaW1pemVhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5taW5pbWl6ZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LW1pbmltaXplXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXdoaXRlIGJ0bi1zbSBcIiArICh0aGlzLnByb3BzLnJlc2l6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIil9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgZmEtd2luZG93LVwiICsgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJyZXN0b3JlXCIgOiBcIm1heGltaXplXCIpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMuY2xvc2VhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVtb3ZlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctcmVzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoeyBwYWdlWCwgcGFnZVkgfSkgPT4gdGhpcy5wcm9wcy5zdGFydFJlc2l6ZShwYWdlWCwgcGFnZVkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUoZS50b3VjaGVzWzBdLnBhZ2VYLCBlLnRvdWNoZXNbMF0ucGFnZVkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV4cGFuZCBmYS1mbGlwLWhvcml6b250YWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3d9IEJvdW5kV2luZG93IEphbmVsYSBDb25lY3RhZGEgYW8gU3RvcmUgUmVkdXhcbiAqL1xuXG4vKipcbiAqIENyaWEgdW0gbm92byBjb21wb25lbnRlIGNvbSBhcyBwcm9wcmllZGFkZXMgbGlnYWRhcyDDoCBjaGF2ZVxuICogcmVkdXggZGEgamFuZWxhIGFiZXJ0YSBwZWxvIEZlbmVzdHJhLlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSBJZGVudGlmaWNhZG9yIGRhIGphbmVsYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35Cb3VuZFdpbmRvd30gQ29tcG9uZW50ZSBjb20gYXMgcHJvcHJpZWRhZGVzIGxpZ2FkYXMgYW8gUmVkdXhcbiAqL1xuZXhwb3J0IGNvbnN0IEJvdW5kV2luZG93ID0ga2V5ID0+IGNvbm5lY3QoYm91bmRXaW5kb3dQcm9wcyhrZXkpLCBib3VuZFdpbmRvd0FjdGlvbnMoa2V5KSkoV2luZG93KTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93OyJdfQ==