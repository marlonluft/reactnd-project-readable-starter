/* React */
import React, { Component } from 'react'
import Moment from 'react-moment';

/* CSS */
import '../Style/Comentario.css'

/* Componentes */
import Votacao from './Votacao'

/* Bootstrap */
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Comentario extends Component {

    state = {
        editMode: false,
        novoComentario: this.props.comentario.body
    }

    onCancel = () => {
        this.setState({
            editMode: false,
            novoComentario: this.props.comentario.body
        })
    }

    onSave = (novoComentario, comentarioId) => {

        if (novoComentario.length === 0) {
            alert('Favor informar o comentário.');
        }
        else if (novoComentario.length < 5 || novoComentario.length > 300) {
            alert('Favor informar um comentário entre 5 a 300 caracteres.');
        }
        else {
            this.onUpdate(novoComentario, comentarioId)

            this.setState({
                editMode: false
            })
        }
    }

    onEdit = () => {
        this.setState({
            editMode: true
        })
    }

    onComentarioChange = (novoComentario) => {
        this.setState({
            novoComentario
        })
    }

    onUpdate = (novoComentario, comentarioId) => {
        this.props.atualizarComentario(novoComentario, +new Date, comentarioId)
    }

    onDelete = (comentario) => {
        var resposta = window.confirm("Confirma a exclusão do comentário?")
        if (resposta === true) {
            this.props.deletarComentario(comentario)
        }
    }


    render() {

        const { comentario } = this.props
        const { editMode, novoComentario } = this.state

        return (
            <Card className="margemTop">
                <Card.Body>
                    <Card.Title>
                        {
                            editMode ? (
                                <Form.Control type="text" placeholder="Digite o comentário" id={"txtComentario" + comentario.id} value={novoComentario} onChange={(event) => this.onComentarioChange(event.target.value)} />
                            ) :
                                (
                                    comentario.body
                                )
                        }
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {comentario.author}
                        <span className="card-subtitulo margemLeft dataComentario"><Moment date={comentario.timestamp} format="DD/MM/YYYY HH:mm:ss" /></span>
                    </Card.Subtitle>
                    <div style={{ display: 'inline-block' }}>
                        <Votacao id={comentario.id} ehPostagem={false} onVote={this.props.onVote} />
                        <b className="margemLeft">{comentario.voteScore}</b>
                    </div>

                    <div style={{ display: 'inline-block', position: 'absolute', right: '10px' }}>
                        {
                            editMode ? (
                                <span>
                                    <Button className="margemLeft" onClick={() => this.onSave(novoComentario, comentario.id)} variant="outline-primary"><i className="fas fa-save"></i></Button>
                                    <Button className="margemLeft" onClick={() => this.onCancel()} variant="outline-secondary"><i className="fas fa-times"></i></Button>
                                </span>
                            ) :
                                (
                                    <span>
                                        <Button className="margemLeft" onClick={() => this.onEdit()} variant="outline-primary"><i className="fas fa-pen"></i></Button>
                                        <Button className="margemLeft" onClick={() => this.onDelete(comentario)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button>
                                    </span>
                                )
                        }
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Comentario