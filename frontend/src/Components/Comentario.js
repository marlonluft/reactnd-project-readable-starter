import React, { Component } from 'react'
import Moment from 'react-moment';
import '../Style/Comentario.css'

class Comentario extends Component {
    render() {

        const { comentario, onVote, onUpdate, onDelete } = this.props

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
                        {comentario.body}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <div style={{ float: 'left' }}>
                            <i className="material-icons" onClick={() => onVote(true, comentario.id)}>arrow_drop_up</i>
                            <i className="material-icons" onClick={() => onVote(false, comentario.id)}>arrow_drop_down</i>
                            <b>{comentario.voteScore}</b>
                        </div>
                        <div style={{ float: 'right' }}>
                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => onUpdate(comentario)}>
                                <i className="material-icons" style={{ fontSize: '18px' }}>edit</i>
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--icon" onClick={() => onDelete(comentario)}>
                                <i className="material-icons" style={{ fontSize: '18px' }}>delete</i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>)
    }
}

export default Comentario