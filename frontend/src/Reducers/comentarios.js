import {
  ADD_COMENTARIO,
  REMOVE_COMENTARIO,
  GET_COMENTARIOS,
  POST_COMENTARIO,
  PUT_COMENTARIO
} from '../Actions/ComentarioAction'


export default function comentarios(state = [], action) {
  switch (action.type) {
    case ADD_COMENTARIO:
      return state.concat([action.comentario])
    case REMOVE_COMENTARIO:
      return state.filter((comentario) => comentario.id !== action.id)
    case GET_COMENTARIOS:
      return action.comentarios
    case POST_COMENTARIO:
      return state.map((comentario) => {
        if (comentario.id === action.id) {
          comentario.voteScore = comentario.voteScore + (action.acrescentar ? 1 : -1);
        }

        return comentario;
      })
    case PUT_COMENTARIO:
      return state.map((comentario) => {
        if (comentario.id === action.id) {
          comentario.body = action.novoComentario;
        }

        return comentario;
      })
    default:
      return state
  }
}