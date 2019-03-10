import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Detalhe from './Views/Detalhe.js'
import CadastrarEditarPostagem from './Views/CadastrarEditarPostagem.js'
import Root from './Views/Root.js'

import Container from 'react-bootstrap/Container'

class App extends Component {

  render() {

    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path='/categoria/:id' component={Root} />
            <Route path='/detalhe/:id' component={Detalhe} />
            <Route path='/editar/:id' component={CadastrarEditarPostagem} />
            <Route path='/cadastrar' component={CadastrarEditarPostagem} />
            <Route exact path='/' component={Root} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App