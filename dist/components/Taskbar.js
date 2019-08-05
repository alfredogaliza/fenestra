"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

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
    key: "toggle",
    value: function toggle(window) {
      if (window.props.active) {
        this.props.minimize(window.key);
      } else {
        this.props.minimize(window.key, false);
        this.props.activate(window.key);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttons = this.props.windows.map(function (window) {
        return _react.default.createElement("button", {
          key: window.key,
          className: "fenestra-taskbar-button " + (window.props.active ? "fenestra-taskbar-button-active" : ""),
          onClick: function onClick() {
            return _this2.toggle(window);
          }
        }, window.props.title);
      });
      return _react.default.createElement("nav", {
        className: "fenestra-taskbar"
      }, _react.default.createElement("div", {
        className: "fenestra-taskbar-buttons"
      }, buttons), _react.default.createElement("button", {
        type: "button",
        className: "fenestra-taskbar-button fenestra-taskbar-button-desktop",
        onClick: function onClick() {
          return _this2.minimizeAll();
        }
      }, _react.default.createElement("i", {
        className: "fa fa-desktop"
      })));
    }
  }]);

  return Taskbar;
}(_react.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windows: state.fenestra.windows
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, _actions.boundTaskbarActions)(Taskbar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmUiLCJhY3RpdmF0ZSIsImJ1dHRvbnMiLCJtYXAiLCJ0b2dnbGUiLCJ0aXRsZSIsIm1pbmltaXplQWxsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwiYm91bmRUYXNrYmFyQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7OztJQU9NQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBV1ksWUFBTTtBQUNoQixZQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUFDLE1BQU0sRUFBSTtBQUNqQyxjQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0I7QUFDSCxPQUZEO0FBR0gsSzs7Ozs7OzsyQkFiTUYsTSxFQUFRO0FBQ1gsVUFBSUEsTUFBTSxDQUFDSCxLQUFQLENBQWFNLE1BQWpCLEVBQXlCO0FBQ3JCLGFBQUtOLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtMLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQixFQUFnQyxLQUFoQztBQUNBLGFBQUtMLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkosTUFBTSxDQUFDRSxHQUEzQjtBQUNIO0FBQ0o7Ozs2QkFRUTtBQUFBOztBQUNMLFVBQU1HLE9BQU8sR0FBRyxLQUFLUixLQUFMLENBQVdDLE9BQVgsQ0FBbUJRLEdBQW5CLENBQXVCLFVBQUFOLE1BQU0sRUFBSTtBQUM3QyxlQUNJO0FBQVEsVUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0UsR0FBcEI7QUFBeUIsVUFBQSxTQUFTLEVBQUUsOEJBQThCRixNQUFNLENBQUNILEtBQVAsQ0FBYU0sTUFBYixHQUFzQixnQ0FBdEIsR0FBeUQsRUFBdkYsQ0FBcEM7QUFBZ0ksVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNJLE1BQUwsQ0FBWVAsTUFBWixDQUFOO0FBQUE7QUFBekksV0FDS0EsTUFBTSxDQUFDSCxLQUFQLENBQWFXLEtBRGxCLENBREo7QUFLSCxPQU5lLENBQWhCO0FBT0EsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDS0gsT0FETCxDQURKLEVBSUk7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsU0FBUyxFQUFDLHlEQUFoQztBQUEwRixRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0ksV0FBTCxFQUFOO0FBQUE7QUFBbkcsU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFESixDQUpKLENBREo7QUFVSDs7OztFQW5DaUJDLGVBQU1DLFM7O0FBc0M1QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQzlCZixJQUFBQSxPQUFPLEVBQUVlLEtBQUssQ0FBQ0MsUUFBTixDQUFlaEI7QUFETSxHQUFMO0FBQUEsQ0FBN0I7O2VBSWUseUJBQVFjLGVBQVIsRUFBeUJHLDRCQUF6QixFQUE4Q25CLE9BQTlDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJvdW5kVGFza2JhckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbi8qKlxuICogUHJvcHNcbiAqIHtcbiAqICB3aW5kb3dzOiBbd2luZG93XVxuICogIG1pbmltaXplOiBpbnQgPT4gdm9pZFxuICogfVxuICovXG5jbGFzcyBUYXNrYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHRvZ2dsZSh3aW5kb3cpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluaW1pemUod2luZG93LmtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbmltaXplKHdpbmRvdy5rZXksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZhdGUod2luZG93LmtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtaW5pbWl6ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy53aW5kb3dzLmZvckVhY2god2luZG93ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluaW1pemUod2luZG93LmtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3dpbmRvdy5rZXl9IGNsYXNzTmFtZT17XCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBcIiArICh3aW5kb3cucHJvcHMuYWN0aXZlID8gXCJmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbi1hY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSh3aW5kb3cpfT5cbiAgICAgICAgICAgICAgICAgICAge3dpbmRvdy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmZW5lc3RyYS10YXNrYmFyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZlbmVzdHJhLXRhc2tiYXItYnV0dG9uIGZlbmVzdHJhLXRhc2tiYXItYnV0dG9uLWRlc2t0b3BcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm1pbmltaXplQWxsKCl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kZXNrdG9wXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHdpbmRvd3M6IHN0YXRlLmZlbmVzdHJhLndpbmRvd3Ncbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYm91bmRUYXNrYmFyQWN0aW9ucykoVGFza2Jhcik7Il19