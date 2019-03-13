/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'

/* Componentes */
import ListagemCategorias from '../Components/ListagemCategorias.js'
import ListagemPostagens from '../Components/ListagemPostagens.js'
import FiltroPostagens from '../Components/FiltroPostagens.js'
import NovaPostagem from '../Components/NovaPostagem.js'

/* Actions */
import { handleInitialData } from '../Actions/CompartilhadoAction'
import { handleSortPostagens } from '../Actions/PostagemAction'

/* Bootstrap */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ListagemPostagemView extends Component {

    componentDidMount() {
        // Realiza a busca dos dados para preenchimento da tela, listagem de psotagens e de categorias
        this.props.onLoad()
    }

    filtar = (ordem, coluna) => {
        // Realiza o filtro da listagem de postagens
        let ordemCrescente = ordem === "0"
        this.props.filtrarPostagem(ordemCrescente, coluna)
        this.forceUpdate()
    }

    alterarCategoria = (route) => {
        // Altera a rota e força a atualização da tela.
        this.props.history.push(route)
        this.props.history.go()
    }

    render() {

        if (typeof this.props.categorias === 'undefined' || typeof this.props.postagens === 'undefined') {
            return ('Falha ao carregar a página, favor tentar novamente.');
        }

        return (
            <div>
                <h2>{this.props.match.params.categoria || 'Todas Categorias'}</h2>
                <Row>
                    <Col sm={8}>
                        <ListagemPostagens lista={this.props.postagens} dispatch={this.props.dispatch} history={this.props.history} />
                    </Col>
                    <Col sm={4}>
                        <NovaPostagem />
                        <FiltroPostagens filtar={this.filtar} />
                        <ListagemCategorias lista={this.props.categorias} route={this.props.location.pathname.toUpperCase()} alterarCategoria={this.alterarCategoria} />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: () => {
            dispatch(handleInitialData(ownProps.match.params.categoria || null))
        },
        filtrarPostagem: (ordemCrescente, coluna) => {
            dispatch(handleSortPostagens(ordemCrescente, coluna))
        }
    }
}

export default connect((state) => ({
    postagens: state.postagens,
    categorias: state.categorias
}), mapDispatchToProps)
    (ListagemPostagemView)