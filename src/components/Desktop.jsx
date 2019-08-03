import React from 'react';
import { connect } from 'react-redux';
import { boundDesktopActions } from '../actions';

import Taskbar from "./Taskbar";
import Icon from './Icon';

import '../styles/app.css';

class Desktop extends React.Component {

    constructor(props) {
        super(props);
        this.store = this.props.store ? this.props.store : createStore(combineReducers({ fenestra }));
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
            <Provider store={this.store}>
                <div className="fenestra-desktop"
                    onMouseMove={({ pageX, pageY }) => this.props.move(pageX, pageY)}
                    onMouseUp={() => this.props.endMove()}
                    onMouseLeave={() => this.props.endMove()}>
                    <img src={this.props.background} alt="Desktop Background" className="fenestra-desktop-background" />
                    <div className="fenestra-desktop-icons">
                        {icons}
                    </div>
                    {windows}
                    <Taskbar minimize={(key, minimize) => this.props.minimize(key, minimize)} />
                </div>
            </Provider>
        );
    }
}
const mapStateToProps = state => ({
    icons: state.fenestra.icons,
    windows: state.fenestra.windows,
    isLoading: state.fenestra.isLoading
});

export default connect(mapStateToProps, boundDesktopActions)(Desktop);