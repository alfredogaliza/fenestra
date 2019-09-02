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
 * @typedef {Object} Options Opções da aplicação
 * @property {boolean} showTaskbar Barra de Tarefas visível
 * @property {string} className Nome da classe CSS adicional do desktop, utilize para customizar a aparência
 * @property {integer} taskbarHeight Altura da barra de tarefas
 * @property {boolean} autohideTaskbar Esconde a barra de tarefas após um certo período
 * @property {integer} autohideTimeout Define o tempo (em ms) de espera para esconder a barra de tarefas
 * @property {boolean} confirmOnClose Pede a confirmação de fechamento da janela
 * @property {module:Fenestra/Messages~Messages} msgs Mensagens do sistema
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
 * @property {module:Fenestra/Reducers~Options} options Opções da aplicação
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
  options: {
    className: "",
    showTaskbar: true,
    taskbarHeight: 50,
    autohideTaskbar: false,
    autohideTimeout: 1000,
    confirmOnClose: false,
    msgs: _messages.default
  }
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
        title: action.props.title || newState.options.msgs.defaultTitle
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

    case types.SHOW_TASKBAR:
      return _objectSpread({}, newState, {
        options: _objectSpread({}, newState.options, {
          showTaskbar: true
        })
      });

    case types.HIDE_TASKBAR:
      return _objectSpread({}, newState, {
        options: _objectSpread({}, newState.options, {
          showTaskbar: false
        })
      });

    case types.SET_OPTIONS:
      return _objectSpread({}, newState, {
        options: _objectSpread({}, newState.options, {}, action.options)
      });

    case types.SET_DATA:
      var winKey = 0;
      var icons = action.data.icons || [];
      var options = action.data.options || {
        msgs: {}
      };

      var msgs = _objectSpread({}, initialState.options.msgs, {}, options.msgs);

      var windows = (action.data.windows || []).map(function (window) {
        var props = _objectSpread({
          title: msgs.defaultTitle
        }, window.props);

        return newWindow(winKey++, props, window.template, window.templateProps);
      });
      newState = _objectSpread({}, initialState, {
        winKey: winKey,
        icons: icons,
        windows: windows,
        options: _objectSpread({}, initialState.options, {}, options, {
          msgs: _objectSpread({}, initialState.options.msgs, {}, options.msgs)
        })
      });
      break;

    default:
      break;
  }

  return newState;
};

var _default = fenestraReducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ3aW5LZXkiLCJpc0xvYWRpbmciLCJpY29ucyIsIndpbmRvd3MiLCJzdGFydFgiLCJzdGFydFkiLCJzdGFydFRvcCIsInN0YXJ0TGVmdCIsInN0YXJ0V2lkdGgiLCJzdGFydEhlaWdodCIsInRyYW5zZm9ybUtleSIsInRyYW5zZm9ybVR5cGUiLCJvcHRpb25zIiwiY2xhc3NOYW1lIiwic2hvd1Rhc2tiYXIiLCJ0YXNrYmFySGVpZ2h0IiwiYXV0b2hpZGVUYXNrYmFyIiwiYXV0b2hpZGVUaW1lb3V0IiwiY29uZmlybU9uQ2xvc2UiLCJtc2dzIiwibWVzc2FnZXMiLCJFbXB0eVRlbXBsYXRlIiwibmV3V2luZG93Iiwia2V5IiwicHJvcHMiLCJzdHlsZSIsInRlbXBsYXRlIiwidGVtcGxhdGVQcm9wcyIsIlRlbXBsYXRlIiwidW5kZWZpbmVkIiwidG9wIiwibGVmdCIsIkRFRkFVTFRfUFJPUFMiLCJjb21wb25lbnQiLCJjb250ZW50IiwiZmVuZXN0cmFSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInRhcmdldCIsInR5cGUiLCJ0eXBlcyIsIldJTkRPV19UUkFOU0ZPUk0iLCJXSU5ET1dfT1BFTiIsInRpdGxlIiwiZGVmYXVsdFRpdGxlIiwid2luZG93IiwicHVzaCIsIm1hcCIsImFjdGl2ZSIsInpJbmRleCIsIldJTkRPV19DTE9TRSIsImZpbHRlciIsIldJTkRPV19BQ1RJVkFURSIsIldJTkRPV19NSU5JTUlaRSIsIm1pbmltaXplYWJsZSIsIm1pbmltaXplIiwibWluaW1pemVkIiwiV0lORE9XX01BWElNSVpFIiwibWF4aW1pemVkIiwicmVzaXplYWJsZSIsIm1heGltaXplIiwiV0lORE9XX1NUQVJUX1RSQU5TRk9STSIsImZpbmQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHgiLCJkeSIsIlRSQU5TRk9STV9NT1ZFIiwiTWF0aCIsIm1heCIsIlRSQU5TRk9STV9SRVNJWkUiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJXSU5ET1dfRU5EX1RSQU5TRk9STSIsIlNFVF9GT09URVIiLCJmb290ZXIiLCJTRVRfTE9BRElORyIsImxvYWRpbmdXaW5kb3ciLCJTSE9XX1RBU0tCQVIiLCJISURFX1RBU0tCQVIiLCJTRVRfT1BUSU9OUyIsIlNFVF9EQVRBIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUlDOzs7O0FBSUQ7Ozs7O0FBS0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7QUFJQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLEVBQUFBLE1BQU0sRUFBRSxDQURTO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUUsS0FGTTtBQUdqQkMsRUFBQUEsS0FBSyxFQUFFLEVBSFU7QUFJakJDLEVBQUFBLE9BQU8sRUFBRSxFQUpRO0FBS2pCQyxFQUFBQSxNQUFNLEVBQUUsQ0FMUztBQU1qQkMsRUFBQUEsTUFBTSxFQUFFLENBTlM7QUFPakJDLEVBQUFBLFFBQVEsRUFBRSxDQVBPO0FBUWpCQyxFQUFBQSxTQUFTLEVBQUUsQ0FSTTtBQVNqQkMsRUFBQUEsVUFBVSxFQUFFLENBVEs7QUFVakJDLEVBQUFBLFdBQVcsRUFBRSxDQVZJO0FBV2pCQyxFQUFBQSxZQUFZLEVBQUUsSUFYRztBQVlqQkMsRUFBQUEsYUFBYSxFQUFFLElBWkU7QUFhakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxTQUFTLEVBQUUsRUFETjtBQUVMQyxJQUFBQSxXQUFXLEVBQUUsSUFGUjtBQUdMQyxJQUFBQSxhQUFhLEVBQUUsRUFIVjtBQUlMQyxJQUFBQSxlQUFlLEVBQUUsS0FKWjtBQUtMQyxJQUFBQSxlQUFlLEVBQUUsSUFMWjtBQU1MQyxJQUFBQSxjQUFjLEVBQUUsS0FOWDtBQU9MQyxJQUFBQSxJQUFJ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QUFBUCxPQUF6Qzs7QUFDQSxVQUFNQSxJQUFJLHFCQUNIcEIsWUFBWSxDQUFDYSxPQUFiLENBQXFCTyxJQURsQixNQUVIUCxPQUFPLENBQUNPLElBRkwsQ0FBVjs7QUFJQSxVQUFNaEIsT0FBTyxHQUFHLENBQUNrQyxNQUFNLENBQUNnRCxJQUFQLENBQVlsRixPQUFaLElBQXVCLEVBQXhCLEVBQTRCNkMsR0FBNUIsQ0FBZ0MsVUFBQUYsTUFBTSxFQUFJO0FBQ3RELFlBQU10QixLQUFLO0FBQ1BvQixVQUFBQSxLQUFLLEVBQUV6QixJQUFJLENBQUMwQjtBQURMLFdBRUpDLE1BQU0sQ0FBQ3RCLEtBRkgsQ0FBWDs7QUFJQSxlQUFPRixTQUFTLENBQUN0QixNQUFNLEVBQVAsRUFBV3dCLEtBQVgsRUFBa0JzQixNQUFNLENBQUNwQixRQUF6QixFQUFtQ29CLE1BQU0sQ0FBQ25CLGFBQTFDLENBQWhCO0FBQ0gsT0FOZSxDQUFoQjtBQVFBVyxNQUFBQSxRQUFRLHFCQUNEdkMsWUFEQztBQUVKQyxRQUFBQSxNQUFNLEVBQU5BLE1BRkk7QUFHSkUsUUFBQUEsS0FBSyxFQUFMQSxLQUhJO0FBSUpDLFFBQUFBLE9BQU8sRUFBUEEsT0FKSTtBQUtKUyxRQUFBQSxPQUFPLG9CQUNBYixZQUFZLENBQUNhLE9BRGIsTUFFQUEsT0FGQTtBQUdITyxVQUFBQSxJQUFJLG9CQUNHcEIsWUFBWSxDQUFDYSxPQUFiLENBQXFCTyxJQUR4QixNQUVHUCxPQUFPLENBQUNPLElBRlg7QUFIRDtBQUxILFFBQVI7QUFlQTs7QUFFSjtBQUNJO0FBektSOztBQTRLQSxTQUFPbUIsUUFBUDtBQUVILENBckxEOztlQXVMZUgsZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVkdXRvciBkYSBTdG9yZSBSZWR1eC5cbiAqIFxuICogQG1vZHVsZSBGZW5lc3RyYS9SZWR1Y2VycyBcbiAqIEBzZWUgRmVuZXN0cmEvQWN0aW9uc1xuICogQHNlZSBGZW5lc3RyYS9BY3Rpb25zL1R5cGVzXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7IEJvdW5kV2luZG93IH0gZnJvbSAnLi4vY29tcG9uZW50cy9XaW5kb3cnO1xuaW1wb3J0IHsgYm91bmRUZW1wbGF0ZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcyc7XG5cbmltcG9ydCB7XG4gICAgVFJBTlNGT1JNX01PVkUsXG4gICAgVFJBTlNGT1JNX1JFU0laRVxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCB7XG4gICAgREVGQVVMVF9QUk9QUyxcbiAgICBERUZBVUxUX1dJRFRILFxuICAgIERFRkFVTFRfSEVJR0hUXG59IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtudW1iZXJ9IFRyYW5zZm9ybVR5cGUgVGlwbyBkZSB0cmFuc2Zvcm1hw6fDo28gYSBzZXIgYXBsaWNhZGEgbmEgamFuZWxhXG4gKi9cblxuIC8qKlxuICAqIEB0eXBlZGVmIHtudW1iZXJ9IFdpbktleSBJZGVudGlmaWNhZG9yIGRlIEphbmVsYVxuICAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFjdGlvbiBBw6fDo28gYSBzZXIgZXhlY3V0YWRhIHBlbGEgYWNwbGljYcOnw6NvIGNvbmVjdGFkYSBhbyBSZWR1eFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGlwbyBkYSBhw6fDo29cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEljb25TdGF0ZSBFc3RhZG8gZGUgdW0gw61jb25lIGFybWF6ZW5hZG8gZW0gdW0gU3RvcmUgUmVkdXguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zIE9ww6fDtWVzIGRhIGFwbGljYcOnw6NvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHNob3dUYXNrYmFyIEJhcnJhIGRlIFRhcmVmYXMgdmlzw612ZWxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjbGFzc05hbWUgTm9tZSBkYSBjbGFzc2UgQ1NTIGFkaWNpb25hbCBkbyBkZXNrdG9wLCB1dGlsaXplIHBhcmEgY3VzdG9taXphciBhIGFwYXLDqm5jaWFcbiAqIEBwcm9wZXJ0eSB7aW50ZWdlcn0gdGFza2JhckhlaWdodCBBbHR1cmEgZGEgYmFycmEgZGUgdGFyZWZhc1xuICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvaGlkZVRhc2tiYXIgRXNjb25kZSBhIGJhcnJhIGRlIHRhcmVmYXMgYXDDs3MgdW0gY2VydG8gcGVyw61vZG9cbiAqIEBwcm9wZXJ0eSB7aW50ZWdlcn0gYXV0b2hpZGVUaW1lb3V0IERlZmluZSBvIHRlbXBvIChlbSBtcykgZGUgZXNwZXJhIHBhcmEgZXNjb25kZXIgYSBiYXJyYSBkZSB0YXJlZmFzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbmZpcm1PbkNsb3NlIFBlZGUgYSBjb25maXJtYcOnw6NvIGRlIGZlY2hhbWVudG8gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9NZXNzYWdlc35NZXNzYWdlc30gbXNncyBNZW5zYWdlbnMgZG8gc2lzdGVtYVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdGUgRXN0YWRvIGRhIGFwbGljYcOnw6NvIEZlbmVzdHJhLlxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSB3aW5LZXkgQ2hhdmUgZGEgcHLDs3hpbWEgamFuZWxhIGEgc2VyIGFiZXJ0YVxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0xvYWRpbmcgRXN0YWRvIGRlIGNhcnJlZ2FtZW50byBkYSBBcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9EZXNrdG9wfkljb25EYXRhW119IGljb25zIExpc3RhIGRlIMONY29uZXMgZGEgQXBsaWNhw6fDo29cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1N0YXRlW119IHdpbmRvd3MgTGlzdGEgZGUgSmFuZWxhcyBkYSBBcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0WCBQb3Npw6fDo28gWCBvbmRlIHNlIGluaWNpb3UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFkgUG9zacOnw6NvIFkgb25kZSBzZSBpbmljaW91IGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRUb3AgUG9zacOnw6NvIFkgaW5pY2lhbCBkYSBqYW5lbGEgYSBzZXIgdHJhbnNmb3JtYWRhXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRMZWZ0IFBvc2nDp8OjbyBYIGluaWNpYWwgZGEgamFuZWxhIGEgc2VyIHRyYW5zZm9ybWFkYVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0V2lkdGggTGFyZ3VyYSBpbmljaWFsIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydEhlaWdodCBBbHR1cmEgaW5pY2lhbCBkYSBqYW5lbGEgYSBzZXIgdHJhbnNmb3JtYWRhXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IHRyYW5zZm9ybUtleSBJZGVudGlmaWNhZG9yIGRhIGphbmVsYSBhIHNlciB0cmFuc2Zvcm1hZGFcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflRyYW5zZm9ybVR5cGV9IHRyYW5zZm9ybVR5cGUgVGlwbyBkZSB0cmFuc2Zvcm1hw6fDo28gYSBzZXIgYXBsaWNhZGEgbmEgamFuZWxhXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35PcHRpb25zfSBvcHRpb25zIE9ww6fDtWVzIGRhIGFwbGljYcOnw6NvXG4gKi9cbiBcbi8qKlxuICogRXN0YWRvIEluaWNpYWwgZGEgQXBsaWNhw6fDo28uXG4gKiBAY29uc3RhbnQge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gaW5pdGlhbFN0YXRlIEVzdGFkbyBpbmljaWFsXG4gKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB3aW5LZXk6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpY29uczogW10sXG4gICAgd2luZG93czogW10sXG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBzdGFydFRvcDogMCxcbiAgICBzdGFydExlZnQ6IDAsXG4gICAgc3RhcnRXaWR0aDogMCxcbiAgICBzdGFydEhlaWdodDogMCxcbiAgICB0cmFuc2Zvcm1LZXk6IG51bGwsXG4gICAgdHJhbnNmb3JtVHlwZTogbnVsbCwgICAgXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIHNob3dUYXNrYmFyOiB0cnVlLFxuICAgICAgICB0YXNrYmFySGVpZ2h0OiA1MCxcbiAgICAgICAgYXV0b2hpZGVUYXNrYmFyOiBmYWxzZSxcbiAgICAgICAgYXV0b2hpZGVUaW1lb3V0OiAxMDAwLFxuICAgICAgICBjb25maXJtT25DbG9zZTogZmFsc2UsXG4gICAgICAgIG1zZ3M6IG1lc3NhZ2VzXG4gICAgfVxufVxuXG4vKipcbiAqIFRlbXBsYXRlIFZhemlvLlxuICogQG1ldGhvZFxuICogQHJldHVybnMge251bGx9IENvbXBvbmVudGUgbnVsb1xuICovXG5jb25zdCBFbXB0eVRlbXBsYXRlID0gKCkgPT4gbnVsbDtcblxuLyoqXG4gKiBDcmlhIHVtYSBub3ZhIGphbmVsYSBwYXJhIHNlciB1dGlsaXphZGEgcGVsYSBhcGxpY2HDp8OjbyBGZW5lc3RyYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IElkZW50aWZpY2Fkb3IgZGEgamFuZWxhIFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIFByb3ByaWVkYWRlcyBkYSBqYW5lbGFcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGUgVGVtcGxhdGUgYSBzZXIgaW5zZXJpZG8gbmEgamFuZWxhXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlUHJvcHMgIFByb3ByaWVkYWRlcyBkbyB0ZW1wbGF0ZVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dTdGF0ZX0gRXN0YWRvIGRlIGphbmVsYSBhIHNlciBhZGljaW9uYWRvIMOgIEFwbGljYcOnw6NvXG4gKi9cbmZ1bmN0aW9uIG5ld1dpbmRvdyhrZXksIHByb3BzID0ge3N0eWxlOiB7fX0sIHRlbXBsYXRlID0gRW1wdHlUZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcyA9IHt9KSB7XG5cbiAgICBjb25zdCBUZW1wbGF0ZSA9IGNvbm5lY3QodW5kZWZpbmVkLCBib3VuZFRlbXBsYXRlQWN0aW9ucyhrZXkpKSh0ZW1wbGF0ZSk7XG5cbiAgICBjb25zdCB0b3AgPSAoa2V5ICUgMTApICogNTAgKyAxMDtcbiAgICBjb25zdCBsZWZ0ID0gKGtleSAlIDEwKSAqIDUwICsgMTA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAuLi5ERUZBVUxUX1BST1BTLFxuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uKHByb3BzLnN0eWxlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICB0b3AsIGxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiBCb3VuZFdpbmRvdyhrZXkpLFxuICAgICAgICBjb250ZW50OiA8VGVtcGxhdGUgey4uLnRlbXBsYXRlUHJvcHN9IC8+XG4gICAgfTtcbiAgICBcbn1cblxuLyoqXG4gKiBNw6l0b2RvIHJlZHV0b3IgcHJpbmNpcGFsIGRhIGFwbGljYcOnw6NvIEZlbmVzdHJhLiBSZWFsaXphIGEgYWx0ZXJhw6fDo28gZGUgRXN0YWRvXG4gKiBhcMOzcyBvIHByb2Nlc3NhbWVudG8gZGEgYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+U3RhdGV9IHN0YXRlIEVzdGFkbyBBdHVhbCBkYSBBcGxpY2HDp8OjbywgYW50ZXMgZGEgYcOnw6NvLlxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IGFjdGlvbiBBw6fDo28gYSBzZXIgZXhlY3V0YWRhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflN0YXRlfSBOb3ZvIGVzdGFkbyBhcMOzcyBhIHJlZHXDp8Ojb1xuICovXG5jb25zdCBmZW5lc3RyYVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgdmFyIG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuICAgIHZhciB0YXJnZXQgPSBudWxsO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSB0eXBlcy5XSU5ET1dfVFJBTlNGT1JNICYmIHN0YXRlLnRyYW5zZm9ybUtleSA9PT0gbnVsbCkgcmV0dXJuIHN0YXRlO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19PUEVOOlxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBuZXdTdGF0ZS53aW5LZXkrKztcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wcm9wcyxcbiAgICAgICAgICAgICAgICB0aXRsZTogKGFjdGlvbi5wcm9wcy50aXRsZSB8fCBuZXdTdGF0ZS5vcHRpb25zLm1zZ3MuZGVmYXVsdFRpdGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gbmV3V2luZG93KGtleSwgcHJvcHMsIGFjdGlvbi50ZW1wbGF0ZSwgYWN0aW9uLnRlbXBsYXRlUHJvcHMpO1xuXG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzLnB1c2god2luZG93KTtcblxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0geyAuLi53aW5kb3cucHJvcHMsIHN0eWxlOiB7IC4uLndpbmRvdy5wcm9wcy5zdHlsZSB9IH07XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID0gYWN0aW9uLnByb3BzLmFjdGl2ZSA/ICh3aW5kb3cua2V5ID09PSBrZXkpIDogcHJvcHMuYWN0aXZlO1xuICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLnpJbmRleCA9ICh3aW5kb3cua2V5ID09PSBrZXkpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ud2luZG93LCBwcm9wcyB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19DTE9TRTpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbHRlcih3aW5kb3cgPT4gd2luZG93LmtleSAhPT0gYWN0aW9uLmtleSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLldJTkRPV19BQ1RJVkFURTpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHsgLi4ud2luZG93LnByb3BzLCBzdHlsZTogeyAuLi53aW5kb3cucHJvcHMuc3R5bGUgfSB9O1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZSA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS56SW5kZXggPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuV0lORE9XX01JTklNSVpFOlxuICAgICAgICAgICAgbmV3U3RhdGUud2luZG93cyA9IG5ld1N0YXRlLndpbmRvd3MubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkgJiYgd2luZG93LnByb3BzLm1pbmltaXplYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvcHMuYWN0aXZlID0gIWFjdGlvbi5taW5pbWl6ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb3BzLm1pbmltaXplZCA9IGFjdGlvbi5taW5pbWl6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24ubWluaW1pemUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb3BzLmFjdGl2ZSA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5ICYmICFhY3Rpb24ubWluaW1pemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfTUFYSU1JWkU6XG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPSAod2luZG93LmtleSA9PT0gYWN0aW9uLmtleSk7XG4gICAgICAgICAgICAgICAgcHJvcHMubWluaW1pemVkID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpID8gZmFsc2UgOiB3aW5kb3cucHJvcHMubWluaW1pemVkO1xuICAgICAgICAgICAgICAgIHByb3BzLm1heGltaXplZCA9ICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5ICYmIHdpbmRvdy5wcm9wcy5yZXNpemVhYmxlKSA/IGFjdGlvbi5tYXhpbWl6ZSA6IHdpbmRvdy5wcm9wcy5tYXhpbWl6ZWQ7XG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUuekluZGV4ID0gKHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ud2luZG93LCBwcm9wcyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfU1RBUlRfVFJBTlNGT1JNOiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3U3RhdGUud2luZG93cy5maW5kKHdpbmRvdyA9PiB3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQucHJvcHMubWF4aW1pemVkKSBicmVhaztcbiAgICAgICAgICAgIG5ld1N0YXRlLnRyYW5zZm9ybUtleSA9IGFjdGlvbi5rZXk7XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID0gYWN0aW9uLnRyYW5zZm9ybVR5cGU7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydFggPSBhY3Rpb24ueDtcbiAgICAgICAgICAgIG5ld1N0YXRlLnN0YXJ0WSA9IGFjdGlvbi55O1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRUb3AgPSB0YXJnZXQucHJvcHMuc3R5bGUudG9wO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRMZWZ0ID0gdGFyZ2V0LnByb3BzLnN0eWxlLmxlZnQ7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdGFydFdpZHRoID0gdGFyZ2V0LnByb3BzLnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3RhcnRIZWlnaHQgPSB0YXJnZXQucHJvcHMuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfVFJBTlNGT1JNOiAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdTdGF0ZS53aW5kb3dzID0gbmV3U3RhdGUud2luZG93cy5tYXAod2luZG93ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7IC4uLndpbmRvdy5wcm9wcywgc3R5bGU6IHsgLi4ud2luZG93LnByb3BzLnN0eWxlIH0gfTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmtleSA9PT0gbmV3U3RhdGUudHJhbnNmb3JtS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gYWN0aW9uLnggLSBuZXdTdGF0ZS5zdGFydFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gYWN0aW9uLnkgLSBuZXdTdGF0ZS5zdGFydFk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID09PSBUUkFOU0ZPUk1fTU9WRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUudG9wID0gTWF0aC5tYXgoMCwgbmV3U3RhdGUuc3RhcnRUb3AgKyBkeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZS5sZWZ0ID0gTWF0aC5tYXgoMCwgbmV3U3RhdGUuc3RhcnRMZWZ0ICsgZHgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlLnRyYW5zZm9ybVR5cGUgPT09IFRSQU5TRk9STV9SRVNJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLndpZHRoID0gTWF0aC5tYXgoREVGQVVMVF9XSURUSCwgbmV3U3RhdGUuc3RhcnRXaWR0aCArIGR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KERFRkFVTFRfSEVJR0hULCBuZXdTdGF0ZS5zdGFydEhlaWdodCArIGR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53aW5kb3csIHByb3BzOiB7IC4uLnByb3BzLCBzdHlsZTogeyAuLi5wcm9wcy5zdHlsZSB9IH0gfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5XSU5ET1dfRU5EX1RSQU5TRk9STTpcbiAgICAgICAgICAgIG5ld1N0YXRlLnRyYW5zZm9ybUtleSA9IG51bGw7XG4gICAgICAgICAgICBuZXdTdGF0ZS50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdHlwZXMuU0VUX0ZPT1RFUjpcbiAgICAgICAgICAgIG5ld1N0YXRlLndpbmRvd3MgPSBuZXdTdGF0ZS53aW5kb3dzLm1hcCh3aW5kb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cua2V5ID09PSBhY3Rpb24ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9wcy5mb290ZXIgPSBhY3Rpb24uZm9vdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHR5cGVzLlNFVF9MT0FESU5HOlxuICAgICAgICAgICAgdmFyIGxvYWRpbmdXaW5kb3cgPSBuZXdTdGF0ZS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGFjdGlvbi5rZXkpO1xuXG4gICAgICAgICAgICBpZiAobG9hZGluZ1dpbmRvdykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdXaW5kb3cuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLmlzTG9hZGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSB0eXBlcy5TSE9XX1RBU0tCQVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3U3RhdGUub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Rhc2tiYXI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuSElERV9UQVNLQkFSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm5ld1N0YXRlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNob3dUYXNrYmFyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIGNhc2UgdHlwZXMuU0VUX09QVElPTlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV3U3RhdGUub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLm9wdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICBjYXNlIHR5cGVzLlNFVF9EQVRBOlxuICAgICAgICAgICAgdmFyIHdpbktleSA9IDA7XG4gICAgICAgICAgICBjb25zdCBpY29ucyA9IChhY3Rpb24uZGF0YS5pY29ucyB8fCBbXSk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gIChhY3Rpb24uZGF0YS5vcHRpb25zIHx8IHttc2dzOiB7fX0pO1xuICAgICAgICAgICAgY29uc3QgbXNncyA9IHtcbiAgICAgICAgICAgICAgICAuLi5pbml0aWFsU3RhdGUub3B0aW9ucy5tc2dzLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMubXNnc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd3MgPSAoYWN0aW9uLmRhdGEud2luZG93cyB8fCBbXSkubWFwKHdpbmRvdyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtc2dzLmRlZmF1bHRUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgLi4ud2luZG93LnByb3BzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3V2luZG93KHdpbktleSsrLCBwcm9wcywgd2luZG93LnRlbXBsYXRlLCB3aW5kb3cudGVtcGxhdGVQcm9wcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgIHdpbktleSxcbiAgICAgICAgICAgICAgICBpY29ucyxcbiAgICAgICAgICAgICAgICB3aW5kb3dzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG1zZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZS5vcHRpb25zLm1zZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLm1zZ3NcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmVuZXN0cmFSZWR1Y2VyOyJdfQ==