function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'orange', 'pink']
    let radomColor = colors[Math.floor(Math.random() * colors.length)]
    // Trocar a cor de fundo
    document.body.style.backgroundColor = radomColor
}

/*
let a = [5, 3, 7, 1, 9]
// valor aleatório entre 0-1
let result = Math.floor(Math.random() * 100)
console.log(result)
*/