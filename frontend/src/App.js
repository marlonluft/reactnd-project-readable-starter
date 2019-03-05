import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Categoria from './Views/Categoria.js'
import Detalhe from './Views/Detalhe.js'
import CadastrarEditarPostagem from './Views/CadastrarEditarPostagem.js'
import Root from './Views/Root.js'

class App extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/categoria/:id' component={Categoria} />
            <Route path='/detalhe/:id' component={Detalhe} />
            <Route path='/editar/:id' component={CadastrarEditarPostagem} />
            <Route path='/cadastrar' component={CadastrarEditarPostagem} />
            <Route exact path='/' component={Root} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App