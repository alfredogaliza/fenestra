"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Props
 * {
 *  title: string
 *  icon: string
 *  open: () => void
 * }
 */
var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement("button", {
        type: "button",
        className: "btn btn-secondary btn-lg fenestra-desktop-icon",
        onClick: function onClick() {
          return _this.props.open();
        }
      }, _react.default.createElement("i", {
        className: this.props.icon
      }), _react.default.createElement("br", null), _react.default.createElement("span", {
        className: "small"
      }, this.props.title));
    }
  }]);

  return Icon;
}(_react.default.Component);

var _default = Icon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ljb24uanN4Il0sIm5hbWVzIjpbIkljb24iLCJwcm9wcyIsIm9wZW4iLCJpY29uIiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUU1BLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFBQTs7QUFDTCxhQUNJO0FBQVEsUUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixRQUFBLFNBQVMsRUFBQyxnREFBaEM7QUFBaUYsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxLQUFJLENBQUNDLEtBQUwsQ0FBV0MsSUFBWCxFQUFOO0FBQUE7QUFBMUYsU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFBekIsUUFESixFQUN1Qyx3Q0FEdkMsRUFFSTtBQUFNLFFBQUEsU0FBUyxFQUFDO0FBQWhCLFNBQXlCLEtBQUtGLEtBQUwsQ0FBV0csS0FBcEMsQ0FGSixDQURKO0FBTUg7Ozs7RUFSY0MsZUFBTUMsUzs7ZUFXVk4sSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogUHJvcHNcbiAqIHtcbiAqICB0aXRsZTogc3RyaW5nXG4gKiAgaWNvbjogc3RyaW5nXG4gKiAgb3BlbjogKCkgPT4gdm9pZFxuICogfVxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgZmVuZXN0cmEtZGVza3RvcC1pY29uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuKCl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29ufT48L2k+PGJyLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbjsiXX0=