import API from '../Util/API'

export const ADD_COMENTARIO= 'ADD_COMENTARIO'
export const REMOVE_COMENTARIO = 'REMOVE_COMENTARIO'
export const GET_COMENTARIOS = 'GET_COMENTARIOS'
export const SOMAR_COMENTARO = 'SOMAR_COMENTARO'

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

function removeComentario (id) {
  return {
    type: REMOVE_COMENTARIO,
    id,
  }
}

function somarComentario(acrescentar, postId)
{
  return {
  type: SOMAR_COMENTARO,
  id: postId,
  acrescentar
  }
}

export function handleAddComentario (objeto) {
  return (dispatch) => {
    
    objeto.id = API.createUUID()

    return API.postComment(objeto)
      .then(() => {
        dispatch(addComentario(objeto))
        dispatch(somarComentario(true, objeto.parentId))
        
      })
      .catch((e) => alert('Ocorreu um erro ao adicionar o comentario. Tente novamente.'))
  }
}

export function handleDeleteComentario (comentario) {
  return (dispatch) => {
    dispatch(removeComentario(comentario.id))
    dispatch(somarComentario(false, comentario.parentId))

    return API.deleteComentario(comentario.id)
      .catch((e) => {
        dispatch(addComentario(comentario))
        dispatch(somarComentario(true, comentario.parentId))
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