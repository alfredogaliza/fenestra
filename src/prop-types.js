import PropTypes from 'prop-types';

/**
 * @constant {PropTypes} windowPropTypes Definição das propriedades do componente Janela.
 */
export const windowPropTypes = PropTypes.shape({
    props: PropTypes.shape({
        style: PropTypes.object
    }),
    template: PropTypes.elementType,
    templateProps: PropTypes.object
});

/**
 * @constant {PropTypes} iconPropTypes Definição das propriedades do componente Ícone.
 */
export const iconPropTypes = PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    window: windowPropTypes   
});

/**
 * @constant {PropTypes} windowStatePropTypes Definição das propriedades de uma Janela-Estado.
 */
export const windowStatePropTypes = PropTypes.shape({
    key: PropTypes.number,
    props: PropTypes.shape({
        style: PropTypes.object
    }),
    component: PropTypes.elementType,
    content: PropTypes.element
});

/**
 * @constant {PropTypes} taskbarPropTypes Definição das propriedades do componente Barra de Tarefas.
 */
export const taskbarPropTypes = {
    windows: PropTypes.arrayOf(windowStatePropTypes),
    activate: PropTypes.func
};

/**
 * @constant {PropTypes} appPropTypes Definição das propriedades da Aplicação Fenestra.
 */
export const appPropTypes = {
    data: PropTypes.shape({
        windows: PropTypes.arrayOf(
            windowPropTypes
        ),
        icons: PropTypes.arrayOf(
            iconPropTypes
        )
    })
}