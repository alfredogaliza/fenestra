"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var actionType = _interopRequireWildcard(require("../actions/types"));

var _WindowTemplate = _interopRequireDefault(require("../components/WindowTemplate"));

var _actions = require("../actions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  winKey: 0,
  isLoading: false,
  icons: [],
  windows: [],
  startX: 0,
  startY: 0,
  startTop: 0,
  startLeft: 0,
  startWidth: 0,
  startHeight: 0,
  transformKey: null,
  transformType: null
};

function newWindow(key, props, template, templateProps) {
  var Content = (0, _reactRedux.connect)(undefined, (0, _actions.boundWindowActions)(key))(template);
  return {
    key: key,
    props: _objectSpread({}, _actions.DEFAULT_PROPS, {}, props, {
      style: _objectSpread({}, _actions.DEFAULT_PROPS.style, {}, props.style, {
        top: key % 10 * 50 + 10,
        left: key % 10 * 50 + 10
      })
    }),
    component: (0, _WindowTemplate["default"])(key),
    content: _react["default"].createElement(Content, _objectSpread({}, templateProps))
  };
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  var target = null;
  if (action.type === actionType.WINDOW_TRANSFORM && state.transformKey === null) return state;

  switch (action.type) {
    case actionType.WINDOW_OPEN:
      var key = newState.winKey++;
      var window = newWindow(key, action.props, action.template, action.templateProps);
      newState.windows.push(window);
      newState.windows = newState.windows.map(function (window) {
        var props = _objectSpread({}, window.props, {
          style: _objectSpread({}, window.props.style)
        });

        props.active = action.props.active ? window.key === key : props.active;
        props.style.zIndex = window.key === key ? 2 : 1;
        return _objectSpread({}, window, {
          props: props
        });
      });
      break;

    case actionType.WINDOW_CLOSE:
      newState.windows = newState.windows.filter(function (window) {
        return window.key !== action.key;
      });
      break;

    case actionType.WINDOW_ACTIVATE:
      newState.windows = newState.windows.map(function (window) {
        var props = _objectSpread({}, window.props, {
          style: _objectSpread({}, window.props.style)
        });

        props.active = window.key === action.key;
        props.style.zIndex = window.key === action.key ? 2 : 1;
        return _objectSpread({}, window, {
          props: props
        });
      });
      break;

    case actionType.WINDOW_MINIMIZE:
      newState.windows = newState.windows.map(function (window) {
        if (window.key === action.key && window.props.minimizeable) {
          window.props.active = !action.minimize;
          window.props.minimized = action.minimize;
        }

        return window;
      });
      break;

    case actionType.WINDOW_MAXIMIZE:
      newState.windows = newState.windows.map(function (window) {
        var props = _objectSpread({}, window.props, {
          style: _objectSpread({}, window.props.style)
        });

        props.active = window.key === action.key;
        props.minimized = window.key === action.key ? false : window.props.minimized;
        props.maximized = window.key === action.key && window.props.resizeable ? action.maximize : window.props.maximized;
        props.style.zIndex = window.key === action.key ? 2 : 1;
        return _objectSpread({}, window, {
          props: props
        });
      });
      break;

    case actionType.WINDOW_START_TRANSFORM:
      target = newState.windows.find(function (window) {
        return window.key === action.key;
      });
      if (target.props.maximized) break;
      newState.transformKey = action.key;
      newState.transformType = action.transformType;
      newState.startX = action.x;
      newState.startY = action.y;
      newState.startTop = target.props.style.top;
      newState.startLeft = target.props.style.left;
      newState.startWidth = target.props.style.width;
      newState.startHeight = target.props.style.height;
      break;

    case actionType.WINDOW_TRANSFORM:
      if (!global.window) break;
      newState.windows = newState.windows.map(function (window) {
        var props = _objectSpread({}, window.props, {
          style: _objectSpread({}, window.props.style)
        });

        if (window.key === newState.transformKey) {
          if (newState.transformType === _actions.TRANSFORM_MOVE) {
            var dx = newState.startLeft + action.x - newState.startX;
            var dy = newState.startTop + action.y - newState.startY;
            props.style.top = Math.min(Math.max(0, dy), global.window.innerHeight - props.style.height - 50);
            props.style.left = Math.min(Math.max(0, dx), global.window.innerWidth - props.style.width);
          } else if (newState.transformType === _actions.TRANSFORM_RESIZE) {
            var _dx = newState.startWidth + action.x - newState.startX;

            var _dy = newState.startHeight + action.y - newState.startY;

            props.style.height = Math.min(Math.max(300, _dy), global.window.innerHeight - props.style.top - 50);
            props.style.width = Math.min(Math.max(400, _dx), global.window.innerWidth - props.style.left);
          }
        }

        return _objectSpread({}, window, {
          props: _objectSpread({}, props, {
            style: _objectSpread({}, props.style)
          })
        });
      });
      break;

    case actionType.WINDOW_MINIMIZE_ALL:
      newState.windows = newState.windows.map(function (window) {
        window.props.minimized = true;
        window.props.active = false;
        return window;
      });
      break;

    case actionType.WINDOW_END_TRANSFORM:
      newState.transformKey = null;
      break;

    case actionType.SET_FOOTER:
      newState.windows = newState.windows.map(function (window) {
        if (window.key === action.key) {
          window.props.footer = action.footer;
        }

        return window;
      });
      break;

    case actionType.SET_LOADING:
      var loadingWindow = newState.windows.find(function (window) {
        return window.key === action.key;
      });

      if (loadingWindow) {
        loadingWindow.isLoading = action.isLoading;
      } else {
        newState.isLoading = action.isLoading;
      }

      break;

    case actionType.SET_DATA:
      var winKey = 0;
      var icons = action.data.icons || [];
      var windows = (action.data.windows || []).map(function (window) {
        return newWindow(winKey++, window.props, window.template, window.templateProps);
      });
      newState = _objectSpread({}, initialState, {
        winKey: winKey,
        icons: icons,
        windows: windows
      });
      break;

    default:
      break;
  }

  return newState;
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ3aW5LZXkiLCJpc0xvYWRpbmciLCJpY29ucyIsIndpbmRvd3MiLCJzdGFydFgiLCJzdGFydFkiLCJzdGFydFRvcCIsInN0YXJ0TGVmdCIsInN0YXJ0V2lkdGgiLCJzdGFydEhlaWdodCIsInRyYW5zZm9ybUtleSIsInRyYW5zZm9ybVR5cGUiLCJuZXdXaW5kb3ciLCJrZXkiLCJwcm9wcyIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsIkNvbnRlbnQiLCJ1bmRlZmluZWQiLCJERUZBVUxUX1BST1BTIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiY29tcG9uZW50IiwiY29udGVudCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld1N0YXRlIiwidGFyZ2V0IiwidHlwZSIsImFjdGlvblR5cGUiLCJXSU5ET1dfVFJBTlNGT1JNIiwiV0lORE9XX09QRU4iLCJ3aW5kb3ciLCJwdXNoIiwibWFwIiwiYWN0aXZlIiwiekluZGV4IiwiV0lORE9XX0NMT1NFIiwiZmlsdGVyIiwiV0lORE9XX0FDVElWQVRFIiwiV0lORE9XX01JTklNSVpFIiwibWluaW1pemVhYmxlIiwibWluaW1pemUiLCJtaW5pbWl6ZWQiLCJXSU5ET1dfTUFYSU1JWkUiLCJtYXhpbWl6ZWQiLCJyZXNpemVhYmxlIiwibWF4aW1pemUiLCJXSU5ET1dfU1RBUlRfVFJBTlNGT1JNIiwiZmluZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJnbG9iYWwiLCJUUkFOU0ZPUk1fTU9WRSIsImR4IiwiZHkiLCJNYXRoIiwibWluIiwibWF4IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiVFJBTlNGT1JNX1JFU0laRSIsIldJTkRPV19NSU5JTUlaRV9BTEwiLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsIlNFVF9GT09URVIiLCJmb290ZXIiLCJTRVRfTE9B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QUFNLENBQUNoQixHQUExQjtBQUFBLE9BQTVCLENBQXBCOztBQUVBLFVBQUk0RCxhQUFKLEVBQW1CO0FBQ2ZBLFFBQUFBLGFBQWEsQ0FBQ3hFLFNBQWQsR0FBMEI0QixNQUFNLENBQUM1QixTQUFqQztBQUNILE9BRkQsTUFFTztBQUNINkIsUUFBQUEsUUFBUSxDQUFDN0IsU0FBVCxHQUFxQjRCLE1BQU0sQ0FBQzVCLFNBQTVCO0FBQ0g7O0FBRUQ7O0FBRUosU0FBS2dDLFVBQVUsQ0FBQ3lDLFFBQWhCO0FBQ0ksVUFBSTFFLE1BQU0sR0FBRyxDQUFiO0FBQ0EsVUFBTUUsS0FBSyxHQUFJMkIsTUFBTSxDQUFDOEMsSUFBUCxDQUFZekUsS0FBWixJQUFxQixFQUFwQztBQUNBLFVBQU1DLE9BQU8sR0FBRyxDQUFDMEIsTUFBTSxDQUFDOEMsSUFBUCxDQUFZeEUsT0FBWixJQUF1QixFQUF4QixFQUE0Qm1DLEdBQTVCLENBQWdDLFVBQUFGLE1BQU0sRUFBSTtBQUN0RCxlQUFPeEIsU0FBUyxDQUFDWixNQUFNLEVBQVAsRUFBV29DLE1BQU0sQ0FBQ3RCLEtBQWxCLEVBQXlCc0IsTUFBTSxDQUFDckIsUUFBaEMsRUFBMENxQixNQUFNLENBQUNwQixhQUFqRCxDQUFoQjtBQUNILE9BRmUsQ0FBaEI7QUFJQWMsTUFBQUEsUUFBUSxxQkFDRC9CLFlBREM7QUFFSkMsUUFBQUEsTUFBTSxFQUFOQSxNQUZJO0FBR0pFLFFBQUFBLEtBQUssRUFBTEEsS0FISTtBQUlKQyxRQUFBQSxPQUFPLEVBQVBBO0FBSkksUUFBUjtBQU1BOztBQUVKO0FBQ0k7QUFsSVI7O0FBcUlBLFNBQU8yQixRQUFQO0FBRUgsQ0E5SUQ7O2VBZ0plSCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgV2luZG93VGVtcGxhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9XaW5kb3dUZW1wbGF0ZSc7XG5pbXBvcnQgeyBib3VuZFdpbmRvd0FjdGlvbnMsIFRSQU5TRk9STV9NT1ZFLCBUUkFOU0ZPUk1fUkVTSVpFLCBERUZBVUxUX1BST1BTIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB3aW5LZXk6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpY29uczogW10sXG4gICAgd2luZG93czogW10sXG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBzdGFydFRvcDogMCxcbiAgICBzdGFydExlZnQ6IDAsXG4gICAgc3RhcnRXaWR0aDogMCxcbiAgICBzdGFydEhlaWdodDogMCxcbiAgICB0cmFuc2Zvcm1LZXk6IG51bGwsXG4gICAgdHJhbnNmb3JtVHlwZTogbnVsbFxufVxuXG5mdW5jdGlvbiBuZXdXaW5kb3coa2V5LCBwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpIHtcblxuICAgIGNvbnN0IENvbnRlbnQgPSBjb25uZWN0KHVuZGVmaW5lZCwgYm91bmRXaW5kb3dBY3Rpb25zKGtleSkpKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMsXG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uREVGQVVMVF9QUk9QUy5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICB0b3A6IChrZXkgJSAxMCkgKiA1MCArIDEwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IChrZXkgJSAxMCkgKiA1MCArIDEwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudDogV2luZG93VGVtcGxhdGUoa2V5KSxcbiAgICAgICAgY29udGVudDogUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7Li4udGVtcGxhdGVQcm9wc30pXG4gICAgfTtcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgICB2YXIgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgdmFyIHRhcmdldCA9IG51bGw7XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvblR5cGUuV0lORE9XX1RSQU5TRk9STSAmJiBzdGF0ZS50cmFuc2Zvcm1LZXkgPT09IG51bGwpIHJldHVybiBzdGF0ZTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLldJTkRPV19PUEVOOlxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBuZXdTdGF0ZS53aW5LZXkrKztcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG5ld1dpbmRvdyhrZXksIGFjdGlvbi5wcm9wcywgYWN0aW9uLnRlbXBsYXRlLCBhY3Rpb24udGVtcGxhdGVQcm9wcyk7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MucHVzaCh3aW5kb3cpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPSBhY3Rpb24ucHJvcHMuYWN0aXZlID8gKHdpbmRvdy5rZXkgPT09IGtleSkgOiBwcm9wcy5hY3RpdmU7XG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUuekluZGV4ID0gKHdpbmRvdy5rZXkgPT09IGtleSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZS5XSU5ET1dfQ0xPU0U6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5maWx0ZXIod2luZG93ID0+IHdpbmRvdy5rZXkgIT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLldJTkRPV19BQ1RJVkFURTpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHsgLi4ud2luZG93LnByb3BzLCBzdHlsZTogeyAuLi53aW5kb3cucHJvcHMuc3R5bGUgfSB9O1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZSA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS56SW5kZXggPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZS5XSU5ET1dfTUlOSU1JWkU6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSAmJiB3aW5kb3cucHJvcHMubWluaW1pemVhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb3BzLmFjdGl2ZSA9ICFhY3Rpb24ubWluaW1pemU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5taW5pbWl6ZWQgPSBhY3Rpb24ubWluaW1pemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFjdGlvblR5cGUuV0lORE9XX01BWElNSVpFOlxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0geyAuLi53aW5kb3cucHJvcHMsIHN0eWxlOiB7IC4uLndpbmRvdy5wcm9wcy5zdHlsZSB9IH07XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgICAgIHByb3BzLm1pbmltaXplZCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSA/IGZhbHNlIDogd2luZG93LnByb3BzLm1pbmltaXplZDtcbiAgICAgICAgICAgICAgICBwcm9wcy5tYXhpbWl6ZWQgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSAmJiB3aW5kb3cucHJvcHMucmVzaXplYWJsZSkgPyBhY3Rpb24ubWF4aW1pemUgOiB3aW5kb3cucHJvcHMubWF4aW1pemVkO1xuICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnpJbmRleCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLndpbmRvdywgcHJvcHMgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7ICAgICAgICBcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLldJTkRPV19TVEFSVF9UUkFOU0ZPUk06XG4gICAgICAgICAgICB0YXJnZXQgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5wcm9wcy5tYXhpbWl6ZWQpIGJyZWFrO1xuICAgICAgICAgICAgbmV3U3RhdGUudHJhbnNmb3JtS2V5ID0gYWN0aW9uLmtleTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRyYW5zZm9ybVR5cGUgPSBhY3Rpb24udHJhbnNmb3JtVHlwZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0WCA9IGFjdGlvbi54O1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRZID0gYWN0aW9uLnk7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydFRvcCA9IHRhcmdldC5wcm9wcy5zdHlsZS50b3A7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydExlZnQgPSB0YXJnZXQucHJvcHMuc3R5bGUubGVmdDtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0V2lkdGggPSB0YXJnZXQucHJvcHMuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydEhlaWdodCA9IHRhcmdldC5wcm9wcy5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGUuV0lORE9XX1RSQU5TRk9STTpcbiAgICAgICAgICAgIGlmICghZ2xvYmFsLndpbmRvdykgYnJlYWs7XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gbmV3U3RhdGUudHJhbnNmb3JtS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID09PSBUUkFOU0ZPUk1fTU9WRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSBuZXdTdGF0ZS5zdGFydExlZnQgKyBhY3Rpb24ueCAtIG5ld1N0YXRlLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gbmV3U3RhdGUuc3RhcnRUb3AgKyBhY3Rpb24ueSAtIG5ld1N0YXRlLnN0YXJ0WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnRvcCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGR5KSwgZ2xvYmFsLndpbmRvdy5pbm5lckhlaWdodCAtIHByb3BzLnN0eWxlLmhlaWdodCAtIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBkeCksIGdsb2JhbC53aW5kb3cuaW5uZXJXaWR0aCAtIHByb3BzLnN0eWxlLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID09PSBUUkFOU0ZPUk1fUkVTSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IG5ld1N0YXRlLnN0YXJ0V2lkdGggKyBhY3Rpb24ueCAtIG5ld1N0YXRlLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gbmV3U3RhdGUuc3RhcnRIZWlnaHQgKyBhY3Rpb24ueSAtIG5ld1N0YXRlLnN0YXJ0WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLmhlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KDMwMCwgZHkpLCBnbG9iYWwud2luZG93LmlubmVySGVpZ2h0IC0gcHJvcHMuc3R5bGUudG9wIC0gNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCg0MDAsIGR4KSwgZ2xvYmFsLndpbmRvdy5pbm5lcldpZHRoIC0gcHJvcHMuc3R5bGUubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ud2luZG93LCBwcm9wczogeyAuLi5wcm9wcywgc3R5bGU6IHsuLi5wcm9wcy5zdHlsZX0gfSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGUuV0lORE9XX01JTklNSVpFX0FMTDpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5taW5pbWl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGUuV0lORE9XX0VORF9UUkFOU0ZPUk06XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1LZXkgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLlNFVF9GT09URVI6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvcHMuZm9vdGVyID0gYWN0aW9uLmZvb3RlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLlNFVF9MT0FESU5HOlxuICAgICAgICAgICAgdmFyIGxvYWRpbmdXaW5kb3cgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuXG4gICAgICAgICAgICBpZiAobG9hZGluZ1dpbmRvdykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdXaW5kb3cuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlLlNFVF9EQVRBOlxuICAgICAgICAgICAgdmFyIHdpbktleSA9IDA7XG4gICAgICAgICAgICBjb25zdCBpY29ucyA9IChhY3Rpb24uZGF0YS5pY29ucyB8fCBbXSk7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3dzID0gKGFjdGlvbi5kYXRhLndpbmRvd3MgfHwgW10pLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdXaW5kb3cod2luS2V5KyssIHdpbmRvdy5wcm9wcywgd2luZG93LnRlbXBsYXRlLCB3aW5kb3cudGVtcGxhdGVQcm9wcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgIHdpbktleSxcbiAgICAgICAgICAgICAgICBpY29ucyxcbiAgICAgICAgICAgICAgICB3aW5kb3dzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdfQ==