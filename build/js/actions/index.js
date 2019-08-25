"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.boundTaskbarProps = exports.boundIconActions = exports.boundWindowProps = exports.boundWindowActions = exports.boundTemplateActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.DEFAULT_PROPS = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

var actionType = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Largura Padrão da janela */
var DEFAULT_WIDTH = 300;
/** Altura Padrão da janela */

exports.DEFAULT_WIDTH = DEFAULT_WIDTH;
var DEFAULT_HEIGHT = 200;
/** @constant {module:Fenestra/Components/Window~WindowProps} DEFAULT_PROPS Propriedades padrão de uma nova janela */

exports.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
var DEFAULT_PROPS = {
  /** Estilo */
  style: {
    /** Posição Y */
    top: 0,

    /** Posição X */
    left: 0,

    /** Largura */
    width: DEFAULT_WIDTH,

    /** Altura */
    height: DEFAULT_HEIGHT
  },
  title: undefined,
  footer: "",
  active: true,
  maximized: false,
  minimized: false,
  resizeable: true,
  moveable: true,
  minimizeable: true,
  closeable: true
};
/**
 * Abre uma nova janela.
 * @method
 * @param {module:Fenestra/Components/Window~WindowProps} props - Propriedades da nova janela 
 * @param {*} template - Template a ser injetado no conteúdo da janela
 * @param {*} templateProps - Propriedades a serem injetadas no Template
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */

exports.DEFAULT_PROPS = DEFAULT_PROPS;

var _open = function open() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PROPS;
  var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return null;
  };
  var templateProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var action = {
    type: actionType.WINDOW_OPEN,
    props: _objectSpread({}, DEFAULT_PROPS, {}, props),
    template: template,
    templateProps: templateProps
  };
  return action;
};
/**
 * Fecha a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser fechada
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.open = _open;

var _close = function close(key) {
  return {
    type: actionType.WINDOW_CLOSE,
    key: key
  };
};
/**
 * Ativa/Desativa a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser ativada/desativada
 * @param {boolean} active - Ativar (true) ou Desativar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.close = _close;

var _activate = function activate(key, active) {
  return {
    type: actionType.WINDOW_ACTIVATE,
    key: key,
    active: active
  };
};
/**
 * Minimiza/Deminimiza a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser minimizada/deminimizada
 * @param {boolean} minimize - Minimizar (true) ou Deminimizar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.activate = _activate;

var _minimize2 = function minimize(key, _minimize) {
  return {
    type: actionType.WINDOW_MINIMIZE,
    key: key,
    minimize: _minimize
  };
};
/**
 * Maximiza/Demaximiza a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser maximizada/demaximizada
 * @param {boolean} maximize - Maximizar (true) ou Demaximizar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.minimize = _minimize2;

var _maximize2 = function maximize(key, _maximize) {
  return {
    type: actionType.WINDOW_MAXIMIZE,
    key: key,
    maximize: _maximize
  };
};
/**
 * Inicia uma transformação de movimentação ou redimensionamento de uma janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser movimentada/redimensionada
 * @param {number} x - Posição X onde iniciou a transformação
 * @param {number} y - Posição Y onde iniciou a transformação
 * @param {module:Fenestra/Actions/Types~TransformType} transformType - Tipo de transformação (TRANSFORM_MOVE ou TRANSFORM_RESIZE)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.maximize = _maximize2;

var startTransform = function startTransform(key, x, y, transformType) {
  return {
    type: actionType.WINDOW_START_TRANSFORM,
    key: key,
    x: x,
    y: y,
    transformType: transformType
  };
};
/**
 * Movimenta ou redimensiona a janela.
 * @method
 * @param {number} x - Posição X onde acontece a transformação
 * @param {number} y - Posição Y onde acontece a transformação
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.startTransform = startTransform;

var transform = function transform(x, y) {
  return {
    type: actionType.WINDOW_TRANSFORM,
    x: x,
    y: y
  };
};
/**
 * Finaliza a transformação da janela.
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.transform = transform;

var endTransform = function endTransform() {
  return {
    type: actionType.WINDOW_END_TRANSFORM
  };
};
/**
 * Adiciona/Remove o backdrop de carregamento da janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser carregada
 * @param {boolean} isLoading - Adiciona (true) ou remove (false) o backdrop
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.endTransform = endTransform;

var _setLoading = function setLoading(key, isLoading) {
  return {
    type: actionType.SET_LOADING,
    key: key,
    isLoading: isLoading
  };
};
/**
 * Inicia uma nova sessão de janelas e ícones.
 * @method
 * @param {Object} data - Dados da nova sessão a ser iniciada
 * @param {module:Fenestra/Components/Window~WindowData[]} data.windows - Janela a serem abertas no início da sessão
 * @param {module:Fenestra/Components/Desktop~IconData[]} data.icons - Ícones a serem mostrados no Desktop
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.setLoading = _setLoading;

var _setData = function setData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    icons: [],
    windows: []
  };
  return {
    type: actionType.SET_DATA,
    data: data
  };
};
/**
 * Altera o rodapé da janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser alterada
 * @param {string} footer - Mensagem de rodapé da janela
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.setData = _setData;

var _setFooter = function setFooter(key, footer) {
  return {
    type: actionType.SET_FOOTER,
    key: key,
    footer: footer
  };
};
/**
 * @typedef {Object} BoundDesktopProps
 * @property {module:Fenestra/Components/Desktop~IconData[]} icons Ícones do Desktop
 * @property {module:Fenestra/Components/Window~WindowState[]} windows Janelas do Desktop
 * @property {boolean} isMaximized Determina se há alguma janela maximizada e ativa
 * @property {boolean} isMoving Determina se há alguma janela em movimento
 */

/**
 * Mapeia as propriedades do Desktop para estados da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~State} state Estado da Aplicação
 * @returns {module:Fenestra/Actions~BoundDesktopProps} Mapeamento Estado/Propriedade
 */


exports.setFooter = _setFooter;

var boundDesktopProps = function boundDesktopProps(state) {
  return {
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    isMaximized: state.fenestra.windows.some(function (window) {
      return window.props.active && window.props.maximized;
    }),
    isMoving: state.fenestra.transformType !== null && state.fenestra.transformKey !== null
  };
};
/**
 * @typedef {Object} BoundDesktopActions
 * @property {function} open Abre uma janela
 * @property {function} activate Ativa uma janela
 * @property {function} minimize Minimiza uma janela
 * @property {function} maximize  Maximiza uma janela
 * @property {function} startMove Inicia o movimento de uma janela
 * @property {function} startResize Inicia o redimensionamento de uma janela
 * @property {function} move Move/Redimensiona a janela
 * @property {function} endMove Finaliza a transformação da janela
 * @property {function} close Fecha uma janela
 * @property {function} setLoading Altera o backdrop de uma janela
 * @property {function} setFooter  Altera o rodapé de uma janela
 * @property {function} setData Reinicia a sessão com novos ícones e janelas
 * 
 */

/**
 * Mapeia as propriedades do Desktop para o despachante da aplicação.
 * @method
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante de Ações
 * @returns {module:Fenestra/Actions~BoundDesktopActions} Mapeamento das Propriedades
 */


exports.boundDesktopProps = boundDesktopProps;

var boundDesktopActions = function boundDesktopActions(dispatch) {
  return {
    open: function open(props, template, templateProps) {
      return dispatch(_open(props, template, templateProps));
    },
    activate: function activate(key) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_activate(key, active));
    },
    minimize: function minimize(key) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_minimize2(key, min));
    },
    maximize: function maximize(key) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_maximize2(key, max));
    },
    startMove: function startMove(key, x, y) {
      return dispatch(startTransform(key, x, y, actionType.TRANSFORM_MOVE));
    },
    startResize: function startResize(key, x, y) {
      return dispatch(startTransform(key, x, y, actionType.TRANSFORM_RESIZE));
    },
    move: function move(x, y) {
      return dispatch(transform(x, y));
    },
    endMove: function endMove() {
      return dispatch(endTransform());
    },
    close: function close(key) {
      return dispatch(_close(key));
    },
    setLoading: function setLoading(key) {
      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_setLoading(key, isLoading));
    },
    setFooter: function setFooter(key) {
      var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return dispatch(_setFooter(key, footer));
    },
    setData: function setData(data) {
      return dispatch(_setData(data));
    }
  };
};
/**
 * @typedef {Object} BoundTaskbarActions
 * @property {function} activate Ativa uma janela
*/

/**
 * Mapeia as propriedades da Barra de Tarefas para o despachante da aplicação.
 * @method
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante de Ações
 * @returns {module:Fenestra/Actions~BoundTaskbarActions} Mapeamento das Propriedades
 */


exports.boundDesktopActions = boundDesktopActions;

var boundTaskbarActions = function boundTaskbarActions(dispatch) {
  return {
    activate: function activate(key) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return dispatch(_activate(key, active));
    }
  };
};
/**
 * @typedef {function} BoundTemplateActions Ações do Template conectadas ao redux
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante da Ação
 * @returns {module:Fenestra/Actions~TemplateActions}
 */

/**
 * @typedef {Object} TemplateActions Ações do template de conteúdo da janela.
 * @property {function} open Abre uma janela
 * @property {function} activate Ativa uma janela
 * @property {function} minimize Minimiza uma janela
 * @property {function} maximize  Maximiza uma janela
 * @property {function} close Fecha uma janela
 * @property {function} setLoading Altera o backdrop de uma janela
 * @property {function} setFooter  Altera o rodapé de uma janela
 * @property {function} setData Reinicia a sessão com novos ícones e janelas
 * 
 */

/**
 * Mapeia as propriedades do Template de conteúdo da Janela para o despachante da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key identificador da Janela
 * @returns {module:Fenestra/Actions~BoundTemplateActions} Mapeamento das Propriedades
 */


exports.boundTaskbarActions = boundTaskbarActions;

var boundTemplateActions = function boundTemplateActions(key) {
  return function (dispatch) {
    return {
      open: function open(props, template, templateProps) {
        return dispatch(_open(props, template, templateProps));
      },
      activate: function activate() {
        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_activate(key, active));
      },
      minimize: function minimize() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_minimize2(key, min));
      },
      maximize: function maximize() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_maximize2(key, max));
      },
      close: function close() {
        return dispatch(_close(key));
      },
      setLoading: function setLoading() {
        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_setLoading(key, isLoading));
      },
      setFooter: function setFooter() {
        var footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return dispatch(_setFooter(key, footer));
      },
      setData: function setData(data) {
        return dispatch(_setData(data));
      }
    };
  };
};
/**
 * @typedef {function} BoundWindowActions Ações da Janela conectadas ao redux
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante da Ação
 * @returns {module:Fenestra/Actions~WindowActions}
 */

/**
 * @typedef {Object} WindowActions Ações da janela.
 * @property {function} open Abre uma janela
 * @property {function} activate Ativa a janela
 * @property {function} minimize Minimiza a janela
 * @property {function} maximize  Maximiza a janela
 * @property {function} startMove Inicia o movimento da janela
 * @property {function} startResize Inicia o redimensionamento da janela
 * @property {function} close Fecha a janela
 * @property {function} setLoading Altera o backdrop da janela
 * @property {function} setFooter  Altera o rodapé da janela
 * @property {function} setData Reinicia a sessão com novos ícones e janelas
 * 
 */

/**
 * Mapeia as propriedades da Janela para o despachante da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key identificador da Janela
 * @returns {module:Fenestra/Actions~BoundWindowActions} Mapeamento das Propriedades
 */


exports.boundTemplateActions = boundTemplateActions;

var boundWindowActions = function boundWindowActions(key) {
  return function (dispatch) {
    return {
      open: function open(props, template, templateProps) {
        return dispatch(_open(props, template, templateProps));
      },
      activate: function activate() {
        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_activate(key, active));
      },
      minimize: function minimize() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_minimize2(key, min));
      },
      maximize: function maximize() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_maximize2(key, max));
      },
      startMove: function startMove(x, y) {
        return dispatch(startTransform(key, x, y, actionType.TRANSFORM_MOVE));
      },
      startResize: function startResize(x, y) {
        return dispatch(startTransform(key, x, y, actionType.TRANSFORM_RESIZE));
      },
      close: function close() {
        return dispatch(_close(key));
      },
      setLoading: function setLoading() {
        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return dispatch(_setLoading(key, isLoading));
      },
      setFooter: function setFooter() {
        var footer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return dispatch(_setFooter(key, footer));
      },
      setData: function setData(data) {
        return dispatch(_setData(data));
      }
    };
  };
};
/**
 * @typedef {function} BoundWindowProps Propriedades da Janela conectadas ao redux
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante da Ação
 * @returns {module:Fenestra/Actions~WindowProps}
 */

/**
 * @typedef {Object} WindowProps Ações da janela.
 * @property {boolean} isLoading Determina se a janela está com backdrop de carregamento
 * @property {module:Fenestra/Messages~Messages} msgs Mensagens do sistema
 */

/**
 * Mapeia as propriedades da Janela para o Estado da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key identificador da Janela
 * @returns {module:Fenestra/Actions~BoundWindowProps} Mapeamento das Propriedades
 */


exports.boundWindowActions = boundWindowActions;

var boundWindowProps = function boundWindowProps(key) {
  return function (state) {
    return {
      isLoading: state.fenestra.windows.find(function (window) {
        return window.key === key;
      }).isLoading,
      msgs: state.fenestra.msgs
    };
  };
};
/**
 * @typedef {Object} BoundIconActions
 * @property {function} openIcon Abre uma nova janela correspondente ao ícone
*/

/**
 * Mapeia as propriedades do ícone para o despachante da aplicação.
 * @method
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante de Ações
 * @returns {module:Fenestra/Actions~BoundIconActions} Mapeamento das Propriedades
 */


exports.boundWindowProps = boundWindowProps;

var boundIconActions = function boundIconActions(dispatch) {
  return {
    openIcon: function openIcon(icon) {
      return icon.window ? dispatch(_open(icon.window.props, icon.window.template, icon.window.templateProps)) : false;
    }
  };
};
/**
 * @typedef {Object} BoundTaskbarProps 
 * @property {module:Fenestra/Components/Window~WindowState[]} windows Janelas do Desktop
 * @property {module:Fenestra/Messages~Messages} msgs Janelas do Desktop
 */

/**
 * Mapeia as propriedades da Barra de Tarefas para estados da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~State} state Estado da Aplicação
 * @returns {module:Fenestra/Actions~BoundTaskbarProps} Mapeamento Estado/Propriedade
 */


exports.boundIconActions = boundIconActions;

var boundTaskbarProps = function boundTaskbarProps(state) {
  return {
    windows: state.fenestra.windows,
    msgs: state.fenestra.msgs
  };
};

exports.boundTaskbarProps = boundTaskbarProps;
var _default = {
  open: _open,
  close: _close,
  activate: _activate,
  minimize: _minimize2,
  maximize: _maximize2,
  startTransform: startTransform,
  transform: transform,
  endTransform: endTransform,
  setLoading: _setLoading,
  setFooter: _setFooter,
  setData: _setData
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwidW5kZWZpbmVkIiwiZm9vdGVyIiwiYWN0aXZlIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwicmVzaXplYWJsZSIsIm1vdmVhYmxlIiwibWluaW1pemVhYmxlIiwiY2xvc2VhYmxlIiwib3BlbiIsInByb3BzIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZVByb3BzIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGUiLCJXSU5ET1dfT1BFTiIsImNsb3NlIiwia2V5IiwiV0lORE9XX0NMT1NFIiwiYWN0aXZhdGUiLCJXSU5ET1dfQUNUSVZBVEUiLCJtaW5pbWl6ZSIsIldJTkRPV19NSU5JTUlaRSIsIm1heGltaXplIiwiV0lORE9XX01BWElNSVpFIiwic3RhcnRUcmFuc2Zvcm0iLCJ4IiwieSIsInRyYW5zZm9ybVR5cGUiLCJXSU5ET1dfU1RBUlRfVFJBTlNGT1JNIiwidHJhbnNmb3JtIiwiV0lORE9XX1RSQU5TRk9STSIsImVuZFRyYW5zZm9ybSIsIldJTkRPV19FTkRfVFJBTlNGT1JNIiwic2V0TG9hZGluZyIsImlzTG9hZGluZyIsIlNFVF9MT0FESU5HIiwic2V0RGF0YSIsImRhdGEiLCJpY29ucyIsIndpbmRvd3MiLCJTRVRfREFUQSIsInNldEZvb3RlciIsIlNFVF9GT09URVIiLCJib3VuZERlc2t0b3BQcm9wcyIsInN0YXRlIiwiZmVuZXN0cmEiLCJpc01heGltaXplZCIsInNvbWUiLCJ3aW5kb3ciLCJpc01vdmluZyIsInRyYW5zZm9ybUtleSIsImJvdW5kRGVza3RvcEFjdGlvbnMiLCJkaXNwYXRjaCIsIm1pbiIsIm1heCIsInN0YXJ0TW92ZSIsIlRSQU5TRk9STV9NT1ZFIiwic3RhcnRSZXNpemUiLCJUUkFOU0ZPUk1fUkVTSVpFIiwibW92ZSIsImVuZE1vdmUiLCJib3VuZFRhc2tiYXJBY3Rpb25zIiwiYm91bmRUZW1wbGF0ZUFjdGlvbnMiLCJib3VuZFdpbmRvd0FjdGlvbnMiLCJib3VuZFdpbmRvd1Byb3BzIiwiZmluZCIsIm1zZ3MiLCJib3VuZEljb25BY3Rpb25zIiwib3Blbkljb24iLCJpY29uIiwiYm91bmRUYXNrYmFyUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7QUFPQTtBQUNPLElBQU1BLGFBQWEsR0FBRyxHQUF0QjtBQUVQOzs7QUFDTyxJQUFNQyxjQUFjLEdBQUcsR0FBdkI7QUFFUDs7O0FBQ08sSUFBTUMsYUFBYSxHQUFHO0FBQ3pCO0FBQ0FDLEVBQUFBLEtBQUssRUFBRTtBQUNIO0FBQ0FDLElBQUFBLEdBQUcsRUFBRSxDQUZGOztBQUdIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxDQUpIOztBQUtIO0FBQ0FDLElBQUFBLEtBQUssRUFBRU4sYUFOSjs7QUFPSDtBQUNBTyxJQUFBQSxNQUFNLEVBQUVOO0FBUkwsR0FGa0I7QUFhekJPLEVBQUFBLEtBQUssRUFBRUMsU0Fia0I7QUFjekJDLEVBQUFBLE1BQU0sRUFBRSxFQWRpQjtBQWdCekJDLEVBQUFBLE1BQU0sRUFBRSxJQWhCaUI7QUFpQnpCQyxFQUFBQSxTQUFTLEVBQUUsS0FqQmM7QUFrQnpCQyxFQUFBQSxTQUFTLEVBQUUsS0FsQmM7QUFvQnpCQyxFQUFBQSxVQUFVLEVBQUUsSUFwQmE7QUFxQnpCQyxFQUFBQSxRQUFRLEVBQUUsSUFyQmU7QUFzQnpCQyxFQUFBQSxZQUFZLEVBQUUsSUF0Qlc7QUF1QnpCQyxFQUFBQSxTQUFTLEVBQUU7QUF2QmMsQ0FBdEI7QUE0QlA7Ozs7Ozs7Ozs7O0FBUU8sSUFBTUMsS0FBSSxHQUFHLFNBQVBBLElBQU8sR0FBc0U7QUFBQSxNQUFyRUMsS0FBcUUsdUVBQTdEakIsYUFBNkQ7QUFBQSxNQUE5Q2tCLFFBQThDLHVFQUFuQztBQUFBLFdBQU0sSUFBTjtBQUFBLEdBQW1DO0FB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QSxjQUFjLEVBQWRBLGNBTlc7QUFPWEssRUFBQUEsU0FBUyxFQUFUQSxTQVBXO0FBUVhFLEVBQUFBLFlBQVksRUFBWkEsWUFSVztBQVNYRSxFQUFBQSxVQUFVLEVBQVZBLFdBVFc7QUFVWFEsRUFBQUEsU0FBUyxFQUFUQSxVQVZXO0FBV1hMLEVBQUFBLE9BQU8sRUFBUEE7QUFYVyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNw7NkdWxvIGRlIEHDp8O1ZXMgcGFyYSByZWR1w6fDo28gZG8gU3RvcmUgZG8gUmVkdXguXG4gKiBAbW9kdWxlIEZlbmVzdHJhL0FjdGlvbnMgXG4gKiBAc2VlIG1vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQWN0aW9uIC0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGEgcGVsbyBSZWR1eFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQWN0aW9ucy9UeXBlc35BY3Rpb25UeXBlfSB0eXBlIC0gVGlwbyBkYSBBw6fDo29cbiAqL1xuXG4gLyoqXG4gICogQHR5cGVkZWYge2Z1bmN0aW9ufSBEaXNwYXRjaGVyXG4gICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IGFjdGlvbiBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICAqL1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQge1xuICAgIFRSQU5TRk9STV9NT1ZFLFxuICAgIFRSQU5TRk9STV9SRVNJWkVcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBMYXJndXJhIFBhZHLDo28gZGEgamFuZWxhICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSURUSCA9IDMwMDtcblxuLyoqIEFsdHVyYSBQYWRyw6NvIGRhIGphbmVsYSAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gMjAwO1xuXG4vKiogQGNvbnN0YW50IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IERFRkFVTFRfUFJPUFMgUHJvcHJpZWRhZGVzIHBhZHLDo28gZGUgdW1hIG5vdmEgamFuZWxhICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QUyA9IHtcbiAgICAvKiogRXN0aWxvICovXG4gICAgc3R5bGU6IHtcbiAgICAgICAgLyoqIFBvc2nDp8OjbyBZICovXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgLyoqIFBvc2nDp8OjbyBYICovXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIC8qKiBMYXJndXJhICovXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1dJRFRILFxuICAgICAgICAvKiogQWx0dXJhICovXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9IRUlHSFRcbiAgICB9LFxuXG4gICAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgICBmb290ZXI6IFwiXCIsXG5cbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbWF4aW1pemVkOiBmYWxzZSxcbiAgICBtaW5pbWl6ZWQ6IGZhbHNlLFxuXG4gICAgcmVzaXplYWJsZTogdHJ1ZSxcbiAgICBtb3ZlYWJsZTogdHJ1ZSxcbiAgICBtaW5pbWl6ZWFibGU6IHRydWUsXG4gICAgY2xvc2VhYmxlOiB0cnVlXG5cblxufTtcblxuLyoqXG4gKiBBYnJlIHVtYSBub3ZhIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBwcm9wcyAtIFByb3ByaWVkYWRlcyBkYSBub3ZhIGphbmVsYSBcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGUgLSBUZW1wbGF0ZSBhIHNlciBpbmpldGFkbyBubyBjb250ZcO6ZG8gZGEgamFuZWxhXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlUHJvcHMgLSBQcm9wcmllZGFkZXMgYSBzZXJlbSBpbmpldGFkYXMgbm8gVGVtcGxhdGVcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBvcGVuID0gKHByb3BzID0gREVGQVVMVF9QUk9QUywgdGVtcGxhdGUgPSAoKSA9PiBudWxsLCB0ZW1wbGF0ZVByb3BzID0ge30pID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX09QRU4sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAuLi5ERUZBVUxUX1BST1BTLFxuICAgICAgICAgICAgLi4ucHJvcHNcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlUHJvcHNcbiAgICB9O1xuICAgIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogRmVjaGEgYSBqYW5lbGFcbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIGZlY2hhZGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9zZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19DTE9TRSxcbiAgICAgICAga2V5XG4gICAgfVxufVxuXG4vKipcbiAqIEF0aXZhL0Rlc2F0aXZhIGEgamFuZWxhXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBhdGl2YWRhL2Rlc2F0aXZhZGFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlIC0gQXRpdmFyICh0cnVlKSBvdSBEZXNhdGl2YXIgKGZhbHNlKVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IGFjdGl2YXRlID0gKGtleSwgYWN0aXZlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQUNUSVZBVEUsXG4gICAgICAgIGtleSwgYWN0aXZlXG4gICAgfVxufVxuXG4vKipcbiAqIE1pbmltaXphL0RlbWluaW1pemEgYSBqYW5lbGFcbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIG1pbmltaXphZGEvZGVtaW5pbWl6YWRhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1pbmltaXplIC0gTWluaW1pemFyICh0cnVlKSBvdSBEZW1pbmltaXphciAoZmFsc2UpXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgbWluaW1pemUgPSAoa2V5LCBtaW5pbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01JTklNSVpFLFxuICAgICAgICBrZXksIG1pbmltaXplXG4gICAgfVxufVxuXG4vKipcbiAqIE1heGltaXphL0RlbWF4aW1pemEgYSBqYW5lbGFcbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIG1heGltaXphZGEvZGVtYXhpbWl6YWRhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1heGltaXplIC0gTWF4aW1pemFyICh0cnVlKSBvdSBEZW1heGltaXphciAoZmFsc2UpXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgbWF4aW1pemUgPSAoa2V5LCBtYXhpbWl6ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX01BWElNSVpFLFxuICAgICAgICBrZXksIG1heGltaXplXG4gICAgfVxufVxuXG4vKipcbiAqIEluaWNpYSB1bWEgdHJhbnNmb3JtYcOnw6NvIGRlIG1vdmltZW50YcOnw6NvIG91IHJlZGltZW5zaW9uYW1lbnRvIGRlIHVtYSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBtb3ZpbWVudGFkYS9yZWRpbWVuc2lvbmFkYVxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBQb3Npw6fDo28gWCBvbmRlIGluaWNpb3UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gUG9zacOnw6NvIFkgb25kZSBpbmljaW91IGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zL1R5cGVzflRyYW5zZm9ybVR5cGV9IHRyYW5zZm9ybVR5cGUgLSBUaXBvIGRlIHRyYW5zZm9ybWHDp8OjbyAoVFJBTlNGT1JNX01PVkUgb3UgVFJBTlNGT1JNX1JFU0laRSlcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydFRyYW5zZm9ybSA9IChrZXksIHgsIHksIHRyYW5zZm9ybVR5cGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19TVEFSVF9UUkFOU0ZPUk0sXG4gICAgICAgIGtleSwgeCwgeSwgdHJhbnNmb3JtVHlwZVxuICAgIH1cbn1cblxuLyoqXG4gKiBNb3ZpbWVudGEgb3UgcmVkaW1lbnNpb25hIGEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBQb3Npw6fDo28gWCBvbmRlIGFjb250ZWNlIGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFBvc2nDp8OjbyBZIG9uZGUgYWNvbnRlY2UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm0gPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1RSQU5TRk9STSxcbiAgICAgICAgeCwgeVxuICAgIH1cbn1cblxuLyoqXG4gKiBGaW5hbGl6YSBhIHRyYW5zZm9ybWHDp8OjbyBkYSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgZW5kVHJhbnNmb3JtID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0VORF9UUkFOU0ZPUk0sXG4gICAgfVxufVxuXG4vKipcbiAqIEFkaWNpb25hL1JlbW92ZSBvIGJhY2tkcm9wIGRlIGNhcnJlZ2FtZW50byBkYSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBjYXJyZWdhZGFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMb2FkaW5nIC0gQWRpY2lvbmEgKHRydWUpIG91IHJlbW92ZSAoZmFsc2UpIG8gYmFja2Ryb3BcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGtleSwgaXNMb2FkaW5nKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0xPQURJTkcsXG4gICAga2V5LCBpc0xvYWRpbmdcbn0pO1xuXG4vKipcbiAqIEluaWNpYSB1bWEgbm92YSBzZXNzw6NvIGRlIGphbmVsYXMgZSDDrWNvbmVzLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBEYWRvcyBkYSBub3ZhIHNlc3PDo28gYSBzZXIgaW5pY2lhZGFcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd0RhdGFbXX0gZGF0YS53aW5kb3dzIC0gSmFuZWxhIGEgc2VyZW0gYWJlcnRhcyBubyBpbsOtY2lvIGRhIHNlc3PDo29cbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvRGVza3RvcH5JY29uRGF0YVtdfSBkYXRhLmljb25zIC0gw41jb25lcyBhIHNlcmVtIG1vc3RyYWRvcyBubyBEZXNrdG9wXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGF0YSA9IChkYXRhID0geyBpY29uczogW10sIHdpbmRvd3M6IFtdIH0pID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfREFUQSxcbiAgICBkYXRhXG59KTtcblxuLyoqXG4gKiBBbHRlcmEgbyByb2RhcMOpIGRhIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIGFsdGVyYWRhXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9vdGVyIC0gTWVuc2FnZW0gZGUgcm9kYXDDqSBkYSBqYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb290ZXIgPSAoa2V5LCBmb290ZXIpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfRk9PVEVSLFxuICAgIGtleSwgZm9vdGVyXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZERlc2t0b3BQcm9wc1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9EZXNrdG9wfkljb25EYXRhW119IGljb25zIMONY29uZXMgZG8gRGVza3RvcFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93U3RhdGVbXX0gd2luZG93cyBKYW5lbGFzIGRvIERlc2t0b3BcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNNYXhpbWl6ZWQgRGV0ZXJtaW5hIHNlIGjDoSBhbGd1bWEgamFuZWxhIG1heGltaXphZGEgZSBhdGl2YVxuICogQHByb3BlcnR5IHtib29sZWFufSBpc01vdmluZyBEZXRlcm1pbmEgc2UgaMOhIGFsZ3VtYSBqYW5lbGEgZW0gbW92aW1lbnRvXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIERlc2t0b3AgcGFyYSBlc3RhZG9zIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+U3RhdGV9IHN0YXRlIEVzdGFkbyBkYSBBcGxpY2HDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kRGVza3RvcFByb3BzfSBNYXBlYW1lbnRvIEVzdGFkby9Qcm9wcmllZGFkZVxuICovXG5leHBvcnQgY29uc3QgYm91bmREZXNrdG9wUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGljb25zOiBzdGF0ZS5mZW5lc3RyYS5pY29ucyxcbiAgICB3aW5kb3dzOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLFxuICAgIGlzTWF4aW1pemVkOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLnNvbWUod2luZG93ID0+IHdpbmRvdy5wcm9wcy5hY3RpdmUgJiYgd2luZG93LnByb3BzLm1heGltaXplZCksXG4gICAgaXNNb3Zpbmc6IHN0YXRlLmZlbmVzdHJhLnRyYW5zZm9ybVR5cGUgIT09IG51bGwgJiYgc3RhdGUuZmVuZXN0cmEudHJhbnNmb3JtS2V5ICE9PSBudWxsXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZERlc2t0b3BBY3Rpb25zXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcGVuIEFicmUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gYWN0aXZhdGUgQXRpdmEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWluaW1pemUgTWluaW1pemEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWF4aW1pemUgIE1heGltaXphIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0TW92ZSBJbmljaWEgbyBtb3ZpbWVudG8gZGUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc3RhcnRSZXNpemUgSW5pY2lhIG8gcmVkaW1lbnNpb25hbWVudG8gZGUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbW92ZSBNb3ZlL1JlZGltZW5zaW9uYSBhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZW5kTW92ZSBGaW5hbGl6YSBhIHRyYW5zZm9ybWHDp8OjbyBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNsb3NlIEZlY2hhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldExvYWRpbmcgQWx0ZXJhIG8gYmFja2Ryb3AgZGUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0Rm9vdGVyICBBbHRlcmEgbyByb2RhcMOpIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldERhdGEgUmVpbmljaWEgYSBzZXNzw6NvIGNvbSBub3ZvcyDDrWNvbmVzIGUgamFuZWxhc1xuICogXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIERlc2t0b3AgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkZSBBw6fDtWVzXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmREZXNrdG9wQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAoa2V5LCBtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fTU9WRSkpLFxuICAgIHN0YXJ0UmVzaXplOiAoa2V5LCB4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBtb3ZlOiAoeCwgeSkgPT4gZGlzcGF0Y2godHJhbnNmb3JtKHgsIHkpKSxcbiAgICBlbmRNb3ZlOiAoKSA9PiBkaXNwYXRjaChlbmRUcmFuc2Zvcm0oKSksXG4gICAgY2xvc2U6IChrZXkpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChrZXksIGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChrZXksIGZvb3RlciA9IFwiXCIpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IGRhdGEgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kVGFza2JhckFjdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkYSBCYXJyYSBkZSBUYXJlZmFzIHBhcmEgbyBkZXNwYWNoYW50ZSBkYSBhcGxpY2HDp8Ojby5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+RGlzcGF0Y2hlcn0gZGlzcGF0Y2ggRGVzcGFjaGFudGUgZGUgQcOnw7Vlc1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kVGFza2JhckFjdGlvbnN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRUYXNrYmFyQWN0aW9ucyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYWN0aXZhdGU6IChrZXksIGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSlcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gQm91bmRUZW1wbGF0ZUFjdGlvbnMgQcOnw7VlcyBkbyBUZW1wbGF0ZSBjb25lY3RhZGFzIGFvIHJlZHV4XG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRhIEHDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zflRlbXBsYXRlQWN0aW9uc31cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZW1wbGF0ZUFjdGlvbnMgQcOnw7VlcyBkbyB0ZW1wbGF0ZSBkZSBjb250ZcO6ZG8gZGEgamFuZWxhLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3BlbiBBYnJlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1pbmltaXplIE1pbmltaXphIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1heGltaXplICBNYXhpbWl6YSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjbG9zZSBGZWNoYSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRMb2FkaW5nIEFsdGVyYSBvIGJhY2tkcm9wIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldEZvb3RlciAgQWx0ZXJhIG8gcm9kYXDDqSBkZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXREYXRhIFJlaW5pY2lhIGEgc2Vzc8OjbyBjb20gbm92b3Mgw61jb25lcyBlIGphbmVsYXNcbiAqIFxuICovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkbyBUZW1wbGF0ZSBkZSBjb250ZcO6ZG8gZGEgSmFuZWxhIHBhcmEgbyBkZXNwYWNoYW50ZSBkYSBhcGxpY2HDp8Ojby5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IGlkZW50aWZpY2Fkb3IgZGEgSmFuZWxhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmRUZW1wbGF0ZUFjdGlvbnN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRUZW1wbGF0ZUFjdGlvbnMgPSAoa2V5KSA9PiBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW46IChwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpID0+IGRpc3BhdGNoKG9wZW4ocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSksXG4gICAgYWN0aXZhdGU6IChhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAobWluID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWluaW1pemUoa2V5LCBtaW4pKSxcbiAgICBtYXhpbWl6ZTogKG1heCA9IHRydWUpID0+IGRpc3BhdGNoKG1heGltaXplKGtleSwgbWF4KSksXG4gICAgY2xvc2U6ICgpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChpc0xvYWRpbmcgPSB0cnVlKSA9PiBkaXNwYXRjaChzZXRMb2FkaW5nKGtleSwgaXNMb2FkaW5nKSksXG4gICAgc2V0Rm9vdGVyOiAoZm9vdGVyID0gbnVsbCkgPT4gZGlzcGF0Y2goc2V0Rm9vdGVyKGtleSwgZm9vdGVyKSksXG4gICAgc2V0RGF0YTogKGRhdGEpID0+IGRpc3BhdGNoKHNldERhdGEoZGF0YSkpXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7ZnVuY3Rpb259IEJvdW5kV2luZG93QWN0aW9ucyBBw6fDtWVzIGRhIEphbmVsYSBjb25lY3RhZGFzIGFvIHJlZHV4XG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRhIEHDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfldpbmRvd0FjdGlvbnN9XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93QWN0aW9ucyBBw6fDtWVzIGRhIGphbmVsYS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wZW4gQWJyZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBhY3RpdmF0ZSBBdGl2YSBhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWluaW1pemUgTWluaW1pemEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1heGltaXplICBNYXhpbWl6YSBhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc3RhcnRNb3ZlIEluaWNpYSBvIG1vdmltZW50byBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0UmVzaXplIEluaWNpYSBvIHJlZGltZW5zaW9uYW1lbnRvIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xvc2UgRmVjaGEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldExvYWRpbmcgQWx0ZXJhIG8gYmFja2Ryb3AgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRGb290ZXIgIEFsdGVyYSBvIHJvZGFww6kgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXREYXRhIFJlaW5pY2lhIGEgc2Vzc8OjbyBjb20gbm92b3Mgw61jb25lcyBlIGphbmVsYXNcbiAqIFxuICovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkYSBKYW5lbGEgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgaWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFdpbmRvd0FjdGlvbnN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6IChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX1JFU0laRSkpLFxuICAgIGNsb3NlOiAoKSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAoaXNMb2FkaW5nID0gdHJ1ZSkgPT4gZGlzcGF0Y2goc2V0TG9hZGluZyhrZXksIGlzTG9hZGluZykpLFxuICAgIHNldEZvb3RlcjogKGZvb3RlciA9IG51bGwpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IChkYXRhKSA9PiBkaXNwYXRjaChzZXREYXRhKGRhdGEpKVxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBCb3VuZFdpbmRvd1Byb3BzIFByb3ByaWVkYWRlcyBkYSBKYW5lbGEgY29uZWN0YWRhcyBhbyByZWR1eFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkYSBBw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35XaW5kb3dQcm9wc31cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXaW5kb3dQcm9wcyBBw6fDtWVzIGRhIGphbmVsYS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNMb2FkaW5nIERldGVybWluYSBzZSBhIGphbmVsYSBlc3TDoSBjb20gYmFja2Ryb3AgZGUgY2FycmVnYW1lbnRvXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9NZXNzYWdlc35NZXNzYWdlc30gbXNncyBNZW5zYWdlbnMgZG8gc2lzdGVtYVxuICovXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZGEgSmFuZWxhIHBhcmEgbyBFc3RhZG8gZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSBpZGVudGlmaWNhZG9yIGRhIEphbmVsYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kV2luZG93UHJvcHN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dQcm9wcyA9IChrZXkpID0+IHN0YXRlID0+ICh7XG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGtleSkuaXNMb2FkaW5nLFxuICAgIG1zZ3M6IHN0YXRlLmZlbmVzdHJhLm1zZ3Ncbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kSWNvbkFjdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wZW5JY29uIEFicmUgdW1hIG5vdmEgamFuZWxhIGNvcnJlc3BvbmRlbnRlIGFvIMOtY29uZVxuKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIMOtY29uZSBwYXJhIG8gZGVzcGFjaGFudGUgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRlIEHDp8O1ZXNcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZEljb25BY3Rpb25zfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kSWNvbkFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW5JY29uOiAoaWNvbikgPT4gaWNvbi53aW5kb3cgPyBkaXNwYXRjaChvcGVuKGljb24ud2luZG93LnByb3BzLCBpY29uLndpbmRvdy50ZW1wbGF0ZSwgaWNvbi53aW5kb3cudGVtcGxhdGVQcm9wcykpIDogZmFsc2Vcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kVGFza2JhclByb3BzIFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93U3RhdGVbXX0gd2luZG93cyBKYW5lbGFzIGRvIERlc2t0b3BcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL01lc3NhZ2Vzfk1lc3NhZ2VzfSBtc2dzIEphbmVsYXMgZG8gRGVza3RvcFxuICovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkYSBCYXJyYSBkZSBUYXJlZmFzIHBhcmEgZXN0YWRvcyBkYSBhcGxpY2HDp8Ojby5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflN0YXRlfSBzdGF0ZSBFc3RhZG8gZGEgQXBsaWNhw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFRhc2tiYXJQcm9wc30gTWFwZWFtZW50byBFc3RhZG8vUHJvcHJpZWRhZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kVGFza2JhclByb3BzID0gc3RhdGUgPT4gKHtcbiAgICB3aW5kb3dzOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLFxuICAgIG1zZ3M6IHN0YXRlLmZlbmVzdHJhLm1zZ3Ncbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcGVuLFxuICAgIGNsb3NlLFxuICAgIGFjdGl2YXRlLFxuICAgIG1pbmltaXplLFxuICAgIG1heGltaXplLFxuICAgIHN0YXJ0VHJhbnNmb3JtLFxuICAgIHRyYW5zZm9ybSxcbiAgICBlbmRUcmFuc2Zvcm0sXG4gICAgc2V0TG9hZGluZyxcbiAgICBzZXRGb290ZXIsXG4gICAgc2V0RGF0YVxufTsiXX0=