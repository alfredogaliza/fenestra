"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundTaskbarProps = exports.boundIconActions = exports.boundWindowProps = exports.boundWindowActions = exports.boundTemplateActions = exports.boundTaskbarActions = exports.boundDesktopActions = exports.boundDesktopProps = exports.hideTaskbar = exports.showTaskbar = exports.setFooter = exports.setData = exports.setLoading = exports.endTransform = exports.transform = exports.startTransform = exports.maximize = exports.minimize = exports.activate = exports.close = exports.open = exports.setOptions = exports.DEFAULT_PROPS = exports.DEFAULT_HEIGHT = exports.DEFAULT_WIDTH = void 0;

var actionType = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIkRFRkFVTFRfUFJPUFMiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwidW5kZWZpbmVkIiwiZm9vdGVyIiwiYWN0aXZlIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwicmVzaXplYWJsZSIsIm1vdmVhYmxlIiwibWluaW1pemVhYmxlIiwiY2xvc2VhYmxlIiwibm9Gb290ZXIiLCJzZXRPcHRpb25zIiwib3B0aW9ucyIsInR5cGUiLCJhY3Rpb25UeXBlIiwiU0VUX09QVElPTlMiLCJvcGVuIiwicHJvcHMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlUHJvcHMiLCJhY3Rpb24iLCJXSU5ET1dfT1BFTiIsImNsb3NlIiwia2V5IiwiV0lORE9XX0NMT1NFIiwiYWN0aXZhdGUiLCJXSU5ET1dfQUNUSVZBVEUiLCJtaW5pbWl6ZSIsIldJTkRPV19NSU5JTUlaRSIsIm1heGltaXplIiwiV0lORE9XX01BWElNSVpFIiwic3RhcnRUcmFuc2Zvcm0iLCJ4IiwieSIsInRyYW5zZm9ybVR5cGUiLCJXSU5ET1dfU1RBUlRfVFJBTlNGT1JNIiwidHJhbnNmb3JtIiwiV0lORE9XX1RSQU5TRk9STSIsImVuZFRyYW5zZm9ybSIsIldJTkRPV19FTkRfVFJBTlNGT1JNIiwic2V0TG9hZGluZyIsImlzTG9hZGluZyIsIlNFVF9MT0FESU5HIiwic2V0RGF0YSIsImRhdGEiLCJpY29ucyIsIndpbmRvd3MiLCJTRVRfREFUQSIsInNldEZvb3RlciIsIlNFVF9GT09URVIiLCJzaG93VGFza2JhciIsIlNIT1dfVEFTS0JBUiIsImhpZGVUYXNrYmFyIiwiSElERV9UQVNLQkFSIiwiYm91bmREZXNrdG9wUHJvcHMiLCJzdGF0ZSIsImZlbmVzdHJhIiwiaXNNYXhpbWl6ZWQiLCJzb21lIiwid2luZG93IiwiaXNNb3ZpbmciLCJ0cmFuc2Zvcm1LZXkiLCJib3VuZERlc2t0b3BBY3Rpb25zIiwiZGlzcGF0Y2giLCJtaW4iLCJtYXgiLCJzdGFydE1vdmUiLCJUUkFOU0ZPUk1fTU9WRSIsInN0YXJ0UmVzaXplIiwiVFJBTlNGT1JNX1JFU0laRSIsIm1vdmUiLCJlbmRNb3ZlIiwiYm91bmRUYXNrYmFyQWN0aW9ucyIsImJvdW5kVGVtcGxhdGVBY3Rpb25zIiwiYm91bmRXaW5kb3dBY3Rpb25zIiwiYm91bmRXaW5kb3dQcm9wcyIsImZpbmQiLCJib3VuZEljb25BY3Rpb25zIiwib3Blbkljb24iLCJpY29uIiwiYm91bmRUYXNrYmFyUHJvcHMiLCJtc2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7O0FBT0E7QUFDTyxJQUFNQSxhQUFhLEdBQUcsR0FBdEI7QUFFUDs7O0FBQ08sSUFBTUMsY0FBYyxHQUFHLEdBQXZCO0FBRVA7OztBQUNPLElBQU1DLGFBQWEsR0FBRztBQUN6QjtBQUNBQyxFQUFBQSxLQUFLLEVBQUU7QUFDSDtBQUNBQyxJQUFBQSxHQUFHLEVBQUUsQ0FGRjs7QUFHSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsQ0FKSDs7QUFLSDtBQUNBQyxJQUFBQSxLQUFLLEVBQUVOLGFBTko7O0FBT0g7QUFDQU8sSUFBQUEsTUFBTSxFQUFFTjtBQVJMLEdBRmtCO0FBYXpCTyxFQUFBQSxLQUFLLEVBQUVDLFNBYmtCO0FBY3pCQyxFQUFBQSxNQUFNLEVBQUUsRUFkaUI7QUFnQnpCQyxFQUFBQSxNQUFNLEVBQUUsSUFoQmlCO0FBaUJ6QkMsRUFBQUEsU0FBUyxFQUFFLEtBakJjO0FBa0J6QkMsRUFBQUEsU0FBUyxFQUFFLEtBbEJjO0FBb0J6QkMsRUFBQUEsVUFBVSxFQUFFLElBcEJhO0FBcUJ6QkMsRUFBQUEsUUFBUSxFQUFFLElBckJlO0FBc0J6QkMsRUFBQUEsWUFBWSxFQUFFLElBdEJXO0FBdUJ6QkMsRUFBQUEsU0FBUyxFQUFFLElBdkJjO0FBeUJ6QkMsRUFBQUEsUUFBUSxFQUFFO0FBekJlLENBQXRCO0FBNEJQ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QUFNLENBQUNwQyxHQUFQLEtBQWVBLEdBQW5CO0FBQUEsT0FBbEMsRUFBMERrQixTQUR0QjtBQUUvQzdCLE1BQUFBLE9BQU8sRUFBRTJDLEtBQUssQ0FBQ0MsUUFBTixDQUFlNUM7QUFGdUIsS0FBTDtBQUFBLEdBQWQ7QUFBQSxDQUF6QjtBQUtQOzs7OztBQUtBOzs7Ozs7Ozs7O0FBTU8sSUFBTWlFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQWQsUUFBUTtBQUFBLFNBQUs7QUFDekNlLElBQUFBLFFBQVEsRUFBRSxrQkFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ3BCLE1BQUwsR0FBY0ksUUFBUSxDQUFDL0MsS0FBSSxDQUFDK0QsSUFBSSxDQUFDcEIsTUFBTCxDQUFZMUMsS0FBYixFQUFvQjhELElBQUksQ0FBQ3BCLE1BQUwsQ0FBWXpDLFFBQWhDLEVBQTBDNkQsSUFBSSxDQUFDcEIsTUFBTCxDQUFZeEMsYUFBdEQsQ0FBTCxDQUF0QixHQUFtRyxLQUE3RztBQUFBO0FBRCtCLEdBQUw7QUFBQSxDQUFqQztBQUlQOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7QUFNTyxJQUFNNkQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBekIsS0FBSztBQUFBLFNBQUs7QUFDdkMzQyxJQUFBQSxPQUFPLEVBQUUyQyxLQUFLLENBQUNDLFFBQU4sQ0FBZTVDLE9BRGU7QUFFdkNrQyxJQUFBQSxPQUFPLEVBQUVTLEtBQUssQ0FBQ0MsUUFBTixDQUFlVixPQUZlO0FBR3ZDbUMsSUFBQUEsSUFBSSxFQUFFMUIsS0FBSyxDQUFDQyxRQUFOLENBQWV5QjtBQUhrQixHQUFMO0FBQUEsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE3Ds2R1bG8gZGUgQcOnw7VlcyBwYXJhIHJlZHXDp8OjbyBkbyBTdG9yZSBkbyBSZWR1eC5cbiAqIEBtb2R1bGUgRmVuZXN0cmEvQWN0aW9ucyBcbiAqIEBzZWUgbW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBY3Rpb24gLSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYSBwZWxvIFJlZHV4XG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zL1R5cGVzfkFjdGlvblR5cGV9IHR5cGUgLSBUaXBvIGRhIEHDp8Ojb1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBEaXNwYXRjaGVyXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gYWN0aW9uIEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cblxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgICBUUkFOU0ZPUk1fTU9WRSxcbiAgICBUUkFOU0ZPUk1fUkVTSVpFXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogTGFyZ3VyYSBQYWRyw6NvIGRhIGphbmVsYSAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lEVEggPSAzMDA7XG5cbi8qKiBBbHR1cmEgUGFkcsOjbyBkYSBqYW5lbGEgKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0hFSUdIVCA9IDIwMDtcblxuLyoqIEBjb25zdGFudCB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd1Byb3BzfSBERUZBVUxUX1BST1BTIFByb3ByaWVkYWRlcyBwYWRyw6NvIGRlIHVtYSBub3ZhIGphbmVsYSAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPUFMgPSB7XG4gICAgLyoqIEVzdGlsbyAqL1xuICAgIHN0eWxlOiB7XG4gICAgICAgIC8qKiBQb3Npw6fDo28gWSAqL1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIC8qKiBQb3Npw6fDo28gWCAqL1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAvKiogTGFyZ3VyYSAqL1xuICAgICAgICB3aWR0aDogREVGQVVMVF9XSURUSCxcbiAgICAgICAgLyoqIEFsdHVyYSAqL1xuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfSEVJR0hUXG4gICAgfSxcblxuICAgIHRpdGxlOiB1bmRlZmluZWQsXG4gICAgZm9vdGVyOiBcIlwiLFxuXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIG1heGltaXplZDogZmFsc2UsXG4gICAgbWluaW1pemVkOiBmYWxzZSxcblxuICAgIHJlc2l6ZWFibGU6IHRydWUsXG4gICAgbW92ZWFibGU6IHRydWUsXG4gICAgbWluaW1pemVhYmxlOiB0cnVlLFxuICAgIGNsb3NlYWJsZTogdHJ1ZSxcblxuICAgIG5vRm9vdGVyOiBmYWxzZVxufTtcblxuLyoqXG4gKiBBbHRlcmEgb3DDp8O1ZXMgZGEgYXBsaWNhw6fDo29cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfk9wdGlvbnN9IG9wdGlvbnMgLSBPcMOnw7VlcyBhIHNlcmVtIGFsdGVyYWRhc1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNldE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuU0VUX09QVElPTlMsXG4gICAgICAgIG9wdGlvbnNcbiAgICB9XG59XG5cbi8qKlxuICogQWJyZSB1bWEgbm92YSBqYW5lbGEuXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dQcm9wc30gcHJvcHMgLSBQcm9wcmllZGFkZXMgZGEgbm92YSBqYW5lbGEgXG4gKiBAcGFyYW0geyp9IHRlbXBsYXRlIC0gVGVtcGxhdGUgYSBzZXIgaW5qZXRhZG8gbm8gY29udGXDumRvIGRhIGphbmVsYVxuICogQHBhcmFtIHsqfSB0ZW1wbGF0ZVByb3BzIC0gUHJvcHJpZWRhZGVzIGEgc2VyZW0gaW5qZXRhZGFzIG5vIFRlbXBsYXRlXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgb3BlbiA9IChwcm9wcyA9IERFRkFVTFRfUFJPUFMsIHRlbXBsYXRlID0gKCkgPT4gbnVsbCwgdGVtcGxhdGVQcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19PUEVOLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLi4uREVGQVVMVF9QUk9QUyxcbiAgICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZVByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKipcbiAqIEZlY2hhIGEgamFuZWxhXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBmZWNoYWRhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfQ0xPU0UsXG4gICAgICAgIGtleVxuICAgIH1cbn1cblxuLyoqXG4gKiBBdGl2YS9EZXNhdGl2YSBhIGphbmVsYVxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgYXRpdmFkYS9kZXNhdGl2YWRhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZSAtIEF0aXZhciAodHJ1ZSkgb3UgRGVzYXRpdmFyIChmYWxzZSlcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9IChrZXksIGFjdGl2ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGUuV0lORE9XX0FDVElWQVRFLFxuICAgICAgICBrZXksXG4gICAgICAgIGFjdGl2ZVxuICAgIH1cbn1cblxuLyoqXG4gKiBNaW5pbWl6YS9EZW1pbmltaXphIGEgamFuZWxhXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBtaW5pbWl6YWRhL2RlbWluaW1pemFkYVxuICogQHBhcmFtIHtib29sZWFufSBtaW5pbWl6ZSAtIE1pbmltaXphciAodHJ1ZSkgb3UgRGVtaW5pbWl6YXIgKGZhbHNlKVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbmltaXplID0gKGtleSwgbWluaW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NSU5JTUlaRSxcbiAgICAgICAga2V5LFxuICAgICAgICBtaW5pbWl6ZVxuICAgIH1cbn1cblxuLyoqXG4gKiBNYXhpbWl6YS9EZW1heGltaXphIGEgamFuZWxhXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35XaW5LZXl9IGtleSAtIENoYXZlIGRhIGphbmVsYSBhIHNlciBtYXhpbWl6YWRhL2RlbWF4aW1pemFkYVxuICogQHBhcmFtIHtib29sZWFufSBtYXhpbWl6ZSAtIE1heGltaXphciAodHJ1ZSkgb3UgRGVtYXhpbWl6YXIgKGZhbHNlKVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IG1heGltaXplID0gKGtleSwgbWF4aW1pemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19NQVhJTUlaRSxcbiAgICAgICAga2V5LFxuICAgICAgICBtYXhpbWl6ZVxuICAgIH1cbn1cblxuLyoqXG4gKiBJbmljaWEgdW1hIHRyYW5zZm9ybWHDp8OjbyBkZSBtb3ZpbWVudGHDp8OjbyBvdSByZWRpbWVuc2lvbmFtZW50byBkZSB1bWEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgbW92aW1lbnRhZGEvcmVkaW1lbnNpb25hZGFcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gUG9zacOnw6NvIFggb25kZSBpbmljaW91IGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFBvc2nDp8OjbyBZIG9uZGUgaW5pY2lvdSBhIHRyYW5zZm9ybWHDp8Ojb1xuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9ucy9UeXBlc35UcmFuc2Zvcm1UeXBlfSB0cmFuc2Zvcm1UeXBlIC0gVGlwbyBkZSB0cmFuc2Zvcm1hw6fDo28gKFRSQU5TRk9STV9NT1ZFIG91IFRSQU5TRk9STV9SRVNJWkUpXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgc3RhcnRUcmFuc2Zvcm0gPSAoa2V5LCB4LCB5LCB0cmFuc2Zvcm1UeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZS5XSU5ET1dfU1RBUlRfVFJBTlNGT1JNLFxuICAgICAgICBrZXksXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHRyYW5zZm9ybVR5cGVcbiAgICB9XG59XG5cbi8qKlxuICogTW92aW1lbnRhIG91IHJlZGltZW5zaW9uYSBhIGphbmVsYS5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gUG9zacOnw6NvIFggb25kZSBhY29udGVjZSBhIHRyYW5zZm9ybWHDp8Ojb1xuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBQb3Npw6fDo28gWSBvbmRlIGFjb250ZWNlIGEgdHJhbnNmb3JtYcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKHgsIHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19UUkFOU0ZPUk0sXG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICB9XG59XG5cbi8qKlxuICogRmluYWxpemEgYSB0cmFuc2Zvcm1hw6fDo28gZGEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IGVuZFRyYW5zZm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLldJTkRPV19FTkRfVFJBTlNGT1JNLFxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGljaW9uYS9SZW1vdmUgbyBiYWNrZHJvcCBkZSBjYXJyZWdhbWVudG8gZGEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgY2FycmVnYWRhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzTG9hZGluZyAtIEFkaWNpb25hICh0cnVlKSBvdSByZW1vdmUgKGZhbHNlKSBvIGJhY2tkcm9wXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+QWN0aW9ufSBBw6fDo28gYSBzZXIgZGVzcGFjaGFkYVxuICovXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZyA9IChrZXksIGlzTG9hZGluZykgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9MT0FESU5HLFxuICAgIGtleSxcbiAgICBpc0xvYWRpbmdcbn0pO1xuXG4vKipcbiAqIEluaWNpYSB1bWEgbm92YSBzZXNzw6NvIGRlIGphbmVsYXMgZSDDrWNvbmVzLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBEYWRvcyBkYSBub3ZhIHNlc3PDo28gYSBzZXIgaW5pY2lhZGFcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvV2luZG93fldpbmRvd0RhdGFbXX0gZGF0YS53aW5kb3dzIC0gSmFuZWxhIGEgc2VyZW0gYWJlcnRhcyBubyBpbsOtY2lvIGRhIHNlc3PDo29cbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0NvbXBvbmVudHMvRGVza3RvcH5JY29uRGF0YVtdfSBkYXRhLmljb25zIC0gw41jb25lcyBhIHNlcmVtIG1vc3RyYWRvcyBubyBEZXNrdG9wXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35PcHRpb25zfSBkYXRhLm9wdGlvbnMgLSBPcMOnw7VlcyBkYSBhcGxpY2HDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERhdGEgPSAoZGF0YSA9IHsgaWNvbnM6IFtdLCB3aW5kb3dzOiBbXSwgb3B0aW9uczoge30gfSkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9EQVRBLFxuICAgIGRhdGFcbn0pO1xuXG4vKipcbiAqIEFsdGVyYSBvIHJvZGFww6kgZGEgamFuZWxhLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgLSBDaGF2ZSBkYSBqYW5lbGEgYSBzZXIgYWx0ZXJhZGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb290ZXIgLSBNZW5zYWdlbSBkZSByb2RhcMOpIGRhIGphbmVsYVxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvb3RlciA9IChrZXksIGZvb3RlcikgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNFVF9GT09URVIsXG4gICAga2V5LFxuICAgIGZvb3RlclxufSk7XG5cbi8qKlxuICogTW9zdHJhIGEgYmFycmEgZGUgdGFyZWZhc1xuICogQG1ldGhvZFxuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkFjdGlvbn0gQcOnw6NvIGEgc2VyIGRlc3BhY2hhZGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dUYXNrYmFyID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlLlNIT1dfVEFTS0JBUlxufSk7XG5cbi8qKlxuICogRXNjb25kZSBhIGJhcnJhIGRlIHRhcmVmYXNcbiAqIEBtZXRob2RcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35BY3Rpb259IEHDp8OjbyBhIHNlciBkZXNwYWNoYWRhXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlVGFza2JhciA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZS5ISURFX1RBU0tCQVJcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kRGVza3RvcFByb3BzXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL0Rlc2t0b3B+SWNvbkRhdGFbXX0gaWNvbnMgw41jb25lcyBkbyBEZXNrdG9wXG4gKiBAcHJvcGVydHkge21vZHVsZTpGZW5lc3RyYS9Db21wb25lbnRzL1dpbmRvd35XaW5kb3dTdGF0ZVtdfSB3aW5kb3dzIEphbmVsYXMgZG8gRGVza3RvcFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+T3B0aW9uc30gb3B0aW9ucyBPcMOnw7VlcyBkYSBhcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc01heGltaXplZCBEZXRlcm1pbmEgc2UgaMOhIGFsZ3VtYSBqYW5lbGEgbWF4aW1pemFkYSBlIGF0aXZhXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTW92aW5nIERldGVybWluYSBzZSBow6EgYWxndW1hIGphbmVsYSBlbSBtb3ZpbWVudG9cbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZG8gRGVza3RvcCBwYXJhIGVzdGFkb3MgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9SZWR1Y2Vyc35TdGF0ZX0gc3RhdGUgRXN0YWRvIGRhIEFwbGljYcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmREZXNrdG9wUHJvcHN9IE1hcGVhbWVudG8gRXN0YWRvL1Byb3ByaWVkYWRlXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BQcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaWNvbnM6IHN0YXRlLmZlbmVzdHJhLmljb25zLFxuICAgIHdpbmRvd3M6IHN0YXRlLmZlbmVzdHJhLndpbmRvd3MsXG4gICAgb3B0aW9uczogc3RhdGUuZmVuZXN0cmEub3B0aW9ucyxcbiAgICBpc01heGltaXplZDogc3RhdGUuZmVuZXN0cmEud2luZG93cy5zb21lKHdpbmRvdyA9PiB3aW5kb3cucHJvcHMuYWN0aXZlICYmIHdpbmRvdy5wcm9wcy5tYXhpbWl6ZWQpLFxuICAgIGlzTW92aW5nOiBzdGF0ZS5mZW5lc3RyYS50cmFuc2Zvcm1UeXBlICE9PSBudWxsICYmIHN0YXRlLmZlbmVzdHJhLnRyYW5zZm9ybUtleSAhPT0gbnVsbFxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQm91bmREZXNrdG9wQWN0aW9uc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3BlbiBBYnJlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1pbmltaXplIE1pbmltaXphIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1heGltaXplICBNYXhpbWl6YSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzdGFydE1vdmUgSW5pY2lhIG8gbW92aW1lbnRvIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0UmVzaXplIEluaWNpYSBvIHJlZGltZW5zaW9uYW1lbnRvIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1vdmUgTW92ZS9SZWRpbWVuc2lvbmEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGVuZE1vdmUgRmluYWxpemEgYSB0cmFuc2Zvcm1hw6fDo28gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjbG9zZSBGZWNoYSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRMb2FkaW5nIEFsdGVyYSBvIGJhY2tkcm9wIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldEZvb3RlciAgQWx0ZXJhIG8gcm9kYXDDqSBkZSB1bWEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXREYXRhIFJlaW5pY2lhIGEgc2Vzc8OjbyBjb20gbm92b3Mgw61jb25lcyBlIGphbmVsYXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNob3dUYXNrYmFyIE1vc3RyYSBhIGJhcnJhIGRlIHRhcmVmYXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGhpZGVUYXNrYmFyIEVzY29uZGUgYSBiYXJyYSBkZSB0YXJlZmFzXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIERlc2t0b3AgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkZSBBw6fDtWVzXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmREZXNrdG9wQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZERlc2t0b3BBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvcGVuOiAocHJvcHMsIHRlbXBsYXRlLCB0ZW1wbGF0ZVByb3BzKSA9PiBkaXNwYXRjaChvcGVuKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykpLFxuICAgIGFjdGl2YXRlOiAoa2V5LCBhY3RpdmUgPSB0cnVlKSA9PiBkaXNwYXRjaChhY3RpdmF0ZShrZXksIGFjdGl2ZSkpLFxuICAgIG1pbmltaXplOiAoa2V5LCBtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAoa2V5LCBtYXggPSB0cnVlKSA9PiBkaXNwYXRjaChtYXhpbWl6ZShrZXksIG1heCkpLFxuICAgIHN0YXJ0TW92ZTogKGtleSwgeCwgeSkgPT4gZGlzcGF0Y2goc3RhcnRUcmFuc2Zvcm0oa2V5LCB4LCB5LCBUUkFOU0ZPUk1fTU9WRSkpLFxuICAgIHN0YXJ0UmVzaXplOiAoa2V5LCB4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBtb3ZlOiAoeCwgeSkgPT4gZGlzcGF0Y2godHJhbnNmb3JtKHgsIHkpKSxcbiAgICBlbmRNb3ZlOiAoKSA9PiBkaXNwYXRjaChlbmRUcmFuc2Zvcm0oKSksXG4gICAgY2xvc2U6IChrZXkpID0+IGRpc3BhdGNoKGNsb3NlKGtleSkpLFxuICAgIHNldExvYWRpbmc6IChrZXksIGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChrZXksIGZvb3RlciA9IFwiXCIpID0+IGRpc3BhdGNoKHNldEZvb3RlcihrZXksIGZvb3RlcikpLFxuICAgIHNldERhdGE6IGRhdGEgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSksXG4gICAgc2hvd1Rhc2tiYXI6ICgpID0+IGRpc3BhdGNoKHNob3dUYXNrYmFyKCkpLFxuICAgIGhpZGVUYXNrYmFyOiAoKSA9PiBkaXNwYXRjaChoaWRlVGFza2JhcigpKSxcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kVGFza2JhckFjdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFjdGl2YXRlIEF0aXZhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGhpZGVUYXNrYmFyIEVzY29uZGUgYSBiYXJyYSBkZSBUYXJlZmFzXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRhIEJhcnJhIGRlIFRhcmVmYXMgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35EaXNwYXRjaGVyfSBkaXNwYXRjaCBEZXNwYWNoYW50ZSBkZSBBw6fDtWVzXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmRUYXNrYmFyQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZFRhc2tiYXJBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhY3RpdmF0ZTogKGtleSwgYWN0aXZlID0gdHJ1ZSkgPT4gZGlzcGF0Y2goYWN0aXZhdGUoa2V5LCBhY3RpdmUpKSxcbiAgICBoaWRlVGFza2JhcjogKCkgPT4gZGlzcGF0Y2goaGlkZVRhc2tiYXIoKSlcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gQm91bmRUZW1wbGF0ZUFjdGlvbnMgQcOnw7VlcyBkbyBUZW1wbGF0ZSBjb25lY3RhZGFzIGFvIHJlZHV4XG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRhIEHDp8Ojb1xuICogQHJldHVybnMge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zflRlbXBsYXRlQWN0aW9uc31cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRlbXBsYXRlQWN0aW9ucyBBw6fDtWVzIGRvIHRlbXBsYXRlIGRlIGNvbnRlw7pkbyBkYSBqYW5lbGEuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcGVuIEFicmUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gYWN0aXZhdGUgQXRpdmEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWluaW1pemUgTWluaW1pemEgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbWF4aW1pemUgIE1heGltaXphIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNsb3NlIEZlY2hhIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldExvYWRpbmcgQWx0ZXJhIG8gYmFja2Ryb3AgZGUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0Rm9vdGVyICBBbHRlcmEgbyByb2RhcMOpIGRlIHVtYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldERhdGEgUmVpbmljaWEgYSBzZXNzw6NvIGNvbSBub3ZvcyDDrWNvbmVzIGUgamFuZWxhc1xuICogXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIFRlbXBsYXRlIGRlIGNvbnRlw7pkbyBkYSBKYW5lbGEgcGFyYSBvIGRlc3BhY2hhbnRlIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgaWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFRlbXBsYXRlQWN0aW9uc30gTWFwZWFtZW50byBkYXMgUHJvcHJpZWRhZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZFRlbXBsYXRlQWN0aW9ucyA9IChrZXkpID0+IGRpc3BhdGNoID0+ICh7XG4gICAgb3BlbjogKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogKGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSksXG4gICAgbWluaW1pemU6IChtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAobWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBjbG9zZTogKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogKGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChmb290ZXIgPSBudWxsKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiAoZGF0YSkgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gQm91bmRXaW5kb3dBY3Rpb25zIEHDp8O1ZXMgZGEgSmFuZWxhIGNvbmVjdGFkYXMgYW8gcmVkdXhcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+RGlzcGF0Y2hlcn0gZGlzcGF0Y2ggRGVzcGFjaGFudGUgZGEgQcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+V2luZG93QWN0aW9uc31cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd0FjdGlvbnMgQcOnw7VlcyBkYSBqYW5lbGEuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcGVuIEFicmUgdW1hIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gYWN0aXZhdGUgQXRpdmEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG1pbmltaXplIE1pbmltaXphIGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBtYXhpbWl6ZSAgTWF4aW1pemEgYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHN0YXJ0TW92ZSBJbmljaWEgbyBtb3ZpbWVudG8gZGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzdGFydFJlc2l6ZSBJbmljaWEgbyByZWRpbWVuc2lvbmFtZW50byBkYSBqYW5lbGFcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNsb3NlIEZlY2hhIGEgamFuZWxhXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRMb2FkaW5nIEFsdGVyYSBvIGJhY2tkcm9wIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0Rm9vdGVyICBBbHRlcmEgbyByb2RhcMOpIGRhIGphbmVsYVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0RGF0YSBSZWluaWNpYSBhIHNlc3PDo28gY29tIG5vdm9zIMOtY29uZXMgZSBqYW5lbGFzXG4gKiBcbiAqL1xuXG4vKipcbiAqIE1hcGVpYSBhcyBwcm9wcmllZGFkZXMgZGEgSmFuZWxhIHBhcmEgbyBkZXNwYWNoYW50ZSBkYSBhcGxpY2HDp8Ojby5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfldpbktleX0ga2V5IGlkZW50aWZpY2Fkb3IgZGEgSmFuZWxhXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+Qm91bmRXaW5kb3dBY3Rpb25zfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kV2luZG93QWN0aW9ucyA9IChrZXkpID0+IGRpc3BhdGNoID0+ICh7XG4gICAgb3BlbjogKHByb3BzLCB0ZW1wbGF0ZSwgdGVtcGxhdGVQcm9wcykgPT4gZGlzcGF0Y2gob3Blbihwcm9wcywgdGVtcGxhdGUsIHRlbXBsYXRlUHJvcHMpKSxcbiAgICBhY3RpdmF0ZTogKGFjdGl2ZSA9IHRydWUpID0+IGRpc3BhdGNoKGFjdGl2YXRlKGtleSwgYWN0aXZlKSksXG4gICAgbWluaW1pemU6IChtaW4gPSB0cnVlKSA9PiBkaXNwYXRjaChtaW5pbWl6ZShrZXksIG1pbikpLFxuICAgIG1heGltaXplOiAobWF4ID0gdHJ1ZSkgPT4gZGlzcGF0Y2gobWF4aW1pemUoa2V5LCBtYXgpKSxcbiAgICBzdGFydE1vdmU6ICh4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9NT1ZFKSksXG4gICAgc3RhcnRSZXNpemU6ICh4LCB5KSA9PiBkaXNwYXRjaChzdGFydFRyYW5zZm9ybShrZXksIHgsIHksIFRSQU5TRk9STV9SRVNJWkUpKSxcbiAgICBjbG9zZTogKCkgPT4gZGlzcGF0Y2goY2xvc2Uoa2V5KSksXG4gICAgc2V0TG9hZGluZzogKGlzTG9hZGluZyA9IHRydWUpID0+IGRpc3BhdGNoKHNldExvYWRpbmcoa2V5LCBpc0xvYWRpbmcpKSxcbiAgICBzZXRGb290ZXI6IChmb290ZXIgPSBudWxsKSA9PiBkaXNwYXRjaChzZXRGb290ZXIoa2V5LCBmb290ZXIpKSxcbiAgICBzZXREYXRhOiAoZGF0YSkgPT4gZGlzcGF0Y2goc2V0RGF0YShkYXRhKSlcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd1Byb3BzIEHDp8O1ZXMgZGEgamFuZWxhLlxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0xvYWRpbmcgRGV0ZXJtaW5hIHNlIGEgamFuZWxhIGVzdMOhIGNvbSBiYWNrZHJvcCBkZSBjYXJyZWdhbWVudG9cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzfk9wdGlvbnN9IG9wdGlvbnMgT3DDp8O1ZXMgZGEgYXBsaWNhw6fDo29cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gQm91bmRXaW5kb3dQcm9wcyBQcm9wcmllZGFkZXMgZGEgSmFuZWxhIGNvbmVjdGFkYXMgYW8gcmVkdXhcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+RGlzcGF0Y2hlcn0gZGlzcGF0Y2ggRGVzcGFjaGFudGUgZGEgQcOnw6NvXG4gKiBAcmV0dXJucyB7bW9kdWxlOkZlbmVzdHJhL0FjdGlvbnN+V2luZG93UHJvcHN9XG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRhIEphbmVsYSBwYXJhIG8gRXN0YWRvIGRhIGFwbGljYcOnw6NvLlxuICogQG1ldGhvZFxuICogQHBhcmFtIHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+V2luS2V5fSBrZXkgaWRlbnRpZmljYWRvciBkYSBKYW5lbGFcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFdpbmRvd1Byb3BzfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kV2luZG93UHJvcHMgPSAoa2V5KSA9PiBzdGF0ZSA9PiAoe1xuICAgIGlzTG9hZGluZzogc3RhdGUuZmVuZXN0cmEud2luZG93cy5maW5kKHdpbmRvdyA9PiB3aW5kb3cua2V5ID09PSBrZXkpLmlzTG9hZGluZyxcbiAgICBvcHRpb25zOiBzdGF0ZS5mZW5lc3RyYS5vcHRpb25zLFxufSk7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQm91bmRJY29uQWN0aW9uc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3Blbkljb24gQWJyZSB1bWEgbm92YSBqYW5lbGEgY29ycmVzcG9uZGVudGUgYW8gw61jb25lXG4gKi9cblxuLyoqXG4gKiBNYXBlaWEgYXMgcHJvcHJpZWRhZGVzIGRvIMOtY29uZSBwYXJhIG8gZGVzcGFjaGFudGUgZGEgYXBsaWNhw6fDo28uXG4gKiBAbWV0aG9kXG4gKiBAcGFyYW0ge21vZHVsZTpGZW5lc3RyYS9BY3Rpb25zfkRpc3BhdGNoZXJ9IGRpc3BhdGNoIERlc3BhY2hhbnRlIGRlIEHDp8O1ZXNcbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZEljb25BY3Rpb25zfSBNYXBlYW1lbnRvIGRhcyBQcm9wcmllZGFkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kSWNvbkFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9wZW5JY29uOiAoaWNvbikgPT4gaWNvbi53aW5kb3cgPyBkaXNwYXRjaChvcGVuKGljb24ud2luZG93LnByb3BzLCBpY29uLndpbmRvdy50ZW1wbGF0ZSwgaWNvbi53aW5kb3cudGVtcGxhdGVQcm9wcykpIDogZmFsc2Vcbn0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kVGFza2JhclByb3BzIFxuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvUmVkdWNlcnN+T3B0aW9uc30gb3B0aW9ucyBPcMOnw7VlcyBkYSBhcGxpY2HDp8Ojb1xuICogQHByb3BlcnR5IHttb2R1bGU6RmVuZXN0cmEvQ29tcG9uZW50cy9XaW5kb3d+V2luZG93U3RhdGVbXX0gd2luZG93cyBKYW5lbGFzIGRvIERlc2t0b3BcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOkZlbmVzdHJhL01lc3NhZ2Vzfk1lc3NhZ2VzfSBtc2dzIEphbmVsYXMgZG8gRGVza3RvcFxuICovXG5cbi8qKlxuICogTWFwZWlhIGFzIHByb3ByaWVkYWRlcyBkYSBCYXJyYSBkZSBUYXJlZmFzIHBhcmEgZXN0YWRvcyBkYSBhcGxpY2HDp8Ojby5cbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7bW9kdWxlOkZlbmVzdHJhL1JlZHVjZXJzflN0YXRlfSBzdGF0ZSBFc3RhZG8gZGEgQXBsaWNhw6fDo29cbiAqIEByZXR1cm5zIHttb2R1bGU6RmVuZXN0cmEvQWN0aW9uc35Cb3VuZFRhc2tiYXJQcm9wc30gTWFwZWFtZW50byBFc3RhZG8vUHJvcHJpZWRhZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kVGFza2JhclByb3BzID0gc3RhdGUgPT4gKHtcbiAgICBvcHRpb25zOiBzdGF0ZS5mZW5lc3RyYS5vcHRpb25zLFxuICAgIHdpbmRvd3M6IHN0YXRlLmZlbmVzdHJhLndpbmRvd3MsXG4gICAgbXNnczogc3RhdGUuZmVuZXN0cmEubXNnc1xufSk7Il19