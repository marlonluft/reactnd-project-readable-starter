/* React */
import React, { Component } from 'react'

/* Actions */
import { handleAddComentario } from '../Actions/ComentarioAction'

/* CSS */
import '../Style/Comentario.css'

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class NovoComentario extends Component {

    state = {
        nome: '',
        comentario: ''
    }

    EnviarComentario(nome, comentario) {
        if (nome.length === 0) {
            alert('Favor informar o seu nome.');
        }
        else if (nome.trim().length < 3 || nome.trim().length > 50) {
            alert('Favor informar um nome entre 3 a 50 caracteres.');
        }
        else if (comentario.length === 0) {
            alert('Favor informar o comentário.');
        }
        else if (comentario.trim().length < 5 || comentario.trim().length > 300) {
            alert('Favor informar um comentário entre 5 a 300 caracteres.');
        }
        else {
            this.props.dispatch(handleAddComentario({
                timestamp: +new Date,
                body: comentario,
                author: nome,
                parentId: this.props.postId
            }, () => {
                // caso ocorra sucesso na inserção, então limpa os campos
                this.setState({
                    nome: '',
                    comentario: ''
                })
            }))
        }
    }

    onNomeChange = (novoNome) => {
        this.setState({
            nome: novoNome
        })
    }

    onComentarioChange = (novoComentario) => {
        this.setState({
            comentario: novoComentario
        })
    }


    render() {

        const { nome, comentario } = this.state

        return (
            <Card className="novoComentario">
                <Card.Header>Novo Comentário</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={(event) => this.onNomeChange(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" rows="3" placeholder="Digite seu comentário" value={comentario} onChange={(event) => this.onComentarioChange(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={() => this.EnviarComentario(nome, comentario)}>
                            Enviar
                </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default NovoComentario