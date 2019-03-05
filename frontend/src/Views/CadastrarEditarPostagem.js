import React, { Component } from 'react'
import '../Style/DetalhePostagem.css'
import { handleGetCategorias } from '../Actions/categorias'
import { handleGetPostagemCB, handleAtualizarPostagem, handleAddPostagem } from '../Actions/postagem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Editar extends Component {

  state = {
    id: null,
    title: '',
    author: '',
    body: '',
    category: ''
  }

  componentDidMount() {
    this.props.dispatch(handleGetCategorias())

    if (typeof this.props.match.params.id !== 'undefined') {
      this.props.dispatch(handleGetPostagemCB(this.props.match.params.id, () => {
        this.setState({
          id: this.props.postagem.id,
          title: this.props.postagem.title,
          author: this.props.postagem.author,
          body: this.props.postagem.body,
          category: this.props.postagem.category
        })
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
        <div className="centeritems mdl-grid">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell">

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="txtTitulo" value={title} onChange={(event) => this.onTituloChange(event.target.value)} />
              <label className="mdl-textfield__label" htmlFor="txtTitulo">Titulo</label>
            </div>

            <br />

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="txtAutor" disabled={id !== null} value={author} onChange={(event) => this.onAutorChange(event.target.value)} />
              <label className="mdl-textfield__label" htmlFor="txtAutor">Autor</label>
            </div>

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
              <textarea className="mdl-textfield__input" type="text" rows="3" id="txtComentario" value={body} onChange={(event) => this.onConteudoChange(event.target.value)}></textarea>
              <label className="mdl-textfield__label" htmlFor="txtComentario">Conteúdo</label>
            </div>

            <span>
              <b>Categoria:</b>
              <div className="mdl-grid">
                {
                  categorias.map((categoria) => (
                    <div key={categoria.name} className="mdl-cell mdl-cell--1-col mdl-cell--1-offset">
                      <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" >
                        <input type="radio" itemID={'option' + categoria.name} className="mdl-radio__button" name="options"
                          value={categoria.name}
                          checked={categoria.name === category}
                          onChange={(e) => this.onCategoriaChange(e.currentTarget.value)}
                          disabled={id !== null}
                        />
                        <span className="mdl-radio__label" htmlFor={'option' + categoria.name}>{categoria.name}</span>
                      </label>
                    </div>
                  ))
                }
              </div>
            </span>
            <Link to={'/'}>Voltar</Link>
            <button style={{ float: 'right' }} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => this.Salvar(title, author, body, category, id)}>Salvar</button>
          </div>
          <div className="mdl-layout-spacer"></div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  categorias: state.categorias,
  postagem: state.postagem
}))(Editar)