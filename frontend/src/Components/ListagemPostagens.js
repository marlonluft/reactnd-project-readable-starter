import React, { Component } from 'react'
import Postagem from './Postagem.js'
import { handleDeletePostagem, handlePostPostagem, handleSortPostagens } from '../Actions/postagem'

class ListagemPostagens extends Component {

    state = {
        ordemCrescente: true,
        ordemColuna: 'voteScore'
    }

    onDelete = (postagem) => {
        var resposta = window.confirm("Confirma a exclusão da postagem '" + postagem.title + "'?")
        if (resposta === true) {
            this.props.dispatch(handleDeletePostagem(postagem))
        }
    }

    onVote = (acrescentar, postagemId) => {
        this.props.dispatch(handlePostPostagem(acrescentar, postagemId))
    }

    onSort = (coluna) => {

        var ordemCrescenteNova = coluna === this.state.ordemColuna ?  !this.state.ordemCrescente : true

        this.setState({
            ordemCrescente: ordemCrescenteNova,
            ordemColuna: coluna
        })

        this.props.dispatch(handleSortPostagens(ordemCrescenteNova, coluna))
    }

    render() {

        const { lista } = this.props
        
        return (
            <div>
                <a href="#" onClick={() => this.onSort('voteScore')}>Score</a>
                <a href="#" onClick={() => this.onSort('timestamp')}>Data</a>

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