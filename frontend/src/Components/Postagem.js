import React from 'react'

function Postagem(props) {
    return (
        <li className="mdl-list__item mdl-list__item--two-line">
            <span className="mdl-list__item-primary-content">
                <span>{props.postagem.titulo}</span>
            </span>
            <span className="mdl-list__item-secondary-content">
                <span>{props.postagem.score}</span>
                <span className="mdl-list__item-sub-title">{props.postagem.dataCriacao}</span>
            </span>
        </li>
    )
}

export default Postagem