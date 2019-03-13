/* React */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Bootstrap */
import Button from 'react-bootstrap/Button'

class EditarRemoverPostagem extends Component {

    onDelete = (postagem) => {
        var resposta = window.confirm("Confirma a exclusão da postagem '" + postagem.title + "'?")
        if (resposta === true) {
            this.props.deletePostagem(postagem, () => {
                // volta para a página inicial
                this.props.history.push('/')
                this.props.history.go()
            })
        }
    }

    render() {

        const { postagem } = this.props

        return (
            <div style={{ display: 'inline-block' }}>
                <Link className="margemLeft" to={'/editar/' + postagem.id}><Button variant="outline-primary"><i className="fas fa-pen"></i></Button></Link>
                <Button className="margemLeft" onClick={() => this.onDelete(postagem)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button>
            </div>
        )
    }
}

export default EditarRemoverPostagem