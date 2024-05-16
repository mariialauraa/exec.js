let idade = Number(prompt('Digite a sua idade: '))

let eleitor = prompt('Tem título de eleitor? (sim/não): ')

let idadeMinima = 16

if (idade >= idadeMinima && eleitor == "sim") {
    console.log ('Você pode votar.')
} 
else if (idade >= 18 && eleitor == "não") {
    console.log('Regularize seu título!')
}
else {
    console.log('Você não pode votar.')
}

// == igualdade
// != desigualdade