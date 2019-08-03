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

    minimize(window) {
        this.props.minimize(window.key, !window.props.minimized)
    }

    minimizeAll = () => {
        this.props.forEeach(window => {
            this.props.minimize(window.key);
        });            
    }

    render() {
        const buttons = this.props.windows.map(window => {
            return (
                <div className="nav-item" key={window.key} >
                    <button className={"btn btn-outline-secondary fenestra-taskbar-button " + (window.props.active ? "active" : "")} onClick={() => this.minimize(window)}>
                        {window.props.title}
                    </button>
                </div>
            )
        });
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-bottom fenestra-taskbar" >
                <div className="navbar-nav d-flex flex-wrap fenestra-taskbar-buttons">
                    {buttons}
                </div>
                <div className="ml-auto">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.minimizeAll}>
                        <i className="fa fa-desktop"></i>
                    </button>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    windows: state.fenestra.windows
});

export default connect(mapStateToProps, boundTaskbarActions)(Taskbar);