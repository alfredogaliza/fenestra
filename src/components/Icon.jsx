import React from 'react';

/**
 * Props
 * {
 *  title: string
 *  icon: string
 *  open: () => void
 * }
 */
class Icon extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-secondary btn-lg fenestra-desktop-icon" onClick={() => this.props.open()}>
                <i className={this.props.icon}></i><br/>
                <span className="small">{this.props.title}</span>
            </button>
        );
    }
}

export default Icon;