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

var _messages = _interopRequireDefault(require("../messages"));

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
 * @property {module:Fenestra/Messages~Messages} msgs Mensagens do sistema
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
  transformType: null,
  msgs: _messages.default
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

      var props = _objectSpread({}, action.props, {
        title: action.props.title || newState.msgs.defaultTitle
      });

      var window = newWindow(key, props, action.template, action.templateProps);
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
      var msgs = action.data.msgs || _messages.default;
      var icons = action.data.icons || [];
      var windows = (action.data.windows || []).map(function (window) {
        return newWindow(winKey++, window.props, window.template, window.templateProps);
      });
      newState = _objectSpread({}, initialState, {
        winKey: winKey,
        icons: icons,
        windows: windows,
        msgs: msgs
      });
      break;

    default:
      break;
  }

  return newState;
};

var _default = fenestraReducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ3aW5LZXkiLCJpc0xvYWRpbmciLCJpY29ucyIsIndpbmRvd3MiLCJzdGFydFgiLCJzdGFydFkiLCJzdGFydFRvcCIsInN0YXJ0TGVmdCIsInN0YXJ0V2lkdGgiLCJzdGFydEhlaWdodCIsInRyYW5zZm9ybUtleSIsInRyYW5zZm9ybVR5cGUiLCJtc2dzIiwibWVzc2FnZXMiLCJFbXB0eVRlbXBsYXRlIiwibmV3V2luZG93Iiwia2V5IiwicHJvcHMiLCJzdHlsZSIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsIlRlbXBsYXRlIiwidW5kZWZpbmVkIiwidG9wIiwibGVmdCIsIkRFRkFVTFRfUFJPUFMiLCJjb21wb25lbnQiLCJjb250ZW50IiwiZmVuZXN0cmFSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInRhcmdldCIsInR5cGUiLCJ0eXBlcyIsIldJTkRPV19UUkFOU0ZPUk0iLCJXSU5ET1dfT1BFTiIsInRpdGxlIiwiZGVmYXVsdFRpdGxlIiwid2luZG93IiwicHVzaCIsIm1hcCIsImFjdGl2ZSIsInpJbmRleCIsIldJTkRPV19DTE9TRSIsImZpbHRlciIsIldJTkRPV19BQ1RJVkFURSIsIldJTkRPV19NSU5JTUlaRSIsIm1pbmltaXplYWJsZSIsIm1pbmltaXplIiwibWluaW1pemVkIiwiV0lORE9XX01BWElNSVpFIiwibWF4aW1pemVkIiwicmVzaXplYWJsZSIsIm1heGltaXplIiwiV0lORE9XX1NUQVJUX1RSQU5TRk9STSIsImZpbmQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2xvYmFsIiwiZHgiLCJkeSIsIlRSQU5TRk9STV9NT1ZFIiwiTWF0aCIsIm1heCIsIlRSQU5TRk9STV9SRVNJWkUiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsIlNFVF9GT09URVIi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QUE1QjtBQUNIOztBQUVEOztBQUVKLFNBQUtpQyxLQUFLLENBQUN5QyxRQUFYO0FBQ0ksVUFBSTNFLE1BQU0sR0FBRyxDQUFiO0FBQ0EsVUFBTVksSUFBSSxHQUFHa0IsTUFBTSxDQUFDOEMsSUFBUCxDQUFZaEUsSUFBWixJQUFvQkMsaUJBQWpDO0FBQ0EsVUFBTVgsS0FBSyxHQUFJNEIsTUFBTSxDQUFDOEMsSUFBUCxDQUFZMUUsS0FBWixJQUFxQixFQUFwQztBQUNBLFVBQU1DLE9BQU8sR0FBRyxDQUFDMkIsTUFBTSxDQUFDOEMsSUFBUCxDQUFZekUsT0FBWixJQUF1QixFQUF4QixFQUE0QnNDLEdBQTVCLENBQWdDLFVBQUFGLE1BQU0sRUFBSTtBQUN0RCxlQUFPeEIsU0FBUyxDQUFDZixNQUFNLEVBQVAsRUFBV3VDLE1BQU0sQ0FBQ3RCLEtBQWxCLEVBQXlCc0IsTUFBTSxDQUFDcEIsUUFBaEMsRUFBMENvQixNQUFNLENBQUNuQixhQUFqRCxDQUFoQjtBQUNILE9BRmUsQ0FBaEI7QUFJQVcsTUFBQUEsUUFBUSxxQkFDRGhDLFlBREM7QUFFSkMsUUFBQUEsTUFBTSxFQUFOQSxNQUZJO0FBR0pFLFFBQUFBLEtBQUssRUFBTEEsS0FISTtBQUlKQyxRQUFBQSxPQUFPLEVBQVBBLE9BSkk7QUFLSlMsUUFBQUEsSUFBSSxFQUFKQTtBQUxJLFFBQVI7QUFRQTs7QUFFSjtBQUNJO0FBbklSOztBQXNJQSxTQUFPbUIsUUFBUDtBQUVILENBL0lEOztlQWlKZUgsZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVkdXRvciBkYSBTdG9yZSBSZWR1eC5cbiAqIFxuICogQG1vZHVsZSBGZW5lc3RyYS9SZWR1Y2VycyBcbiAqIEBzZWUgRmVuZXN0cmEvQWN0aW9uc1xuICogQHNlZSBGZW5lc3RyYS9BY3Rpb25zL1R5cGVzXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7IEJvdW5kV2luZG93IH0gZnJvbSAnLi4vY29tcG9uZW50cy9XaW5kb3cnO1xuaW1wb3J0IHsgYm91bmRUZW1wbGF0ZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcyc7XG5cbmltcG9ydCB7XG4gICAgVFJBTlNGT1JNX01PVkUsXG4gICAgVFJBTlNGT1JNX1JFU0laRVxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7XG4gICAgREVGQVVMVF9QUk9QUyxcbiAgICBERUZBVUxUX1dJRFRILFxuICAgIERFRkFVTFRfSEVJR0hUXG59IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtudW1iZXJ9IFRyYW5zZm9ybVR5cGUgVGlwbyBkZSB0cmFuc2Zvcm1hw6fDo28gYSBzZXIgYXBsaWNhZGEgbmEgamFuZWxhXG4gKi9cblxuIC8qKlxuICAqIEB0eXBlZGVmIHtudW1iZXJ9IFdpbktleSBJZGVudGlmaWNhZG9yIGRlIEphbmVsYVxuICAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFjdGlvbiBBw6fDo28gYSBzZXIgZXhlY3V0YWRhIHBlbGEgYWNwbGljYcOnw6NvIGNvbmVjdGFkYSBhbyBSZWR1eFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGlwbyBkYSBhw6fDo29cbiAqL1xuXG4gLyoqXG4gICogQHR5cGVkZWYge09iamVjdH0gSWNvblN0YXRlIEVzdGFkbyBkZSB1bSDDrWNvbmUgYXJtYXplbmFkbyBlbSB1bSBTdG9yZSBSZWR1eC5cbiAgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdGF0ZSBFc3RhZG8gZGEgYXBsaWNhw6fDo28gRmVuZXN0cmEuXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IHdpbktleSBDaGF2ZSBkYSBwcsOzeGltYSBqYW5lbGEgYSBzZXIgYWJlcnRhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTG9hZGluZyBFc3RhZG8gZGUgY2FycmVnYW1lbnRvIGRhIEFwbGljYcOnw6NvXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL0Rlc2t0b3B+SWNvbkRhdGFbXX0gaWNvbnMgTGlzdGEgZGUgw41jb25lcyBkYSBBcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93U3RhdGVbXX0gd2luZG93cyBMaXN0YSBkZSBKYW5lbGFzIGRhIEFwbGljYcOnw6NvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRYIFBvc2nDp8OjbyBYIG9uZGUgc2UgaW5pY2lvdSBhIHRyYW5zZm9ybWHDp8Ojb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0WSBQb3Npw6fDo28gWSBvbmRlIHNlIGluaWNpb3UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFRvcCBQb3Npw6fDo28gWSBpbmljaWFsIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydExlZnQgUG9zacOnw6NvIFggaW5pY2lhbCBkYSBqYW5lbGEgYSBzZXIgdHJhbnNmb3JtYWRhXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRXaWR0aCBMYXJndXJhIGluaWNpYWwgZGEgamFuZWxhIGEgc2VyIHRyYW5zZm9ybWFkYVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0SGVpZ2h0IEFsdHVyYSBpbmljaWFsIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0gdHJhbnNmb3JtS2V5IElkZW50aWZpY2Fkb3IgZGEgamFuZWxhIGEgc2VyIHRyYW5zZm9ybWFkYVxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+VHJhbnNmb3JtVHlwZX0gdHJhbnNmb3JtVHlwZSBUaXBvIGRlIHRyYW5zZm9ybWHDp8OjbyBhIHNlciBhcGxpY2FkYSBuYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL01lc3NhZ2Vzfk1lc3NhZ2VzfSBtc2dzIE1lbnNhZ2VucyBkbyBzaXN0ZW1hXG4gKi9cbiBcbi8qKlxuICogRXN0YWRvIEluaWNpYWwgZGEgQXBsaWNhw6fDo28uXG4gKiBAY29uc3RhbnQge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gaW5pdGlhbFN0YXRlIEVzdGFkbyBpbmljaWFsXG4gKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB3aW5LZXk6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpY29uczogW10sXG4gICAgd2luZG93czogW10sXG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBzdGFydFRvcDogMCxcbiAgICBzdGFydExlZnQ6IDAsXG4gICAgc3RhcnRXaWR0aDogMCxcbiAgICBzdGFydEhlaWdodDogMCxcbiAgICB0cmFuc2Zvcm1LZXk6IG51bGwsXG4gICAgdHJhbnNmb3JtVHlwZTogbnVsbCxcbiAgICBtc2dzOiBtZXNzYWdlc1xufVxuXG4vKipcbiAqIFRlbXBsYXRlIFZhemlvLlxuICogQG1ldGhvZFxuICogQHJldHVybnMge251bGx9IENvbXBvbmVudGUgbnVsb1xuICovXG5jb25zdCBFbXB0eVRlbXBsYXRlID0gKCkgPT4gbnVsbDtcblxuLyoqXG4gKiBDcmlhIHVtYSBub3ZhIGphbmVsYSBwYXJhIHNlciB1dGlsaXphZGEgcGVsYSBhcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IElkZW50aWZpY2Fkb3IgZGEgamFuZWxhIFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIFByb3ByaWVkYWRlcyBkYSBqYW5lbGFcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGUgVGVtcGxhdGUgYSBzZXIgaW5zZXJpZG8gbmEgamFuZWxhXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlUHJvcHMgIFByb3ByaWVkYWRlcyBkbyB0ZW1wbGF0ZVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dTdGF0ZX0gRXN0YWRvIGRlIGphbmVsYSBhIHNlciBhZGljaW9uYWRvIMOgIEFwbGljYcOnw6NvXG4gKi9cbmZ1bmN0aW9uIG5ld1dpbmRvdyhrZXksIHByb3BzID0ge3N0eWxlOiB7fX0sIHRlbXBsYXRlID0gRW1wdHlUZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyA9IHt9KSB7XG5cbiAgICBjb25zdCBUZW1wbGF0ZSA9IGNvbm5lY3QodW5kZWZpbmVkLCBib3VuZFRlbXBsYXRlQWN0aW9ucyhrZXkpKSh0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0b3AgPSAoa2V5ICUgMTApICogNTAgKyAxMDtcbiAgICBjb25zdCBsZWZ0ID0gKGtleSAlIDEwKSAqIDUwICsgMTA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAuLi5ERUZBVUxUX1BST1BTLFxuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uKHByb3BzLnN0eWxlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICB0b3AsIGxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiBCb3VuZFdpbmRvdyhrZXkpLFxuICAgICAgICBjb250ZW50OiA8VGVtcGxhdGUgey4uLnRlbXBsYXRlUHJvcHN9IC8+XG4gICAgfTtcbiAgICBcbn1cblxuLyoqXG4gKiBNw6l0b2RvIHJlZHV0b3IgcHJpbmNpcGFsIGRhIGFwbGljYcOnw6NvIEZlbmVzdHJhLiBSZWFsaXphIGEgYWx0ZXJhw6fDo28gZGUgRXN0YWRvXG4gKiBhcMOzcyBvIHByb2Nlc3NhbWVudG8gZGEgYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+U3RhdGV9IHN0YXRlIEVzdGFkbyBBdHVhbCBkYSBBcGxpY2HDp8OjbywgYW50ZXMgZGEgYcOnw6NvLlxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IGFjdGlvbiBBw6fDo28gYSBzZXIgZXhlY3V0YWRhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflN0YXRlfSBOb3ZvIGVzdGFkbyBhcMOzcyBhIHJlZHXDp8Ojb1xuICovXG5jb25zdCBmZW5lc3RyYVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgdmFyIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgIHZhciB0YXJnZXQgPSBudWxsO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSB0eXBlcy5XSU5ET1dfVFJBTlNGT1JNICYmIHN0YXRlLnRyYW5zZm9ybUtleSA9PT0gbnVsbCkgcmV0dXJuIHN0YXRlO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19PUEVOOlxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBuZXdTdGF0ZS53aW5LZXkrKztcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wcm9wcyxcbiAgICAgICAgICAgICAgICB0aXRsZTogKGFjdGlvbi5wcm9wcy50aXRsZSB8fCBuZXdTdGF0ZS5tc2dzLmRlZmF1bHRUaXRsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG5ld1dpbmRvdyhrZXksIHByb3BzLCBhY3Rpb24udGVtcGxhdGUsIGFjdGlvbi50ZW1wbGF0ZVByb3BzKTtcblxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cy5wdXNoKHdpbmRvdyk7XG5cbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHsgLi4ud2luZG93LnByb3BzLCBzdHlsZTogeyAuLi53aW5kb3cucHJvcHMuc3R5bGUgfSB9O1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZSA9IGFjdGlvbi5wcm9wcy5hY3RpdmUgPyAod2luZG93LmtleSA9PT0ga2V5KSA6IHByb3BzLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS56SW5kZXggPSAod2luZG93LmtleSA9PT0ga2V5KSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLndpbmRvdywgcHJvcHMgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfQ0xPU0U6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5maWx0ZXIod2luZG93ID0+IHdpbmRvdy5rZXkgIT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfQUNUSVZBVEU6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSk7XG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUuekluZGV4ID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ud2luZG93LCBwcm9wcyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19NSU5JTUlaRTpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5ICYmIHdpbmRvdy5wcm9wcy5taW5pbWl6ZWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb3BzLmFjdGl2ZSA9ICFhY3Rpb24ubWluaW1pemU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5taW5pbWl6ZWQgPSBhY3Rpb24ubWluaW1pemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLm1pbmltaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5hY3RpdmUgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSAmJiAhYWN0aW9uLm1pbmltaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX01BWElNSVpFOlxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0geyAuLi53aW5kb3cucHJvcHMsIHN0eWxlOiB7IC4uLndpbmRvdy5wcm9wcy5zdHlsZSB9IH07XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuICAgICAgICAgICAgICAgIHByb3BzLm1pbmltaXplZCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSA/IGZhbHNlIDogd2luZG93LnByb3BzLm1pbmltaXplZDtcbiAgICAgICAgICAgICAgICBwcm9wcy5tYXhpbWl6ZWQgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSAmJiB3aW5kb3cucHJvcHMucmVzaXplYWJsZSkgPyBhY3Rpb24ubWF4aW1pemUgOiB3aW5kb3cucHJvcHMubWF4aW1pemVkO1xuICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnpJbmRleCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLndpbmRvdywgcHJvcHMgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX1NUQVJUX1RSQU5TRk9STTogICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldCA9IG5ld1N0YXRlLndpbmRvd3MuZmluZCh3aW5kb3cgPT4gd2luZG93LmtleSA9PT0gYWN0aW9uLmtleSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnByb3BzLm1heGltaXplZCkgYnJlYWs7XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1LZXkgPSBhY3Rpb24ua2V5O1xuICAgICAgICAgICAgbmV3U3RhdGUudHJhbnNmb3JtVHlwZSA9IGFjdGlvbi50cmFuc2Zvcm1UeXBlO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRYID0gYWN0aW9uLng7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydFkgPSBhY3Rpb24ueTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0VG9wID0gdGFyZ2V0LnByb3BzLnN0eWxlLnRvcDtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0TGVmdCA9IHRhcmdldC5wcm9wcy5zdHlsZS5sZWZ0O1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRXaWR0aCA9IHRhcmdldC5wcm9wcy5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0SGVpZ2h0ID0gdGFyZ2V0LnByb3BzLnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX1RSQU5TRk9STTogICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghZ2xvYmFsLndpbmRvdykgYnJlYWs7XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gbmV3U3RhdGUudHJhbnNmb3JtS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gYWN0aW9uLnggLSBuZXdTdGF0ZS5zdGFydFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gYWN0aW9uLnkgLSBuZXdTdGF0ZS5zdGFydFk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID09PSBUUkFOU0ZPUk1fTU9WRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUudG9wID0gTWF0aC5tYXgoMCwgbmV3U3RhdGUuc3RhcnRUb3AgKyBkeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS5sZWZ0ID0gTWF0aC5tYXgoMCwgbmV3U3RhdGUuc3RhcnRMZWZ0ICsgZHgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlLnRyYW5zZm9ybVR5cGUgPT09IFRSQU5TRk9STV9SRVNJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLndpZHRoID0gTWF0aC5tYXgoREVGQVVMVF9XSURUSCwgbmV3U3RhdGUuc3RhcnRXaWR0aCArIGR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KERFRkFVTFRfSEVJR0hULCBuZXdTdGF0ZS5zdGFydEhlaWdodCArIGR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzOiB7IC4uLnByb3BzLCBzdHlsZTogeyAuLi5wcm9wcy5zdHlsZSB9IH0gfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfRU5EX1RSQU5TRk9STTpcbiAgICAgICAgICAgIG5ld1N0YXRlLnRyYW5zZm9ybUtleSA9IG51bGw7XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuU0VUX0ZPT1RFUjpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5mb290ZXIgPSBhY3Rpb24uZm9vdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLlNFVF9MT0FESU5HOlxuICAgICAgICAgICAgdmFyIGxvYWRpbmdXaW5kb3cgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuXG4gICAgICAgICAgICBpZiAobG9hZGluZ1dpbmRvdykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdXaW5kb3cuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5TRVRfREFUQTpcbiAgICAgICAgICAgIHZhciB3aW5LZXkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbXNncyA9IGFjdGlvbi5kYXRhLm1zZ3MgfHwgbWVzc2FnZXM7XG4gICAgICAgICAgICBjb25zdCBpY29ucyA9IChhY3Rpb24uZGF0YS5pY29ucyB8fCBbXSk7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3dzID0gKGFjdGlvbi5kYXRhLndpbmRvd3MgfHwgW10pLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdXaW5kb3cod2luS2V5KyssIHdpbmRvdy5wcm9wcywgd2luZG93LnRlbXBsYXRlLCB3aW5kb3cudGVtcGxhdGVQcm9wcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgIHdpbktleSxcbiAgICAgICAgICAgICAgICBpY29ucyxcbiAgICAgICAgICAgICAgICB3aW5kb3dzLFxuICAgICAgICAgICAgICAgIG1zZ3NcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmVuZXN0cmFSZWR1Y2VyOyJdfQ==