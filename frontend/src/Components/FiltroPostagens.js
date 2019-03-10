/* React */
import React, { Component } from 'react'

/* Bootstrap */
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FiltroPostagens extends Component {

    state = {
        ordem: "0",
        coluna: 'voteScore'
    }

    onOrdemChange = (novaOrdem) => {
        this.setState({
            ordem: novaOrdem
        })
    }

    onColunaChange = (novaColuna) => {
        this.setState({
            coluna: novaColuna
        })
    }


    render() {

        const { ordem, coluna } = this.state
        const { filtar } = this.props

        return (
            <Card body style={{marginTop: '10px'}}>
                <Card.Title>Filtro</Card.Title>

                <Form.Group controlId="slcColuna">
                    <Form.Label>Coluna</Form.Label>
                    <Form.Control as="select" onChange={(event) => this.onColunaChange(event.target.value)}>
                        <option value="voteScore">Score</option>
                        <option value="timestamp">Data</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="slcordem">
                    <Form.Label>Ordem</Form.Label>
                    <Form.Control as="select" onChange={(event) => this.onOrdemChange(event.target.value)}>
                        <option value="0">Crescente</option>
                        <option value="1">Decrescente</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="secondary" onClick={() => filtar(ordem, coluna)}>Filtrar</Button>

            </Card>
        )
    }
}

export default FiltroPostagens