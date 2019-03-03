import React from 'react'

function Postagem(props) {
    return (
        <tr>
            <td className="mdl-data-table__cell--non-numeric">{props.postagem.titulo}</td>
            <td>{props.postagem.score}</td>
            <td>{props.postagem.dataCriacao}</td>
        </tr>
    )
}

export default Postagem