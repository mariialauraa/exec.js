let conta = Number(prompt('Digite o valor da conta: '))

let porcentagem = Number(prompt('Quanto de gorjeta (porcentagem)?'))

porcentagem = (conta * porcentagem) / 100
let valorTotal = conta + porcentagem

alert(`O valor total com gorjeta é de R$ ${valorTotal.toFixed(2)}`)