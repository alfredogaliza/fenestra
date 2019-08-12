"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _propTypes = require("../prop-types");

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
      this.props.minimize(window.key, false);
      this.props.activate(window.key, !window.active);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttons = this.props.windows.map(function (window) {
        return _react.default.createElement("button", {
          key: window.key,
          className: "btn btn-outline-secondary fenestra-taskbar-button " + (window.props.active ? "active" : ""),
          onMouseDown: function onMouseDown() {
            return _this2.toggle(window);
          }
        }, window.props.title);
      });
      return _react.default.createElement("nav", {
        className: "fenestra-taskbar"
      }, _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-windows"
      }, _react.default.createElement("i", {
        className: "fa fa-window-restore"
      })), _react.default.createElement("div", {
        className: "fenestra-taskbar-buttons"
      }, buttons), _react.default.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-desktop",
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

_defineProperty(Taskbar, "propTypes", _propTypes.taskbarPropTypes);

_defineProperty(Taskbar, "defaultProps", {
  windows: [],
  activate: function activate() {
    return undefined;
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    windows: state.fenestra.windows
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, _actions.boundTaskbarActions)(Taskbar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tiYXIuanN4Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJwcm9wcyIsIndpbmRvd3MiLCJmb3JFYWNoIiwid2luZG93IiwibWluaW1pemUiLCJrZXkiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsImJ1dHRvbnMiLCJtYXAiLCJ0b2dnbGUiLCJ0aXRsZSIsIm1pbmltaXplQWxsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0YXNrYmFyUHJvcFR5cGVzIiwidW5kZWZpbmVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJmZW5lc3RyYSIsImJvdW5kVGFza2JhckFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFjWSxZQUFNO0FBQ2hCLFlBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQUMsTUFBTSxFQUFJO0FBQ2pDLGNBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsTUFBTSxDQUFDRSxHQUEzQjtBQUNILE9BRkQ7QUFHSCxLOzs7Ozs7OzJCQVRNRixNLEVBQVE7QUFDWCxXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsS0FBaEM7QUFDQSxXQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JILE1BQU0sQ0FBQ0UsR0FBM0IsRUFBZ0MsQ0FBQ0YsTUFBTSxDQUFDSSxNQUF4QztBQUNIOzs7NkJBUVE7QUFBQTs7QUFDTCxVQUFNQyxPQUFPLEdBQUcsS0FBS1IsS0FBTCxDQUFXQyxPQUFYLENBQW1CUSxHQUFuQixDQUF1QixVQUFBTixNQUFNLEVBQUk7QUFDN0MsZUFDSTtBQUFRLFVBQUEsR0FBRyxFQUFFQSxNQUFNLENBQUNFLEdBQXBCO0FBQXlCLFVBQUEsU0FBUyxFQUFFLHdEQUF3REYsTUFBTSxDQUFDSCxLQUFQLENBQWFPLE1BQWIsR0FBc0IsUUFBdEIsR0FBaUMsRUFBekYsQ0FBcEM7QUFBa0ksVUFBQSxXQUFXLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNHLE1BQUwsQ0FBWVAsTUFBWixDQUFOO0FBQUE7QUFBL0ksV0FDS0EsTUFBTSxDQUFDSCxLQUFQLENBQWFXLEtBRGxCLENBREo7QUFLSCxPQU5lLENBQWhCO0FBT0EsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFRLFFBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsUUFBQSxTQUFTLEVBQUM7QUFBaEMsU0FDSTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsUUFESixDQURKLEVBSUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0tILE9BREwsQ0FKSixFQU9JO0FBQVEsUUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixRQUFBLFNBQVMsRUFBQyxtRkFBaEM7QUFBb0gsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNJLFdBQUwsRUFBTjtBQUFBO0FBQTdILFNBQ0k7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLFFBREosQ0FQSixDQURKO0FBYUg7Ozs7RUF6Q2lCQyxlQUFNQyxTOztnQkFBdEJmLE8sZUFFaUJnQiwyQjs7Z0JBRmpCaEIsTyxrQkFJb0I7QUFDbEJFLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCSyxFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNVSxTQUFOO0FBQUE7QUFGUSxDOztBQXdDMUIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QmpCLElBQUFBLE9BQU8sRUFBRWlCLEtBQUssQ0FBQ0MsUUFBTixDQUFlbEI7QUFETSxHQUFMO0FBQUEsQ0FBN0I7O2VBSWUseUJBQVFnQixlQUFSLEVBQXlCRyw0QkFBekIsRUFBOENyQixPQUE5QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBib3VuZFRhc2tiYXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyB0YXNrYmFyUHJvcFR5cGVzIH0gZnJvbSAnLi4vcHJvcC10eXBlcyc7XG5cbmNsYXNzIFRhc2tiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHRhc2tiYXJQcm9wVHlwZXM7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB3aW5kb3dzOiBbXSxcbiAgICAgICAgYWN0aXZhdGU6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHRvZ2dsZSh3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aXZhdGUod2luZG93LmtleSwgIXdpbmRvdy5hY3RpdmUpO1xuICAgIH1cblxuICAgIG1pbmltaXplQWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLndpbmRvd3MuZm9yRWFjaCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5pbWl6ZSh3aW5kb3cua2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9wcy53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17d2luZG93LmtleX0gY2xhc3NOYW1lPXtcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmVuZXN0cmEtdGFza2Jhci1idXR0b24gXCIgKyAod2luZG93LnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiKX0gb25Nb3VzZURvd249eygpID0+IHRoaXMudG9nZ2xlKHdpbmRvdyl9PlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93LnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZlbmVzdHJhLXRhc2tiYXJcIiA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbiBmZW5lc3RyYS10YXNrYmFyLWJ1dHRvbi13aW5kb3dzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1yZXN0b3JlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVuZXN0cmEtdGFza2Jhci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmVuZXN0cmEtdGFza2Jhci1idXR0b24gZmVuZXN0cmEtdGFza2Jhci1idXR0b24tZGVza3RvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWluaW1pemVBbGwoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRlc2t0b3BcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgd2luZG93czogc3RhdGUuZmVuZXN0cmEud2luZG93c1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBib3VuZFRhc2tiYXJBY3Rpb25zKShUYXNrYmFyKTsiXX0=