import React, { Component } from 'react'
import '../Style/DetalhePostagem.css'
import Moment from 'react-moment';
import ListagemComentarios from '../Components/ListagemComentarios'
import NovoComentario from '../Components/NovoComentario'
import { handleGetComentario } from '../Actions/comentario'
import { handleGetPostagem } from '../Actions/postagem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Detalhe extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetComentario(this.props.match.params.id))
    this.props.dispatch(handleGetPostagem(this.props.match.params.id))
  }

  RenderizarChips = (icone, conteudo, contemMargem) => {

    let className = 'mdl-cell mdl-cell--2-col ' + (contemMargem ? 'margemEstatistica' : '');

    return (
      <div className={className}>
        <span className="mdl-chip mdl-chip--contact">
          <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
            <i className="material-icons" style={{ verticalAlign: 'middle', fontSize: '18px' }}>{icone}</i>
          </span>
          <span className="mdl-chip__text">{conteudo}</span>
        </span>
      </div>
    );
  }

  render() {
    const { postagem, comentarios } = this.props

    if (typeof postagem === 'undefined' || postagem === null) {
      return ('')
    }

    return (
      <div>
        <div className="centeritems mdl-grid">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell">
            <h4>{postagem.title} - {postagem.category}</h4>
            <span>{postagem.author}</span>
            <div>
              <p>
                {postagem.body}
              </p>
              <div className="mdl-grid" style={{ padding: 0 }}>
                {this.RenderizarChips(postagem.voteScore === 0 ? 'thumbs_up_down' : postagem.voteScore > 0 ? 'thumb_up' : 'thumb_down', postagem.voteScore, false)}
                {this.RenderizarChips('comment', postagem.commentCount, true)}
                {this.RenderizarChips('calendar_today', <Moment date={postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" />, true)}
              </div>
              <hr />
              <h3>Comentários</h3>
              <NovoComentario postId={postagem.id} dispatch={this.props.dispatch} />
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <ListagemComentarios lista={comentarios} dispatch={this.props.dispatch} />
              </div>
            </div>
            <Link to={'/'}>Voltar</Link>
          </div>
          <div className="mdl-layout-spacer"></div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  comentarios: state.comentarios,
  postagem: state.postagem
}))(Detalhe)