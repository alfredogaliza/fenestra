"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var types = _interopRequireWildcard(require("../actions/types"));

var _Window = require("../components/Window");

var _actions = require("../actions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @typedef {number} TransformType Tipo de transformação a ser aplicada na janela
 */

/**
 * @typedef {number} WinKey Identificador de Janela
 */

/**
 * @typedef {Object} Action Ação a ser executada pela acplicação conectada ao Redux
 * @property {string} type Tipo da ação
 */

/**
 * @typedef {Object} IconState Estado de um ícone armazenado em um Store Redux.
 */

/**
 * @typedef {Object} State Estado da aplicação Fenestra.
 * @property {module:Fenestra/Reducers~WinKey} winKey Chave da próxima janela a ser aberta
 * @property {boolean} isLoading Estado de carregamento da Aplicação
 * @property {module:Fenestra/Components/Desktop~IconData[]} icons Lista de Ícones da Aplicação
 * @property {module:Fenestra/Components/Window~WindowState[]} windows Lista de Janelas da Aplicação
 * @property {number} startX Posição X onde se iniciou a transformação
 * @property {number} startY Posição Y onde se iniciou a transformação
 * @property {number} startTop Posição Y inicial da janela a ser transformada
 * @property {number} startLeft Posição X inicial da janela a ser transformada
 * @property {number} startWidth Largura inicial da janela a ser transformada
 * @property {number} startHeight Altura inicial da janela a ser transformada
 * @property {module:Fenestra/Reducers~WinKey} transformKey Identificador da janela a ser transformada
 * @property {module:Fenestra/Reducers~TransformType} transformType Tipo de transformação a ser aplicada na janela
 */

/**
 * Estado Inicial da Aplicação.
 * @constant {module:Fenestra/Reducers~State} initialState Estado inicial
 */
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
  /**
   * Template Vazio.
   * @method
   * @returns {null} Componente nulo
   */

};

var EmptyTemplate = function EmptyTemplate() {
  return null;
};
/**
 * Cria uma nova janela para ser utilizada pela aplicação Fenestra.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key Identificador da janela 
 * @param {module:Fenestra/Components/Window~WindowProps} props Propriedades da janela
 * @param {*} template Template a ser inserido na janela
 * @param {*} templateProps  Propriedades do template
 * @returns {module:Fenestra/Components/Window~WindowState} Estado de janela a ser adicionado à Aplicação
 */


function newWindow(key) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    style: {}
  };
  var template = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EmptyTemplate;
  var templateProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var Template = (0, _reactRedux.connect)(undefined, (0, _actions.boundTemplateActions)(key))(template);
  var top = key % 10 * 50 + 10;
  var left = key % 10 * 50 + 10;
  return {
    key: key,
    props: _objectSpread({}, _actions.DEFAULT_PROPS, {}, props, {
      style: _objectSpread({}, _actions.DEFAULT_PROPS.style, {}, props.style || {}, {
        top: top,
        left: left
      })
    }),
    component: (0, _Window.BoundWindow)(key),
    content: _react.default.createElement(Template, templateProps)
  };
}
/**
 * Método redutor principal da aplicação Fenestra. Realiza a alteração de Estado
 * após o processamento da ação.
 * @method
 * @param {module:Fenestra/Reducers~State} state Estado Atual da Aplicação, antes da ação.
 * @param {module:Fenestra/Actions~Action} action Ação a ser executada
 * @returns {module:Fenestra/Reducers~State} Novo estado após a redução
 */


var fenestraReducer = function fenestraReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  var target = null;
  if (action.type === types.WINDOW_TRANSFORM && state.transformKey === null) return state;

  switch (action.type) {
    case types.WINDOW_OPEN:
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

    case types.WINDOW_CLOSE:
      newState.windows = newState.windows.filter(function (window) {
        return window.key !== action.key;
      });
      break;

    case types.WINDOW_ACTIVATE:
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

    case types.WINDOW_MINIMIZE:
      newState.windows = newState.windows.map(function (window) {
        if (window.key === action.key && window.props.minimizeable) {
          window.props.active = !action.minimize;
          window.props.minimized = action.minimize;
        }

        if (!action.minimize) {
          window.props.active = window.key === action.key && !action.minimize;
        }

        return window;
      });
      break;

    case types.WINDOW_MAXIMIZE:
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

    case types.WINDOW_START_TRANSFORM:
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

    case types.WINDOW_TRANSFORM:
      if (!global.window) break;
      newState.windows = newState.windows.map(function (window) {
        var props = _objectSpread({}, window.props, {
          style: _objectSpread({}, window.props.style)
        });

        if (window.key === newState.transformKey) {
          var dx = action.x - newState.startX;
          var dy = action.y - newState.startY;

          if (newState.transformType === types.TRANSFORM_MOVE) {
            props.style.top = Math.max(0, newState.startTop + dy);
            props.style.left = Math.max(0, newState.startLeft + dx);
          } else if (newState.transformType === types.TRANSFORM_RESIZE) {
            props.style.width = Math.max(_actions.DEFAULT_WIDTH, newState.startWidth + dx);
            props.style.height = Math.max(_actions.DEFAULT_HEIGHT, newState.startHeight + dy);
          }
        }

        return _objectSpread({}, window, {
          props: _objectSpread({}, props, {
            style: _objectSpread({}, props.style)
          })
        });
      });
      break;

    case types.WINDOW_END_TRANSFORM:
      newState.transformKey = null;
      newState.transformType = null;
      break;

    case types.SET_FOOTER:
      newState.windows = newState.windows.map(function (window) {
        if (window.key === action.key) {
          window.props.footer = action.footer;
        }

        return window;
      });
      break;

    case types.SET_LOADING:
      var loadingWindow = newState.windows.find(function (window) {
        return window.key === action.key;
      });

      if (loadingWindow) {
        loadingWindow.isLoading = action.isLoading;
      } else {
        newState.isLoading = action.isLoading;
      }

      break;

    case types.SET_DATA:
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

var _default = fenestraReducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ3aW5LZXkiLCJpc0xvYWRpbmciLCJpY29ucyIsIndpbmRvd3MiLCJzdGFydFgiLCJzdGFydFkiLCJzdGFydFRvcCIsInN0YXJ0TGVmdCIsInN0YXJ0V2lkdGgiLCJzdGFydEhlaWdodCIsInRyYW5zZm9ybUtleSIsInRyYW5zZm9ybVR5cGUiLCJFbXB0eVRlbXBsYXRlIiwibmV3V2luZG93Iiwia2V5IiwicHJvcHMiLCJzdHlsZSIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsIlRlbXBsYXRlIiwidW5kZWZpbmVkIiwidG9wIiwibGVmdCIsIkRFRkFVTFRfUFJPUFMiLCJjb21wb25lbnQiLCJjb250ZW50IiwiZmVuZXN0cmFSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInRhcmdldCIsInR5cGUiLCJ0eXBlcyIsIldJTkRPV19UUkFOU0ZPUk0iLCJXSU5ET1dfT1BFTiIsIndpbmRvdyIsInB1c2giLCJtYXAiLCJhY3RpdmUiLCJ6SW5kZXgiLCJXSU5ET1dfQ0xPU0UiLCJmaWx0ZXIiLCJXSU5ET1dfQUNUSVZBVEUiLCJXSU5ET1dfTUlOSU1JWkUiLCJtaW5pbWl6ZWFibGUiLCJtaW5pbWl6ZSIsIm1pbmltaXplZCIsIldJTkRPV19NQVhJTUlaRSIsIm1heGltaXplZCIsInJlc2l6ZWFibGUiLCJtYXhpbWl6ZSIsIldJTkRPV19TVEFSVF9UUkFOU0ZPUk0iLCJmaW5kIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdsb2JhbCIsImR4IiwiZHkiLCJUUkFOU0ZPUk1fTU9WRSIsIk1hdGgiLCJtYXgiLCJUUkFOU0ZPUk1fUkVTSVpFIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiV0lORE9XX0VORF9UUkFOU0ZPUk0iLCJTRVRfRk9PVEVSIiwiZm9vdGVyIiwiU0VUX0xPQURJTkciLCJsb2FkaW5nV2luZG93IiwiU0VU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LEVBQTRCa0MsR0FBNUIsQ0FBZ0MsVUFBQUYsTUFBTSxFQUFJO0FBQ3RELGVBQU90QixTQUFTLENBQUNiLE1BQU0sRUFBUCxFQUFXbUMsTUFBTSxDQUFDcEIsS0FBbEIsRUFBeUJvQixNQUFNLENBQUNsQixRQUFoQyxFQUEwQ2tCLE1BQU0sQ0FBQ2pCLGFBQWpELENBQWhCO0FBQ0gsT0FGZSxDQUFoQjtBQUlBVyxNQUFBQSxRQUFRLHFCQUNEOUIsWUFEQztBQUVKQyxRQUFBQSxNQUFNLEVBQU5BLE1BRkk7QUFHSkUsUUFBQUEsS0FBSyxFQUFMQSxLQUhJO0FBSUpDLFFBQUFBLE9BQU8sRUFBUEE7QUFKSSxRQUFSO0FBTUE7O0FBRUo7QUFDSTtBQTVIUjs7QUErSEEsU0FBTzBCLFFBQVA7QUFFSCxDQXhJRDs7ZUEwSWVILGUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlZHV0b3IgZGEgU3RvcmUgUmVkdXguXG4gKiBcbiAqIEBtb2R1bGUgRmVuZXN0cmEvUmVkdWNlcnMgXG4gKiBAc2VlIEZlbmVzdHJhL0FjdGlvbnNcbiAqIEBzZWUgRmVuZXN0cmEvQWN0aW9ucy9UeXBlc1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgeyBCb3VuZFdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudHMvV2luZG93JztcbmltcG9ydCB7IGJvdW5kVGVtcGxhdGVBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQge1xuICAgIFRSQU5TRk9STV9NT1ZFLFxuICAgIFRSQU5TRk9STV9SRVNJWkVcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQge1xuICAgIERFRkFVTFRfUFJPUFMsXG4gICAgREVGQVVMVF9XSURUSCxcbiAgICBERUZBVUxUX0hFSUdIVFxufSBmcm9tICcuLi9hY3Rpb25zJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7bnVtYmVyfSBUcmFuc2Zvcm1UeXBlIFRpcG8gZGUgdHJhbnNmb3JtYcOnw6NvIGEgc2VyIGFwbGljYWRhIG5hIGphbmVsYVxuICovXG5cbiAvKipcbiAgKiBAdHlwZWRlZiB7bnVtYmVyfSBXaW5LZXkgSWRlbnRpZmljYWRvciBkZSBKYW5lbGFcbiAgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBY3Rpb24gQcOnw6NvIGEgc2VyIGV4ZWN1dGFkYSBwZWxhIGFjcGxpY2HDp8OjbyBjb25lY3RhZGEgYW8gUmVkdXhcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRpcG8gZGEgYcOnw6NvXG4gKi9cblxuIC8qKlxuICAqIEB0eXBlZGVmIHtPYmplY3R9IEljb25TdGF0ZSBFc3RhZG8gZGUgdW0gw61jb25lIGFybWF6ZW5hZG8gZW0gdW0gU3RvcmUgUmVkdXguXG4gICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdGUgRXN0YWRvIGRhIGFwbGljYcOnw6NvIEZlbmVzdHJhLlxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSB3aW5LZXkgQ2hhdmUgZGEgcHLDs3hpbWEgamFuZWxhIGEgc2VyIGFiZXJ0YVxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0xvYWRpbmcgRXN0YWRvIGRlIGNhcnJlZ2FtZW50byBkYSBBcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9EZXNrdG9wfkljb25EYXRhW119IGljb25zIExpc3RhIGRlIMONY29uZXMgZGEgQXBsaWNhw6fDo29cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1N0YXRlW119IHdpbmRvd3MgTGlzdGEgZGUgSmFuZWxhcyBkYSBBcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0WCBQb3Npw6fDo28gWCBvbmRlIHNlIGluaWNpb3UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFkgUG9zacOnw6NvIFkgb25kZSBzZSBpbmljaW91IGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRUb3AgUG9zacOnw6NvIFkgaW5pY2lhbCBkYSBqYW5lbGEgYSBzZXIgdHJhbnNmb3JtYWRhXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRMZWZ0IFBvc2nDp8OjbyBYIGluaWNpYWwgZGEgamFuZWxhIGEgc2VyIHRyYW5zZm9ybWFkYVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0V2lkdGggTGFyZ3VyYSBpbmljaWFsIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydEhlaWdodCBBbHR1cmEgaW5pY2lhbCBkYSBqYW5lbGEgYSBzZXIgdHJhbnNmb3JtYWRhXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IHRyYW5zZm9ybUtleSBJZGVudGlmaWNhZG9yIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflRyYW5zZm9ybVR5cGV9IHRyYW5zZm9ybVR5cGUgVGlwbyBkZSB0cmFuc2Zvcm1hw6fDo28gYSBzZXIgYXBsaWNhZGEgbmEgamFuZWxhXG4gKi9cbiBcbi8qKlxuICogRXN0YWRvIEluaWNpYWwgZGEgQXBsaWNhw6fDo28uXG4gKiBAY29uc3RhbnQge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gaW5pdGlhbFN0YXRlIEVzdGFkbyBpbmljaWFsXG4gKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB3aW5LZXk6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpY29uczogW10sXG4gICAgd2luZG93czogW10sXG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBzdGFydFRvcDogMCxcbiAgICBzdGFydExlZnQ6IDAsXG4gICAgc3RhcnRXaWR0aDogMCxcbiAgICBzdGFydEhlaWdodDogMCxcbiAgICB0cmFuc2Zvcm1LZXk6IG51bGwsXG4gICAgdHJhbnNmb3JtVHlwZTogbnVsbFxufVxuXG4vKipcbiAqIFRlbXBsYXRlIFZhemlvLlxuICogQG1ldGhvZFxuICogQHJldHVybnMge251bGx9IENvbXBvbmVudGUgbnVsb1xuICovXG5jb25zdCBFbXB0eVRlbXBsYXRlID0gKCkgPT4gbnVsbDtcblxuLyoqXG4gKiBDcmlhIHVtYSBub3ZhIGphbmVsYSBwYXJhIHNlciB1dGlsaXphZGEgcGVsYSBhcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IElkZW50aWZpY2Fkb3IgZGEgamFuZWxhIFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIFByb3ByaWVkYWRlcyBkYSBqYW5lbGFcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGUgVGVtcGxhdGUgYSBzZXIgaW5zZXJpZG8gbmEgamFuZWxhXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlUHJvcHMgIFByb3ByaWVkYWRlcyBkbyB0ZW1wbGF0ZVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dTdGF0ZX0gRXN0YWRvIGRlIGphbmVsYSBhIHNlciBhZGljaW9uYWRvIMOgIEFwbGljYcOnw6NvXG4gKi9cbmZ1bmN0aW9uIG5ld1dpbmRvdyhrZXksIHByb3BzID0ge3N0eWxlOiB7fX0sIHRlbXBsYXRlID0gRW1wdHlUZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyA9IHt9KSB7XG5cbiAgICBjb25zdCBUZW1wbGF0ZSA9IGNvbm5lY3QodW5kZWZpbmVkLCBib3VuZFRlbXBsYXRlQWN0aW9ucyhrZXkpKSh0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0b3AgPSAoa2V5ICUgMTApICogNTAgKyAxMDtcbiAgICBjb25zdCBsZWZ0ID0gKGtleSAlIDEwKSAqIDUwICsgMTA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAuLi5ERUZBVUxUX1BST1BTLFxuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uKHByb3BzLnN0eWxlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICB0b3AsIGxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiBCb3VuZFdpbmRvdyhrZXkpLFxuICAgICAgICBjb250ZW50OiA8VGVtcGxhdGUgey4uLnRlbXBsYXRlUHJvcHN9IC8+XG4gICAgfTtcbiAgICBcbn1cblxuLyoqXG4gKiBNw6l0b2RvIHJlZHV0b3IgcHJpbmNpcGFsIGRhIGFwbGljYcOnw6NvIEZlbmVzdHJhLiBSZWFsaXphIGEgYWx0ZXJhw6fDo28gZGUgRXN0YWRvXG4gKiBhcMOzcyBvIHByb2Nlc3NhbWVudG8gZGEgYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+U3RhdGV9IHN0YXRlIEVzdGFkbyBBdHVhbCBkYSBBcGxpY2HDp8OjbywgYW50ZXMgZGEgYcOnw6NvLlxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IGFjdGlvbiBBw6fDo28gYSBzZXIgZXhlY3V0YWRhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflN0YXRlfSBOb3ZvIGVzdGFkbyBhcMOzcyBhIHJlZHXDp8Ojb1xuICovXG5jb25zdCBmZW5lc3RyYVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgdmFyIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgIHZhciB0YXJnZXQgPSBudWxsO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSB0eXBlcy5XSU5ET1dfVFJBTlNGT1JNICYmIHN0YXRlLnRyYW5zZm9ybUtleSA9PT0gbnVsbCkgcmV0dXJuIHN0YXRlO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19PUEVOOlxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBuZXdTdGF0ZS53aW5LZXkrKztcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG5ld1dpbmRvdyhrZXksIGFjdGlvbi5wcm9wcywgYWN0aW9uLnRlbXBsYXRlLCBhY3Rpb24udGVtcGxhdGVQcm9wcyk7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MucHVzaCh3aW5kb3cpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPSBhY3Rpb24ucHJvcHMuYWN0aXZlID8gKHdpbmRvdy5rZXkgPT09IGtleSkgOiBwcm9wcy5hY3RpdmU7XG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUuekluZGV4ID0gKHdpbmRvdy5rZXkgPT09IGtleSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX0NMT1NFOlxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MuZmlsdGVyKHdpbmRvdyA9PiB3aW5kb3cua2V5ICE9PSBhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX0FDVElWQVRFOlxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0geyAuLi53aW5kb3cucHJvcHMsIHN0eWxlOiB7IC4uLndpbmRvdy5wcm9wcy5zdHlsZSB9IH07XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnpJbmRleCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLndpbmRvdywgcHJvcHMgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfTUlOSU1JWkU6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSAmJiB3aW5kb3cucHJvcHMubWluaW1pemVhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5hY3RpdmUgPSAhYWN0aW9uLm1pbmltaXplO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvcHMubWluaW1pemVkID0gYWN0aW9uLm1pbmltaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5taW5pbWl6ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvcHMuYWN0aXZlID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkgJiYgIWFjdGlvbi5taW5pbWl6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19NQVhJTUlaRTpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHsgLi4ud2luZG93LnByb3BzLCBzdHlsZTogeyAuLi53aW5kb3cucHJvcHMuc3R5bGUgfSB9O1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZSA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICBwcm9wcy5taW5pbWl6ZWQgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkgPyBmYWxzZSA6IHdpbmRvdy5wcm9wcy5taW5pbWl6ZWQ7XG4gICAgICAgICAgICAgICAgcHJvcHMubWF4aW1pemVkID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkgJiYgd2luZG93LnByb3BzLnJlc2l6ZWFibGUpID8gYWN0aW9uLm1heGltaXplIDogd2luZG93LnByb3BzLm1heGltaXplZDtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS56SW5kZXggPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19TVEFSVF9UUkFOU0ZPUk06ICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXQgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5wcm9wcy5tYXhpbWl6ZWQpIGJyZWFrO1xuICAgICAgICAgICAgbmV3U3RhdGUudHJhbnNmb3JtS2V5ID0gYWN0aW9uLmtleTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRyYW5zZm9ybVR5cGUgPSBhY3Rpb24udHJhbnNmb3JtVHlwZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0WCA9IGFjdGlvbi54O1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRZID0gYWN0aW9uLnk7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydFRvcCA9IHRhcmdldC5wcm9wcy5zdHlsZS50b3A7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydExlZnQgPSB0YXJnZXQucHJvcHMuc3R5bGUubGVmdDtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0V2lkdGggPSB0YXJnZXQucHJvcHMuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydEhlaWdodCA9IHRhcmdldC5wcm9wcy5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19UUkFOU0ZPUk06ICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWdsb2JhbC53aW5kb3cpIGJyZWFrO1xuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0geyAuLi53aW5kb3cucHJvcHMsIHN0eWxlOiB7IC4uLndpbmRvdy5wcm9wcy5zdHlsZSB9IH07XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5rZXkgPT09IG5ld1N0YXRlLnRyYW5zZm9ybUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGFjdGlvbi54IC0gbmV3U3RhdGUuc3RhcnRYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeSA9IGFjdGlvbi55IC0gbmV3U3RhdGUuc3RhcnRZO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U3RhdGUudHJhbnNmb3JtVHlwZSA9PT0gVFJBTlNGT1JNX01PVkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnRvcCA9IE1hdGgubWF4KDAsIG5ld1N0YXRlLnN0YXJ0VG9wICsgZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUubGVmdCA9IE1hdGgubWF4KDAsIG5ld1N0YXRlLnN0YXJ0TGVmdCArIGR4KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID09PSBUUkFOU0ZPUk1fUkVTSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS53aWR0aCA9IE1hdGgubWF4KERFRkFVTFRfV0lEVEgsIG5ld1N0YXRlLnN0YXJ0V2lkdGggKyBkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heChERUZBVUxUX0hFSUdIVCwgbmV3U3RhdGUuc3RhcnRIZWlnaHQgKyBkeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ud2luZG93LCBwcm9wczogeyAuLi5wcm9wcywgc3R5bGU6IHsgLi4ucHJvcHMuc3R5bGUgfSB9IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX0VORF9UUkFOU0ZPUk06XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1LZXkgPSBudWxsO1xuICAgICAgICAgICAgbmV3U3RhdGUudHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLlNFVF9GT09URVI6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvcHMuZm9vdGVyID0gYWN0aW9uLmZvb3RlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5TRVRfTE9BRElORzpcbiAgICAgICAgICAgIHZhciBsb2FkaW5nV2luZG93ID0gbmV3U3RhdGUud2luZG93cy5maW5kKHdpbmRvdyA9PiB3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KTtcblxuICAgICAgICAgICAgaWYgKGxvYWRpbmdXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nV2luZG93LmlzTG9hZGluZyA9IGFjdGlvbi5pc0xvYWRpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmlzTG9hZGluZyA9IGFjdGlvbi5pc0xvYWRpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuU0VUX0RBVEE6XG4gICAgICAgICAgICB2YXIgd2luS2V5ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGljb25zID0gKGFjdGlvbi5kYXRhLmljb25zIHx8IFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd3MgPSAoYWN0aW9uLmRhdGEud2luZG93cyB8fCBbXSkubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1dpbmRvdyh3aW5LZXkrKywgd2luZG93LnByb3BzLCB3aW5kb3cudGVtcGxhdGUsIHdpbmRvdy50ZW1wbGF0ZVByb3BzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICAgICAgd2luS2V5LFxuICAgICAgICAgICAgICAgIGljb25zLFxuICAgICAgICAgICAgICAgIHdpbmRvd3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZlbmVzdHJhUmVkdWNlcjsiXX0=