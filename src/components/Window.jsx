/**
 * @module Fenestra/Components/Window
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { boundWindowActions, boundWindowProps } from '../actions';

/**
 * @typedef {Object} WindowProps  - Propriedades da janela
 * @property {Object} style - Propriedades de estilo da janela (top, left, width, height)
 * @property {string} title - Título da janela
 * @property {string} footer - Rodapé da janela
 * @property {boolean} active - Indica se a janela está ativa
 * @property {boolean} maximized - Indica se a janela está maximizada
 * @property {boolean} minimized - Indica se a janela está minimizada
 * @property {boolean} resizeable - Indica se a janela é redimensionável
 * @property {boolean} moveable - Indica se a janela é movimentável
 * @property {boolean} minimizeable - Indica se a janela é minimizável
 * @property {boolean} closeable - Indica se a janela é fechável
 * @property {boolean} noFooter - Indica se o rodapé deverá ser ocultado
 */

/**
* @typedef {Object} WindowData - Dados de uma janela a ser aberta
* @property {module:Fenestra/Components/Window~WindowProps} props - Propriedades da Janela
* @property {*} template - Componente renderizável de conteúdo da janela
* @property {Object} templateProps - Propriedades a serem injetados no template
*/

/**
* @typedef {Object} WindowState Estado de uma janela armazenado em um Store Redux.
* @property {module:Fenestra/Reducers~WinKey} key Identificador da Janela
* @property {module:Fenestra/Components/Window~WindowProps} props Propriedades da Janela
* @property {module:Fenestra/Components/Window~BoundWindow} component Componente da Janela conectada ao redux
* @property {*} content Componente do Conteúdo da Janela
*/

/**
 * Janela da Aplicação Fenestra
 * @extends {React.Component}
 */
class Window extends React.Component {

    /**
     * PropTypes do Componente.
     */
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element,
        isLoading: PropTypes.bool,
        open: PropTypes.func,
        activate: PropTypes.func,
        minimize: PropTypes.func,
        maximize: PropTypes.func,
        startMove: PropTypes.func,
        startResize: PropTypes.func,
        close: PropTypes.func,
        setLoading: PropTypes.func,
        setFooter: PropTypes.func,
        setData: PropTypes.func,
        options: PropTypes.object
    }

    /**
     * Propriedades padrão do Componente
     */
    static defaultProps = {
        title: undefined,
        children: null,
        isLoading: false,
        open: () => undefined,
        activate: () => undefined,
        minimize: () => undefined,
        maximize: () => undefined,
        startMove: () => undefined,
        startResize: () => undefined,
        close: () => undefined,
        setLoading: () => undefined,
        setFooter: () => undefined,
        setData: () => undefined,
        options: {}
    }

    /**
     * Fecha a janela.
     * @method
     * @param {Object} event Evento gerado pela ação
     */
    close = (event) => {
        event.stopPropagation();
        if (!this.props.options.confirmOnClose || global.confirm(this.props.options.msgs.closeDialog + this.props.title + "?")) {
            this.props.close();
        }
    }

    /**
     * Alterna o estado maximizado da janela;
     * @method
     * @param {Object} event Evento gerado pela ação
     */
    toggleMaximize = (event) => {
        event.stopPropagation();
        this.props.maximize(!this.props.maximized);
    }

    /**
     * Minimiza a janela.
     * @method
     * @param {Object} event Evento gerado pela ação
     */
    minimize = (event) => {
        event.stopPropagation();
        this.props.minimize();
    }

    /**
     * Define se já houve um toque. Utilizado para detectar o toque duplo.
     */
    tapped = false;

    startTouch(x, y, event) {
        if (this.tapped) {
            this.toggleMaximize(event);
        } else {
            this.tapped = true;
            setTimeout(() => { this.tapped = false }, 300);
            this.props.startMove(x, y);
        }
    }

    /**
     * Renderiza o componente.
     * @method
     */
    render() {

        const loading = this.props.isLoading ? (
            <div className="fenestra-loading">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        ) : null;

        return (
            <div
                className={
                    "fenestra-window" +
                    (this.props.active    ? " fenestra-window-active"    : "")+
                    (this.props.maximized ? " fenestra-window-maximized" : "")+
                    (this.props.noFooter  ? " fenestra-window-nofooter"  : "")+ 
                    (this.props.minimized ? " fenestra-window-minimized" : "")
                }
                style={!this.props.maximized ? this.props.style : null}
                onMouseDown={() => this.props.activate()}
                onTouchStart={() => this.props.activate()}
            >
                <div
                    className="fenestra-window-header"
                    style={{ borderRadius: this.props.maximized ? 0 : undefined }}
                    onDoubleClick={(e) => this.toggleMaximize(e)}
                    onMouseDown={e => this.props.startMove(e.pageX, e.pageY)}
                    onTouchStart={event => this.startTouch(event.touches[0].pageX, event.touches[0].pageY, event)}
                >

                    <span className="fenestra-window-header-title">{this.props.title}</span>

                    <div className="fenestra-window-header-buttons">
                        <button title={this.props.options.msgs.minimizeWindow} type="button" className={this.props.minimizeable ? "" : "d-none"} onClick={(e) => this.minimize(e)}>
                            <i className="fa fa-window-minimize"></i>
                        </button>&nbsp;
                        <button title={this.props.options.msgs.maximizeWindow} type="button" className={this.props.resizeable ? "" : "d-none"} onClick={(e) => this.toggleMaximize(e)}>
                            <i className={"fa fa-window-" + (this.props.maximized ? "restore" : "maximize")}></i>
                        </button>&nbsp;
                        <button title={this.props.options.msgs.closeWindow} type="button" className={this.props.closeable ? "" : "d-none"} onClick={(e) => this.close(e)}>
                            <i className="fa fa-remove"></i>
                        </button>
                    </div>

                </div>

                <div className="fenestra-window-body">

                    {this.props.children}

                    {loading}

                </div>                

                <div className="fenestra-window-footer">
                    {this.props.footer}&nbsp;
                </div>

                <button title={this.props.options.msgs.resizeWindow} type="button"
                    className="fenestra-window-resize"
                    onMouseDown={({ pageX, pageY }) => this.props.startResize(pageX, pageY)}
                    onTouchStart={e => this.props.startResize(e.touches[0].pageX, e.touches[0].pageY)}>
                    <i className="fa fa-expand fa-flip-horizontal"></i>
                </button>

            </div>
        );
    }
}

/**
 * @typedef {module:Fenestra/Components/Window~Window} BoundWindow Janela Conectada ao Store Redux
 */

/**
 * Cria um novo componente com as propriedades ligadas à chave
 * redux da janela aberta pelo Fenestra.
 * @class
 * @param {module:Fenestra/Reducers~WinKey} key Identificador da janela
 * @returns {module:Fenestra/Components/Window~BoundWindow} Componente com as propriedades ligadas ao Redux
 */
export const BoundWindow = key => connect(boundWindowProps(key), boundWindowActions(key))(Window);

export default Window;