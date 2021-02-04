// PRODUTOS LISTA >> MAP << 
const produtos = [
    {
        nome: 'TV', 
        preco: 100
    }, 
    {
        nome: 'Monitor', 
        preco: 150
    }, 
    {
        nome: 'SSD', 
        preco: 300   
    }   
]
const novaListProdutos = produtos.map((produtos) => {
    produtos.preco +=10
    return produtos
})
//USUÁRIOS LISTA >> MAP <<
const listaUsuarios = [
    {nome : 'João', credito: 500}, 
    {nome: 'Maria', credito: 800}
]; 
const novaListaUsuarios = listaUsuarios.map((usuarios) => {
    usuarios.credito += 300; 
    return usuarios; 
}); 
// Utensílios LISTA >> MAP << 
const listaUtensilios = [
    {nome: 'Copo', posicao: 'direita'}, 
    {nome: 'Panela', posicao: 'esquerda'}, 
    {nome: 'Garfo', posicao: 'direita'}
]; 

const novaListaUtensilios = listaUtensilios.map((utensilios) => {
        return utensilios.posicao === 'direita' ? 'esquerda' : 'local correto' 
})
// Roupas LISTA >> MAP << 
const listaRoupas = [
    {nome: 'Camisa', preco: '80'}, 
    {nome: 'Short', preco: '100'}, 
    {nome: 'Casaco', preco: '150'}
]; 
const novaListaRoupas = listaRoupas.map((roupas) => {
    return roupas.preco >= 100 ? 'valor adequado' : 'valor inadequado'
})

// FILTER - listaProdutos

const listaProdutos = [
    {
        nome: 'TV', 
        preco: 100
    }, 
    {
        nome: 'Monitor', 
        preco: 150
    }, 
    {
        nome: 'SSD', 
        preco: 300   
    }   
]

const novaListaProdutos = listaProdutos.filter((produtos) => produtos.preco > 100 ); 

//FILTER - listaUsuarios 

const listaUsuarios2 = [
    {nome : 'João', credito: 500}, 
    {nome: 'Maria', credito: 800}
]; 
const novaListaUsuarios2 = listaUsuarios.filter((usuarios) => usuarios.nome === 'Maria') 

// FILTER - listaRoupas 

const listaRoupas2 = [
    {nome: 'Camisa', preco: '80'}, 
    {nome: 'Short', preco: '100'}, 
    {nome: 'Casaco', preco: '150'}
]; 
const novaListaRoupas2 = listaRoupas.filter((roupas) => roupas.preco > 100) 



// REDUCE QTD 

const qtd = [7,8,10]
const qtdFinal = qtd.reduce((qtdFinal, proxElemento) => qtdFinal + proxElemento) 

// REDUCE SALARIOS 
const qtdSalarios = [600, 200, 100]
const qtdSalarioFinal = qtdSalarios.reduce((qtdSalarios, acc) => qtdSalarios + acc)  

// REDUCE IDADES 
const idades = [13, 16, 27]
const somaIdades = idades.reduce((somaIdades, acc ) => somaIdades + acc)
