import React from 'react';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import Desktop from './components/Desktop';
import fenestra from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/app.css';

class Fenestra extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.store? this.props.store : createStore(combineReducers({fenestra}));    
  }
  render(){
    return (
      <Provider store={this.store}>
        <Desktop background={this.props.background}/>
      </Provider>
    );
  }
}

export default Fenestra;
