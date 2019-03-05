import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListagemCategorias extends Component {
    render() {

        const { lista } = this.props

        return (
            <div style={{textAlign: 'center'}}>
                {
                    lista.map((categoria) => (
                        <Link key={categoria.name} to={'/categoria/' + categoria.name} style={{marginLeft: '10px'}}>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                                <i className="material-icons">category</i>
                                {categoria.name}
                            </button>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default ListagemCategorias