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
 * Props
 * {
 *  windows: [window]
 *  minimize: int => void
 * }
 */
var Taskbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Taskbar, _React$Component);

  function Taskbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Taskbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Taskbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "minimizeAll", function () {
      _this.props.windows.forEach(function (window) {
        _this.props.minimize(window.key);
      });
    });

    return _this;
  }

  _createClass(Taskbar, [{
    key: "minimize",
    value: function minimize(window) {
      this.props.minimize(window.key, !window.props.minimized);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttons = this.props.windows.map(function (window) {
        return _react["default"].createElement("div", {
          className: "nav-item",
          key: window.key
        }, _react["default"].createElement("button", {
          className: "btn btn-outline-secondary fenestra-taskbar-button " + (window.props.active ? "active" : ""),
          onClick: function onClick() {
            return _this2.minimize(window);
          }
        }, window.props.title));
      });
      return _react["default"].createElement("nav", {
        className: "navbar navbar-expand-sm navbar-dark bg-dark fixed-bottom fenestra-taskbar"
      }, _react["default"].createElement("div", {
        className: "navbar-nav d-flex flex-wrap fenestra-taskbar-buttons"
      }, buttons), _react["default"].createElement("div", {
        className: "ml-auto"
      }, _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary",
        onClick: function onClick() {
          return _this2.minimizeAll();
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-desktop"
      }))));
    }
  }]);

  return Taskbar;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windows: state.fenestra.windows
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, _actions.boundTaskbarActions)(Taskbar);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJtaW5pbWl6ZWQiLCJidXR0b25zIiwibWFwIiwiYWN0aXZlIiwidGl0bGUiLCJtaW5pbWl6ZUFsbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJmZW5lc3RyYSIsImJvdW5kVGFza2JhckFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7SUFPTUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQU1ZLFlBQU07QUFDaEIsWUFBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxPQUFuQixDQUEyQixVQUFBQyxNQUFNLEVBQUk7QUFDakMsY0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CRCxNQUFNLENBQUNFLEdBQTNCO0FBQ0gsT0FGRDtBQUdILEs7Ozs7Ozs7NkJBUlFGLE0sRUFBUTtBQUNiLFdBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQixFQUFnQyxDQUFDRixNQUFNLENBQUNILEtBQVAsQ0FBYU0sU0FBOUM7QUFDSDs7OzZCQVFRO0FBQUE7O0FBQ0wsVUFBTUMsT0FBTyxHQUFHLEtBQUtQLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sR0FBbkIsQ0FBdUIsVUFBQUwsTUFBTSxFQUFJO0FBQzdDLGVBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxVQUFmO0FBQTBCLFVBQUEsR0FBRyxFQUFFQSxNQUFNLENBQUNFO0FBQXRDLFdBQ0k7QUFBUSxVQUFBLFNBQVMsRUFBRSx3REFBd0RGLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhUyxNQUFiLEdBQXNCLFFBQXRCLEdBQWlDLEVBQXpGLENBQW5CO0FBQWlILFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTCxRQUFMLENBQWNELE1BQWQsQ0FBTjtBQUFBO0FBQTFILFdBQ0tBLE1BQU0sQ0FBQ0gsS0FBUCxDQUFhVSxLQURsQixDQURKLENBREo7QUFPSCxPQVJlLENBQWhCO0FBU0EsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDS0gsT0FETCxDQURKLEVBSUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsU0FBUyxFQUFDLDJCQUFoQztBQUE0RCxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0ksV0FBTCxFQUFOO0FBQUE7QUFBckUsU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFESixDQURKLENBSkosQ0FESjtBQVlIOzs7O0VBbENpQkMsa0JBQU1DLFM7O0FBcUM1QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQzlCZCxJQUFBQSxPQUFPLEVBQUVjLEtBQUssQ0FBQ0MsUUFBTixDQUFlZjtBQURNLEdBQUw7QUFBQSxDQUE3Qjs7ZUFJZSx5QkFBUWEsZUFBUixFQUF5QkcsNEJBQXpCLEVBQThDbEIsT0FBOUMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYm91bmRUYXNrYmFyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuLyoqXG4gKiBQcm9wc1xuICoge1xuICogIHdpbmRvd3M6IFt3aW5kb3ddXG4gKiAgbWluaW1pemU6IGludCA9PiB2b2lkXG4gKiB9XG4gKi9cbmNsYXNzIFRhc2tiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgbWluaW1pemUod2luZG93KSB7XG4gICAgICAgIHRoaXMucHJvcHMubWluaW1pemUod2luZG93LmtleSwgIXdpbmRvdy5wcm9wcy5taW5pbWl6ZWQpXG4gICAgfVxuXG4gICAgbWluaW1pemVBbGwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMud2luZG93cy5mb3JFYWNoKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKHdpbmRvdy5rZXkpO1xuICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e3dpbmRvdy5rZXl9ID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBcIiArICh3aW5kb3cucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLm1pbmltaXplKHdpbmRvdyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dpbmRvdy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItZGFyayBiZy1kYXJrIGZpeGVkLWJvdHRvbSBmZW5lc3RyYS10YXNrYmFyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBkLWZsZXggZmxleC13cmFwIGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWluaW1pemVBbGwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kZXNrdG9wXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICB3aW5kb3dzOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGJvdW5kVGFza2JhckFjdGlvbnMpKFRhc2tiYXIpOyJdfQ==