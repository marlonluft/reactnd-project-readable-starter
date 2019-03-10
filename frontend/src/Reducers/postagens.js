import {
  ADD_POSTAGEM,
  REMOVE_POSTAGEM,
  GET_POSTAGEM,
  GET_POSTAGENS,
  PUT_POSTAGEM,
  POST_POSTAGEM,
  SORT_POSTAGENS,
} from '../Actions/postagem'

import {
  ADD_COMENTARIO,
  REMOVE_COMENTARIO
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
    case SORT_POSTAGENS:
      var lista = state

      lista.sort((postagemA, postagemB) => {
        if (action.ordemCrescente)
        {
          return postagemA[action.coluna] > postagemB[action.coluna] ? 1 : postagemA[action.coluna] < postagemB[action.coluna] ? -1 : 0
        }
        else
        {
          return postagemA[action.coluna] > postagemB[action.coluna] ? -1 : postagemA[action.coluna] < postagemB[action.coluna] ? 1 : 0
        }          
      })
      state = lista

      return state;

    default:
      return state
  }
}

export function postagem(state = [], action) {
  switch (action.type) {
    case GET_POSTAGEM:
      return action.postagem
    case ADD_COMENTARIO:
      if (state.id === action.comentario.parentId) {
        state.commentCount = state.commentCount + 1;
      }
      return state;
    case REMOVE_COMENTARIO:
      if (state.id === action.parentId) {
        state.commentCount = state.commentCount - 1;
      }
      return state;
    default:
      return state
  }
}