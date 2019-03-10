import API from '../Util/API'

export const ADD_POSTAGEM = 'ADD_POSTAGEM'
export const REMOVE_POSTAGEM = 'REMOVE_POSTAGEM'
export const GET_POSTAGENS = 'GET_POSTAGENS'
export const GET_POSTAGEM = 'GET_POSTAGEM'
export const PUT_POSTAGEM = 'PUT_POSTAGEM'
export const POST_POSTAGEM = 'POST_POSTAGEM'
export const SORT_POSTAGENS = 'SORT_POSTAGENS'

function getPostagens (postagens) {
  return {
    type: GET_POSTAGENS,
    postagens,
  }
}

function getPostagem (postagem) {
  return {
    type: GET_POSTAGEM,
    postagem,
  }
}

function addPostagem (postagem) {
  return {
    type: ADD_POSTAGEM,
    postagem,
  }
}

function atualizarPostagem (postagem)
{
  return {
    type: PUT_POSTAGEM,
    postagem,
  }
}

function removePostagem (id) {
  return {
    type: REMOVE_POSTAGEM,
    id,
  }
}

function votarPostagem(acrescentar, id) {
  return {
    type: POST_POSTAGEM,
    id,
    acrescentar
  }
}

function sortPostagens(ordemCrescente, coluna) {
  return {
    type: SORT_POSTAGENS,
    ordemCrescente,
    coluna
  }
}

export function handleAddPostagem (objeto, callBack) {
  return (dispatch) => {
    
    objeto.id = API.createUUID()

    return API.postPostagem(objeto)
      .then(() => {
        dispatch(addPostagem(objeto))
        callBack()
      })
      .catch((e) => alert('Ocorreu um erro ao adicionar a postagem. Tente novamente.'))
  }
}

export function handleAtualizarPostagem (objeto, callBack) {
  return (dispatch) => {    
    return API.putPostagem(objeto)
      .then(() => {
        dispatch(atualizarPostagem(objeto))
        callBack()
      })
      .catch((e) => alert('Ocorreu um erro ao adicionar a postagem. Tente novamente.'))
  }
}

export function handleDeletePostagem (postagem) {
  return (dispatch) => {
    dispatch(removePostagem(postagem.id))

    return API.deletePostagem(postagem.id)
      .catch((e) => {
        dispatch(addPostagem(postagem))
        alert('ocorreu um erro ao deletar a postagem. Tente novamente.')
      })
  }
}

export function handleGetPostagens (categoria) {
  return (dispatch) => {
    return API.fetchPostagensCategoria(categoria)
      .then((postagens) => {
        dispatch(getPostagens(postagens))
      })
      .catch((e) => {
        alert('Ocorreu um erro ao consultar as postagens por categoria. Tente novamente.')
      })
  }
}

export function handleGetPostagem (id) {
  return handleGetPostagemCB(id, () => {})
}

export function handleGetPostagemCB (id, callBack) {
  return (dispatch) => {
    return API.fetchPostagem(id)
      .then((postagem) => {
        dispatch(getPostagem(postagem))
        callBack()
      })
      .catch((e) => {
        alert('Ocorreu um erro ao consultar a postagem. Tente novamente.')
      })
  }
}

export function handlePostPostagem (acrescentar, id) {
  return (dispatch) => {
    dispatch(votarPostagem(acrescentar, id))

    return API.votePostagem(acrescentar, id)
      .catch((e) => {
        dispatch(votarPostagem(!acrescentar, id))
        alert('ocorreu um erro ao votar na postagem. Tente novamente.')
      })
  }
}

export function handleSortPostagens (ordemCrescente, coluna) {
  return (dispatch) => {
    dispatch(sortPostagens(ordemCrescente, coluna))
  }
}