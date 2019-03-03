import React, { Component } from 'react'

class ListagemCategorias extends Component {
    render() {
        let Categorias = [
            { id: 0, nome: 'Categoria 1' },
            { id: 1, nome: 'Categoria 2' },
            { id: 2, nome: 'Categoria 3' }
        ];

        return (
            <div>
                {
                    Categorias.map((categoria) => (
                        <div key={categoria.id}>{categoria.nome}</div>
                    ))
                }
            </div>
        )
    }
}

export default ListagemCategorias