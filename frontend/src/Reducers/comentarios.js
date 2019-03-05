import {
    ADD_COMENTARIO,
    REMOVE_COMENTARIO,
    GET_COMENTARIOS
  } from '../Actions/comentario'
  
  
  export default function comentarios(state = [], action) {
    switch (action.type) {
      case ADD_COMENTARIO:
        return state.concat([action.comentario])
      case REMOVE_COMENTARIO:
        return state.filter((comentario) => comentario.id !== action.id)
      case GET_COMENTARIOS:
        return action.comentarios
      default:
        return state
    }
  }