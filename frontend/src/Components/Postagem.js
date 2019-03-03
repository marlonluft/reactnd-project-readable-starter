import React from 'react'

function Postagem(props) {
    return (
        <li>
            <h3>{props.postagem.titulo}</h3>
            <span>{props.postagem.dataCriacao}</span>
            <span>{props.postagem.score}</span>
        </li>
    )
}

export default Postagem