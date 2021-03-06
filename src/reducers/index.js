/**
 * Redutor da Store Redux.
 * 
 * @module Fenestra/Reducers 
 * @see Fenestra/Actions
 * @see Fenestra/Actions/Types
 */

import React from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/types';
import { BoundWindow } from '../components/Window';
import { boundTemplateActions } from '../actions';
import messages from '../messages';

import {
    TRANSFORM_MOVE,
    TRANSFORM_RESIZE
} from '../actions/types';
import {
    DEFAULT_PROPS,
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT
} from '../actions';

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
const initialState = {
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
        msgs: messages
    }
}

/**
 * Template Vazio.
 * @method
 * @returns {null} Componente nulo
 */
const EmptyTemplate = () => null;

/**
 * Cria uma nova janela para ser utilizada pela aplicação Fenestra.
 * @method
 * @param {module:Fenestra/Reducers~WinKey} key Identificador da janela 
 * @param {module:Fenestra/Components/Window~WindowProps} props Propriedades da janela
 * @param {*} template Template a ser inserido na janela
 * @param {*} templateProps  Propriedades do template
 * @returns {module:Fenestra/Components/Window~WindowState} Estado de janela a ser adicionado à Aplicação
 */
function newWindow(key, props = {style: {}}, template = EmptyTemplate, templateProps = {}) {

    const Template = connect(undefined, boundTemplateActions(key))(template);

    const top = (key % 10) * 50 + 10;
    const left = (key % 10) * 50 + 10;

    return {
        key,
        props: {
            ...DEFAULT_PROPS,
            ...props,
            style: {
                ...DEFAULT_PROPS.style,
                ...(props.style || {}),
                top, left
            }
        },
        component: BoundWindow(key),
        content: <Template {...templateProps} />
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
const fenestraReducer = (state = initialState, action) => {

    var newState = { ...state };
    var target = null;

    if (action.type === types.WINDOW_TRANSFORM && state.transformKey === null) return state;

    switch (action.type) {
        case types.WINDOW_OPEN:

            const key = newState.winKey++;
            const props = {
                ...action.props,
                title: (action.props.title || newState.options.msgs.defaultTitle)
            }
            const window = newWindow(key, props, action.template, action.templateProps);

            newState.windows.push(window);

            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                props.active = action.props.active ? (window.key === key) : props.active;
                props.style.zIndex = (window.key === key) ? 2 : 1;
                return { ...window, props };
            });

            break;
        case types.WINDOW_CLOSE:
            newState.windows = newState.windows.filter(window => window.key !== action.key);
            break;

        case types.WINDOW_ACTIVATE:
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                props.active = (window.key === action.key);
                props.style.zIndex = (window.key === action.key) ? 2 : 1;
                return { ...window, props };
            });
            break;

        case types.WINDOW_MINIMIZE:
            newState.windows = newState.windows.map(window => {
                if (window.key === action.key && window.props.minimizeable) {
                    window.props.active = !action.minimize;
                    window.props.minimized = action.minimize;
                }
                if (!action.minimize) {
                    window.props.active = (window.key === action.key && !action.minimize);
                }
                return window;
            });
            break;
        case types.WINDOW_MAXIMIZE:
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                props.active = (window.key === action.key);
                props.minimized = (window.key === action.key) ? false : window.props.minimized;
                props.maximized = (window.key === action.key && window.props.resizeable) ? action.maximize : window.props.maximized;
                props.style.zIndex = (window.key === action.key) ? 2 : 1;
                return { ...window, props };
            });
            break;
        case types.WINDOW_START_TRANSFORM:            
            target = newState.windows.find(window => window.key === action.key);
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
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                if (window.key === newState.transformKey) {
                    const dx = action.x - newState.startX;
                    const dy = action.y - newState.startY;
                    if (newState.transformType === TRANSFORM_MOVE) {
                        props.style.top = Math.max(0, newState.startTop + dy);
                        props.style.left = Math.max(0, newState.startLeft + dx);
                    } else if (newState.transformType === TRANSFORM_RESIZE) {
                        props.style.width = Math.max(DEFAULT_WIDTH, newState.startWidth + dx);
                        props.style.height = Math.max(DEFAULT_HEIGHT, newState.startHeight + dy);
                    }
                }
                return { ...window, props: { ...props, style: { ...props.style } } };
            });
            break;

        case types.WINDOW_END_TRANSFORM:
            newState.transformKey = null;
            newState.transformType = null;
            break;

        case types.SET_FOOTER:
            newState.windows = newState.windows.map(window => {
                if (window.key === action.key) {
                    window.props.footer = action.footer;
                }
                return window;
            });
            break;

        case types.SET_LOADING:
            var loadingWindow = newState.windows.find(window => window.key === action.key);

            if (loadingWindow) {
                loadingWindow.isLoading = action.isLoading;
            } else {
                newState.isLoading = action.isLoading;
            }

            break;
            
        case types.SHOW_TASKBAR:
            return {
                ...newState,
                options: {
                    ...newState.options,
                    showTaskbar: true
                }
            }
        case types.HIDE_TASKBAR:
            return {
                ...newState,
                options: {
                    ...newState.options,
                    showTaskbar: false
                }
            } 
        case types.SET_OPTIONS:
            return {
                ...newState,
                options: {
                    ...newState.options,
                    ...action.options
                }
            }          
        case types.SET_DATA:
            var winKey = 0;
            const icons = (action.data.icons || []);
            const options =  (action.data.options || {msgs: {}});
            const msgs = {
                ...initialState.options.msgs,
                ...options.msgs
            };
            const windows = (action.data.windows || []).map(window => {
                const props = {
                    title: msgs.defaultTitle,
                    ...window.props
                };
                return newWindow(winKey++, props, window.template, window.templateProps);
            });

            newState = {
                ...initialState,
                winKey,
                icons,
                windows,
                options: {
                    ...initialState.options,
                    ...options,
                    msgs: {
                        ...initialState.options.msgs,
                        ...options.msgs
                    }
                }
            };

            break;

        default:
            break;
    }

    return newState;

}

export default fenestraReducer;