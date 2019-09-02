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
     * Define o contador para esconder a barra de tarefas, caso esteja configurado.
     * @method
     */
    leave(){
        if (this.props.options.autohideTaskbar){
            setTimeout(() => this.props.hideTaskbar(), this.props.options.autohideTimeout); 
        }
    }

    /**
     * Método de renderização do componente.
     * @method
     */
    render() {
        const buttons = this.props.windows.map(window => {
            return (
                <button title={window.props.title} key={window.key} className={"fenestra-taskbar-button " + (window.props.active ? "active" : "")} onMouseDown={() => this.toggle(window)}>
                    {window.props.title}
                </button>
            );
        });
        return (
            <nav
                className={"fenestra-taskbar" + (this.props.options.showTaskbar? "" : " fenestra-taskbar-hidden")}
                style={{height: this.props.options.taskbarHeight, bottom: this.props.options.showTaskbar? 0 : -this.props.options.taskbarHeight}}
                onMouseLeave={() => this.leave()}
            >
                <button title={this.props.options.msgs.showWindows} type="button" className="fenestra-taskbar-button fenestra-taskbar-button-windows">
                    <i className="fa fa-window-restore"></i>
                </button>
                <div className="fenestra-taskbar-buttons" style={{bottom: this.props.options.taskbarHeight}}>
                    {buttons}
                </div>
                <button title={this.props.options.msgs.showDesktop} type="button" className="fenestra-taskbar-button fenestra-taskbar-button-desktop" onClick={() => this.minimizeAll()}>
                    <i className="fa fa-desktop"></i>
                </button>
            </nav>
        );
    }
}

export default connect(boundTaskbarProps, boundTaskbarActions)(Taskbar);