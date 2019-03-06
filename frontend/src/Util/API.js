const API = {

    // Gera id para os novos registros.
    createUUID: () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    // Recupera todas as postagens cadastradas
    fetchPostagens: () => {
        return fetch(
            'http://localhost:3001/posts',
            {
                headers: { 'Authorization': 'udacity' }
            }
        ).then((res) => {
            return res.json();
        }).catch((res) => {
            return res;
        })
    },

    // Recupera todas as postagens cadastradas de uma categoria
    fetchPostagensCategoria: (categoria) => {
        return fetch(
            'http://localhost:3001/' + categoria + '/posts',
            {
                headers: { 'Authorization': 'udacity' }
            }
        ).then((res) => {
            return res.json();
        }).catch((res) => {
            return res;
        })
    },

    // Recupera uma postagem a partir do id
    fetchPostagem: (id) => {
        return fetch(
            'http://localhost:3001/posts/' + id,
            {
                headers: { 'Authorization': 'udacity' }
            }
        ).then((res) => {
            return res.json();
        }).catch((res) => {
            return res;
        })
    },

    // Recupera todos os comentários de uma postagem
    fetchComentarios: (postId) => {
        return fetch(
            'http://localhost:3001/posts/' + postId + '/comments',
            {
                headers: { 'Authorization': 'udacity' }
            }
        ).then((res) => {
            return res.json();
        }).catch((res) => {
            return res;
        })
    },

    // Recupera todas as categorias cadastradas
    fetchCategorias: () => {
        return fetch(
            'http://localhost:3001/categories',
            {
                headers: { 'Authorization': 'udacity' }
            }
        ).then((res) => {
            return res.json();
        }).catch((res) => {
            return res;
        })
    },

    // Grava um novo comentário
    postComment: (objeto) => {
        return fetch('http://localhost:3001/comments',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify(objeto)
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Grava uma nova postagem
    postPostagem: (objeto) => {
        return fetch('http://localhost:3001/posts',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify(objeto)
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Atualiza uma postagem
    putPostagem: (objeto) => {
        return fetch('http://localhost:3001/posts/' + objeto.id,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify(objeto)
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Deleta uma postagem
    deletePostagem: (id) => {
        return fetch('http://localhost:3001/posts/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'udacity'
                }
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Vota em uma postagem
    votePostagem: (acrescentar, id) => {
        return fetch('http://localhost:3001/posts/' + id,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify({ option: (acrescentar ? 'upVote' : 'downVote') })
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Vota em um comentario
    voteComentario: (acrescentar, comentarioId) => {
        return fetch('http://localhost:3001/comments/' + comentarioId,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify({ option: (acrescentar ? 'upVote' : 'downVote') })
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Deleta uma postagem
    deleteComentario: (id) => {
        return fetch('http://localhost:3001/comments/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'udacity'
                }
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },

    // Atualiza um comentário
    putComentario: (novoComentario, timestamp, comentarioId) => {
        return fetch('http://localhost:3001/comments/' + comentarioId,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'udacity'
                },
                body: JSON.stringify({ body: novoComentario, timestamp })
            }).then((res) => {
                return res.json();
            }).catch((res) => {
                return res;
            })
    },


}

export default API