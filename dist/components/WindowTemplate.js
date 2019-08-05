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
        style: {
          display: this.props.maximized || !this.props.resizeable ? 'none' : 'block'
        },
        className: "fenestra-window-resize",
        onMouseDown: function onMouseDown(_ref) {
          var pageX = _ref.pageX,
              pageY = _ref.pageY;
          return _this2.props.startResize(pageX, pageY);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-expand fa-flip-horizontal"
      }))));
    }
  }]);

  return WindowTemplate;
}(_react.default.Component);

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
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd1RlbXBsYXRlLmpzeCJdLCJuYW1lcyI6WyJXaW5kb3dUZW1wbGF0ZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2xvYmFsIiwiY29uZmlybSIsInByb3BzIiwidGl0bGUiLCJjbG9zZSIsIm1heGltaXplIiwibWF4aW1pemVkIiwibWluaW1pemUiLCJsb2FkaW5nIiwiaXNMb2FkaW5nIiwiYWN0aXZlIiwibWluaW1pemVkIiwic3R5bGUiLCJhY3RpdmF0ZSIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsImUiLCJ0b2dnbGVNYXhpbWl6ZSIsInN0YXJ0TW92ZSIsInBhZ2VYIiwicGFnZVkiLCJtaW5pbWl6ZWFibGUiLCJyZXNpemVhYmxlIiwiY2xvc2VhYmxlIiwiY2hpbGRyZW4iLCJmb290ZXIiLCJkaXNwbGF5Iiwic3RhcnRSZXNpemUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldpbmRvdyIsImtleSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZmVuZXN0cmEiLCJ3aW5kb3dzIiwiZmluZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJNQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBRU0sVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLE1BQUFBLEtBQUssQ0FBQ0MsZUFBTjs7QUFDQSxVQUFJQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxnQ0FBZ0MsTUFBS0MsS0FBTCxDQUFXQyxLQUEzQyxHQUFtRCxHQUFsRSxDQUFKLEVBQTRFO0FBQ3hFLGNBQUtELEtBQUwsQ0FBV0UsS0FBWDtBQUNIO0FBQ0osSzs7cUVBRWdCLFVBQUNOLEtBQUQsRUFBVztBQUN4QkEsTUFBQUEsS0FBSyxDQUFDQyxlQUFOOztBQUNBLFlBQUtHLEtBQUwsQ0FBV0csUUFBWCxDQUFvQixDQUFDLE1BQUtILEtBQUwsQ0FBV0ksU0FBaEM7QUFDSCxLOzsrREFFVSxVQUFDUixLQUFELEVBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0MsZUFBTjs7QUFDQSxZQUFLRyxLQUFMLENBQVdLLFFBQVg7QUFDSCxLOzs7Ozs7OzZCQUVRO0FBQUE7O0FBRUwsVUFBTUMsT0FBTyxHQUFHLEtBQUtOLEtBQUwsQ0FBV08sU0FBWCxHQUNaO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixRQURKLENBRFksR0FJWixJQUpKO0FBTUEsYUFDSTtBQUNJLFFBQUEsU0FBUyxFQUNMLHNCQUNDLEtBQUtQLEtBQUwsQ0FBV1EsTUFBWCxHQUFvQix3QkFBcEIsR0FBK0MsRUFEaEQsSUFDc0QsR0FEdEQsSUFFQyxLQUFLUixLQUFMLENBQVdJLFNBQVgsR0FBdUIsMkJBQXZCLEdBQXFELEVBRnRELElBRTRELEdBRjVELElBR0MsS0FBS0osS0FBTCxDQUFXUyxTQUFYLEdBQXVCLDJCQUF2QixHQUFxRCxFQUh0RCxDQUZSO0FBT0ksUUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFLVCxLQUFMLENBQVdJLFNBQVosR0FBdUIsS0FBS0osS0FBTCxDQUFXVSxLQUFsQyxHQUEwQyxJQVByRDtBQVFJLFFBQUEsV0FBVyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDVixLQUFMLENBQVdXLFFBQVgsRUFBTjtBQUFBO0FBUmpCLFNBVUk7QUFBSyxRQUFBLFNBQVMsRUFBQyx1QkFBZjtBQUF1QyxRQUFBLEtBQUssRUFBRTtBQUFFQyxVQUFBQSxZQUFZLEVBQUUsS0FBS1osS0FBTCxDQUFXSSxTQUFYLEdBQXVCLENBQXZCLEdBQTJCUztBQUEzQyxTQUE5QztBQUFzRyxRQUFBLGFBQWEsRUFBRSx1QkFBQ0MsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ0MsY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBUDtBQUFBLFNBQXJIO0FBQW9KLFFBQUEsV0FBVyxFQUFFLHFCQUFBQSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDZCxLQUFMLENBQVdnQixTQUFYLENBQXFCRixDQUFDLENBQUNHLEtBQXZCLEVBQThCSCxDQUFDLENBQUNJLEtBQWhDLENBQUo7QUFBQTtBQUFsSyxTQUVJLDJDQUFPLEtBQUtsQixLQUFMLENBQVdDLEtBQWxCLENBRkosRUFJSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLFFBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsUUFBQSxTQUFTLEVBQUUsa0RBQWtELEtBQUtELEtBQUwsQ0FBV21CLFlBQVgsR0FBMEIsRUFBMUIsR0FBK0IsUUFBakYsQ0FBakM7QUFBNkgsUUFBQSxPQUFPLEVBQUUsaUJBQUNMLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNULFFBQUwsQ0FBY1MsQ0FBZCxDQUFQO0FBQUE7QUFBdEksU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFESixDQURKLFVBSUk7QUFBUSxRQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFFBQUEsU0FBUyxFQUFFLGtEQUFrRCxLQUFLZCxLQUFMLENBQVdvQixVQUFYLEdBQXdCLEVBQXhCLEdBQTZCLFFBQS9FLENBQWpDO0FBQTJILFFBQUEsT0FBTyxFQUFFLGlCQUFDTixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxjQUFMLENBQW9CRCxDQUFwQixDQUFQO0FBQUE7QUFBcEksU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFFLG1CQUFtQixLQUFLZCxLQUFMLENBQVdJLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsVUFBdEQ7QUFBZCxRQURKLENBSkosVUFPSTtBQUFRLFFBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsUUFBQSxTQUFTLEVBQUUsa0RBQWtELEtBQUtKLEtBQUwsQ0FBV3FCLFNBQVgsR0FBdUIsRUFBdkIsR0FBNEIsUUFBOUUsQ0FBakM7QUFBMEgsUUFBQSxPQUFPLEVBQUUsaUJBQUNQLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNaLEtBQUwsQ0FBV1ksQ0FBWCxDQUFQO0FBQUE7QUFBbkksU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFESixDQVBKLENBSkosQ0FWSixFQTRCSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSyxLQUFLZCxLQUFMLENBQVdzQixRQURoQixFQUVLaEIsT0FGTCxDQTVCSixFQWlDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSyxLQUFLTixLQUFMLENBQVd1QixNQURoQixFQUVJO0FBQVEsUUFBQSxJQUFJLEVBQUMsUUFBYjtBQUNJLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBSSxLQUFLeEIsS0FBTCxDQUFXSSxTQUFYLElBQXdCLENBQUMsS0FBS0osS0FBTCxDQUFXb0IsVUFBckMsR0FBbUQsTUFBbkQsR0FBNEQ7QUFBeEUsU0FEWDtBQUVJLFFBQUEsU0FBUyxFQUFDLHdCQUZkO0FBR0ksUUFBQSxXQUFXLEVBQUU7QUFBQSxjQUFHSCxLQUFILFFBQUdBLEtBQUg7QUFBQSxjQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxpQkFBc0IsTUFBSSxDQUFDbEIsS0FBTCxDQUFXeUIsV0FBWCxDQUF1QlIsS0FBdkIsRUFBOEJDLEtBQTlCLENBQXRCO0FBQUE7QUFIakIsU0FJSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFKSixDQUZKLENBakNKLENBREo7QUE4Q0g7Ozs7RUF6RXdCUSxlQUFNQyxTOztBQTRFbkMsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRyxFQUFJO0FBRWxCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFdBQUs7QUFDOUJ4QixNQUFBQSxTQUFTLEVBQUV3QixLQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ04sR0FBUCxLQUFlQSxHQUFuQjtBQUFBLE9BQWxDLEVBQTBEdEI7QUFEdkMsS0FBTDtBQUFBLEdBQTdCOztBQUlBLFNBQU8seUJBQVF1QixlQUFSLEVBQXlCLGlDQUFtQkQsR0FBbkIsQ0FBekIsRUFBa0RsQyxjQUFsRCxDQUFQO0FBQ0gsQ0FQRDs7ZUFTZWlDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYm91bmRXaW5kb3dBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8qKlxuICogcHJvcHM6IHtcbiAqICAgdGl0bGU6IHN0cmluZyxcbiAqICAgY2hpbGRyZW46IFJlYWN0LFxuICogICBtaW5pbWl6ZWQ6IGJvb2wsXG4gKiAgIG1heGltaXplZDogYm9vbCxcbiAqICAgbW92ZWFibGU6IGJvb2wsXG4gKiAgIGFjdGl2ZTogYm9vbCxcbiAqICAgcmVzaXplYWJsZTogYm9vbCxcbiAqICAgYWN0aXZhdGU6ICgpID0+IHZvaWQsXG4gKiAgIG1pbmltaXplOiAoKSA9PiB2b2lkLFxuICogICBtYXhpbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgZGVtaW5pbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgZGVtYXhpbWl6ZTogKCkgPT4gdm9pZCxcbiAqICAgY2xvc2U6ICgpID0+IHZvaWQsXG4gKiAgIHN0YXJ0UmVzaXplOiAoeCwgeSkgPT4gdm9pZCxcbiAqICAgc3R5bGU6IHtcbiAqICAgIHRvcDogaW50LFxuICogICAgbGVmdDogaW50LFxuICogICAgd2lkdGg6IGludCxcbiAqICAgIGhlaWdodDogaW50LFxuICogICAgekluZGV4OiBpbnRcbiAqICAgfVxuICogfVxuICogXG4gKiBcbiAqL1xuY2xhc3MgV2luZG93VGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChnbG9iYWwuY29uZmlybShcIkRlc2VqYSBmZWNoYXIgZXN0YSBqYW5lbGE6IFwiICsgdGhpcy5wcm9wcy50aXRsZSArIFwiP1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWF4aW1pemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMubWF4aW1pemUoIXRoaXMucHJvcHMubWF4aW1pemVkKTtcbiAgICB9XG5cbiAgICBtaW5pbWl6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcImZlbmVzdHJhLXdpbmRvdyBcIiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmFjdGl2ZSA/IFwiZmVuZXN0cmEtd2luZG93LWFjdGl2ZVwiIDogXCJcIikgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1heGltaXplZCA/IFwiZmVuZXN0cmEtd2luZG93LW1heGltaXplZFwiIDogXCJcIikgKyBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1pbmltaXplZCA/IFwiZmVuZXN0cmEtd2luZG93LW1pbmltaXplZFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGU9eyF0aGlzLnByb3BzLm1heGltaXplZD8gdGhpcy5wcm9wcy5zdHlsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHRoaXMucHJvcHMuYWN0aXZhdGUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy10aXRsZVwiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5tYXhpbWl6ZWQgPyAwIDogdW5kZWZpbmVkIH19IG9uRG91YmxlQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfSBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnByb3BzLnN0YXJ0TW92ZShlLnBhZ2VYLCBlLnBhZ2VZKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LXRpdGxlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMubWluaW1pemVhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5taW5pbWl6ZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LW1pbmltaXplXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXdoaXRlIGJ0bi1zbSBcIiArICh0aGlzLnByb3BzLnJlc2l6ZWFibGUgPyBcIlwiIDogXCJkLW5vbmVcIil9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1heGltaXplKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgZmEtd2luZG93LVwiICsgKHRoaXMucHJvcHMubWF4aW1pemVkID8gXCJyZXN0b3JlXCIgOiBcIm1heGltaXplXCIpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtd2hpdGUgYnRuLXNtIFwiICsgKHRoaXMucHJvcHMuY2xvc2VhYmxlID8gXCJcIiA6IFwiZC1ub25lXCIpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVtb3ZlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtd2luZG93LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAoKHRoaXMucHJvcHMubWF4aW1pemVkIHx8ICF0aGlzLnByb3BzLnJlc2l6ZWFibGUpID8gJ25vbmUnIDogJ2Jsb2NrJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlbmVzdHJhLXdpbmRvdy1yZXNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyh7IHBhZ2VYLCBwYWdlWSB9KSA9PiB0aGlzLnByb3BzLnN0YXJ0UmVzaXplKHBhZ2VYLCBwYWdlWSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhwYW5kIGZhLWZsaXAtaG9yaXpvbnRhbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgV2luZG93ID0ga2V5ID0+IHtcblxuICAgIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuZmVuZXN0cmEud2luZG93cy5maW5kKHdpbmRvdyA9PiB3aW5kb3cua2V5ID09PSBrZXkpLmlzTG9hZGluZ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBib3VuZFdpbmRvd0FjdGlvbnMoa2V5KSkoV2luZG93VGVtcGxhdGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7Il19