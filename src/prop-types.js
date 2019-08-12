import PropTypes from 'prop-types';



export const windowPropTypes = PropTypes.shape({
    props: PropTypes.shape({
        style: PropTypes.object
    }),
    template: PropTypes.elementType,
    templateProps: PropTypes.object
});

export const iconPropTypes = PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    window: windowPropTypes   
});

export const windowStatePropTypes = PropTypes.shape({
    key: PropTypes.number,
    props: PropTypes.shape({
        style: PropTypes.object
    }),
    component: PropTypes.elementType,
    content: PropTypes.element
});

export const taskbarPropTypes = {
    windows: PropTypes.arrayOf(windowStatePropTypes),
    activate: PropTypes.func
};

export const appPropTypes = {
    data: PropTypes.shape({
        windows: PropTypes.arrayOf(
            windowPropTypes
        ),
        icons: PropTypes.arrayOf(
            iconPropTypes
        ), 
        store: PropTypes.object                    
    })
}