import { combineReducers } from 'redux'

import { PostagensReducer, PostagemReducer } from './PostagemReducer'
import CategoriaReducer from './CategoriaReducer'
import ComentarioReducer from './ComentarioReducer'

export default combineReducers({
    postagens: PostagensReducer,
    postagem: PostagemReducer,
    categorias: CategoriaReducer,
    comentarios: ComentarioReducer,
})