"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _Taskbar = _interopRequireDefault(require("./Taskbar"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Desktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Desktop, _React$Component);

  function Desktop(props) {
    var _this;

    _classCallCheck(this, Desktop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Desktop).call(this, props));

    _this.props.setData(_this.props.data);

    return _this;
  }

  _createClass(Desktop, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var icons = this.props.icons.map(function (icon, key) {
        return _react["default"].createElement(_Icon["default"], {
          key: key,
          open: function open() {
            return _this2.props.openIcon(icon);
          },
          icon: icon.icon,
          title: icon.title
        });
      });
      var windows = this.props.windows.map(function (window) {
        var Component = window.component;
        return _react["default"].createElement(Component, _extends({
          key: window.key
        }, window.props), window.content);
      });
      var background = this.props.background ? _react["default"].createElement("img", {
        src: this.props.background,
        alt: "Desktop Background",
        className: "fenestra-desktop-background"
      }) : null;
      return _react["default"].createElement("div", {
        className: "fenestra-desktop",
        onMouseMove: function onMouseMove(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this2.props.move(pageX, pageY);
        },
        onMouseUp: function onMouseUp() {
          return _this2.props.endMove();
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.props.endMove();
        }
      }, background, _react["default"].createElement("div", {
        className: "fenestra-desktop-icons"
      }, icons), windows, _react["default"].createElement(_Taskbar["default"], {
        minimize: function minimize(key, _minimize) {
          return _this2.props.minimize(key, _minimize);
        }
      }));
    }
  }]);

  return Desktop;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    isLoading: state.fenestra.isLoading
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, _actions.boundDesktopActions)(Desktop);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJwcm9wcyIsInNldERhdGEiLCJkYXRhIiwiaWNvbnMiLCJtYXAiLCJpY29uIiwia2V5Iiwib3Blbkljb24iLCJ0aXRsZSIsIndpbmRvd3MiLCJ3aW5kb3ciLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250ZW50IiwiYmFja2dyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlIiwiZW5kTW92ZSIsIm1pbmltaXplIiwiUmVhY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwiaXNMb2FkaW5nIiwiYm91bmREZXNrdG9wQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFFRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGlGQUFNQSxLQUFOOztBQUNBLFVBQUtBLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixNQUFLRCxLQUFMLENBQVdFLElBQTlCOztBQUZlO0FBR2xCOzs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBTUMsS0FBSyxHQUFHLEtBQUtILEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDOUMsZUFBTyxnQ0FBQyxnQkFBRDtBQUNILFVBQUEsR0FBRyxFQUFFQSxHQURGO0FBRUgsVUFBQSxJQUFJLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNOLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkYsSUFBcEIsQ0FBTjtBQUFBLFdBRkg7QUFHSCxVQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUhSO0FBSUgsVUFBQSxLQUFLLEVBQUVBLElBQUksQ0FBQ0c7QUFKVCxVQUFQO0FBTUgsT0FQYSxDQUFkO0FBU0EsVUFBTUMsT0FBTyxHQUFHLEtBQUtULEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkwsR0FBbkIsQ0FBdUIsVUFBQU0sTUFBTSxFQUFJO0FBQzdDLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxTQUF6QjtBQUNBLGVBQ0ksZ0NBQUMsU0FBRDtBQUFXLFVBQUEsR0FBRyxFQUFFRixNQUFNLENBQUNKO0FBQXZCLFdBQWdDSSxNQUFNLENBQUNWLEtBQXZDLEdBQ0tVLE1BQU0sQ0FBQ0csT0FEWixDQURKO0FBS0gsT0FQZSxDQUFoQjtBQVNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLZCxLQUFMLENBQVdjLFVBQVgsR0FDZjtBQUFLLFFBQUEsR0FBRyxFQUFFLEtBQUtkLEtBQUwsQ0FBV2MsVUFBckI7QUFBaUMsUUFBQSxHQUFHLEVBQUMsb0JBQXJDO0FBQTBELFFBQUEsU0FBUyxFQUFDO0FBQXBFLFFBRGUsR0FFYixJQUZOO0FBS0EsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQ0ksUUFBQSxXQUFXLEVBQUU7QUFBQSxjQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxjQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxpQkFBc0IsTUFBSSxDQUFDaEIsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQkYsS0FBaEIsRUFBdUJDLEtBQXZCLENBQXRCO0FBQUEsU0FEakI7QUFFSSxRQUFBLFNBQVMsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV2tCLE9BQVgsRUFBTjtBQUFBLFNBRmY7QUFHSSxRQUFBLFlBQVksRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2xCLEtBQUwsQ0FBV2tCLE9BQVgsRUFBTjtBQUFBO0FBSGxCLFNBSUtKLFVBSkwsRUFLSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDS1gsS0FETCxDQUxKLEVBUUtNLE9BUkwsRUFTSSxnQ0FBQyxtQkFBRDtBQUFTLFFBQUEsUUFBUSxFQUFFLGtCQUFDSCxHQUFELEVBQU1hLFNBQU47QUFBQSxpQkFBbUIsTUFBSSxDQUFDbkIsS0FBTCxDQUFXbUIsUUFBWCxDQUFvQmIsR0FBcEIsRUFBeUJhLFNBQXpCLENBQW5CO0FBQUE7QUFBbkIsUUFUSixDQURKO0FBYUg7Ozs7RUE1Q2lCQyxrQkFBTVQsUzs7QUE4QzVCLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDOUJuQixJQUFBQSxLQUFLLEVBQUVtQixLQUFLLENBQUNDLFFBQU4sQ0FBZXBCLEtBRFE7QUFFOUJNLElBQUFBLE9BQU8sRUFBRWEsS0FBSyxDQUFDQyxRQUFOLENBQWVkLE9BRk07QUFHOUJlLElBQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDQyxRQUFOLENBQWVDO0FBSEksR0FBTDtBQUFBLENBQTdCOztlQU1lLHlCQUFRSCxlQUFSLEVBQXlCSSw0QkFBekIsRUFBOEMxQixPQUE5QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGJvdW5kRGVza3RvcEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuaW1wb3J0IFRhc2tiYXIgZnJvbSBcIi4vVGFza2JhclwiO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuY2xhc3MgRGVza3RvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0RGF0YSh0aGlzLnByb3BzLmRhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLnByb3BzLmljb25zLm1hcCgoaWNvbiwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEljb25cbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBvcGVuPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5JY29uKGljb24pfVxuICAgICAgICAgICAgICAgIGljb249e2ljb24uaWNvbn1cbiAgICAgICAgICAgICAgICB0aXRsZT17aWNvbi50aXRsZX1cbiAgICAgICAgICAgIC8+O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aW5kb3dzID0gdGhpcy5wcm9wcy53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LmNvbXBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCBrZXk9e3dpbmRvdy5rZXl9IHsuLi53aW5kb3cucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gdGhpcy5wcm9wcy5iYWNrZ3JvdW5kP1xuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuYmFja2dyb3VuZH0gYWx0PVwiRGVza3RvcCBCYWNrZ3JvdW5kXCIgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC1iYWNrZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgIDogbnVsbDtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3BcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBwYWdlWCwgcGFnZVkgfSkgPT4gdGhpcy5wcm9wcy5tb3ZlKHBhZ2VYLCBwYWdlWSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMucHJvcHMuZW5kTW92ZSgpfT5cbiAgICAgICAgICAgICAgICB7YmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3AtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2ljb25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt3aW5kb3dzfVxuICAgICAgICAgICAgICAgIDxUYXNrYmFyIG1pbmltaXplPXsoa2V5LCBtaW5pbWl6ZSkgPT4gdGhpcy5wcm9wcy5taW5pbWl6ZShrZXksIG1pbmltaXplKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaWNvbnM6IHN0YXRlLmZlbmVzdHJhLmljb25zLFxuICAgIHdpbmRvd3M6IHN0YXRlLmZlbmVzdHJhLndpbmRvd3MsXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5mZW5lc3RyYS5pc0xvYWRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYm91bmREZXNrdG9wQWN0aW9ucykoRGVza3RvcCk7Il19