
# Fenestra

Fenestra é uma biblioteca para implementação de um Desktop baseado em janelas. Construído sobre React/Redux, você poderá fornecer seus próprios redutores para integrar a Store do Desktop. A interface do usuário se baseia no Bootstrap 4 e nos ícones do Font Awesome 4.7. A Biblioteca também produz um design responsivo bastante adaptado para dispositivos móveis.

![Captura de tela de 2019-08-04 11-20-41](https://user-images.githubusercontent.com/6832383/62424798-46cc4b00-b6aa-11e9-934c-b99eb3c6e209.png)

# Como utilizar esta biblioteca?
## Instale a partir do npm:
```
$ npm i fenestra
```
## Importe a API para o seu projeto
```
import Fenestra from 'fenestra';
```
ou
```
const Fenestra = require('fenestra');
```
## Adicione uma carga inicial de dados
```
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
 ```
 ReactDOM.render(<Fenestra data={data} />, document.getElementById("root"));
 ```
 Pronto, você terá um aplicação como a mostrada a seguir:
 
 ```
import React from 'react';
import ReactDOM from 'react-dom';
import Fenestra from 'fenestra';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const MinhaClasseReact1 = (props) => <h1>{props.mensagem}</h1>;
const MinhaClasseReact2 = (props) => <h1>Apenas uma janela</h1>;

const data = {
    windows: [
        {
            props: {
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

*    open(props, template, templateProps): Abre uma nova janela,
*    activate(): Ativa a janela,
*    minimize(min = true): Minimiza ou deminimiza a janela,
*    maximize(max = true): Maximiza ou demaxmiza a janela,    
*    close(): Fecha a janela,
*    setLoading(isLoading = true): Coloca um backdrop de carregamento da janela,
*    setFooter(footer = ""): Altera a mensagem de rodapé da janela,
*    setData({windows: [], icons: []}): Recarrega a sessão com novas janelas e ícones

# O que é um template Fenestra?

Template é apenas um componente React injetado em uma Janela. Formulários, páginas, listas, tabelas ou qualquer tipo de conteúdo renderizável pelo React pode ser injetado como Template. Após inserido na janela, o componente receberá as propriedades definidas em templateProps, além das ações definidas para controle da janela. Também são inseridos métodos para controle da sessão (open e setData).

# Posso utilizar um template conectado ao redux?

Boas notícias. Sim! Os dados da API Fenestra estão disponíveis no namespace fenestra e podem ser acessado através da função connect do react-redux:
```
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
```
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
  </Provider>, document.getElementByIdd('root'));
```

# Posso mudar a cor do tema ou colocar uma imagem de background no desktop?
Sim, as janelas são criadas com classes CSS específicas que vc pode sobrescrever com seu próprio arquivo. Dê uma olhada na folha de estilos do Fenestra:
![app.css](https://github.com/alfredogaliza/fenestra/blob/master/src/styles/app.css)
