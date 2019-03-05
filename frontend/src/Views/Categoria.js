import React, { Component } from 'react'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import { Link } from 'react-router-dom'
import { handleGetPostagens } from '../Actions/postagem'

import { connect } from 'react-redux'

class Categoria extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleGetPostagens(this.props.match.params.id))
    }

    render() {
        return (
            <div>
                <div className="centeritems mdl-grid">
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-cell">
                        <h2>{this.props.match.params.id}</h2>
                        <ListagemPostagens lista={this.props.postagens} dispatch={this.props.dispatch} />
                        <Link to={'/'}>Voltar</Link>
                    </div>
                    <div className="mdl-layout-spacer"></div>
                </div>
                <Link id="btnCadastrarCategoria" to='/cadastrar' style={{ right: '10px', bottom: '10px', position: 'absolute' }}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
                        <i className="material-icons">add</i>
                    </button>
                </Link>
                <div className="mdl-tooltip mdl-tooltip--left" data-mdl-for="btnCadastrarCategoria">
                    Nova Postagem
                </div>
            </div>
        )
    };
}

export default connect((state) => ({
    postagens: state.postagens
}))(Categoria)