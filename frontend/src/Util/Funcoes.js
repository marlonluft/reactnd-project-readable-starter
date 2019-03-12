const Funcoes = {
    ehVazio: (obj) => {
        // Verifica se um objeto é vazio
        return Object.entries(obj).length === 0 && obj.constructor === Object
    },
    clonarObjeto: (obj) => {
        // Realiza o clone do objeto sem manter referência
        return JSON.parse(JSON.stringify(obj))
    }
}
export default Funcoes