import API from '../Util/API.js'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (postagens, categorias) {
  return {
    type: RECEIVE_DATA,
    postagens,
    categorias: categorias.categories,
  }
}

export function handleInitialData (categoria) {
  return (dispatch) => {
    return Promise.all([
      categoria === null ? API.fetchPostagens() : API.fetchPostagensCategoria(categoria),
      API.fetchCategorias()      
    ]).then(([ postagens, categorias ]) => {
      dispatch(receiveData(postagens, categorias))
    })
  }
}