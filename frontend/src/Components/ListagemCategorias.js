/* React */
import React, { Component } from 'react'

/* Bootstrap */
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class ListagemCategorias extends Component {

    render() {

        const { lista, route, alterarCategoria } = this.props

        return (
            <Card body style={{marginTop: '10px'}}>
                <Card.Title>Categorias</Card.Title>

                <ListGroup as="ul">
                    <ListGroup.Item key="Todas" as="li" active={route === "/"} onClick={() => alterarCategoria('/')}>
                            Todas
                    </ListGroup.Item>
                    {
                        lista.map((categoria) => (
                            <ListGroup.Item key={categoria.name} as="li" active={route === "/CATEGORIA/" + categoria.name.toUpperCase()} onClick={() => alterarCategoria('/categoria/' + categoria.name)}>
                                    {categoria.name}
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card>
        )
    }
}

export default ListagemCategorias