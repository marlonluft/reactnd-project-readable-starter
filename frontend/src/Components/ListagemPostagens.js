import React, { Component } from 'react'
import Postagem from './Postagem.js'
import { handleDeletePostagem, handlePostPostagem } from '../Actions/postagem'

class ListagemPostagens extends Component {

    onDelete = (postagem) => {
        var resposta = window.confirm("Confimra a exclusão da postagem '" + postagem.title + "'?")
        if (resposta === true) {
            this.props.dispatch(handleDeletePostagem(postagem))
        }
    }

    onVote = (acrescentar, postagemId) => {
        this.props.dispatch(handlePostPostagem(acrescentar, postagemId))
    }

    render() {

        const { lista } = this.props

        return (
            <div>
                <a href="#">Score</a>
                <a href="#">Data</a>

                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th className="mdl-data-table__cell--non-numeric">Titulo</th>
                            <th>Score</th>
                            <th>Data de Criação</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (lista === null || typeof lista === 'undefined' || lista.length === 0) ? (
                                <tr>
                                    <td colSpan="5">Nenhuma postagem disponível</td>
                                </tr>) : (
                                    lista.map((postagem) => (
                                        <Postagem key={postagem.id} postagem={postagem} onDelete={this.onDelete} onVote={this.onVote} />
                                    ))
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListagemPostagens