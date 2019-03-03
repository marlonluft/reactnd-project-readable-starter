import React, { Component } from 'react';
import Categoria from './Views/Categoria.js'
import Detalhe from './Views/Detalhe.js'
import Editar from './Views/Editar.js'
import Root from './Views/Root.js'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/categoria/:id' component={Categoria} />
        <Route path='/detalhe/:id' component={Detalhe} />
        <Route path='/editar/:id' component={Editar} />
        <Route exact path='/' component={Root} />
      </div>
    );
  }
}

export default App;