/* React */
import React, { Component } from 'react'

/* Componentes */
import Postagem from './Postagem.js'

/* Bootstrap */
import Table from 'react-bootstrap/Table'

class ListagemPostagens extends Component {

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
                            <th>Autor</th>
                            <th>Qtd de Comentários</th>
                            <th>Data de Criação</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (lista === null || typeof lista === 'undefined' || lista.length === 0) ? (
                                <tr>
                                    <td colSpan="7">Nenhuma postagem disponível</td>
                                </tr>) : (
                                    lista.map((postagem) => (
                                        <Postagem key={postagem.id} postagem={postagem} dispatch={this.props.dispatch} history={this.props.history} />
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