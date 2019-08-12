import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

import fenestra from '../reducers';
import Desktop from './Desktop';

import '../styles/app.css';
import { setData } from '../actions';
import { appPropTypes } from '../prop-types';

class App extends React.Component {    

    static propTypes = appPropTypes;

    static defaultProps = {
        data: {
            windows: [],
            icons: []
        }
    }

    constructor(props) {
        super(props);
        this.store = createStore(combineReducers({fenestra}));
        this.store.dispatch(setData(this.props.data));
    }

    render() {
        return (
            <Provider store={this.store}>
                <Desktop />
            </Provider>
        );
    }
}

export default App;