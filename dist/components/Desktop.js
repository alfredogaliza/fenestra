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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Desktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Desktop, _React$Component);

  function Desktop(props) {
    var _this;

    _classCallCheck(this, Desktop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Desktop).call(this, props));
    _this.windowsRef = _react.default.createRef();
    return _this;
  }

  _createClass(Desktop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isMaximized) {
        this.windowsRef.current.scrollTop = 0;
        this.windowsRef.current.scrollLeft = 0;
      }
    }
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
});

var _default = (0, _reactRedux.connect)(_actions.boundDesktopProps, _actions.boundDesktopActions)(Desktop);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJwcm9wcyIsIndpbmRvd3NSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImlzTWF4aW1pemVkIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJpY29ucyIsIm1hcCIsImljb24iLCJrZXkiLCJvcGVuSWNvbiIsInRpdGxlIiwid2luZG93cyIsIndpbmRvdyIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImNvbnRlbnQiLCJpc01vdmluZyIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlIiwiZXZlbnQiLCJ0b3VjaGVzIiwiZW5kTW92ZSIsIm1pbmltaXplIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImljb25Qcm9wVHlwZXMiLCJ3aW5kb3dTdGF0ZVByb3BUeXBlcyIsImJvb2wiLCJvcGVuIiwiZnVuYyIsImFjdGl2YXRlIiwibWF4aW1pemUiLCJzdGFydE1vdmUiLCJzdGFydFJlc2l6ZSIsImNsb3NlIiwic2V0TG9hZGluZyIsInNldEZvb3RlciIsInNldERhdGEiLCJ1bmRlZmluZWQiLCJib3VuZERlc2t0b3BQcm9wcyIsImJvdW5kRGVza3RvcEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFFRixtQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLGlGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkMsZUFBTUMsU0FBTixFQUFsQjtBQUZjO0FBR2pCOzs7O3lDQUVvQjtBQUNqQixVQUFJLEtBQUtILEtBQUwsQ0FBV0ksV0FBZixFQUEyQjtBQUN2QixhQUFLSCxVQUFMLENBQWdCSSxPQUFoQixDQUF3QkMsU0FBeEIsR0FBb0MsQ0FBcEM7QUFDQSxhQUFLTCxVQUFMLENBQWdCSSxPQUFoQixDQUF3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UUFBUSxFQUFFO0FBQUEsV0FBTVEsU0FBTjtBQUFBLEdBUFE7QUFRbEJoQixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNZ0IsU0FBTjtBQUFBLEdBUlE7QUFTbEJQLEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU1PLFNBQU47QUFBQSxHQVRRO0FBVWxCTixFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNTSxTQUFOO0FBQUEsR0FWTztBQVdsQkwsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTUssU0FBTjtBQUFBLEdBWEs7QUFZbEJwQixFQUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFNb0IsU0FBTjtBQUFBLEdBWlk7QUFhbEJqQixFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFNaUIsU0FBTjtBQUFBLEdBYlM7QUFjbEJKLEVBQUFBLEtBQUssRUFBRTtBQUFBLFdBQU1JLFNBQU47QUFBQSxHQWRXO0FBZWxCSCxFQUFBQSxVQUFVLEVBQUU7QUFBQSxXQUFNRyxTQUFOO0FBQUEsR0FmTTtBQWdCbEJGLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU1FLFNBQU47QUFBQSxHQWhCTztBQWlCbEJELEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU1DLFNBQU47QUFBQTtBQWpCUyxDOztlQTZEWCx5QkFBUUMsMEJBQVIsRUFBMkJDLDRCQUEzQixFQUFnRDdDLE9BQWhELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGJvdW5kRGVza3RvcEFjdGlvbnMsIGJvdW5kRGVza3RvcFByb3BzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmltcG9ydCBUYXNrYmFyIGZyb20gXCIuL1Rhc2tiYXJcIjtcbmltcG9ydCB7IGljb25Qcm9wVHlwZXMsIHdpbmRvd1N0YXRlUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbmNsYXNzIERlc2t0b3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMud2luZG93c1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNNYXhpbWl6ZWQpe1xuICAgICAgICAgICAgdGhpcy53aW5kb3dzUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMud2luZG93c1JlZi5jdXJyZW50LnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWNvbnM6IFByb3BUeXBlcy5hcnJheU9mKGljb25Qcm9wVHlwZXMpLFxuICAgICAgICB3aW5kb3dzOiBQcm9wVHlwZXMuYXJyYXlPZih3aW5kb3dTdGF0ZVByb3BUeXBlcyksXG4gICAgICAgIGlzTW92aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaXNNYXhpbWl6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb3Blbkljb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhY3RpdmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1pbmltaXplOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF4aW1pemU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdGFydFJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBlbmRNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXRMb2FkaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0Rm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2V0RGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpY29uczogW10sXG4gICAgICAgIHdpbmRvd3M6IFtdLFxuICAgICAgICBpc01vdmluZzogZmFsc2UsXG4gICAgICAgIGlzTWF4aW1pemVkOiBmYWxzZSxcbiAgICAgICAgb3BlbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvcGVuSWNvbjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtaW5pbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBtYXhpbWl6ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRSZXNpemU6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgbW92ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBlbmRNb3ZlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIGNsb3NlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldExvYWRpbmc6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0Rm9vdGVyOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIHNldERhdGE6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBpY29ucyA9IHRoaXMucHJvcHMuaWNvbnMubWFwKChpY29uLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2tleX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBmZW5lc3RyYS1kZXNrdG9wLWljb25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5JY29uKGljb24pfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uLmljb259PjwvaT48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic21hbGxcIj57aWNvbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSB0aGlzLnByb3BzLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBDb21wb25lbnQgPSB3aW5kb3cuY29tcG9uZW50O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGtleT17d2luZG93LmtleX0gey4uLndpbmRvdy5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3cuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L0NvbXBvbmVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmZW5lc3RyYS1kZXNrdG9wXCIrKHRoaXMucHJvcHMuaXNNYXhpbWl6ZWQ/IFwiIGZlbmVzdHJhLWRlc2t0b3AtbWF4aW1pemVkXCIgOiBcIlwiKSsodGhpcy5wcm9wcy5pc01vdmluZz8gXCIgZmVuZXN0cmEtZGVza3RvcC1tb3ZpbmdcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBwYWdlWCwgcGFnZVkgfSkgPT4gdGhpcy5wcm9wcy5tb3ZlKHBhZ2VYLCBwYWdlWSl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e2V2ZW50ID0+IHRoaXMucHJvcHMubW92ZShldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaENhbmNlbD17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1kZXNrdG9wLXdpbmRvd3NcIiByZWY9e3RoaXMud2luZG93c1JlZn0+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3dzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC1pY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbnN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRhc2tiYXIgbWluaW1pemU9eyhrZXksIG1pbmltaXplKSA9PiB0aGlzLnByb3BzLm1pbmltaXplKGtleSwgbWluaW1pemUpfSAvPlxuICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChib3VuZERlc2t0b3BQcm9wcywgYm91bmREZXNrdG9wQWN0aW9ucykoRGVza3RvcCk7Il19