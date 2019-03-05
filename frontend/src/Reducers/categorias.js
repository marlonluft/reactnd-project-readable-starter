
import { RECEIVE_DATA } from '../Actions/shared'
import { GET_CATEGORIAS } from '../Actions/categorias'

export default function categorias(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIAS:
    case RECEIVE_DATA:
      return action.categorias
    default:
      return state
  }
}