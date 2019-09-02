"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundTaskbarProps = exports.boundIconActions = exports.boundWindowProps = exports.boundWindowActions = exports.boundTemplateActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.hideTaskbar = exports.showTaskbar = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.setOptions = exports.DEFAULT_PROPS = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

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
  closeable: true,
  noFooter: false
};
/**
 * Altera opções da aplicação
 * @method
 * @param {module:Fenestra/Reducers~Options} options - Opções a serem alteradas
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */

exports.DEFAULT_PROPS = DEFAULT_PROPS;

var setOptions = function setOptions(options) {
  return {
    type: actionType.SET_OPTIONS,
    options: options
  };
};
/**
 * Abre uma nova janela.
 * @method
 * @param {module:Fenestra/Components/Window~WindowProps} props - Propriedades da nova janela 
 * @param {*} template - Template a ser injetado no conteúdo da janela
 * @param {*} templateProps - Propriedades a serem injetadas no Template
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.setOptions = setOptions;

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
 * @param {module:Fenestra/Reducers~Options} data.options - Opções da aplicação
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.setLoading = _setLoading;

var _setData = function setData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    icons: [],
    windows: [],
    options: {}
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
 * Mostra a barra de tarefas
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.setFooter = _setFooter;

var _showTaskbar = function showTaskbar() {
  return {
    type: actionType.SHOW_TASKBAR
  };
};
/**
 * Esconde a barra de tarefas
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */


exports.showTaskbar = _showTaskbar;

var _hideTaskbar = function hideTaskbar() {
  return {
    type: actionType.HIDE_TASKBAR
  };
};
/**
 * @typedef {Object} BoundDesktopProps
 * @property {module:Fenestra/Components/Desktop~IconData[]} icons Ícones do Desktop
 * @property {module:Fenestra/Components/Window~WindowState[]} windows Janelas do Desktop
 * @property {module:Fenestra/Reducers~Options} options Opções da aplicação
 * @property {boolean} isMaximized Determina se há alguma janela maximizada e ativa
 * @property {boolean} isMoving Determina se há alguma janela em movimento
 */

/**
 * Mapeia as propriedades do Desktop para estados da aplicação.
 * @method
 * @param {module:Fenestra/Reducers~State} state Estado da Aplicação
 * @returns {module:Fenestra/Actions~BoundDesktopProps} Mapeamento Estado/Propriedade
 */


exports.hideTaskbar = _hideTaskbar;

var boundDesktopProps = function boundDesktopProps(state) {
  return {
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    options: state.fenestra.options,
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
 * @property {function} showTaskbar Mostra a barra de tarefas
 * @property {function} hideTaskbar Esconde a barra de tarefas
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
    },
    showTaskbar: function showTaskbar() {
      return dispatch(_showTaskbar());
    },
    hideTaskbar: function hideTaskbar() {
      return dispatch(_hideTaskbar());
    }
  };
};
/**
 * @typedef {Object} BoundTaskbarActions
 * @property {function} activate Ativa uma janela
 * @property {function} hideTaskbar Esconde a barra de Tarefas
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
    },
    hideTaskbar: function hideTaskbar() {
      return dispatch(_hideTaskbar());
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
 * @typedef {Object} WindowProps Ações da janela.
 * @property {boolean} isLoading Determina se a janela está com backdrop de carregamento
 * @property {module:Fenestra/Reducers~Options} options Opções da aplicação
 */

/**
 * @typedef {function} BoundWindowProps Propriedades da Janela conectadas ao redux
 * @param {module:Fenestra/Actions~Dispatcher} dispatch Despachante da Ação
 * @returns {module:Fenestra/Actions~WindowProps}
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
      options: state.fenestra.options
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
 * @property {module:Fenestra/Reducers~Options} options Opções da aplicação
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
    options: state.fenestra.options,
    windows: state.fenestra.windows,
    msgs: state.fenestra.msgs
  };
};

exports.boundTaskbarProps = boundTaskbarProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwidW5kZWZpbmVkIiwiZm9vdGVyIiwiYWN0aXZlIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwicmVzaXplYWJsZSIsIm1vdmVhYmxlIiwibWluaW1pemVhYmxlIiwiY2xvc2VhYmxlIiwibm9Gb290ZXIiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsInR5cGUiLCJhY3Rpb25UeXBlIiwiU0VUX09QVElPTlMiLCJvcGVuIiwicHJvcHMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlUHJvcHMiLCJhY3Rpb24iLCJXSU5ET1dfT1BFTiIsImNsb3NlIiwia2V5IiwiV0lORE9XX0NMT1NFIiwiYWN0aXZhdGUiLCJXSU5ET1dfQUNUSVZBVEUiLCJtaW5pbWl6ZSIsIldJTkRPV19NSU5JTUlaRSIsIm1heGltaXplIiwiV0lORE9XX01BWElNSVpFIiwic3RhcnRUcmFuc2Zvcm0iLCJ4IiwieSIsInRyYW5zZm9ybVR5cGUiLCJXSU5ET1dfU1RBUlRfVFJBTlNGT1JNIiwidHJhbnNmb3JtIiwiV0lORE9XX1RSQU5TRk9STSIsImVuZFRyYW5zZm9ybSIsIldJTkRPV19FTkRfVFJBTlNGT1JNIiwic2V0TG9hZGluZyIsImlzTG9hZGluZyIsIlNFVF9MT0FESU5HIiwic2V0RGF0YSIsImRhdGEiLCJpY29ucyIsIndpbmRvd3MiLCJTRVRfREFUQSIsInNldEZvb3RlciIsIlNFVF9GT09URVIiLCJzaG93VGFza2JhciIsIlNIT1dfVEFTS0JBUiIsImhpZGVUYXNrYmFyIiwiSElERV9UQVNLQkFSIiwiYm91bmREZXNrdG9wUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwiaXNNYXhpbWl6ZWQiLCJzb21lIiwid2luZG93IiwiaXNNb3ZpbmciLCJ0cmFuc2Zvcm1LZXkiLCJib3VuZERlc2t0b3BBY3Rpb25zIiwiZGlzcGF0Y2giLCJtaW4iLCJtYXgiLCJzdGFydE1vdmUiLCJUUkFOU0ZPUk1fTU9WRSIsInN0YXJ0UmVzaXplIiwiVFJBTlNGT1JNX1JFU0laRSIsIm1vdmUiLCJlbmRNb3ZlIiwiYm91bmRUYXNrYmFyQWN0aW9ucyIsImJvdW5kVGVtcGxhdGVBY3Rpb25zIiwiYm91bmRXaW5kb3dBY3Rpb25zIiwiYm91bmRXaW5kb3dQcm9wcyIsImZpbmQiLCJib3VuZEljb25BY3Rpb25zIiwib3Blbkljb24iLCJpY29uIiwiYm91bmRUYXNrYmFyUHJvcHMiLCJtc2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7O0FBT0E7QUFDTyxJQUFNQSxhQUFhLEdBQUcsR0FBdEI7QUFFUDs7O0FBQ08sSUFBTUMsY0FBYyxHQUFHLEdBQXZCO0FBRVA7OztBQUNPLElBQU1DLGFBQWEsR0FBRztBQUN6QjtBQUNBQyxFQUFBQSxLQUFLLEVBQUU7QUFDSDtBQUNBQyxJQUFBQSxHQUFHLEVBQUUsQ0FGRjs7QUFHSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsQ0FKSDs7QUFLSDtBQUNBQyxJQUFBQSxLQUFLLEVBQUVOLGFBTko7O0FBT0g7QUFDQU8sSUFBQUEsTUFBTSxFQUFFTjtBQVJMLEdBRmtCO0FBYXpCTyxFQUFBQSxLQUFLLEVBQUVDLFNBYmtCO0FBY3pCQyxFQUFBQSxNQUFNLEVBQUUsRUFkaUI7QUFnQnpCQyxFQUFBQSxNQUFNLEVBQUUsSUFoQmlCO0FBaUJ6QkMsRUFBQUEsU0FBUyxFQUFFLEtBakJjO0FBa0J6QkMsRUFBQUEsU0FBUyxFQUFFLEtBbEJjO0FBb0J6QkMsRUFBQUEsVUFBVSxFQUFFLElBcEJhO0FBcUJ6QkMsRUFBQUEsUUFBUSxFQUFFLElBckJlO0FBc0J6QkMsRUFBQUEsWUFBWSxFQUFFLElBdEJXO0FBdUJ6QkMsRUFBQUEsU0FBUyxFQUFFLElBdkJjO0FBeUJ6QkMsRUFBQUEsUUFBUSxFQUFFO0FBekJlLENBQXRCO0FBNEJQ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QUFNLENBQUNwQyxHQUFQLEtBQWVBLEdBQW5CO0FBQUEsT0FBbEMsRUFBMERrQixTQUR0QjtBQUUvQzdCLE1BQUFBLE9BQU8sRUFBRTJDLEtBQUssQ0FBQ0MsUUFBTixDQUFlNUM7QUFGdUIsS0FBTDtBQUFBLEdBQWQ7QUFBQSxDQUF6QjtBQUtQOzs7OztBQUtBOzs7Ozs7Ozs7O0FBTU8sSUFBTWlFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQWQsUUFBUTtBQUFBLFNBQUs7QUFDekNlLElBQUFBLFFBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ3BCLE1BQUwsR0FBY0ksUUFBUSxDQUFDL0MsS0FBSSxDQUFDK0QsSUFBSSxDQUFDcEIsTUFBTCxDQUFZMUMsS0FBYixFQUFvQjhELElBQUksQ0FBQ3BCLE1BQUwsQ0FBWXpDLFFBQWhDLEVBQTBDNkQsSUFBSSxDQUFDcEIsTUFBTCxDQUFZeEMsYUFBdEQsQ0FBTCxDQUF0QixHQUFtRyxLQUE3RztBQUFBO0FBRCtCLEdBQUw7QUFBQSxDQUFqQztBQUlQOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7QUFNTyxJQUFNNkQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBekIsS0FBSztBQUFBLFNBQUs7QUFDdkMzQyxJQUFBQSxPQUFPLEVBQUUyQyxLQUFLLENBQUNDLFFBQU4sQ0FBZTVDLE9BRGU7QUFFdkNrQyxJQUFBQSxPQUFPLEVBQUVTLEtBQUssQ0FBQ0MsUUFBTixDQUFlVixPQUZlO0FBR3ZDbUMsSUFBQUEsSUFBSSxFQUFFMUIsS0FBSyxDQUFDQyxRQUFOLENBQWV5QjtBQUhrQixHQUFMO0FBQUEsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE3Ds2R1bG8gZGUgQcOnw7VlcyBwYXJhIHJlZHXDp8OjbyBkbyBTdG9yZSBkbyBSZWR1eC5cbiAqIEBtb2R1bGUgRmVuZXN0cmEvQWN0aW9ucyBcbiAqIEBzZWUgbW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBY3Rpb24gLSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYSBwZWxvIFJlZHV4XG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zL1R5cGVzfkFjdGlvblR5cGV9IHR5cGUgLSBUaXBvIGRhIEHDp8Ojb1xuICovXG5cbiAvKipcbiAgKiBAdHlwZWRlZiB7ZnVuY3Rpb259IERpc3BhdGNoZXJcbiAgKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gYWN0aW9uIEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gICovXG5cbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7XG4gICAgVFJBTlNGT1JNX01PVkUsXG4gICAgVFJBTlNGT1JNX1JFU0laRVxufSBmcm9tICcuL3R5cGVzJztcblxuLyoqIExhcmd1cmEgUGFkcsOjbyBkYSBqYW5lbGEgKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gMzAwO1xuXG4vKiogQWx0dXJhIFBhZHLDo28gZGEgamFuZWxhICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9IRUlHSFQgPSAyMDA7XG5cbi8qKiBAY29uc3RhbnQge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dQcm9wc30gREVGQVVMVF9QUk9QUyBQcm9wcmllZGFkZXMgcGFkcsOjbyBkZSB1bWEgbm92YSBqYW5lbGEgKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1BTID0ge1xuICAgIC8qKiBFc3RpbG8gKi9cbiAgICBzdHlsZToge1xuICAgICAgICAvKiogUG9zacOnw6NvIFkgKi9cbiAgICAgICAgdG9wOiAwLFxuICAgICAgICAvKiogUG9zacOnw6NvIFggKi9cbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgLyoqIExhcmd1cmEgKi9cbiAgICAgICAgd2lkdGg6IERFRkFVTFRfV0lEVEgsXG4gICAgICAgIC8qKiBBbHR1cmEgKi9cbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX0hFSUdIVFxuICAgIH0sXG5cbiAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgIGZvb3RlcjogXCJcIixcblxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBtYXhpbWl6ZWQ6IGZhbHNlLFxuICAgIG1pbmltaXplZDogZmFsc2UsXG5cbiAgICByZXNpemVhYmxlOiB0cnVlLFxuICAgIG1vdmVhYmxlOiB0cnVlLFxuICAgIG1pbmltaXplYWJsZTogdHJ1ZSxcbiAgICBjbG9zZWFibGU6IHRydWUsXG5cbiAgICBub0Zvb3RlcjogZmFsc2Vcbn07XG5cbi8qKlxuICogQWx0ZXJhIG9ww6fDtWVzIGRhIGFwbGljYcOnw6NvXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35PcHRpb25zfSBvcHRpb25zIC0gT3DDp8O1ZXMgYSBzZXJlbSBhbHRlcmFkYXNcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9PUFRJT05TLFxuICAgICAgICBvcHRpb25zXG4gICAgfVxufVxuXG4vKipcbiAqIEFicmUgdW1hIG5vdmEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93UHJvcHN9IHByb3BzIC0gUHJvcHJpZWRhZGVzIGRhIG5vdmEgamFuZWxhIFxuICogQHBhcmFtIHsqfSB0ZW1wbGF0ZSAtIFRlbXBsYXRlIGEgc2VyIGluamV0YWRvIG5vIGNvbnRlw7pkbyBkYSBqYW5lbGFcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGVQcm9wcyAtIFByb3ByaWVkYWRlcyBhIHNlcmVtIGluamV0YWRhcyBubyBUZW1wbGF0ZVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IG9wZW4gPSAocHJvcHMgPSBERUZBVUxUX1BST1BTLCB0ZW1wbGF0ZSA9ICgpID0+IG51bGwsIHRlbXBsYXRlUHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfT1BFTixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLkRFRkFVTFRfUFJPUFMsXG4gICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVQcm9wc1xuICAgIH07XG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyoqXG4gKiBGZWNoYSBhIGphbmVsYVxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgZmVjaGFkYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IGNsb3NlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0NMT1NFLFxuICAgICAgICBrZXlcbiAgICB9XG59XG5cbi8qKlxuICogQXRpdmEvRGVzYXRpdmEgYSBqYW5lbGFcbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIGF0aXZhZGEvZGVzYXRpdmFkYVxuICogQHBhcmFtIHtib29sZWFufSBhY3RpdmUgLSBBdGl2YXIgKHRydWUpIG91IERlc2F0aXZhciAoZmFsc2UpXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgYWN0aXZhdGUgPSAoa2V5LCBhY3RpdmUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19BQ1RJVkFURSxcbiAgICAgICAga2V5LCBhY3RpdmVcbiAgICB9XG59XG5cbi8qKlxuICogTWluaW1pemEvRGVtaW5pbWl6YSBhIGphbmVsYVxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgbWluaW1pemFkYS9kZW1pbmltaXphZGFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbWluaW1pemUgLSBNaW5pbWl6YXIgKHRydWUpIG91IERlbWluaW1pemFyIChmYWxzZSlcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5pbWl6ZSA9IChrZXksIG1pbmltaXplKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfTUlOSU1JWkUsXG4gICAgICAgIGtleSwgbWluaW1pemVcbiAgICB9XG59XG5cbi8qKlxuICogTWF4aW1pemEvRGVtYXhpbWl6YSBhIGphbmVsYVxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgbWF4aW1pemFkYS9kZW1heGltaXphZGFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbWF4aW1pemUgLSBNYXhpbWl6YXIgKHRydWUpIG91IERlbWF4aW1pemFyIChmYWxzZSlcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhpbWl6ZSA9IChrZXksIG1heGltaXplKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfTUFYSU1JWkUsXG4gICAgICAgIGtleSwgbWF4aW1pemVcbiAgICB9XG59XG5cbi8qKlxuICogSW5pY2lhIHVtYSB0cmFuc2Zvcm1hw6fDo28gZGUgbW92aW1lbnRhw6fDo28gb3UgcmVkaW1lbnNpb25hbWVudG8gZGUgdW1hIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIG1vdmltZW50YWRhL3JlZGltZW5zaW9uYWRhXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFBvc2nDp8OjbyBYIG9uZGUgaW5pY2lvdSBhIHRyYW5zZm9ybWHDp8Ojb1xuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBQb3Npw6fDo28gWSBvbmRlIGluaWNpb3UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnMvVHlwZXN+VHJhbnNmb3JtVHlwZX0gdHJhbnNmb3JtVHlwZSAtIFRpcG8gZGUgdHJhbnNmb3JtYcOnw6NvIChUUkFOU0ZPUk1fTU9WRSBvdSBUUkFOU0ZPUk1fUkVTSVpFKVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0VHJhbnNmb3JtID0gKGtleSwgeCwgeSwgdHJhbnNmb3JtVHlwZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX1NUQVJUX1RSQU5TRk9STSxcbiAgICAgICAga2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlXG4gICAgfVxufVxuXG4vKipcbiAqIE1vdmltZW50YSBvdSByZWRpbWVuc2lvbmEgYSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFBvc2nDp8OjbyBYIG9uZGUgYWNvbnRlY2UgYSB0cmFuc2Zvcm1hw6fDo29cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gUG9zacOnw6NvIFkgb25kZSBhY29udGVjZSBhIHRyYW5zZm9ybWHDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfVFJBTlNGT1JNLFxuICAgICAgICB4LCB5XG4gICAgfVxufVxuXG4vKipcbiAqIEZpbmFsaXphIGEgdHJhbnNmb3JtYcOnw6NvIGRhIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRUcmFuc2Zvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfRU5EX1RSQU5TRk9STSxcbiAgICB9XG59XG5cbi8qKlxuICogQWRpY2lvbmEvUmVtb3ZlIG8gYmFja2Ryb3AgZGUgY2FycmVnYW1lbnRvIGRhIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IC0gQ2hhdmUgZGEgamFuZWxhIGEgc2VyIGNhcnJlZ2FkYVxuICogQHBhcmFtIHtib29sZWFufSBpc0xvYWRpbmcgLSBBZGljaW9uYSAodHJ1ZSkgb3UgcmVtb3ZlIChmYWxzZSkgbyBiYWNrZHJvcFxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAoa2V5LCBpc0xvYWRpbmcpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5TRVRfTE9BRElORyxcbiAgICBrZXksIGlzTG9hZGluZ1xufSk7XG5cbi8qKlxuICogSW5pY2lhIHVtYSBub3ZhIHNlc3PDo28gZGUgamFuZWxhcyBlIMOtY29uZXMuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIERhZG9zIGRhIG5vdmEgc2Vzc8OjbyBhIHNlciBpbmljaWFkYVxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93RGF0YVtdfSBkYXRhLndpbmRvd3MgLSBKYW5lbGEgYSBzZXJlbSBhYmVydGFzIG5vIGluw61jaW8gZGEgc2Vzc8Ojb1xuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9EZXNrdG9wfkljb25EYXRhW119IGRhdGEuaWNvbnMgLSDDjWNvbmVzIGEgc2VyZW0gbW9zdHJhZG9zIG5vIERlc2t0b3BcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfk9wdGlvbnN9IGRhdGEub3B0aW9ucyAtIE9ww6fDtWVzIGRhIGFwbGljYcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGF0YSA9IChkYXRhID0geyBpY29uczogW10sIHdpbmRvd3M6IFtdLCBvcHRpb25zOiB7fSB9KSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0RBVEEsXG4gICAgZGF0YVxufSk7XG5cbi8qKlxuICogQWx0ZXJhIG8gcm9kYXDDqSBkYSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBhbHRlcmFkYVxuICogQHBhcmFtIHtzdHJpbmd9IGZvb3RlciAtIE1lbnNhZ2VtIGRlIHJvZGFww6kgZGEgamFuZWxhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgc2V0Rm9vdGVyID0gKGtleSwgZm9vdGVyKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX0ZPT1RFUixcbiAgICBrZXksIGZvb3RlclxufSk7XG5cbi8qKlxuICogTW9zdHJhIGEgYmFycmEgZGUgdGFyZWZhc1xuICogQG1ldGhvZFxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dUYXNrYmFyID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNIT1dfVEFTS0JBUlxufSk7XG5cbi8qKlxuICogRXNjb25kZSBhIGJhcnJhIGRlIHRhcmVmYXNcbiAqIEBtZXRob2RcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlVGFza2JhciA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5ISURFX1RBU0tCQVJcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kRGVza3RvcFByb3BzXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL0Rlc2t0b3B+SWNvbkRhdGFbXX0gaWNvbnMgw41jb25lcyBkbyBEZXNrdG9wXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dTdGF0ZVtdfSB3aW5kb3dzIEphbmVsYXMgZG8gRGVza3RvcFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+T3B0aW9uc30gb3B0aW9ucyBPcMOnw7VlcyBkYSBhcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc01heGltaXplZCBEZXRlcm1pbmEgc2UgaMOhIGFsZ3VtYSBqYW5lbGEgbWF4aW1pemFkYSBlIGF0aXZhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTW92aW5nIERldGVybWluYSBzZSBow6EgYWxndW1hIGphbmVsYSBlbSBtb3ZpbWVudG9cbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZG8gRGVza3RvcCBwYXJhIGVzdGFkb3MgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gc3RhdGUgRXN0YWRvIGRhIEFwbGljYcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmREZXNrdG9wUHJvcHN9IE1hcGVhbWVudG8gRXN0YWRvL1Byb3ByaWVkYWRlXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BQcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaWNvbnM6IHN0YXRlLmZlbmVzdHJhLmljb25zLFxuICAgIHdpbmRvd3M6IHN0YXRlLmZlbmVzdHJhLndpbmRvd3MsXG4gICAgb3B0aW9uczogc3RhdGUuZmVuZXN0cmEub3B0aW9ucyxcbiAgICBpc01heGltaXplZDogc3RhdGUuZmVuZXN0cmEud2luZG93cy5zb21lKHdpbmRvdyA9PiB3aW5kb3cucHJvcHMuYWN0aXZlICYmIHdpbmRvdy5wcm9wcy5tYXhpbWl6ZWQpLFxuICAgIGlzTW92aW5nOiBzdGF0ZS5mZW5lc3RyYS50cmFuc2Zvcm1UeXBlICE9PSBudWxsICYmIHN0YXRlLmZlbmVzdHJhLnRyYW5zZm9ybUtleSAhPT0gbnVsbFxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQm91bmREZXNrdG9wQWN0aW9uc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3BlbiBBYnJlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1pbmltaXplIE1pbmltaXphIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1heGltaXplICBNYXhpbWl6YSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzdGFydE1vdmUgSW5pY2lhIG8gbW92aW1lbnRvIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0UmVzaXplIEluaWNpYSBvIHJlZGltZW5zaW9uYW1lbnRvIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1vdmUgTW92ZS9SZWRpbWVuc2lvbmEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGVuZE1vdmUgRmluYWxpemEgYSB0cmFuc2Zvcm1hw6fDo28gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjbG9zZSBGZWNoYSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRMb2FkaW5nIEFsdGVyYSBvIGJhY2tkcm9wIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldEZvb3RlciAgQWx0ZXJhIG8gcm9kYXDDqSBkZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXREYXRhIFJlaW5pY2lhIGEgc2Vzc8OjbyBjb20gbm92b3Mgw61jb25lcyBlIGphbmVsYXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNob3dUYXNrYmFyIE1vc3RyYSBhIGJhcnJhIGRlIHRhcmVmYXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGhpZGVUYXNrYmFyIEVzY29uZGUgYSBiYXJyYSBkZSB0YXJlZmFzXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIERlc2t0b3AgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkZSBBw6fDtWVzXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmREZXNrdG9wQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAoa2V5LCBtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fTU9WRSkpLFxuICAgIHN0YXJ0UmVzaXplOiAoa2V5LCB4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBtb3ZlOiAoeCwgeSkgPT4gZGlzcGF0Y2godHJhbnNmb3JtKHgsIHkpKSxcbiAgICBlbmRNb3ZlOiAoKSA9PiBkaXNwYXRjaChlbmRUcmFuc2Zvcm0oKSksXG4gICAgY2xvc2U6IChrZXkpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChrZXksIGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChrZXksIGZvb3RlciA9IFwiXCIpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IGRhdGEgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSksXG4gICAgc2hvd1Rhc2tiYXI6ICgpID0+IGRpc3BhdGNoKHNob3dUYXNrYmFyKCkpLFxuICAgIGhpZGVUYXNrYmFyOiAoKSA9PiBkaXNwYXRjaChoaWRlVGFza2JhcigpKSxcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kVGFza2JhckFjdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGhpZGVUYXNrYmFyIEVzY29uZGUgYSBiYXJyYSBkZSBUYXJlZmFzXG4qL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZGEgQmFycmEgZGUgVGFyZWZhcyBwYXJhIG8gZGVzcGFjaGFudGUgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRlIEHDp8O1ZXNcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFRhc2tiYXJBY3Rpb25zfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kVGFza2JhckFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIGhpZGVUYXNrYmFyOiAoKSA9PiBkaXNwYXRjaChoaWRlVGFza2JhcigpKVxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBCb3VuZFRlbXBsYXRlQWN0aW9ucyBBw6fDtWVzIGRvIFRlbXBsYXRlIGNvbmVjdGFkYXMgYW8gcmVkdXhcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+RGlzcGF0Y2hlcn0gZGlzcGF0Y2ggRGVzcGFjaGFudGUgZGEgQcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+VGVtcGxhdGVBY3Rpb25zfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVGVtcGxhdGVBY3Rpb25zIEHDp8O1ZXMgZG8gdGVtcGxhdGUgZGUgY29udGXDumRvIGRhIGphbmVsYS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wZW4gQWJyZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBhY3RpdmF0ZSBBdGl2YSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBtaW5pbWl6ZSBNaW5pbWl6YSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBtYXhpbWl6ZSAgTWF4aW1pemEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xvc2UgRmVjaGEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0TG9hZGluZyBBbHRlcmEgbyBiYWNrZHJvcCBkZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRGb290ZXIgIEFsdGVyYSBvIHJvZGFww6kgZGUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0RGF0YSBSZWluaWNpYSBhIHNlc3PDo28gY29tIG5vdm9zIMOtY29uZXMgZSBqYW5lbGFzXG4gKiBcbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZG8gVGVtcGxhdGUgZGUgY29udGXDumRvIGRhIEphbmVsYSBwYXJhIG8gZGVzcGFjaGFudGUgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSBpZGVudGlmaWNhZG9yIGRhIEphbmVsYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kVGVtcGxhdGVBY3Rpb25zfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kVGVtcGxhdGVBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6IChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIGNsb3NlOiAoKSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAoaXNMb2FkaW5nID0gdHJ1ZSkgPT4gZGlzcGF0Y2goc2V0TG9hZGluZyhrZXksIGlzTG9hZGluZykpLFxuICAgIHNldEZvb3RlcjogKGZvb3RlciA9IG51bGwpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IChkYXRhKSA9PiBkaXNwYXRjaChzZXREYXRhKGRhdGEpKVxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBCb3VuZFdpbmRvd0FjdGlvbnMgQcOnw7VlcyBkYSBKYW5lbGEgY29uZWN0YWRhcyBhbyByZWR1eFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkYSBBw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35XaW5kb3dBY3Rpb25zfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93QWN0aW9ucyBBw6fDtWVzIGRhIGphbmVsYS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wZW4gQWJyZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBhY3RpdmF0ZSBBdGl2YSBhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWluaW1pemUgTWluaW1pemEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1heGltaXplICBNYXhpbWl6YSBhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc3RhcnRNb3ZlIEluaWNpYSBvIG1vdmltZW50byBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0UmVzaXplIEluaWNpYSBvIHJlZGltZW5zaW9uYW1lbnRvIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xvc2UgRmVjaGEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldExvYWRpbmcgQWx0ZXJhIG8gYmFja2Ryb3AgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRGb290ZXIgIEFsdGVyYSBvIHJvZGFww6kgZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXREYXRhIFJlaW5pY2lhIGEgc2Vzc8OjbyBjb20gbm92b3Mgw61jb25lcyBlIGphbmVsYXNcbiAqIFxuICovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkYSBKYW5lbGEgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgaWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFdpbmRvd0FjdGlvbnN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dBY3Rpb25zID0gKGtleSkgPT4gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBtaW5pbWl6ZTogKG1pbiA9IHRydWUpID0+IGRpc3BhdGNoKG1pbmltaXplKGtleSwgbWluKSksXG4gICAgbWF4aW1pemU6IChtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX01PVkUpKSxcbiAgICBzdGFydFJlc2l6ZTogKHgsIHkpID0+IGRpc3BhdGNoKHN0YXJ0VHJhbnNmb3JtKGtleSwgeCwgeSwgVFJBTlNGT1JNX1JFU0laRSkpLFxuICAgIGNsb3NlOiAoKSA9PiBkaXNwYXRjaChjbG9zZShrZXkpKSxcbiAgICBzZXRMb2FkaW5nOiAoaXNMb2FkaW5nID0gdHJ1ZSkgPT4gZGlzcGF0Y2goc2V0TG9hZGluZyhrZXksIGlzTG9hZGluZykpLFxuICAgIHNldEZvb3RlcjogKGZvb3RlciA9IG51bGwpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IChkYXRhKSA9PiBkaXNwYXRjaChzZXREYXRhKGRhdGEpKVxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93UHJvcHMgQcOnw7VlcyBkYSBqYW5lbGEuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTG9hZGluZyBEZXRlcm1pbmEgc2UgYSBqYW5lbGEgZXN0w6EgY29tIGJhY2tkcm9wIGRlIGNhcnJlZ2FtZW50b1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+T3B0aW9uc30gb3B0aW9ucyBPcMOnw7VlcyBkYSBhcGxpY2HDp8Ojb1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBCb3VuZFdpbmRvd1Byb3BzIFByb3ByaWVkYWRlcyBkYSBKYW5lbGEgY29uZWN0YWRhcyBhbyByZWR1eFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkYSBBw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35XaW5kb3dQcm9wc31cbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZGEgSmFuZWxhIHBhcmEgbyBFc3RhZG8gZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSBpZGVudGlmaWNhZG9yIGRhIEphbmVsYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkJvdW5kV2luZG93UHJvcHN9IE1hcGVhbWVudG8gZGFzIFByb3ByaWVkYWRlc1xuICovXG5leHBvcnQgY29uc3QgYm91bmRXaW5kb3dQcm9wcyA9IChrZXkpID0+IHN0YXRlID0+ICh7XG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLmZpbmQod2luZG93ID0+IHdpbmRvdy5rZXkgPT09IGtleSkuaXNMb2FkaW5nLFxuICAgIG9wdGlvbnM6IHN0YXRlLmZlbmVzdHJhLm9wdGlvbnMsXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZEljb25BY3Rpb25zXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcGVuSWNvbiBBYnJlIHVtYSBub3ZhIGphbmVsYSBjb3JyZXNwb25kZW50ZSBhbyDDrWNvbmVcbiovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkbyDDrWNvbmUgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkZSBBw6fDtWVzXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmRJY29uQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEljb25BY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuSWNvbjogKGljb24pID0+IGljb24ud2luZG93ID8gZGlzcGF0Y2gob3BlbihpY29uLndpbmRvdy5wcm9wcywgaWNvbi53aW5kb3cudGVtcGxhdGUsIGljb24ud2luZG93LnRlbXBsYXRlUHJvcHMpKSA6IGZhbHNlXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZFRhc2tiYXJQcm9wcyBcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfk9wdGlvbnN9IG9wdGlvbnMgT3DDp8O1ZXMgZGEgYXBsaWNhw6fDo29cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1N0YXRlW119IHdpbmRvd3MgSmFuZWxhcyBkbyBEZXNrdG9wXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9NZXNzYWdlc35NZXNzYWdlc30gbXNncyBKYW5lbGFzIGRvIERlc2t0b3BcbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZGEgQmFycmEgZGUgVGFyZWZhcyBwYXJhIGVzdGFkb3MgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gc3RhdGUgRXN0YWRvIGRhIEFwbGljYcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmRUYXNrYmFyUHJvcHN9IE1hcGVhbWVudG8gRXN0YWRvL1Byb3ByaWVkYWRlXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZFRhc2tiYXJQcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgb3B0aW9uczogc3RhdGUuZmVuZXN0cmEub3B0aW9ucyxcbiAgICB3aW5kb3dzOiBzdGF0ZS5mZW5lc3RyYS53aW5kb3dzLFxuICAgIG1zZ3M6IHN0YXRlLmZlbmVzdHJhLm1zZ3Ncbn0pOyJdfQ==