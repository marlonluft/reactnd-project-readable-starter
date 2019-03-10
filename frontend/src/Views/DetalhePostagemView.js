/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* CSS */
import '../Style/DetalhePostagem.css'

/* Componentes */
import Moment from 'react-moment';
import ListagemComentarios from '../Components/ListagemComentarios'
import NovoComentario from '../Components/NovoComentario'
import Votacao from '../Components/Votacao'

/* Actions */
import { handleGetComentario } from '../Actions/ComentarioAction'
import { handleGetPostagem } from '../Actions/PostagemAction'

/* Bootstrap */
import Card from 'react-bootstrap/Card'

class DetalhePostagemView extends Component {

  componentDidMount() {
    // Consulta na api a lista de comentários com ligação a postagem sendo carrgada.
    this.props.dispatch(handleGetComentario(this.props.match.params.postId))

    // Consulta na api a postagem requisitada.
    this.props.dispatch(handleGetPostagem(this.props.match.params.postId))
  }

  RenderizarEstatistica = (icone, conteudo) => {
    // Retorna um ícone junto com uma informação customizada (Utilizado para mostrar as estatistica da postagem, ex: score).
    return (
      <span className="margemLeft"><i className={"fas " + icone}></i>{conteudo}</span>
    );
  }

  render() {
    const { postagem, comentarios } = this.props

    if (typeof postagem === 'undefined' || postagem === null) {
      return ('Falha ao consulta a postagem, favor tentar novamente.')
    }

    return (
      <div>
        <h2>Detalhes</h2>
        <Card>
          <Card.Body>
            <Card.Title>{postagem.title} - {postagem.category}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{postagem.author}</Card.Subtitle>
            <Card.Text>
              {postagem.body}
            </Card.Text>

            <div>
              <Votacao id={postagem.id} ehPostagem={true} dispatch={this.props.dispatch} />
              {/* Renderiza as estatisticas da postagem, como quantidade de comentários, score e data de criação. */}
              {this.RenderizarEstatistica(postagem.voteScore === 0 ? 'fa-hand-peace' : postagem.voteScore > 0 ? 'fa-thumbs-up' : 'fa-thumbs-down', postagem.voteScore)}
              {this.RenderizarEstatistica('fa-comment-alt', postagem.commentCount)}
              {this.RenderizarEstatistica('fa-calendar-alt', <Moment date={postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" />)}
            </div>
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
}))(DetalhePostagemView)