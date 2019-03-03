import React, { Component } from 'react'
import Postagem from './Postagem.js'

class ListagemPostagens extends Component {

    render() {
        let Postagens = [
            {
                id: 0,
                titulo: 'Titulo postagem 0',
                dataCriacao: new Date().toString(),
                score: 0
            },
            {
                id: 1,
                titulo: 'Titulo postagem 1',
                dataCriacao: new Date().toString(),
                score: 1
            },
            {
                id: 2,
                titulo: 'Titulo postagem 2',
                dataCriacao: new Date().toString(),
                score: 2
            },
        ];

        return (
            <div>
                <a href="#">Score</a>
                <a href="#">Data</a>

                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">Titulo</th>
                            <th>Score</th>
                            <th>Data de Criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Postagens.map((postagem) => (
                                <Postagem key={postagem.id} postagem={postagem} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListagemPostagens