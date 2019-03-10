import API from '../Util/API'

export const GET_CATEGORIAS = 'GET_CATEGORIAS'

function getCategorias (categorias) {
  return {
    type: GET_CATEGORIAS,
    categorias: categorias.categories,
  }
}

export function handleGetCategorias () {
  return (dispatch) => {
    return API.fetchCategorias()
      .then((categorias) => {
        dispatch(getCategorias(categorias))
      })
      .catch((e) => {
        alert('Ocorreu um erro ao consultar as categorias. Tente novamente.')
      })
  }
}