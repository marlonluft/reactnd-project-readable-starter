import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import '../Style/Postagem.css'

function Postagem(props) {
    return (
        <tr>
            <td>
            <i className="material-icons" onClick={() => props.onVote(true, props.postagem.id)}>arrow_drop_up</i>
            <i className="material-icons" onClick={() => props.onVote(false, props.postagem.id)}>arrow_drop_down</i>
            </td>
            <td className="mdl-data-table__cell--non-numeric">{props.postagem.title}</td>
            <td>{props.postagem.voteScore}</td>
            <td><Moment date={props.postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" /></td>
            <td>
                <button className="mdl-button mdl-js-button mdl-button--icon"><Link to={'/detalhe/' + props.postagem.id}><i className="material-icons">info</i></Link></button>
                <button className="mdl-button mdl-js-button mdl-button--icon"><Link to={'/editar/' + props.postagem.id}><i className="material-icons">edit</i></Link></button>
                <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--accent" onClick={() => props.onDelete(props.postagem)}><i className="material-icons">delete</i></button>
            </td>
        </tr>
    )
}

export default Postagem