import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListagemCategorias from '../Components/ListagemCategorias.js'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'

import { handleInitialData } from '../Actions/shared'

class Root extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleInitialData())
    }

    render() {

        if (typeof this.props.categorias === 'undefined' || typeof this.props.postagens === 'undefined') {
            return ('');
        }

        return (
            <div>
                <div className="centeritems mdl-grid">
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-cell mdl-cell--5-col">
                        <ListagemCategorias lista={this.props.categorias} />
                        <ListagemPostagens lista={this.props.postagens} dispatch={this.props.dispatch} />
                    </div>
                    <div className="mdl-layout-spacer"></div>
                </div>
                <Link id="btnCadastrar" to='/cadastrar' style={{ right: '10px', bottom: '10px', position: 'absolute' }}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
                        <i className="material-icons">add</i>
                    </button>
                </Link>
                <div className="mdl-tooltip mdl-tooltip--left" data-mdl-for="btnCadastrar">
                    Nova Postagem
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    postagens: state.postagens,
    categorias: state.categorias
}))(Root)