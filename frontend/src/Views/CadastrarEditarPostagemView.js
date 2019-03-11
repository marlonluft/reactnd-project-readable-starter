/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* CSS */
import '../Style/DetalhePostagem.css'

/* Actions */
import { handleGetCategorias } from '../Actions/CategoriaAction'
import { handleGetPostagemCB, handleAtualizarPostagem, handleAddPostagem } from '../Actions/PostagemAction'

/* Bootstrap */
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/* Util */
import Funcoes from '../Util/Funcoes'

class CadastrarEditarPostagemView extends Component {

  state = {
    id: null,
    title: '',
    author: '',
    body: '',
    category: ''
  }

  componentDidMount() {
    // Consulta as categorias para popular o dropdown de categorias
    this.props.dispatch(handleGetCategorias(() => {
      this.setState({
        category: this.state.category === '' ? this.props.categorias[0].name : this.state.category
      })
    }))

    // Caso o id esteja definido, então é a alterção de uma postagem e consulta a mesma na api
    if (typeof this.props.match.params.id !== 'undefined') {
      this.props.dispatch(handleGetPostagemCB(this.props.match.params.id, () => {
        if (Funcoes.ehVazio(this.props.postagem)) {
          this.props.history.push('/404')
        }
        else {
          this.setState({
            id: this.props.postagem.id,
            title: this.props.postagem.title,
            author: this.props.postagem.author,
            body: this.props.postagem.body,
            category: this.props.postagem.category
          })
        }
      }))
    }
  }

  onTituloChange = (novoTitulo) => {
    this.setState({
      title: novoTitulo
    })
  }

  onAutorChange = (novoAutor) => {
    this.setState({
      author: novoAutor
    })
  }

  onConteudoChange = (novoConteudo) => {
    this.setState({
      body: novoConteudo
    })
  }

  onCategoriaChange = (novaCategoria) => {
    this.setState({
      category: novaCategoria
    })
  }

  Salvar = (title, author, body, category, id) => {
    if (title.length === 0) {
      alert('Favor informar um título')
    }
    else if (author.length === 0) {
      alert('Favor informar um autor')
    }
    else if (body.length === 0) {
      alert('Favor informar um conteúdo')
    }
    else if (this.props.categorias.filter((c) => c.name === category).length === 0) {
      alert('Favor escolher uma categoria')
    }
    else {
      if (id === null) {
        var objeto = {
          timestamp: +new Date,
          title: title,
          body: body,
          author: author,
          category: category,
          id: id
        }

        this.props.dispatch(handleAddPostagem(objeto, () => {
          this.props.history.goBack()
        }))
      }
      else {
        var objeto = {
          title: title,
          body: body,
          id: id
        }

        this.props.dispatch(handleAtualizarPostagem(objeto, () => {
          this.props.history.goBack()
        }))
      }
    }
  }

  render() {
    const { categorias } = this.props
    const { title, author, body, category, id } = this.state

    return (
      <div>
        <h2>{typeof this.props.match.params.id === 'undefined' ? 'Nova Postagem' : 'Alterar Postagem'}</h2>
        <Card body>
          <Form>
            <Form.Group controlId="txtTitulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Digite um título" value={title} onChange={(event) => this.onTituloChange(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="txtAutor">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="Digite um autor" disabled={id !== null} value={author} onChange={(event) => this.onAutorChange(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="txtConteudo">
              <Form.Label>Conteúdo</Form.Label>
              <Form.Control type="text" rows="3" placeholder="Digite um conteúdo" value={body} onChange={(event) => this.onConteudoChange(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="selectCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select" onChange={(e) => this.onCategoriaChange(e.currentTarget.value)} disabled={id !== null} value={category}>
                {
                  categorias.map((categoria) => (
                    <option key={categoria.name} value={categoria.name}>{categoria.name}</option>
                  ))
                }
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="button" onClick={() => this.Salvar(title, author, body, category, id)}>Salvar</Button>

          </Form>
        </Card>

        <Link to={'/'}>Voltar</Link>
      </div>
    )
  }
}

export default connect((state) => ({
  categorias: state.categorias,
  postagem: state.postagem
}))(CadastrarEditarPostagemView)