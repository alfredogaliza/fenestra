import React from 'react';
import { connect } from 'react-redux';

import * as types from '../actions/types';

import { bindWindow } from '../components/Window';

import {
    TRANSFORM_MOVE,
    TRANSFORM_RESIZE,
    DEFAULT_PROPS,
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT
} from '../actions';

import { boundTemplateActions } from 'fenestra/dist/actions';

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
    transformType: null
}

const EmptyTemplate = () => <span />;

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
        component: bindWindow(key),
        content: <Template {...templateProps} />
    };
    
}

const fenestraReducer = (state = initialState, action) => {

    var newState = { ...state };
    var target = null;

    if (action.type === types.WINDOW_TRANSFORM && state.transformKey === null) return state;

    switch (action.type) {
        case types.WINDOW_OPEN:

            const key = newState.winKey++;
            const window = newWindow(key, action.props, action.template, action.templateProps);

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
            if (!global.window) break;
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

        case types.WINDOW_MINIMIZE_ALL:
            newState.windows = newState.windows.map(window => {
                window.props.minimized = true;
                window.props.active = false;
                return window;
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

        case types.SET_DATA:
            var winKey = 0;
            const icons = action.data.icons;
            const windows = action.data.windows.map(window => {
                return newWindow(winKey++, window.props, window.template, window.templateProps);
            });

            newState = {
                ...initialState,
                winKey,
                icons,
                windows
            };
            break;

        default:
            break;
    }

    return newState;

}

export default fenestraReducer;