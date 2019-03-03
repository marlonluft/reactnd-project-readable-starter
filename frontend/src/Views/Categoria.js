import React from 'react'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'

function Categoria({ match }) {
    return (

        <div>
            <h2>{match.params.id}</h2>
            <ListagemPostagens />

            <Link to='/editar'>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
                    <i className="material-icons">add</i>
                </button>
            </Link>
        </div>
    );
}

export default Categoria