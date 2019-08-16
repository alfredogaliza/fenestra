/**
 * @module Fenestra/Components/Taskbar
 */

import React from 'react';
import { connect } from 'react-redux';
import { boundTaskbarActions, boundTaskbarProps } from '../actions';
import { taskbarPropTypes } from '../prop-types';

/**
 * Componente da Barra de Tarefas da Aplicação Fenestra.
 * @extends {React.Component}
 */
class Taskbar extends React.Component {

    /**
     * PropTypes do Componente
     */
    static propTypes = taskbarPropTypes;    

    /**
     * Propriedade padrão do componente.
     */
    static defaultProps = {
        windows: [],
        activate: () => undefined
    }

    /**
     * Alterna a visualização/ativação da janela correspondente ao
     * botão clicado.
     * @method
     * @param {WindowState} window
     */
    toggle(window) {
        this.props.minimize(window.key, false);
        this.props.activate(window.key, !window.active);
    }

    /**
     * Minimiza todas as janelas.
     * @method
     */
    minimizeAll = () => {
        this.props.windows.forEach(window => {
            this.props.minimize(window.key);
        });
    }

    /**
     * Método de renderização do componente.
     * @method
     */
    render() {
        const buttons = this.props.windows.map(window => {
            return (
                <button key={window.key} className={"btn btn-outline-secondary fenestra-taskbar-button " + (window.props.active ? "active" : "")} onMouseDown={() => this.toggle(window)}>
                    {window.props.title}
                </button>
            );
        });
        return (
            <nav className="fenestra-taskbar" >
                <button type="button" className="btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-windows">
                    <i className="fa fa-window-restore"></i>
                </button>
                <div className="fenestra-taskbar-buttons">
                    {buttons}
                </div>
                <button type="button" className="btn btn-outline-secondary fenestra-taskbar-button fenestra-taskbar-button-desktop" onClick={() => this.minimizeAll()}>
                    <i className="fa fa-desktop"></i>
                </button>
            </nav>
        );
    }
}

export default connect(boundTaskbarProps, boundTaskbarActions)(Taskbar);