/* React */
import React, { Component } from 'react'

/* Actions */
import { handlePostPostagem } from '../Actions/PostagemAction'
import { handlePostComentario } from '../Actions/ComentarioAction'

class Votacao extends Component {

    onVote = (acrescentar, id, ehPostagem) => {
        if (ehPostagem) {
            this.props.dispatch(handlePostPostagem(acrescentar, id))
        }
        else {
            this.props.dispatch(handlePostComentario(acrescentar, id))
        }
    }

    render() {

        const { id, ehPostagem } = this.props

        return (
            <div style={{display: 'inline-block'}}>
                <i className="fas fa-arrow-up pointer" onClick={() => this.onVote(true, id, ehPostagem)}></i>
                <i className="fas fa-arrow-down pointer margemLeft" onClick={() => this.onVote(false, id, ehPostagem)}></i>
            </div>
        )
    }
}

export default Votacao