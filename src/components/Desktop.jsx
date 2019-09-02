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
     * Referência ao Elemento do Desktop.
     */
    desktopRef = React.createRef();

    /**
     * Referência ao Container das janelas.
     */
    windowsRef = React.createRef();

    /**
     * Posição Y do toque inicial
     */
    initialSwipe = null;

    /**
     * Posição Y do toque atual
     */
    currentSwipe = null;

    /**
     * Método chamado quando o desktop é atualizado. Caso haja uma janela maximizada,
     * o conteiner deverá ser rolado até a posição inicial para que não
     * haja visão parcial da janela.
     * @method
     */
    componentDidUpdate() {
        if (this.props.isMaximized) {
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
        setData: PropTypes.func,
        options: PropTypes.object
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
        setData: () => undefined,
        options: {
            msgs: {}
        }
    }

    /**
     * Transforma a janela, além de mostrar a barra de tarefas, caso esteja oculta.
     * @param {integer} x Posição X onde ocorreu o evento
     * @param {integer} y Posição Y onde ocorreu o evento
     */
    moveMouse(x, y) {

        if (this.props.options.autohideTaskbar) {

            const limit = this.desktopRef.current.offsetTop + this.desktopRef.current.offsetHeight - this.props.options.taskbarHeight;

            if (y > limit) {
                this.props.showTaskbar();
            }

        }

        this.props.move(x, y);

    }

    /**
     * Transforma a janela através do evento de toque, além de salvar a posição atual do swipe
     * @param {integer} x Posição X onde ocorreu o evento
     * @param {integer} y Posição Y onde ocorreu o evento
     */
    moveTouch(x, y) {

        if (this.props.options.autohideTaskbar) {
            this.currentSwipe = y;
        }

        this.props.move(x, y);

    }

    /**
     * Inicia um movimento de Toque no desktop. Após 300ms o swipe será invalidado
     * @param {integer} y Posição Y inicial do toque
     */
    startTouch(y) {
        if (this.props.options.autohideTaskbar) {
            this.initialSwipe = y;
            setTimeout(() => { this.initialSwipe = null }, 300);
        }
    }

    /**
     * Finaliza o swipe
     */
    endTouch() {
        if (this.props.options.autohideTaskbar) {
            const limit = this.desktopRef.current.offsetTop + this.desktopRef.current.offsetHeight - this.props.options.taskbarHeight;
            if (this.initialSwipe > limit && this.currentSwipe < this.initialSwipe) {
                this.props.showTaskbar();
            } else if (this.currentSwipe > limit && this.currentSwipe > limit) {
                this.props.hideTaskbar();
            }
        }
        this.initialSwipe = null;
        this.props.endMove();
    }

    /**
     * Método de renderização do Componente
     * @method
     */
    render() {

        const icons = this.props.icons.map((icon, key) => {
            return (
                <button title={icon.title} key={key} type="button" className="fenestra-desktop-icon" onClick={() => icon.window ? this.props.open(icon.window.props, icon.window.template, icon.window.templateProps) : null}>
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

        const bottomStyle = {
            bottom: this.props.options.showTaskbar ? this.props.options.taskbarHeight : 0
        };

        return (
            <div ref={this.desktopRef}
                className={
                    "fenestra-desktop " +
                    this.props.options.className +
                    (this.props.isMaximized ? "fenestra-desktop-maximized" : "") +
                    (this.props.isMoving ? " fenestra-desktop-moving" : "")
                }
                onMouseMove={({ pageX, pageY }) => this.moveMouse(pageX, pageY)}
                onMouseUp={() => this.props.endMove()}
                onMouseLeave={() => this.props.endMove()}
                onTouchStart={event => this.startTouch(event.touches[0].pageY)}
                onTouchMove={event => this.moveTouch(event.touches[0].pageX, event.touches[0].pageY)}
                onTouchEnd={() => this.endTouch()}
                onTouchCancel={() => this.endTouch()}
            >
                <Taskbar minimize={(key, minimize) => this.props.minimize(key, minimize)} />
                <div className="fenestra-desktop-windows" style={bottomStyle} ref={this.windowsRef}>
                    {windows}
                </div>
                <div className="fenestra-desktop-icons" style={bottomStyle}>
                    {icons}
                </div>
            </div >
        );
    }
}

export default connect(boundDesktopProps, boundDesktopActions)(Desktop);