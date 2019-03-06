import React, { Component } from 'react'
import Moment from 'react-moment';
import '../Style/Comentario.css'

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
            this.props.onUpdate(novoComentario, comentarioId)

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


    render() {

        const { comentario, onVote, onDelete } = this.props
        const { editMode, novoComentario } = this.state

        return (
            <li className="card-comentario mdl-list__item ">
                <div className="mdl-card">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">
                            {comentario.author}
                            <span className="card-subtitulo"><Moment date={comentario.timestamp} format="DD/MM/YYYY HH:mm:ss" /></span>
                        </h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {
                            editMode ? (
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input" type="text" id={"txtComentario" + comentario.id} value={novoComentario} onChange={(event) => this.onComentarioChange(event.target.value)} />
                                    <label className="mdl-textfield__label" htmlFor={"txtComentario" + comentario.id}>Digite o comentário</label>
                                </div>
                            ) : (
                                    comentario.body
                                )
                        }
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <div style={{ float: 'left' }}>
                            <i className="material-icons" onClick={() => onVote(true, comentario.id)}>arrow_drop_up</i>
                            <i className="material-icons" onClick={() => onVote(false, comentario.id)}>arrow_drop_down</i>
                            <b>{comentario.voteScore}</b>
                        </div>
                        <div style={{ float: 'right' }}>
                            {
                                editMode ? (
                                    <div>
                                        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => this.onSave(novoComentario, comentario.id)}>
                                            <i className="material-icons" style={{ fontSize: '18px' }}>save</i>
                                        </button>
                                        <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => this.onCancel()}>
                                            <i className="material-icons" style={{ fontSize: '18px' }}>cancel</i>
                                        </button>
                                    </div>
                                ) : (
                                        <div>
                                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => this.onEdit()}>
                                                <i className="material-icons" style={{ fontSize: '18px' }}>edit</i>
                                            </button>
                                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => onDelete(comentario)}>
                                                <i className="material-icons" style={{ fontSize: '18px' }}>delete</i>
                                            </button>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </li>)
    }
}

export default Comentario