import React, { Component } from 'react'

class ListagemPostagens extends Component {
    render() {
        let Postagens = [
            { id: 0, titulo: 'Categoria 1' },
            { id: 1, titulo: 'Categoria 2' },
            { id: 2, titulo: 'Categoria 3' }
        ];

        return (
            <div>
                <a href="#">Score</a>
                <a href="#">Data</a>
                <ul>
                    {
                        Postagens.map((postagem) => (
                            <li key={postagem.id}>{postagem.titulo}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ListagemPostagens