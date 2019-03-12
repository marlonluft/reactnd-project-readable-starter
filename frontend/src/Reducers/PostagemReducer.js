import {
  ADD_POSTAGEM,
  REMOVE_POSTAGEM,
  GET_POSTAGEM,
  PUT_POSTAGEM,
  POST_POSTAGEM,
  SORT_POSTAGENS,
} from '../Actions/PostagemAction'

import {
  ADD_COMENTARIO,
  REMOVE_COMENTARIO
} from '../Actions/ComentarioAction'

import {
  RECEIVE_DATA
} from '../Actions/CompartilhadoAction'

export function PostagensReducer(state = [], action) {
  switch (action.type) {
    case ADD_POSTAGEM:
      return state.concat([action.postagem])
    case REMOVE_POSTAGEM:
      return state.filter((postagem) => postagem.id !== action.id)
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
          return {
            ...post,
            voteScore: post.voteScore + (action.acrescentar ? 1 : -1)
          }
        }
        return post;
      })
    case SORT_POSTAGENS:
      var lista = state

      lista.sort((postagemA, postagemB) => {
        if (action.ordemCrescente) {
          return postagemA[action.coluna] > postagemB[action.coluna] ? 1 : postagemA[action.coluna] < postagemB[action.coluna] ? -1 : 0
        }
        else {
          return postagemA[action.coluna] > postagemB[action.coluna] ? -1 : postagemA[action.coluna] < postagemB[action.coluna] ? 1 : 0
        }
      })
      state = lista

      return state;

    default:
      return state
  }
}

export function PostagemReducer(state = [], action) {
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
    case POST_POSTAGEM:
      if (state.id === action.id) {
        state.voteScore = state.voteScore + (action.acrescentar ? 1 : -1);
      }
      return state;
    default:
      return state
  }
}