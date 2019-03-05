import { combineReducers } from 'redux'

import { postagens, postagem } from './postagens'
import categorias from './categorias'
import comentarios from './comentarios'

export default combineReducers({
    postagens,
    postagem,
    categorias,
    comentarios,
})