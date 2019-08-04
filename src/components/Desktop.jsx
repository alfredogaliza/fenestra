import React from 'react';
import { connect } from 'react-redux';

import { boundDesktopActions } from '../actions';

import Taskbar from "./Taskbar";
import Icon from './Icon';

import background from '../images/background.jpg';

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

        return (
            <div className="fenestra-desktop"
                onMouseMove={({ pageX, pageY }) => this.props.move(pageX, pageY)}
                onMouseUp={() => this.props.endMove()}
                onMouseLeave={() => this.props.endMove()}>
                <img src={this.props.background || background} alt="Desktop Background" className="fenestra-desktop-background" />
                <div className="fenestra-desktop-icons">
                    {icons}
                </div>
                {windows}
                <Taskbar minimize={(key, minimize) => this.props.minimize(key, minimize)} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    isLoading: state.fenestra.isLoading
});

export default connect(mapStateToProps, boundDesktopActions)(Desktop);