import React from 'react';
import { connect } from 'react-redux';

import { boundWindowActions } from '../actions';

/**
 * props: {
 *   title: string,
 *   children: React,
 *   minimized: bool,
 *   maximized: bool,
 *   moveable: bool,
 *   active: bool,
 *   resizeable: bool,
 *   activate: () => void,
 *   minimize: () => void,
 *   maximize: () => void,
 *   deminimize: () => void,
 *   demaximize: () => void,
 *   close: () => void,
 *   startResize: (x, y) => void,
 *   style: {
 *    top: int,
 *    left: int,
 *    width: int,
 *    height: int,
 *    zIndex: int
 *   }
 * }
 * 
 * 
 */
class WindowTemplate extends React.Component {

    close = (event) => {
        event.stopPropagation();
        if (global.confirm("Deseja fechar esta janela: " + this.props.title + "?")) {
            this.props.close();
        }
    }

    toggleMaximize = (event) => {
        event.stopPropagation();
        this.props.maximize(!this.props.maximized);
    }

    minimize = (event) => {
        event.stopPropagation();
        this.props.minimize();
    }

    render() {

        const style = {
            position: this.props.maximized ? 'absolute' : 'absolute',
            top: this.props.maximized ? 0 :
                (this.props.moveable ?
                    this.props.style.top :
                    (global.window.innerHeight - 50 - this.props.style.height) / 2
                ),
            left: this.props.maximized ? 0 :
                (this.props.moveable ?
                    this.props.style.left :
                    (global.window.innerWidth - this.props.style.width) / 2
                ),
            width: this.props.maximized ? undefined : this.props.style.width,
            height: this.props.maximized ? undefined : this.props.style.height,
            right: this.props.maximized ? 0 : undefined,
            bottom: this.props.maximized ? 0 : undefined,
            display: this.props.minimized ? 'none' : 'flex',
            zIndex: this.props.style.zIndex,
            border: this.props.maximized ? 'none' : undefined,
            borderRadius: this.props.maximized ? 0 : undefined,
        };

        const loading = this.props.isLoading ? (
            <div className="fenestra-loading">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        ) : null;

        return (
            <div className="fenestra-window" style={style} onMouseDown={() => this.props.activate()}>
                <div className={"fenestra-window-title fenestra-window-title-" + (this.props.active ? "active" : "inactive")} style={{ borderRadius: this.props.maximized ? 0 : undefined }} onDoubleClick={(e) => this.toggleMaximize(e)} onMouseDown={e => this.props.startMove(e.pageX, e.pageY)}>

                    <span>{this.props.title}</span>

                    <div className="fenestra-window-title-buttons">
                        <button type="button" className={"btn btn-outline-secondary text-white btn-sm " + (this.props.minimizeable ? "" : "d-none")} onClick={(e) => this.minimize(e)}>
                            <i className="fa fa-window-minimize"></i>
                        </button>&nbsp;
                        <button type="button" className={"btn btn-outline-secondary text-white btn-sm " + (this.props.resizeable ? "" : "d-none")} onClick={(e) => this.toggleMaximize(e)}>
                            <i className={"fa fa-window-" + (this.props.maximized ? "restore" : "maximize")}></i>
                        </button>&nbsp;
                        <button type="button" className={"btn btn-outline-secondary text-white btn-sm " + (this.props.closeable ? "" : "d-none")} onClick={(e) => this.close(e)}>
                            <i className="fa fa-remove"></i>
                        </button>
                    </div>

                </div>

                <div className="fenestra-window-body">
                    {this.props.children}
                    {loading}
                </div>

                <div className="fenestra-window-footer">
                    {this.props.footer}
                    <button type="button"
                        style={{ display: ((this.props.maximized || !this.props.resizeable) ? 'none' : 'block') }}
                        className="fenestra-window-resize"
                        onMouseDown={({ pageX, pageY }) => this.props.startResize(pageX, pageY)}>
                        <i className="fa fa-expand fa-flip-horizontal"></i>
                    </button>
                </div>

            </div>
        );
    }
}

const Window = key => {

    const mapStateToProps = state => ({
        isLoading: state.fenestra.windows.find(window => window.key === key).isLoading
    });

    return connect(mapStateToProps, boundWindowActions(key))(WindowTemplate);
}

export default Window;