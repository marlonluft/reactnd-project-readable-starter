/* React */
import React, { Component } from 'react'

/* Componentes */
import Postagem from './Postagem.js'

/* Actions */
import { handleDeletePostagem, handlePostPostagem } from '../Actions/postagem'

/* Bootstrap */
import Table from 'react-bootstrap/Table'

class ListagemPostagens extends Component {

    onDelete = (postagem) => {
        var resposta = window.confirm("Confirma a exclusão da postagem '" + postagem.title + "'?")
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
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Titulo</th>
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
                </Table>
            </div>
        )
    }
}

export default ListagemPostagens