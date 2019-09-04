/**
 * Módulo de Ações para redução do Store do Redux.
 * @module Fenestra/PropTypes 
 * @see module:Fenestra/Components
 */

import PropTypes from 'prop-types';

/**
 * @typedef {Object} PropTypes Restrição das propriedades dos componentes React
 */

/**
 * @constant {object} windowPropTypes Definição das propriedades do componente Janela.
 * @property {PropTypes} props Propriedades da janela
 * @property {PropTypes} template Template da janela
 * @property {PropTypes} templateProps Propriedades do Template da janela
 */
export const windowPropTypes = PropTypes.shape({
    props: PropTypes.shape({
        style: PropTypes.object
    }),
    template: PropTypes.elementType,
    templateProps: PropTypes.object
});

/**
 * @constant {object} iconPropTypes Definição das propriedades do componente Ícone.
 * @property {PropTypes} icon Classe CSS correspondente ao ícone
 * @property {PropTypes} title Título do ícone
 * @property {PropTypes} window Janela a ser aberta pelo ícone
 */
export const iconPropTypes = PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    window: windowPropTypes
});

/**
 * @constant {object} windowStatePropTypes Definição das propriedades de uma Janela-Estado.
 * @property {PropTypes} key Chave da Janela
 * @property {PropTypes} props Propriedades da janela
 * @property {PropTypes} component Componente da Janela
 * @property {PropTypes} content Conteúdo da janela
 * 
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
 * @constant {object} taskbarPropTypes Definição das propriedades do componente Barra de Tarefas.
 * @property {PropTypes} windows Janelas abertas no desktop
 * @property {PropTypes} options Opções da aplicação
 * @property {PropTypes} activate Função de ativação de uma janela
 */
export const taskbarPropTypes = {
    windows: PropTypes.arrayOf(windowStatePropTypes),
    options: PropTypes.object,
    activate: PropTypes.func
};

/**
 * @constant {object} appPropTypes Definição das propriedades da Aplicação Fenestra.
 * @property {PropTypes} data Dados de inicialização da aplicação
 */
export const appPropTypes = {
    data: PropTypes.shape({
        windows: PropTypes.arrayOf(
            windowPropTypes
        ),
        icons: PropTypes.arrayOf(
            iconPropTypes
        ),
        options: PropTypes.object,
        msg: PropTypes.object
    })
}