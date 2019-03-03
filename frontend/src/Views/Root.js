import React from 'react'
import ListagemCategorias from '../Components/ListagemCategorias.js'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'

function Root() {
    return (
        <div>
            <ListagemCategorias />
            <ListagemPostagens />
            
            <Link to='/editar'>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
                    <i className="material-icons">add</i>
                </button>
            </Link>
        </div>
    )
}

export default Root