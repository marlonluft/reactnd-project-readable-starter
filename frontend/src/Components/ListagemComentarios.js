/* React */
import React, { Component } from 'react'

/* Componentes */
import Comentario from './Comentario.js'

class ListagemComentarios extends Component {

    render() {

        const { lista } = this.props

        return (
            <ul className="mdl-list">
                {
                    (lista === null || lista.length === 0) ? (
                        <li className="mdl-list__item mdl-list__item--three-line">Nenhum comentário</li>
                    ) : (
                            lista.map((comentario) => (
                                <Comentario
                                    key={comentario.id}
                                    comentario={comentario}
                                    onVote={this.props.onVote}
                                    atualizarComentario={this.props.atualizarComentario}
                                    deletarComentario={this.props.deletarComentario} />
                            ))
                        )
                }
            </ul>)
    }
}

export default ListagemComentarios