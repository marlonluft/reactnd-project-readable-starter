import {
  ADD_POSTAGEM,
  REMOVE_POSTAGEM,
  GET_POSTAGEM,
  GET_POSTAGENS,
  PUT_POSTAGEM,
  POST_POSTAGEM,
} from '../Actions/postagem'

import {
  SOMAR_COMENTARO
} from '../Actions/comentario'

import {
  RECEIVE_DATA
} from '../Actions/shared'

export function postagens(state = [], action) {
  switch (action.type) {
    case ADD_POSTAGEM:
      return state.concat([action.postagem])
    case REMOVE_POSTAGEM:
      return state.filter((postagem) => postagem.id !== action.id)
    case GET_POSTAGENS:
    case RECEIVE_DATA:
      return action.postagens
    case PUT_POSTAGEM:
      return state.map((post) => {
        if (post.id === action.postagem.id) {
          post = action.postagem;
        }

        return post;
      })
    case POST_POSTAGEM:
      return state.map((post) => {
        if (post.id === action.id) {
          post.voteScore = post.voteScore + (action.acrescentar ? 1 : -1);
        }

        return post;
      })
    case SOMAR_COMENTARO:
      return state.map((post) => {
        if (post.id === action.id) {
          post.commentCount = post.commentCount + (action.acrescentar ? 1 : -1);
        }

        return post;
      })


    default:
      return state
  }
}

export function postagem(state = [], action) {
  switch (action.type) {
    case GET_POSTAGEM:
      return action.postagem
    case SOMAR_COMENTARO:
      if (state.id === action.id) {
        state.commentCount = state.commentCount + (action.acrescentar ? 1 : -1);
      }
      return state;
    default:
      return state
  }
}