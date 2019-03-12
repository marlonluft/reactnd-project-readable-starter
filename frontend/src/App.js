/* React */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Views */
import DetalhePostagemView from './Views/DetalhePostagemView.js'
import CadastrarEditarPostagemView from './Views/CadastrarEditarPostagemView.js'
import ListagemPostagemView from './Views/ListagemPostagemView.js'
import NaoEncontradoView from './Views/NaoEncontradoView.js'

/* Bootstrap */
import Container from 'react-bootstrap/Container'

function App() {
  return (
    /* Mapeamente de rotas da aplicação */
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path='/404' component={NaoEncontradoView} />
          <Route exact path='/cadastrar' component={CadastrarEditarPostagemView} />
          <Route exact path='/editar/:id' component={CadastrarEditarPostagemView} />
          <Route exact path='/:categoria' component={ListagemPostagemView} />
          <Route exact path='/:categoria/:postId' component={DetalhePostagemView} />
          <Route exact path='/' component={ListagemPostagemView} />
          <Route component={NaoEncontradoView} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App