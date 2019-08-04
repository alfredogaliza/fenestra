import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import fenestra from '../reducers';
import Desktop from './Desktop';

import '../styles/app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore(
            combineReducers({
                fenestra,
                ...this.props.reducers
            })
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                <Desktop background={this.props.background} data={this.props.data}/>
            </Provider>
        );
    }
}

export default App;