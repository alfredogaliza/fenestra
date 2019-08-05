import React from 'react';
import { connect } from 'react-redux';

import { boundDesktopActions, boundDesktopProps } from '../actions';

import Taskbar from "./Taskbar";
import Icon from './Icon';

class Desktop extends React.Component {

    constructor(props) {
        super(props);
        this.props.setData(this.props.data);
    }

    render() {
        const icons = this.props.icons.map((icon, key) => {
            return <Icon
                key={key}
                open={() => this.props.openIcon(icon)}
                icon={icon.icon}
                title={icon.title}
            />;
        });

        const windows = this.props.windows.map(window => {
            const Component = window.component;
            return (
                <Component key={window.key} {...window.props}>
                    {window.content}
                </Component>
            );
        });

        const background = this.props.background ?
            <img src={this.props.background} alt="Desktop Background" className="fenestra-desktop-background" />
            : null;


        return (
            <div className="fenestra-desktop"
                onMouseMove={({ pageX, pageY }) => this.props.move(pageX, pageY)}
                onMouseUp={() => this.props.endMove()}
                onMouseLeave={() => this.props.endMove()}>
                {background}
                <div className="fenestra-desktop-windows">
                    <div className="fenestra-desktop-windows-holder" style={{ width: this.props.maxWidth, height: this.props.maxHeight }}></div>
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