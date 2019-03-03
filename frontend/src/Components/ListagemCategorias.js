import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                        <Link key={categoria.id} to={'/categoria/'+categoria.id}>{categoria.nome}</Link>
                    ))
                }
            </div>
        )
    }
}

export default ListagemCategorias