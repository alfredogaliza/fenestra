import React from 'react';
import { connect } from 'react-redux';
import { boundTaskbarActions } from '../actions';
/**
 * Props
 * {
 *  windows: [window]
 *  minimize: int => void
 * }
 */
class Taskbar extends React.Component {

    toggle(window) {
        if (window.props.active) {
            this.props.minimize(window.key);
        } else {
            this.props.minimize(window.key, false);
            this.props.activate(window.key);
        }
    }

    minimizeAll = () => {
        this.props.windows.forEach(window => {
            this.props.minimize(window.key);
        });
    }

    render() {
        const buttons = this.props.windows.map(window => {
            return (
                <button key={window.key} className={"fenestra-taskbar-button " + (window.props.active ? "fenestra-taskbar-button-active" : "")} onClick={() => this.toggle(window)}>
                    {window.props.title}
                </button>
            );
        });
        return (
            <nav className="fenestra-taskbar" >
                <div className="fenestra-taskbar-buttons">
                    {buttons}
                </div>
                <button type="button" className="fenestra-taskbar-button fenestra-taskbar-button-desktop" onClick={() => this.minimizeAll()}>
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