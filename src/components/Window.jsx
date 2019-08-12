import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { boundWindowActions } from '../actions';

class Window extends React.Component {

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
    }

    static defaultProps = {
        title: "Nova Janela",
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
        setData: () => undefined
    }

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

        const loading = this.props.isLoading ? (
            <div className="fenestra-loading">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        ) : null;

        return (
            <div
                className={
                    "fenestra-window " +
                    (this.props.active ? "fenestra-window-active" : "") + " " +
                    (this.props.maximized ? "fenestra-window-maximized" : "") + " " +
                    (this.props.minimized ? "fenestra-window-minimized" : "")
                }
                style={!this.props.maximized ? this.props.style : null}
                onMouseDown={() => this.props.activate()}
                onTouchStart={() => this.props.activate()}
            >
                <div
                    className="fenestra-window-title"
                    style={{ borderRadius: this.props.maximized ? 0 : undefined }}
                    onDoubleClick={(e) => this.toggleMaximize(e)}
                    onMouseDown={e => this.props.startMove(e.pageX, e.pageY)}
                    onTouchStart={event => this.props.startMove(event.touches[0].pageX, event.touches[0].pageY)}
                >

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
                        className="fenestra-window-resize"
                        onMouseDown={({ pageX, pageY }) => this.props.startResize(pageX, pageY)}
                        onTouchStart={e => this.props.startResize(e.touches[0].pageX, e.touches[0].pageY)}>
                        <i className="fa fa-expand fa-flip-horizontal"></i>
                    </button>
                </div>

            </div>
        );
    }
}

export const bindWindow = key => {

    const mapStateToProps = state => ({
        isLoading: state.fenestra.windows.find(window => window.key === key).isLoading
    });

    return connect(mapStateToProps, boundWindowActions(key))(Window);
}

export default Window;