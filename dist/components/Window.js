"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bindWindow = void 0;

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
});

var bindWindow = function bindWindow(key) {
  var mapStateToProps = function mapStateToProps(state) {
    return {
      isLoading: state.fenestra.windows.find(function (window) {
        return window.key === key;
      }).isLoading
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, (0, _actions.boundWindowActions)(key))(Window);
};

exports.bindWindow = bindWindow;
var _default = Window;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy5qc3giXSwibmFtZXMiOlsiV2luZG93IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJnbG9iYWwiLCJjb25maXJtIiwicHJvcHMiLCJ0aXRsZSIsImNsb3NlIiwibWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJhY3RpdmUiLCJtaW5pbWl6ZWQiLCJzdHlsZSIsImFjdGl2YXRlIiwiYm9yZGVyUmFkaXVzIiwidW5kZWZpbmVkIiwiZSIsInRvZ2dsZU1heGltaXplIiwic3RhcnRNb3ZlIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoZXMiLCJtaW5pbWl6ZWFibGUiLCJyZXNpemVhYmxlIiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJzdGFydFJlc2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJib29sIiwib3BlbiIsImZ1bmMiLCJzZXRMb2FkaW5nIiwic2V0Rm9vdGVyIiwic2V0RGF0YSIsImJpbmRXaW5kb3ciLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwid2luZG93cyIsImZpbmQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFrQ00sVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLE1BQUFBLEtBQUssQ0FBQ0MsZUFBTjs7QUFDQSxVQUFJQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxnQ0FBZ0MsTUFBS0MsS0FBTCxDQUFXQyxLQUEzQyxHQUFtRCxHQUFsRSxDQUFKLEVBQTRFO0FBQ3hFLGNBQUtELEtBQUwsQ0FBV0UsS0FBWDtBQUNIO0FBQ0osSzs7cUVBRWdCLFVBQUNOLEtBQUQsRUFBVztBQUN4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TjtBQUFBLEdBUk87QUFTbEJZLEVBQUFBLFdBQVcsRUFBRTtBQUFBLFdBQU1aLFNBQU47QUFBQSxHQVRLO0FBVWxCWCxFQUFBQSxLQUFLLEVBQUU7QUFBQSxXQUFNVyxTQUFOO0FBQUEsR0FWVztBQVdsQnNCLEVBQUFBLFVBQVUsRUFBRTtBQUFBLFdBQU10QixTQUFOO0FBQUEsR0FYTTtBQVlsQnVCLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU12QixTQUFOO0FBQUEsR0FaTztBQWFsQndCLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU14QixTQUFOO0FBQUE7QUFiUyxDOztBQWlHbkIsSUFBTXlCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEdBQUcsRUFBSTtBQUU3QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxXQUFLO0FBQzlCbEMsTUFBQUEsU0FBUyxFQUFFa0MsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNOLEdBQVAsS0FBZUEsR0FBbkI7QUFBQSxPQUFsQyxFQUEwRGhDO0FBRHZDLEtBQUw7QUFBQSxHQUE3Qjs7QUFJQSxTQUFPLHlCQUFRaUMsZUFBUixFQUF5QixpQ0FBbUJELEdBQW5CLENBQXpCLEVBQWtENUMsTUFBbEQsQ0FBUDtBQUNILENBUE07OztlQVNRQSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgYm91bmRXaW5kb3dBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIFdpbmRvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1pbmltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF4aW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydFJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0TG9hZGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldEZvb3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNldERhdGE6IFByb3BUeXBlcy5mdW5jLFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRpdGxlOiBcIk5vdmEgSmFuZWxhXCIsXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBvcGVuOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGFjdGl2YXRlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG1pbmltaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG1heGltaXplOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFJlc2l6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBjbG9zZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXRMb2FkaW5nOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldEZvb3RlcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzZXREYXRhOiAoKSA9PiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGdsb2JhbC5jb25maXJtKFwiRGVzZWphIGZlY2hhciBlc3RhIGphbmVsYTogXCIgKyB0aGlzLnByb3BzLnRpdGxlICsgXCI/XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNYXhpbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhpbWl6ZSghdGhpcy5wcm9wcy5tYXhpbWl6ZWQpO1xuICAgIH1cblxuICAgIG1pbmltaXplID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIFwiZmVuZXN0cmEtd2luZG93IFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuYWN0aXZlID8gXCJmZW5lc3RyYS13aW5kb3ctYWN0aXZlXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWF4aW1pemVkXCIgOiBcIlwiKSArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWluaW1pemVkID8gXCJmZW5lc3RyYS13aW5kb3ctbWluaW1pemVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17IXRoaXMucHJvcHMubWF4aW1pemVkID8gdGhpcy5wcm9wcy5zdHlsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShlLnBhZ2VYLCBlLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtldmVudCA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LXRpdGxlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMubWluaW1pemVhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5taW5pbWl6ZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LW1pbmltaXplXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXdoaXRlIGJ0bi1zbSBcIiArICh0aGlzLnByb3BzLnJlc2l6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIil9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgZmEtd2luZG93LVwiICsgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJyZXN0b3JlXCIgOiBcIm1heGltaXplXCIpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMuY2xvc2VhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVtb3ZlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctcmVzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoeyBwYWdlWCwgcGFnZVkgfSkgPT4gdGhpcy5wcm9wcy5zdGFydFJlc2l6ZShwYWdlWCwgcGFnZVkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUoZS50b3VjaGVzWzBdLnBhZ2VYLCBlLnRvdWNoZXNbMF0ucGFnZVkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV4cGFuZCBmYS1mbGlwLWhvcml6b250YWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBiaW5kV2luZG93ID0ga2V5ID0+IHtcblxuICAgIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuZmVuZXN0cmEud2luZG93cy5maW5kKHdpbmRvdyA9PiB3aW5kb3cua2V5ID09PSBrZXkpLmlzTG9hZGluZ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBib3VuZFdpbmRvd0FjdGlvbnMoa2V5KSkoV2luZG93KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93OyJdfQ==