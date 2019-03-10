import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import '../Style/Postagem.css'
import Button from 'react-bootstrap/Button'

function Postagem(props) {
    return (
        <tr>
            <td>
                <i className="fas fa-arrow-up pointer" onClick={() => props.onVote(true, props.postagem.id)}></i>
                <i className="fas fa-arrow-down pointer margemLeft" onClick={() => props.onVote(false, props.postagem.id)}></i>
            </td>
            <td>{props.postagem.title}</td>
            <td>{props.postagem.voteScore}</td>
            <td><Moment date={props.postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" /></td>
            <td>
                <Link to={'/detalhe/' + props.postagem.id}><Button variant="outline-info"><i className="fas fa-info"></i></Button></Link>
                <Link className="margemLeft" to={'/editar/' + props.postagem.id}><Button variant="outline-primary"><i className="fas fa-pen"></i></Button></Link>
                <Button className="margemLeft" onClick={() => props.onDelete(props.postagem)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button>
            </td>
        </tr>
    )
}

export default Postagem