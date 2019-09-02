/**
 * @module Fenestra/Components/App
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

import fenestra from '../reducers';
import Desktop from './Desktop';

import { setData } from '../actions';
import { appPropTypes } from '../prop-types';

/**
 * Componente da Aplicação Fenestra.
 * @extends {React.Component}
 */
class App extends React.Component {    

    /**
     * PropTypes da classe.
     */
    static propTypes = appPropTypes;

    /**
     * Valores Pardrão das propriedades.
     */
    static defaultProps = {
        data: {
            windows: [],
            icons: [],
            options: {}
        }
    }

    /**
     * Método construtor da classe. Ao ser instanciada, a aplicação gera um novo Store
     * para ser utilizado pelos componentes.
     * @param {Object} props Propriedades a serem passadas ao componente
     */
    constructor(props) {
        super(props);
        this.store = createStore(combineReducers({fenestra}));
        this.store.dispatch(setData(this.props.data));
    }

    /**
     * Renderiza o componente.
     */
    render() {
        return (
            <Provider store={this.store}>
                <Desktop />
            </Provider>
        );
    }
}

export default App;