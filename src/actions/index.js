import * as actionType from './types';

export const DEFAULT_WIDTH = 300;
export const DEFAULT_HEIGHT = 200;

export const TRANSFORM_MOVE = 1;
export const TRANSFORM_RESIZE = 2;

export const DEFAULT_PROPS = {
    style: {
        top: 0,
        left: 0,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    active: true,
    maximized: false,
    resizeable: true,
    moveable: true,
    minimizeable: true,
    closeable: true,
    minimized: false,
    footer: "",
    title: "Nova Janela"
};

const EmptyTemplate = (props) => null;

export const open = (props = DEFAULT_PROPS, template = EmptyTemplate, templateProps = {}) => {
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

export const close = (key) => {
    return {
        type: actionType.WINDOW_CLOSE,
        key
    }
}

export const activate = (key, active) => {
    return {
        type: actionType.WINDOW_ACTIVATE,
        key, active
    }
}

export const minimize = (key, minimize) => {
    return {
        type: actionType.WINDOW_MINIMIZE,
        key, minimize
    }
}

export const maximize = (key, maximize) => {
    return {
        type: actionType.WINDOW_MAXIMIZE,
        key, maximize
    }
}

export const startTransform = (key, x, y, transformType) => {
    return {
        type: actionType.WINDOW_START_TRANSFORM,
        key, x, y, transformType
    }
}

export const transform = (x, y) => {
    return {
        type: actionType.WINDOW_TRANSFORM,
        x, y
    }
}

export const endTransform = () => {
    return {
        type: actionType.WINDOW_END_TRANSFORM,
    }
}

export const setLoading = (key, isLoading) => ({
    type: actionType.SET_LOADING,
    key, isLoading
});

export const setData = (data = {icons: [], windows: []}) => ({
    type: actionType.SET_DATA,
    data
});

export const setFooter = (key, footer) => ({
    type: actionType.SET_FOOTER,
    key, footer
});

export const boundDesktopProps = state => ({
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    isMaximized: state.fenestra.windows.some(window => window.props.active && window.props.maximized),
    isMoving: state.fenestra.transformType !== null && state.fenestra.transformKey !== null
});

export const boundDesktopActions = dispatch => ({
    open: (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    openIcon: ({ window: { props, template, templateProps } }) => dispatch(open(props, template, templateProps)),
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
    setData: data => dispatch(setData(data))
});

export const boundTaskbarActions = dispatch => ({
    activate: (key, active = true) => dispatch(activate(key, active))
});

export const boundTemplateActions = (key) => dispatch => ({
    open:           (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    activate:       (active = true) => dispatch(activate(key, active)),
    minimize:       (min = true) => dispatch(minimize(key, min)),
    maximize:       (max = true) => dispatch(maximize(key, max)),
    close:          () => dispatch(close(key)),
    setLoading:     (isLoading = true) => dispatch(setLoading(key, isLoading)),
    setFooter:      (footer = null) => dispatch(setFooter(key, footer)),
    setData:        (data) => dispatch(setData(data))
});

export const boundWindowActions = (key) => dispatch => ({
    open:           (props, template, templateProps) => dispatch(open(props, template, templateProps)),
    activate:       (active = true) => dispatch(activate(key, active)),
    minimize:       (min = true) => dispatch(minimize(key, min)),
    maximize:       (max = true) => dispatch(maximize(key, max)),
    startMove:      (x, y) => dispatch(startTransform(key, x, y, TRANSFORM_MOVE)),
    startResize:    (x, y) => dispatch(startTransform(key, x, y, TRANSFORM_RESIZE)),    
    close:          () => dispatch(close(key)),
    setLoading:     (isLoading = true) => dispatch(setLoading(key, isLoading)),
    setFooter:      (footer = null) => dispatch(setFooter(key, footer)),
    setData:        (data) => dispatch(setData(data))
});

export const boundIconActions = dispatch => ({
    openIcon: (icon) => icon.window? dispatch(open(icon.window.props, icon.window.template, icon.window.templateProps)) : false
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
    setLoading,
    setFooter,
    setData
};