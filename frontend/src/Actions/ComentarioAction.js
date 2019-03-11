import API from '../Util/API'

export const ADD_COMENTARIO= 'ADD_COMENTARIO'
export const REMOVE_COMENTARIO = 'REMOVE_COMENTARIO'
export const GET_COMENTARIOS = 'GET_COMENTARIOS'
export const POST_COMENTARIO = 'POST_COMENTARIO'
export const PUT_COMENTARIO = 'PUT_COMENTARIO'

function getComentarios (comentarios) {
  return {
    type: GET_COMENTARIOS,
    comentarios,
  }
}

function addComentario (comentario) {
  return {
    type: ADD_COMENTARIO,
    comentario,
  }
}

function removeComentario (id, parentId) {
  return {
    type: REMOVE_COMENTARIO,
    id,
    parentId,
  }
}

function votarComentario(acrescentar, id) {
  return {
    type: POST_COMENTARIO,
    id,
    acrescentar
  }
}

function atualizarComentario(novoComentario, id) {
  return {
    type: PUT_COMENTARIO,
    id,
    novoComentario
  }
}

export function handleAddComentario (objeto, callBack) {
  return (dispatch) => {
    
    objeto.id = API.createUUID()

    return API.postComment(objeto)
      .then((comentario) => {
        dispatch(addComentario(comentario))  
        callBack()      
      })
      .catch((e) => alert('Ocorreu um erro ao adicionar o comentario. Tente novamente.'))
  }
}

export function handleDeleteComentario (comentario) {
  return (dispatch) => {
    dispatch(removeComentario(comentario.id, comentario.parentId))
    return API.deleteComentario(comentario.id)
      .catch((e) => {
        dispatch(addComentario(comentario))
        alert('ocorreu um erro ao deletar o comentario. Tente novamente.')
      })
  }
}

export function handleGetComentario (postId) {
  return (dispatch) => {
    return API.fetchComentarios(postId)
      .then((comentarios) => {
        dispatch(getComentarios(comentarios))
      })
      .catch((e) => {
        alert('Ocorreu um erro ao consultar os comentarios. Tente novamente.')
      })
  }
}

export function handlePostComentario (acrescentar, id) {
  return (dispatch) => {
    dispatch(votarComentario(acrescentar, id))

    return API.voteComentario(acrescentar, id)
      .catch((e) => {
        dispatch(votarComentario(!acrescentar, id))
        alert('ocorreu um erro ao votar no comentário. Tente novamente.')
      })
  }
}

export function handleAtualizarComentario (novoComentario, timestamp, comentarioId) {
  return (dispatch) => {
    return API.putComentario(novoComentario, timestamp, comentarioId)
      .then(() => {
        dispatch(atualizarComentario(novoComentario, comentarioId))
      })
      .catch((e) => alert('Ocorreu um erro ao atualizar o comentario. Tente novamente.'))
  }
}