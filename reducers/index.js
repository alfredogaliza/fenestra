import React from 'react';
import { connect } from 'react-redux';

import * as actionType from '../actions/types';
import WindowTemplate from '../components/WindowTemplate';
import { boundWindowActions, TRANSFORM_MOVE, TRANSFORM_RESIZE, DEFAULT_PROPS } from '../actions';

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

function newWindow(key, props, template, templateProps) {

    const Content = connect(undefined, boundWindowActions(key))(template);

    return {
        key,
        props: {
            ...DEFAULT_PROPS,
            ...props,
            style: {
                ...DEFAULT_PROPS.style,
                ...props.style,
                top: (key % 10) * 50 + 10,
                left: (key % 10) * 50 + 10
            }
        },
        component: WindowTemplate(key),
        content: <Content {...templateProps} />
    };
}

const reducer = (state = initialState, action) => {

    var newState = { ...state };
    var target = null;

    if (action.type === actionType.WINDOW_TRANSFORM && state.transformKey === null) return state;

    switch (action.type) {
        case actionType.WINDOW_OPEN:

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
        case actionType.WINDOW_CLOSE:
            newState.windows = newState.windows.filter(window => window.key !== action.key);
            break;

        case actionType.WINDOW_ACTIVATE:
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                props.active = (window.key === action.key);
                props.style.zIndex = (window.key === action.key) ? 2 : 1;
                return { ...window, props };
            });
            break;

        case actionType.WINDOW_MINIMIZE:
            newState.windows = newState.windows.map(window => {
                if (window.key === action.key && window.props.minimizeable){
                    window.props.active = !action.minimize;
                    window.props.minimized = action.minimize;
                }
                return window;
            });            
            break;
        case actionType.WINDOW_MAXIMIZE:
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                props.active = (window.key === action.key);
                props.minimized = (window.key === action.key) ? false : window.props.minimized;
                props.maximized = (window.key === action.key && window.props.resizeable) ? action.maximize : window.props.maximized;
                props.style.zIndex = (window.key === action.key) ? 2 : 1;
                return { ...window, props };
            });
            break;        
        case actionType.WINDOW_START_TRANSFORM:
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

        case actionType.WINDOW_TRANSFORM:
            newState.windows = newState.windows.map(window => {
                var props = { ...window.props, style: { ...window.props.style } };
                if (window.key === newState.transformKey) {
                    if (newState.transformType === TRANSFORM_MOVE) {
                        const dx = newState.startLeft + action.x - newState.startX;
                        const dy = newState.startTop + action.y - newState.startY;
                        props.style.top = Math.min(Math.max(0, dy), global.window.innerHeight - props.style.height - 50);
                        props.style.left = Math.min(Math.max(0, dx), global.window.innerWidth - props.style.width);
                    } else if (newState.transformType === TRANSFORM_RESIZE) {
                        const dx = newState.startWidth + action.x - newState.startX;
                        const dy = newState.startHeight + action.y - newState.startY;
                        props.style.height = Math.min(Math.max(300, dy), global.window.innerHeight - props.style.top - 50);
                        props.style.width = Math.min(Math.max(400, dx), global.window.innerWidth - props.style.left);
                    }
                }
                return { ...window, props: { ...props, style: {...props.style} } };
            });
            break;

        case actionType.WINDOW_MINIMIZE_ALL:
            newState.windows = newState.windows.map(window => {
                window.props.minimized = true;
                window.props.active = false;
                return window;
            });
            break;

        case actionType.WINDOW_END_TRANSFORM:
            newState.transformKey = null;
            break;

        case actionType.SET_FOOTER:
            newState.windows = newState.windows.map(window => {
                if (window.key === action.key) {
                    window.props.footer = action.footer;
                }
                return window;
            });
            break;

        case actionType.SET_LOADING:
            var loadingWindow = newState.windows.find(window => window.key === action.key);

            if (loadingWindow) {
                loadingWindow.isLoading = action.isLoading;
            } else {
                newState.isLoading = action.isLoading;
            }

            break;

        case actionType.SET_STATE:
            var winKey = 0;
            const icons = (action.state.icons || []);
            const windows = (action.state.windows || []).map(window => {
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

export default reducer;