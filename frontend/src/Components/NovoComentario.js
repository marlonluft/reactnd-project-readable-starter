import React, { Component } from 'react'
import { handleAddComentario } from '../Actions/comentario'

class NovoComentario extends Component {

    state = {
        nome: '',
        comentario: ''
    }

    EnviarComentario(nome, comentario) {
        if (nome.length === 0) {
            alert('Favor informar o seu nome.');
        }
        else if (nome.length < 3 || nome.length > 50) {
            alert('Favor informar um nome entre 3 a 50 caracteres.');
        }
        else if (comentario.length === 0) {
            alert('Favor informar o comentário.');
        }
        else if (comentario.length < 5 || comentario.length > 300) {
            alert('Favor informar um comentário entre 5 a 300 caracteres.');
        }
        else {
            this.props.dispatch(handleAddComentario({
                timestamp: +new Date,
                body: comentario,
                author: nome,
                parentId: this.props.postId
            }))

            this.forceUpdate()
        }
    }

    onNomeChange = (novoNome) => {
        this.setState({
            nome: novoNome
        })
    }

    onComentarioChange = (novoComentario) => {
        this.setState({
            comentario: novoComentario
        })
    }


    render() {

        const { nome, comentario } = this.state

        return (
            <div className="centeritems mdl-grid">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--7-col">

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="txtNome" value={nome} onChange={(event) => this.onNomeChange(event.target.value)} />
                        <label className="mdl-textfield__label" htmlFor="txtNome">Digite seu nome</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
                        <textarea className="mdl-textfield__input" type="text" rows="3" id="txtComentario" value={comentario} onChange={(event) => this.onComentarioChange(event.target.value)}></textarea>
                        <label className="mdl-textfield__label" htmlFor="txtComentario">Digite seu comentário</label>
                    </div>

                    <button style={{ float: 'right' }} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => this.EnviarComentario(nome, comentario)}>Enviar</button>
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        )
    }
}

export default NovoComentario