/* React */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Componentes */
import DetalhePostagemView from './Views/DetalhePostagemView.js'
import CadastrarEditarPostagemView from './Views/CadastrarEditarPostagemView.js'
import ListagemPostagemView from './Views/ListagemPostagemView.js'

/* Bootstrap */
import Container from 'react-bootstrap/Container'

class App extends Component {

  render() {

    return (
      /* Mapeamente de rotas da aplicação */
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path='/categoria/:id' component={ListagemPostagemView} />
            <Route path='/detalhe/:id' component={DetalhePostagemView} />
            <Route path='/editar/:id' component={CadastrarEditarPostagemView} />
            <Route path='/cadastrar' component={CadastrarEditarPostagemView} />
            <Route exact path='/' component={ListagemPostagemView} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App