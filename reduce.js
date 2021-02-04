
// REDUCE QTD 

const qtd = [7,8,10]
const qtdFinal = qtd.reduce((qtdFinal, proxElemento) => qtdFinal + proxElemento) 

// REDUCE SALARIOS 
const qtdSalarios = [600, 200, 100]
const qtdSalarioFinal = qtdSalarios.reduce((qtdSalarios, acc) => qtdSalarios + acc)  

// REDUCE IDADES 
const idades = [13, 16, 27]
const somaIdades = idades.reduce((somaIdades, acc ) => somaIdades + acc)


// REDUCE DE NOMES 
const nomes = ['Larissa', 'Josefina', 'Theobaldo']; 
const nomesFinal = nomes.reduce((nomesFinal, acc) => nomesFinal + acc )


// REDUCE ENDERECOS 
const enderecos = ['Brasil,', 'Rio de janeiro,', 'Realengo']
const enderecoFinal = enderecos.reduce((enderecoFinal, acc) => enderecoFinal + acc)
