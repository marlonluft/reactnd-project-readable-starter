/* React */
import React, { Component } from 'react'

class Votacao extends Component {
    render() {

        const { id, ehPostagem, onUpdate } = this.props

        return (
            <div style={{ display: 'inline-block' }}>
                <i className="fas fa-arrow-up pointer" onClick={() => this.props.onVote(true, id, ehPostagem, onUpdate)}></i>
                <i className="fas fa-arrow-down pointer margemLeft" onClick={() => this.props.onVote(false, id, ehPostagem, onUpdate)}></i>
            </div>
        )
    }
}

export default Votacao