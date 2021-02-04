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


const listaUsuarios = [
    {nome : 'João', credito: 500}, 
    {nome: 'Maria', credito: 800}
]; 
const novaListaUsuarios = listaUsuarios.map((usuarios) => {
    usuarios.credito += 300; 
    return usuarios; 
}); 
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
    {nome: 'Casaco', preco: '150'}, 
    {nome: 'Camisa', preco: '250'}
]; 
// const novaListaRoupas2 = listaRoupas.filter((roupas) => roupas.preco > 100) 

const camisaPreco = listaRoupas2.filter((roupas) => roupas.nome === 'Camisa') 
console.log(camisaPreco)

