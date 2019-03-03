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
                <ul>
                    {
                        Postagens.map((postagem) => (
                            <Postagem key={postagem.id} postagem={postagem} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ListagemPostagens