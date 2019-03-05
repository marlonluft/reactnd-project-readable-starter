import React, { Component } from 'react'
import Comentario from './Comentario'

class ListagemComentarios extends Component {

    onVote = (acrescentar, comentarioId) => {
        //this.props.dispatch(handlePostPostagem(acrescentar, comentarioId))
    }

    onUpdate = (comentario) => {

    }

    onDelete = (comentario) => {

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