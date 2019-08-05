"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _Taskbar = _interopRequireDefault(require("./Taskbar"));

var _Icon = _interopRequireDefault(require("./Icon"));

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
        return _react.default.createElement(_Icon.default, {
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
        return _react.default.createElement(Component, _extends({
          key: window.key
        }, window.props), window.content);
      });
      var background = this.props.background ? _react.default.createElement("img", {
        src: this.props.background,
        alt: "Desktop Background",
        className: "fenestra-desktop-background"
      }) : null;
      return _react.default.createElement("div", {
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
      }, background, _react.default.createElement("div", {
        className: "fenestra-desktop-windows"
      }, _react.default.createElement("div", {
        className: "fenestra-desktop-windows-holder",
        style: {
          width: this.props.maxWidth,
          height: this.props.maxHeight
        }
      }), windows), _react.default.createElement("div", {
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

var _default = (0, _reactRedux.connect)(_actions.boundDesktopProps, _actions.boundDesktopActions)(Desktop);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2t0b3AuanN4Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJwcm9wcyIsInNldERhdGEiLCJkYXRhIiwiaWNvbnMiLCJtYXAiLCJpY29uIiwia2V5Iiwib3Blbkljb24iLCJ0aXRsZSIsIndpbmRvd3MiLCJ3aW5kb3ciLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250ZW50IiwiYmFja2dyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlIiwiZW5kTW92ZSIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5pbWl6ZSIsIlJlYWN0IiwiYm91bmREZXNrdG9wUHJvcHMiLCJib3VuZERlc2t0b3BBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUVGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsaUZBQU1BLEtBQU47O0FBQ0EsVUFBS0EsS0FBTCxDQUFXQyxPQUFYLENBQW1CLE1BQUtELEtBQUwsQ0FBV0UsSUFBOUI7O0FBRmU7QUFHbEI7Ozs7NkJBRVE7QUFBQTs7QUFDTCxVQUFNQyxLQUFLLEdBQUcsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUM5QyxlQUFPLDZCQUFDLGFBQUQ7QUFDSCxVQUFBLEdBQUcsRUFBRUEsR0FERjtBQUVILFVBQUEsSUFBSSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTixLQUFMLENBQVdPLFFBQVgsQ0FBb0JGLElBQXBCLENBQU47QUFBQSxXQUZIO0FBR0gsVUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFIUjtBQUlILFVBQUEsS0FBSyxFQUFFQSxJQUFJLENBQUNHO0FBSlQsVUFBUDtBQU1ILE9BUGEsQ0FBZDtBQVNBLFVBQU1DLE9BQU8sR0FBRyxLQUFLVCxLQUFMLENBQVdTLE9BQVgsQ0FBbUJMLEdBQW5CLENBQXVCLFVBQUFNLE1BQU0sRUFBSTtBQUM3QyxZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsU0FBekI7QUFDQSxlQUNJLDZCQUFDLFNBQUQ7QUFBVyxVQUFBLEdBQUcsRUFBRUYsTUFBTSxDQUFDSjtBQUF2QixXQUFnQ0ksTUFBTSxDQUFDVixLQUF2QyxHQUNLVSxNQUFNLENBQUNHLE9BRFosQ0FESjtBQUtILE9BUGUsQ0FBaEI7QUFTQSxVQUFNQyxVQUFVLEdBQUcsS0FBS2QsS0FBTCxDQUFXYyxVQUFYLEdBQ2Y7QUFBSyxRQUFBLEdBQUcsRUFBRSxLQUFLZCxLQUFMLENBQVdjLFVBQXJCO0FBQWlDLFFBQUEsR0FBRyxFQUFDLG9CQUFyQztBQUEwRCxRQUFBLFNBQVMsRUFBQztBQUFwRSxRQURlLEdBRWIsSUFGTjtBQUtBLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxrQkFBZjtBQUNJLFFBQUEsV0FBVyxFQUFFO0FBQUEsY0FBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsY0FBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsaUJBQXNCLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV2lCLElBQVgsQ0FBZ0JGLEtBQWhCLEVBQXVCQyxLQUF2QixDQUF0QjtBQUFBLFNBRGpCO0FBRUksUUFBQSxTQUFTLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNoQixLQUFMLENBQVdrQixPQUFYLEVBQU47QUFBQSxTQUZmO0FBR0ksUUFBQSxZQUFZLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNsQixLQUFMLENBQVdrQixPQUFYLEVBQU47QUFBQTtBQUhsQixTQUlLSixVQUpMLEVBS0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxpQ0FBZjtBQUFpRCxRQUFBLEtBQUssRUFBRTtBQUFFSyxVQUFBQSxLQUFLLEVBQUUsS0FBS25CLEtBQUwsQ0FBV29CLFFBQXBCO0FBQThCQyxVQUFBQSxNQUFNLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV3NCO0FBQWpEO0FBQXhELFFBREosRUFFS2IsT0FGTCxDQUxKLEVBU0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0tOLEtBREwsQ0FUSixFQVlJLDZCQUFDLGdCQUFEO0FBQVMsUUFBQSxRQUFRLEVBQUUsa0JBQUNHLEdBQUQsRUFBTWlCLFNBQU47QUFBQSxpQkFBbUIsTUFBSSxDQUFDdkIsS0FBTCxDQUFXdUIsUUFBWCxDQUFvQmpCLEdBQXBCLEVBQXlCaUIsU0FBekIsQ0FBbkI7QUFBQTtBQUFuQixRQVpKLENBREo7QUFnQkg7Ozs7RUEvQ2lCQyxlQUFNYixTOztlQWtEYix5QkFBUWMsMEJBQVIsRUFBMkJDLDRCQUEzQixFQUFnRDNCLE9BQWhELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYm91bmREZXNrdG9wQWN0aW9ucywgYm91bmREZXNrdG9wUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuaW1wb3J0IFRhc2tiYXIgZnJvbSBcIi4vVGFza2JhclwiO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuY2xhc3MgRGVza3RvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0RGF0YSh0aGlzLnByb3BzLmRhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLnByb3BzLmljb25zLm1hcCgoaWNvbiwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEljb25cbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBvcGVuPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5JY29uKGljb24pfVxuICAgICAgICAgICAgICAgIGljb249e2ljb24uaWNvbn1cbiAgICAgICAgICAgICAgICB0aXRsZT17aWNvbi50aXRsZX1cbiAgICAgICAgICAgIC8+O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3aW5kb3dzID0gdGhpcy5wcm9wcy53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LmNvbXBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCBrZXk9e3dpbmRvdy5rZXl9IHsuLi53aW5kb3cucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gdGhpcy5wcm9wcy5iYWNrZ3JvdW5kID9cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmJhY2tncm91bmR9IGFsdD1cIkRlc2t0b3AgQmFja2dyb3VuZFwiIGNsYXNzTmFtZT1cImZlbmVzdHJhLWRlc2t0b3AtYmFja2dyb3VuZFwiIC8+XG4gICAgICAgICAgICA6IG51bGw7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1kZXNrdG9wXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KHsgcGFnZVgsIHBhZ2VZIH0pID0+IHRoaXMucHJvcHMubW92ZShwYWdlWCwgcGFnZVkpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gdGhpcy5wcm9wcy5lbmRNb3ZlKCl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnByb3BzLmVuZE1vdmUoKX0+XG4gICAgICAgICAgICAgICAge2JhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1kZXNrdG9wLXdpbmRvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZW5lc3RyYS1kZXNrdG9wLXdpbmRvd3MtaG9sZGVyXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIGhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHQgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt3aW5kb3dzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGVza3RvcC1pY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbnN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRhc2tiYXIgbWluaW1pemU9eyhrZXksIG1pbmltaXplKSA9PiB0aGlzLnByb3BzLm1pbmltaXplKGtleSwgbWluaW1pemUpfSAvPlxuICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChib3VuZERlc2t0b3BQcm9wcywgYm91bmREZXNrdG9wQWN0aW9ucykoRGVza3RvcCk7Il19