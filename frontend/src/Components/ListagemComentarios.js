/* React */
import React, { Component } from 'react'

/* Componentes */
import Comentario from './Comentario.js'

/* Actions */
import { handlePostComentario, handleDeleteComentario, handleAtualizarComentario } from '../Actions/comentario'

class ListagemComentarios extends Component {

    onVote = (acrescentar, comentarioId) => {
        this.props.dispatch(handlePostComentario(acrescentar, comentarioId))
    }

    onUpdate = (novoComentario, comentarioId) => {
        this.props.dispatch(handleAtualizarComentario(novoComentario, +new Date, comentarioId))
    }

    onDelete = (comentario) => {
        this.props.dispatch(handleDeleteComentario(comentario))
    }

    render() {

        const { lista } = this.props

        return (
            <ul className="mdl-list">
                {
                    (lista === null || lista.length === 0) ? (
                        <li className="mdl-list__item mdl-list__item--three-line">Nenhum comentário</li>
                    ) : (
                            lista.map((comentario) => (
                                <Comentario key={comentario.id} comentario={comentario} onVote={this.onVote} onUpdate={this.onUpdate} onDelete={this.onDelete} />
                            ))
                        )
                }
            </ul>)
    }
}

export default ListagemComentarios