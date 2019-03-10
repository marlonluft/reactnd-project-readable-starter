/* React */
import React, { Component } from 'react'

/* Actions */
import { handlePostPostagem } from '../Actions/PostagemAction'
import { handlePostComentario } from '../Actions/ComentarioAction'

class Votacao extends Component {

    onVote = (acrescentar, id, ehPostagem, onUpdate) => {
        if (ehPostagem) {
            this.props.dispatch(handlePostPostagem(acrescentar, id))
        }
        else {
            this.props.dispatch(handlePostComentario(acrescentar, id))
        }

        if (typeof onUpdate === 'function') {
            onUpdate()
        }
    }

    render() {

        const { id, ehPostagem, onUpdate } = this.props

        return (
            <div style={{ display: 'inline-block' }}>
                <i className="fas fa-arrow-up pointer" onClick={() => this.onVote(true, id, ehPostagem, onUpdate)}></i>
                <i className="fas fa-arrow-down pointer margemLeft" onClick={() => this.onVote(false, id, ehPostagem, onUpdate)}></i>
            </div>
        )
    }
}

export default Votacao