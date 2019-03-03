import React from 'react'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'

function Categoria({ match }) {
    return (

        <div>
            <h2>{match.params.id}</h2>
            <ListagemPostagens />
            <Link to='/editar'>+Novo</Link>
        </div>
    );
}

export default Categoria