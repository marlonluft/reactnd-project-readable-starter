import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListagemCategorias from '../Components/ListagemCategorias.js'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import FiltroPostagens from '../Components/FiltroPostagens.js'
import NovaPostagem from '../Components/NovaPostagem.js'

import { handleInitialData } from '../Actions/shared'
import { handleSortPostagens } from '../Actions/postagem'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Root extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData(this.props.match.params.id || null))
    }

    filtar = (ordem, coluna) => {
        let ordemCrescente = ordem === "0"
        this.props.dispatch(handleSortPostagens(ordemCrescente, coluna))
        this.forceUpdate()
    }

    alterarCategoria = (route) => {
        //this.props.dispatch(handleInitialData(this.props.match.params.id || null))
        this.props.history.push(route)
        this.props.history.go()
    }

    render() {

        if (typeof this.props.categorias === 'undefined' || typeof this.props.postagens === 'undefined') {
            return ('');
        }

        return (
            <div>
                <h2>{this.props.match.params.id || 'Todas Categorias'}</h2>
                <Row>
                    <Col sm={8}>                        
                        <ListagemPostagens lista={this.props.postagens} dispatch={this.props.dispatch} />
                    </Col>
                    <Col sm={4}>
                        <NovaPostagem />
                        <FiltroPostagens dispatch={this.props.dispatch} filtar={this.filtar} />
                        <ListagemCategorias lista={this.props.categorias} route={this.props.location.pathname.toUpperCase()} alterarCategoria={this.alterarCategoria}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect((state) => ({
    postagens: state.postagens,
    categorias: state.categorias
}))(Root)