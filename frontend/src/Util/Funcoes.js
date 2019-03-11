const Funcoes = {
    ehVazio: (obj) => {
        // Verifica se um objeto é vazio
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }
}
export default Funcoes