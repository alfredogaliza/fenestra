import React from 'react';
import { connect } from 'react-redux';
import { boundTaskbarActions } from '../actions';
import { taskbarPropTypes } from '../prop-types';

class Taskbar extends React.Component {

    static propTypes = taskbarPropTypes;

    static defaultProps = {
        windows: [],
        activate: () => undefined
    }

    toggle(window) {
        this.props.minimize(window.key, false);
        this.props.activate(window.key, !window.active);
    }

    minimizeAll = () => {
        this.props.windows.forEach(window => {
            this.props.minimize(window.key);
        });
    }

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

const mapStateToProps = state => ({
    windows: state.fenestra.windows
});

export default connect(mapStateToProps, boundTaskbarActions)(Taskbar);