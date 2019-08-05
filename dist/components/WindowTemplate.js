"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

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
 * props: {
 *   title: string,
 *   children: React,
 *   minimized: bool,
 *   maximized: bool,
 *   moveable: bool,
 *   active: bool,
 *   resizeable: bool,
 *   activate: () => void,
 *   minimize: () => void,
 *   maximize: () => void,
 *   deminimize: () => void,
 *   demaximize: () => void,
 *   close: () => void,
 *   startResize: (x, y) => void,
 *   style: {
 *    top: int,
 *    left: int,
 *    width: int,
 *    height: int,
 *    zIndex: int
 *   }
 * }
 * 
 * 
 */
var WindowTemplate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowTemplate, _React$Component);

  function WindowTemplate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WindowTemplate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WindowTemplate)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(WindowTemplate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        position: this.props.maximized ? 'absolute' : 'absolute',
        top: this.props.maximized ? 0 : this.props.moveable ? this.props.style.top : (global.window.innerHeight - 50 - this.props.style.height) / 2,
        left: this.props.maximized ? 0 : this.props.moveable ? this.props.style.left : (global.window.innerWidth - this.props.style.width) / 2,
        width: this.props.maximized ? undefined : this.props.style.width,
        height: this.props.maximized ? undefined : this.props.style.height,
        right: this.props.maximized ? 0 : undefined,
        bottom: this.props.maximized ? 0 : undefined,
        display: this.props.minimized ? 'none' : 'flex',
        zIndex: this.props.style.zIndex,
        border: this.props.maximized ? 'none' : undefined,
        borderRadius: this.props.maximized ? 0 : undefined
      };
      var loading = this.props.isLoading ? _react["default"].createElement("div", {
        className: "fenestra-loading"
      }, _react["default"].createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : null;
      return _react["default"].createElement("div", {
        className: "fenestra-window",
        style: style,
        onMouseDown: function onMouseDown() {
          return _this2.props.activate();
        }
      }, _react["default"].createElement("div", {
        className: "fenestra-window-title fenestra-window-title-" + (this.props.active ? "active" : "inactive"),
        style: {
          borderRadius: this.props.maximized ? 0 : undefined
        },
        onDoubleClick: function onDoubleClick(e) {
          return _this2.toggleMaximize(e);
        },
        onMouseDown: function onMouseDown(e) {
          return _this2.props.startMove(e.pageX, e.pageY);
        }
      }, _react["default"].createElement("span", null, this.props.title), _react["default"].createElement("div", {
        className: "fenestra-window-title-buttons"
      }, _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.minimizeable ? "" : "d-none"),
        onClick: function onClick(e) {
          return _this2.minimize(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-window-minimize"
      })), "\xA0", _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.resizeable ? "" : "d-none"),
        onClick: function onClick(e) {
          return _this2.toggleMaximize(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-window-" + (this.props.maximized ? "restore" : "maximize")
      })), "\xA0", _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary text-white btn-sm " + (this.props.closeable ? "" : "d-none"),
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-remove"
      })))), _react["default"].createElement("div", {
        className: "fenestra-window-body"
      }, this.props.children, loading), _react["default"].createElement("div", {
        className: "fenestra-window-footer"
      }, this.props.footer, _react["default"].createElement("button", {
        type: "button",
        style: {
          display: this.props.maximized || !this.props.resizeable ? 'none' : 'block'
        },
        className: "fenestra-window-resize",
        onMouseDown: function onMouseDown(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this2.props.startResize(pageX, pageY);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-expand fa-flip-horizontal"
      }))));
    }
  }]);

  return WindowTemplate;
}(_react["default"].Component);

var Window = function Window(key) {
  var mapStateToProps = function mapStateToProps(state) {
    return {
      isLoading: state.fenestra.windows.find(function (window) {
        return window.key === key;
      }).isLoading
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, (0, _actions.boundWindowActions)(key))(WindowTemplate);
};

var _default = Window;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd1RlbXBsYXRlLmpzeCJdLCJuYW1lcyI6WyJXaW5kb3dUZW1wbGF0ZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2xvYmFsIiwiY29uZmlybSIsInByb3BzIiwidGl0bGUiLCJjbG9zZSIsIm1heGltaXplIiwibWF4aW1pemVkIiwibWluaW1pemUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibW92ZWFibGUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImhlaWdodCIsImxlZnQiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJyaWdodCIsImJvdHRvbSIsImRpc3BsYXkiLCJtaW5pbWl6ZWQiLCJ6SW5kZXgiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJsb2FkaW5nIiwiaXNMb2FkaW5nIiwiYWN0aXZhdGUiLCJhY3RpdmUiLCJlIiwidG9nZ2xlTWF4aW1pemUiLCJzdGFydE1vdmUiLCJwYWdlWCIsInBhZ2VZIiwibWluaW1pemVhYmxlIiwicmVzaXplYWJsZSIsImNsb3NlYWJsZSIsImNoaWxkcmVuIiwiZm9vdGVyIiwic3RhcnRSZXNpemUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldpbmRvdyIsImtleSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZmVuZXN0cmEiLCJ3aW5kb3dzIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJNQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBRU0sVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLE1BQUFBLEtBQUssQ0FBQ0MsZUFBTjs7QUFDQSxVQUFJQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxnQ0FBZ0MsTUFBS0MsS0FBTCxDQUFXQyxLQUEzQyxHQUFtRCxHQUFsRSxDQUFKLEVBQTRFO0FBQ3hFLGNBQUtELEtBQUws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bkIsTUFBQUEsU0FBUyxFQUFFbUIsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLFVBQUFyQyxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDZ0MsR0FBUCxLQUFlQSxHQUFuQjtBQUFBLE9BQWxDLEVBQTBEakI7QUFEdkMsS0FBTDtBQUFBLEdBQTdCOztBQUlBLFNBQU8seUJBQVFrQixlQUFSLEVBQXlCLGlDQUFtQkQsR0FBbkIsQ0FBekIsRUFBa0QvQyxjQUFsRCxDQUFQO0FBQ0gsQ0FQRDs7ZUFTZThDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYm91bmRXaW5kb3dBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8qKlxuICogcHJvcHM6IHtcbiAqICAgdGl0bGU6IHN0cmluZyxcbiAqICAgY2hpbGRyZW46IFJlYWN0LFxuICogICBtaW5pbWl6ZWQ6IGJvb2wsXG4gKiAgIG1heGltaXplZDogYm9vbCxcbiAqICAgbW92ZWFibGU6IGJvb2wsXG4gKiAgIGFjdGl2ZTogYm9vbCxcbiAqICAgcmVzaXplYWJsZTogYm9vbCxcbiAqICAgYWN0aXZhdGU6ICgpID0+IHZvaWQsXG4gKiAgIG1pbmltaXplOiAoKSA9PiB2b2lkLFxuICogICBtYXhpbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgZGVtaW5pbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgZGVtYXhpbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgY2xvc2U6ICgpID0+IHZvaWQsXG4gKiAgIHN0YXJ0UmVzaXplOiAoeCwgeSkgPT4gdm9pZCxcbiAqICAgc3R5bGU6IHtcbiAqICAgIHRvcDogaW50LFxuICogICAgbGVmdDogaW50LFxuICogICAgd2lkdGg6IGludCxcbiAqICAgIGhlaWdodDogaW50LFxuICogICAgekluZGV4OiBpbnRcbiAqICAgfVxuICogfVxuICogXG4gKiBcbiAqL1xuY2xhc3MgV2luZG93VGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChnbG9iYWwuY29uZmlybShcIkRlc2VqYSBmZWNoYXIgZXN0YSBqYW5lbGE6IFwiICsgdGhpcy5wcm9wcy50aXRsZSArIFwiP1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWF4aW1pemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMubWF4aW1pemUoIXRoaXMucHJvcHMubWF4aW1pemVkKTtcbiAgICB9XG5cbiAgICBtaW5pbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLm1heGltaXplZCA/ICdhYnNvbHV0ZScgOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnByb3BzLm1heGltaXplZCA/IDAgOlxuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1vdmVhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS50b3AgOlxuICAgICAgICAgICAgICAgICAgICAoZ2xvYmFsLndpbmRvdy5pbm5lckhlaWdodCAtIDUwIC0gdGhpcy5wcm9wcy5zdHlsZS5oZWlnaHQpIC8gMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnByb3BzLm1heGltaXplZCA/IDAgOlxuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1vdmVhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS5sZWZ0IDpcbiAgICAgICAgICAgICAgICAgICAgKGdsb2JhbC53aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMucHJvcHMuc3R5bGUud2lkdGgpIC8gMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyB1bmRlZmluZWQgOiB0aGlzLnByb3BzLnN0eWxlLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1heGltaXplZCA/IHVuZGVmaW5lZCA6IHRoaXMucHJvcHMuc3R5bGUuaGVpZ2h0LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucHJvcHMubWF4aW1pemVkID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5taW5pbWl6ZWQgPyAnbm9uZScgOiAnZmxleCcsXG4gICAgICAgICAgICB6SW5kZXg6IHRoaXMucHJvcHMuc3R5bGUuekluZGV4LFxuICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnByb3BzLm1heGltaXplZCA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3dcIiBzdHlsZT17c3R5bGV9IG9uTW91c2VEb3duPXsoKSA9PiB0aGlzLnByb3BzLmFjdGl2YXRlKCl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZlbmVzdHJhLXdpbmRvdy10aXRsZSBmZW5lc3RyYS13aW5kb3ctdGl0bGUtXCIgKyAodGhpcy5wcm9wcy5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiKX0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiB0aGlzLnByb3BzLm1heGltaXplZCA/IDAgOiB1bmRlZmluZWQgfX0gb25Eb3VibGVDbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTWF4aW1pemUoZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucHJvcHMuc3RhcnRNb3ZlKGUucGFnZVgsIGUucGFnZVkpfT5cblxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctdGl0bGUtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC13aGl0ZSBidG4tc20gXCIgKyAodGhpcy5wcm9wcy5taW5pbWl6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIil9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm1pbmltaXplKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aW5kb3ctbWluaW1pemVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMucmVzaXplYWJsZSA/IFwiXCIgOiBcImQtbm9uZVwiKX0gb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTWF4aW1pemUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBmYS13aW5kb3ctXCIgKyAodGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyBcInJlc3RvcmVcIiA6IFwibWF4aW1pemVcIil9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC13aGl0ZSBidG4tc20gXCIgKyAodGhpcy5wcm9wcy5jbG9zZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIil9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsb3NlKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZW1vdmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS13aW5kb3ctZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvb3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICgodGhpcy5wcm9wcy5tYXhpbWl6ZWQgfHwgIXRoaXMucHJvcHMucmVzaXplYWJsZSkgPyAnbm9uZScgOiAnYmxvY2snKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LXJlc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KHsgcGFnZVgsIHBhZ2VZIH0pID0+IHRoaXMucHJvcHMuc3RhcnRSZXNpemUocGFnZVgsIHBhZ2VZKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leHBhbmQgZmEtZmxpcC1ob3Jpem9udGFsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBXaW5kb3cgPSBrZXkgPT4ge1xuXG4gICAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGtleSkuaXNMb2FkaW5nXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGJvdW5kV2luZG93QWN0aW9ucyhrZXkpKShXaW5kb3dUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdzsiXX0=