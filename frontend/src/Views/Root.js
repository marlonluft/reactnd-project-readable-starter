import React from 'react'
import ListagemCategorias from '../Components/ListagemCategorias.js'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'

function Root() {
    return (
        <div>
            <ListagemCategorias />
            <ListagemPostagens />
            <Link to='/editar'>+Novo</Link>
        </div>
    )
}

export default Root