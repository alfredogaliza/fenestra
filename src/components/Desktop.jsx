/**
 * @module Fenestra/Components/Desktop
 * @see module:Fenestra/Actions~BoundDesktopActions
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { boundDesktopActions, boundDesktopProps } from '../actions';

import Taskbar from "./Taskbar";
import { iconPropTypes, windowStatePropTypes } from '../prop-types';


 /**
 * @typedef {Object} IconData - Dados de um ícone a ser posicionado no Desktop
 * @property {string} icon - Classe css referente a um ícone do Font Awesome 4.7
 * @property {string} title - Título abaixo do ícone
 * @property {module:Fenestra/Components/Window~WindowData} window - Propriedades da Janela a ser aberta ao clicar no ícone
 */

/**
 * Componente do Desktop da Aplicação Fenestra.
 * @extends {React.Component}
 */
class Desktop extends React.Component {


    /**
     * Referência ao Container das Janelas.
     */
    windowsRef = React.createRef();

    /**
     * Método chamado quando o desktop é atualizado. Caso haja uma janela maximizada,
     * o conteiner deverá ser rolado até a posição inicial para que não
     * haja visão parcial da janela.
     * @method
     */
    componentDidUpdate() {
        if (this.props.isMaximized){
            this.windowsRef.current.scrollTop = 0;
            this.windowsRef.current.scrollLeft = 0;
        }
    }

    /**
     * PropTypes do componente.
     */
    static propTypes = {
        icons: PropTypes.arrayOf(iconPropTypes),
        windows: PropTypes.arrayOf(windowStatePropTypes),
        isMoving: PropTypes.bool,
        isMaximized: PropTypes.bool,
        open: PropTypes.func,
        openIcon: PropTypes.func,
        activate: PropTypes.func,
        minimize: PropTypes.func,
        maximize: PropTypes.func,
        startMove: PropTypes.func,
        startResize: PropTypes.func,
        move: PropTypes.func,
        endMove: PropTypes.func,
        close: PropTypes.func,
        setLoading: PropTypes.func,
        setFooter: PropTypes.func,
        setData: PropTypes.func
    }

    /**
     * Propriedade padrão do componente.
     */
    static defaultProps = {
        icons: [],
        windows: [],
        isMoving: false,
        isMaximized: false,
        open: () => undefined,
        openIcon: () => undefined,
        activate: () => undefined,
        minimize: () => undefined,
        maximize: () => undefined,
        startMove: () => undefined,
        startResize: () => undefined,
        move: () => undefined,
        endMove: () => undefined,
        close: () => undefined,
        setLoading: () => undefined,
        setFooter: () => undefined,
        setData: () => undefined
    }

    /**
     * Método de renderização do Componente
     * @method
     */
    render() {

        const icons = this.props.icons.map((icon, key) => {
            return (
                <button key={key} type="button" className="btn btn-secondary btn-lg fenestra-desktop-icon" onClick={() => this.props.openIcon(icon)}>
                    <i className={icon.icon}></i><br />
                    <span className="small">{icon.title}</span>
                </button>
            )
        });

        const windows = this.props.windows.map(window => {
            const Component = window.component;
            return (
                <Component key={window.key} {...window.props}>
                    {window.content}
                </Component>
            );
        });

        return (
            <div className={"fenestra-desktop"+(this.props.isMaximized? " fenestra-desktop-maximized" : "")+(this.props.isMoving? " fenestra-desktop-moving" : "")}
                onMouseMove={({ pageX, pageY }) => this.props.move(pageX, pageY)}
                onTouchMove={event => this.props.move(event.touches[0].pageX, event.touches[0].pageY)}
                onMouseUp={() => this.props.endMove()}
                onMouseLeave={() => this.props.endMove()}
                onTouchEnd={() => this.props.endMove()}
                onTouchCancel={() => this.props.endMove()}
            >
                <div className="fenestra-desktop-windows" ref={this.windowsRef}>
                    {windows}
                </div>
                <div className="fenestra-desktop-icons">
                    {icons}
                </div>
                <Taskbar minimize={(key, minimize) => this.props.minimize(key, minimize)} />
            </div >
        );
    }
}

export default connect(boundDesktopProps, boundDesktopActions)(Desktop);