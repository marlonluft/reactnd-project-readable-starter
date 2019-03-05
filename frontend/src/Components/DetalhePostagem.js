import React, { Component } from 'react'
import '../Style/DetalhePostagem.css'
import Moment from 'react-moment';
import ListagemComentarios from './ListagemComentarios'
import NovoComentario from './NovoComentario'
import { handleGetComentario } from '../Actions/comentario'
import { connect } from 'react-redux'

class DetalhePostagem extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.postagem != null) {

            if (prevProps.postagem === null || prevProps.postagem.id !== this.props.postagem.id)
            {
                this.props.dispatch(handleGetComentario(this.props.postagem.id))
            }

            var dialog = document.getElementById('dialogo');
            dialog.show();

            document.getElementById('close').onclick = function () {
                dialog.close();
            };
        }
    }

    RenderizarChips = (icone, conteudo, contemMargem) => {

        let className = 'mdl-cell mdl-cell--1-col ' + (contemMargem ? 'margemEstatistica' : '');

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
        const { postagem, comentarios, FecharDialog } = this.props

        if (postagem === null) {
            return ('')
        }

        return (
            <dialog id="dialogo" className="mdl-dialog mdl-cell--5-col">
                <h4 className="mdl-dialog__title">{postagem.title} - {postagem.category}</h4>
                <span className="mdl-dialog__subtitle">{postagem.author}</span>
                <div className="mdl-dialog__content">
                    <p>
                        {postagem.body}
                    </p>
                    <div className="mdl-grid" style={{ padding: 0 }}>
                        {this.RenderizarChips(postagem.voteScore === 0 ? 'thumbs_up_down' : postagem.voteScore > 0 ? 'thumb_up' : 'thumb_down', postagem.voteScore, false)}
                        {this.RenderizarChips('comment', postagem.commentCount, true)}
                        {this.RenderizarChips('calendar_today', <Moment date={postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" />, true)}
                    </div>

                    <hr />

                    <NovoComentario />

                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <ListagemComentarios lista={comentarios} />
                    </div>

                </div>
                <div className="mdl-dialog__actions">
                    <button id="close" type="button" className="mdl-button close" onClick={() => FecharDialog()}>Fechar</button>
                </div>
            </dialog>
        )
    }
}

export default connect((state) => ({
    comentarios: state.comentarios,
}))(DetalhePostagem)