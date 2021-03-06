/**
 * Módulo de Ações para redução do Store do Redux.
 * @module Fenestra/Actions 
 * @see module:Fenestra/Reducers
 */

/**
 * @typedef {Object} Action - Ação a ser despachada pelo Redux
 * @property {module:Fenestra/Actions/Types~ActionType} type - Tipo da Ação
 */

/**
 * @typedef {function} Dispatcher
 * @param {module:Fenestra/Actions~Action} action Ação a ser despachada
 */

import * as actionType from './types';

import {
    TRANSFORM_MOVE,
    TRANSFORM_RESIZE
} from './types';

/** Largura Padrão da janela */
export const DEFAULT_WIDTH = 300;

/** Altura Padrão da janela */
export const DEFAULT_HEIGHT = 200;

/** @constant {module:Fenestra/Components/Window~WindowProps} DEFAULT_PROPS Propriedades padrão de uma nova janela */
export const DEFAULT_PROPS = {
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
export const setOptions = (options) => {
    return {
        type: actionType.SET_OPTIONS,
        options
    }
}

/**
 * Abre uma nova janela.
 * @method
 * @param {module:Fenestra/Components/Window~WindowProps} props - Propriedades da nova janela 
 * @param {*} template - Template a ser injetado no conteúdo da janela
 * @param {*} templateProps - Propriedades a serem injetadas no Template
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const open = (props = DEFAULT_PROPS, template = () => null, templateProps = {}) => {
    const action = {
        type: actionType.WINDOW_OPEN,
        props: {
            ...DEFAULT_PROPS,
            ...props
        },
        template,
        templateProps
    };
    return action;
}

/**
 * Fecha a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser fechada
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const close = (key) => {
    return {
        type: actionType.WINDOW_CLOSE,
        key
    }
}

/**
 * Ativa/Desativa a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser ativada/desativada
 * @param {boolean} active - Ativar (true) ou Desativar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const activate = (key, active) => {
    return {
        type: actionType.WINDOW_ACTIVATE,
        key,
        active
    }
}

/**
 * Minimiza/Deminimiza a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser minimizada/deminimizada
 * @param {boolean} minimize - Minimizar (true) ou Deminimizar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const minimize = (key, minimize) => {
    return {
        type: actionType.WINDOW_MINIMIZE,
        key,
        minimize
    }
}

/**
 * Maximiza/Demaximiza a janela
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser maximizada/demaximizada
 * @param {boolean} maximize - Maximizar (true) ou Demaximizar (false)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const maximize = (key, maximize) => {
    return {
        type: actionType.WINDOW_MAXIMIZE,
        key,
        maximize
    }
}

/**
 * Inicia uma transformação de movimentação ou redimensionamento de uma janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser movimentada/redimensionada
 * @param {number} x - Posição X onde iniciou a transformação
 * @param {number} y - Posição Y onde iniciou a transformação
 * @param {module:Fenestra/Actions/Types~TransformType} transformType - Tipo de transformação (TRANSFORM_MOVE ou TRANSFORM_RESIZE)
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const startTransform = (key, x, y, transformType) => {
    return {
        type: actionType.WINDOW_START_TRANSFORM,
        key,
        x,
        y,
        transformType
    }
}

/**
 * Movimenta ou redimensiona a janela.
 * @method
 * @param {number} x - Posição X onde acontece a transformação
 * @param {number} y - Posição Y onde acontece a transformação
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const transform = (x, y) => {
    return {
        type: actionType.WINDOW_TRANSFORM,
        x,
        y
    }
}

/**
 * Finaliza a transformação da janela.
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const endTransform = () => {
    return {
        type: actionType.WINDOW_END_TRANSFORM,
    }
}

/**
 * Adiciona/Remove o backdrop de carregamento da janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser carregada
 * @param {boolean} isLoading - Adiciona (true) ou remove (false) o backdrop
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const setLoading = (key, isLoading) => ({
    type: actionType.SET_LOADING,
    key,
    isLoading
});

/**
 * Inicia uma nova sessão de janelas e ícones.
 * @method
 * @param {Object} data - Dados da nova sessão a ser iniciada
 * @param {module:Fenestra/Components/Window~WindowData[]} data.windows - Janela a serem abertas no início da sessão
 * @param {module:Fenestra/Components/Desktop~IconData[]} data.icons - Ícones a serem mostrados no Desktop
 * @param {module:Fenestra/Reducers~Options} data.options - Opções da aplicação
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const setData = (data = { icons: [], windows: [], options: {} }) => ({
    type: actionType.SET_DATA,
    data
});

/**
 * Altera o rodapé da janela.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key - Chave da janela a ser alterada
 * @param {string} footer - Mensagem de rodapé da janela
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const setFooter = (key, footer) => ({
    type: actionType.SET_FOOTER,
    key,
    footer
});

/**
 * Mostra a barra de tarefas
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const showTaskbar = () => ({
    type: actionType.SHOW_TASKBAR
});

/**
 * Esconde a barra de tarefas
 * @method
 * @returns {module:Fenestra/Actions~Action} Ação a ser despachada
 */
export const hideTaskbar = () => ({
    type: actionType.HIDE_TASKBAR
});

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
export const boundDesktopProps = state => ({
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    options: state.fenestra.options,
    isMaximized: state.fenestra.windows.some(window => window.props.active && window.props.maximized),
    isMoving: state.fenestra.transformType !== null && state.fenestra.transformKey !== null
});

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
export const boundDesktopActions = dispatch => ({
    open: (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    activate: (key, active = true) => dispatch(activate(key, active)),
    minimize: (key, min = true) => dispatch(minimize(key, min)),
    maximize: (key, max = true) => dispatch(maximize(key, max)),
    startMove: (key, x, y) => dispatch(startTransform(key, x, y, TRANSFORM_MOVE)),
    startResize: (key, x, y) => dispatch(startTransform(key, x, y, TRANSFORM_RESIZE)),
    move: (x, y) => dispatch(transform(x, y)),
    endMove: () => dispatch(endTransform()),
    close: (key) => dispatch(close(key)),
    setLoading: (key, isLoading = true) => dispatch(setLoading(key, isLoading)),
    setFooter: (key, footer = "") => dispatch(setFooter(key, footer)),
    setData: data => dispatch(setData(data)),
    showTaskbar: () => dispatch(showTaskbar()),
    hideTaskbar: () => dispatch(hideTaskbar()),
});

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
export const boundTaskbarActions = dispatch => ({
    activate: (key, active = true) => dispatch(activate(key, active)),
    hideTaskbar: () => dispatch(hideTaskbar())
});

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
export const boundTemplateActions = (key) => dispatch => ({
    open: (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    activate: (active = true) => dispatch(activate(key, active)),
    minimize: (min = true) => dispatch(minimize(key, min)),
    maximize: (max = true) => dispatch(maximize(key, max)),
    close: () => dispatch(close(key)),
    setLoading: (isLoading = true) => dispatch(setLoading(key, isLoading)),
    setFooter: (footer = null) => dispatch(setFooter(key, footer)),
    setData: (data) => dispatch(setData(data))
});

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
export const boundWindowActions = (key) => dispatch => ({
    open: (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    activate: (active = true) => dispatch(activate(key, active)),
    minimize: (min = true) => dispatch(minimize(key, min)),
    maximize: (max = true) => dispatch(maximize(key, max)),
    startMove: (x, y) => dispatch(startTransform(key, x, y, TRANSFORM_MOVE)),
    startResize: (x, y) => dispatch(startTransform(key, x, y, TRANSFORM_RESIZE)),
    close: () => dispatch(close(key)),
    setLoading: (isLoading = true) => dispatch(setLoading(key, isLoading)),
    setFooter: (footer = null) => dispatch(setFooter(key, footer)),
    setData: (data) => dispatch(setData(data))
});

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
export const boundWindowProps = (key) => state => ({
    isLoading: state.fenestra.windows.find(window => window.key === key).isLoading,
    options: state.fenestra.options,
});

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
export const boundIconActions = dispatch => ({
    openIcon: (icon) => icon.window ? dispatch(open(icon.window.props, icon.window.template, icon.window.templateProps)) : false
});

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
export const boundTaskbarProps = state => ({
    options: state.fenestra.options,
    windows: state.fenestra.windows,
    msgs: state.fenestra.msgs
});


export default {
    open,
    close,
    activate,
    minimize,
    maximize,
    startTransform,
    transform,
    endTransform,
    setOptions,
    setFooter,
    setData,
    showTaskbar,
    hideTaskbar,
    setLoading
}