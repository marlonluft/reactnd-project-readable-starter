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
import EditarRemoverPostagem from '../Components/EditarRemoverPostagem'

/* Actions */
import { handleGetComentario, handleAddComentario, handleDeleteComentario, handleAtualizarComentario, handlePostComentario } from '../Actions/ComentarioAction'
import { handleGetPostagemCB } from '../Actions/PostagemAction'
import { handlePostPostagem, handleDeletePostagem } from '../Actions/PostagemAction'

/* Bootstrap */
import Card from 'react-bootstrap/Card'

/* Util */
import Funcoes from '../Util/Funcoes'

class DetalhePostagemView extends Component {

  componentDidMount() {
    this.props.onLoad(() => {
      if (Funcoes.ehVazio(this.props.postagem)) {
        this.props.history.push('/404')
      }
    })
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

            <div style={{ display: 'inline-block' }}>
              <Votacao id={postagem.id} ehPostagem={true} onVote={this.props.onVote} onUpdate={() => { this.forceUpdate() }} />
              {/* Renderiza as estatisticas da postagem, como quantidade de comentários, score e data de criação. */}
              {this.RenderizarEstatistica(postagem.voteScore === 0 ? 'fa-hand-peace' : postagem.voteScore > 0 ? 'fa-thumbs-up' : 'fa-thumbs-down', postagem.voteScore)}
              {this.RenderizarEstatistica('fa-comment-alt', postagem.commentCount)}
              {this.RenderizarEstatistica('fa-calendar-alt', <Moment date={postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" />)}
            </div>
            <div style={{ display: 'inline-block', right: '10px', bottom: '10px', position: 'absolute' }}>
              <EditarRemoverPostagem postagem={postagem} deletePostagem={this.props.deletePostagem} history={this.props.history} />
            </div>
          </Card.Body>
        </Card>

        <hr />

        <h3>Comentários</h3>

        <NovoComentario postId={postagem.id} addComentario={this.props.addComentario} />

        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <ListagemComentarios
            lista={comentarios}
            onVote={this.props.onVote}
            atualizarComentario={this.props.atualizarComentario}
            deletarComentario={this.props.deletarComentario} />
        </div>

        <Link to={'/'}>Voltar</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: (callBackPostagem) => {
      // Consulta na api a lista de comentários com ligação a postagem sendo carrgada.
      dispatch(handleGetComentario(ownProps.match.params.postId))

      // Consulta na api a postagem requisitada.
      dispatch(handleGetPostagemCB(ownProps.match.params.postId, callBackPostagem))
    },
    onVote: (acrescentar, id, ehPostagem, onUpdate) => {
      if (ehPostagem) {
        dispatch(handlePostPostagem(acrescentar, id))
      }
      else {
        dispatch(handlePostComentario(acrescentar, id))
      }

      if (typeof onUpdate === 'function') {
        onUpdate()
      }
    },
    deletePostagem: (postagem, callBack) => {
      dispatch(handleDeletePostagem(postagem, callBack))
    },
    addComentario: (obj, callBack) => {
      dispatch(handleAddComentario(obj, callBack))
    },
    atualizarComentario: (novoComentario, timestamp, comentarioId) => {
      dispatch(handleAtualizarComentario(novoComentario, timestamp, comentarioId))
    },
    deletarComentario: (comentario) => {
      dispatch(handleDeleteComentario(comentario))
    }
  }
}

export default connect((state) => ({
  comentarios: state.comentarios,
  postagem: state.postagem
}), mapDispatchToProps)
  (DetalhePostagemView)