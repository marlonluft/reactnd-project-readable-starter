/* React */
import React from 'react'
import { Link } from 'react-router-dom'

/* Componentes */
import Moment from 'react-moment';
import Votacao from './Votacao'
import EditarRemoverPostagem from './EditarRemoverPostagem'

/* CSS */
import '../Style/Postagem.css'

/* Bootstrap */
import Button from 'react-bootstrap/Button'

function Postagem(props) {
    return (
        <tr>
            <td>
                <Votacao id={props.postagem.id} ehPostagem={true} onVote={props.onVote} />
            </td>
            <td>{props.postagem.title}</td>
            <td>{props.postagem.voteScore}</td>
            <td>{props.postagem.author}</td>
            <td>{props.postagem.commentCount}</td>
            <td><Moment date={props.postagem.timestamp} format="DD/MM/YYYY HH:mm:ss" /></td>
            <td>
                <Link to={'/' + props.postagem.category + '/' + props.postagem.id}><Button variant="outline-info"><i className="fas fa-info"></i></Button></Link>
                <EditarRemoverPostagem postagem={props.postagem} deletePostagem={props.deletePostagem} history={props.history} />
            </td>
        </tr>
    )
}

export default Postagem