
# Fenestra

Fenestra é uma biblioteca para implementação de um Desktop baseado em janelas. Construído sobre React/Redux, você poderá fornecer seus próprios redutores para integrar a Store do Desktop. A interface do usuário se baseia nos ícones do Font Awesome 4.7. A Biblioteca também produz um design responsivo, bastante adaptado para dispositivos móveis.

![Captura de tela de 2019-08-04 11-20-41](https://user-images.githubusercontent.com/6832383/62424798-46cc4b00-b6aa-11e9-934c-b99eb3c6e209.png)

# Como utilizar esta biblioteca?
## Instale a partir do npm:
```
$ npm i fenestra
```
## Importe a API para o seu projeto
```javascript
import Fenestra from 'fenestra';
```
ou
```javascript
const Fenestra = require('fenestra');
```
## Adicione a folha de estilo do Fenestra
```javascript
import 'fenestra/css/base.css';
import 'fenestra/css/theme.css'; //Opcional
```
## Adicione uma carga inicial de dados
```javascript
const data = {
  windows: [
    {
      props:{
        title: "Janela 1"
      },
      template: MinhaClasseReact1,
      templateProps: { mensagem: "Um novo começo!" }
    }
  ],
  icons: [
    {
      icon: 'fa fa-check',
      title: 'Abrir janela',
      window: {
        props:{
          title: "Janela 2"
        },
        template: MinhaClasseReact2,
        templateProps: { ...propriedades }
      }
   ]
 }
 ```
 ## Instancie sua aplicação com os dados iniciais
 ```javascript
 ReactDOM.render(<Fenestra data={data} />, document.getElementById("root"));
 ```
 Pronto, você terá um aplicação como a mostrada a seguir:
 
 ```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Fenestra from 'fenestra';

import 'font-awesome/css/font-awesome.css';
import 'fenestra/css/base.css';
import 'fenestra/css/theme.css'; //Opcional

const MinhaClasseReact1 = (props) => <h1>{props.mensagem}</h1>;
const MinhaClasseReact2 = (props) => <h1>Apenas uma janela</h1>;

const data = {
    windows: [
        {
            props: {
                title: "Janela 1"
            },
            template: MinhaClasseReact1,
            templateProps: {
              mensagem: "Um novo começo!"
            }
        }
    ],
    icons: [
        {
            icon: 'fa fa-check',
            title: 'Abrir janela',
            window: {
                props: {
                    title: "Janela 2"
                },
                template: MinhaClasseReact2,
            }
        }
    ]
};

ReactDOM.render(<Fenestra data={data} />, document.getElementById("root"));
```
Os templates especificados na carga de dados receberão as seguintes propriedades:

*    `this.props.open(props, template, templateProps)`: Abre uma nova janela,
*    `this.props.activate()`: Ativa a janela,
*    `this.props.minimize(min = true)`: Minimiza ou deminimiza a janela,
*    `this.props.maximize(max = true)`: Maximiza ou demaxmiza a janela,    
*    `this.props.close()`: Fecha a janela,
*    `this.props.setLoading(isLoading = true)`: Coloca um backdrop de carregamento da janela,
*    `this.props.setFooter(footer = "")`: Altera a mensagem de rodapé da janela,
*    `this.props.setData({windows: [], icons: []})`: Recarrega a sessão com novas janelas e ícones

# O que é um template Fenestra?
Template é apenas um componente React injetado em uma Janela. Formulários, páginas, listas, tabelas ou qualquer tipo de conteúdo renderizável pelo React pode ser injetado como Template. Após inserido na janela, o componente receberá as propriedades definidas em templateProps, além das ações definidas para controle da janela. Também são inseridos métodos para controle da sessão (open e setData).

# Posso utilizar um template conectado ao redux?

Boas notícias. Sim! Os dados da API Fenestra estão disponíveis no namespace fenestra e podem ser acessado através da função connect do react-redux:
```javascript
...
class MyComponent extends React.Component {
  ...
}

const mapStateToProps = (state) => {
  fenestra: state.fenestra
}

export default connect(mapStateToProps)(MyComponent);

```
Você ainda pode usar sua própria Store, observando a utilização do redutor do Fenestra e o componente Desktop:
```javascript
...
import myReducer from './reducers';
import fenestra from 'fenestra/reducers';
import * as fenestraActions from 'fenestra/actions';
import {Desktop} from 'fenestra';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
...
const store = createStore(combineReducers({myReducer, fenestra}));
store.dispatch(fenestraActions.setData({...}));
...
ReactDOM.render(
  <Provider store={store}>
    <Desktop />
  </Provider>, document.getElementById('root'));
```

# Posso mudar a cor do tema ou colocar uma imagem de background no desktop?
O fenestra utiliza duas folhas de estilos:
* `css/base.css`: Fornece as funcionalidades básicas do sistema, com um mínimo de estilo.
* `css/theme.css`: Apresenta a estilização da API, você poderá reescrever estes estilos, sem
quebrar as funcionalidades da API.

# Como faço para modificar os textos do diálogo e botões para minha língua?
Você poderá passar as suas próprias traduções para o fenestra através do objeto `msgs`, dentro da
propriedade `data` repassada ao fenestra. Há uma tradução em Português (Brasil) que pode ser utilizada
da seguinte forma:
```javascript
...
import ptbr from 'fenestra/messages/pt-br';
...
const data = {
  ...
  msgs: ptbr
};

ReactDOM.render(<Fenestra data={data} />, document.getElementById("root"));
...

```