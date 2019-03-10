import React, { Component } from 'react'
import '../Style/DetalhePostagem.css'
import Moment from 'react-moment';
import ListagemComentarios from '../Components/ListagemComentarios'
import NovoComentario from '../Components/NovoComentario'
import { handleGetComentario } from '../Actions/comentario'
import { handleGetPostagem } from '../Actions/postagem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

class Detalhe extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetComentario(this.props.match.params.id))
    this.props.dispatch(handleGetPostagem(this.props.match.params.id))
  }

  RenderizarChips = (icone, conteudo) => {
    return (
      <span className="margemLeft"><i className={"fas " + icone}></i>{conteudo}</span>
    );
  }

  render() {
    const { postagem, comentarios } = this.props

    if (typeof postagem === 'undefined' || postagem === null) {
      return ('')
    }

    return (
      <div>
        <h2>{'Detalhes'}</h2>
        <Card>
          <Card.Body>
            <Card.Title>{postagem.title} - {postagem.category}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{postagem.author}</Card.Subtitle>
            <Card.Text>
              {postagem.body}
            </Card.Text>
            {this.RenderizarChips(postagem.voteScore === 0 ? 'fa-hand-peace' : postagem.voteScore > 0 ? 'fa-thumbs-up' : 'fa-thumbs-down', postagem.voteScore)}
            {this.RenderizarChips('fa-comment-alt', postagem.commentCount)}
            {this.RenderizarChips('fa-calendar-alt', <Moment date={postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" />)}
          </Card.Body>
        </Card>

        <hr />
        <h3>Comentários</h3>
        <NovoComentario postId={postagem.id} dispatch={this.props.dispatch} />
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <ListagemComentarios lista={comentarios} dispatch={this.props.dispatch} />
        </div>

        <Link to={'/'}>Voltar</Link>
      </div>
    )
  }
}

export default connect((state) => ({
  comentarios: state.comentarios,
  postagem: state.postagem
}))(Detalhe)