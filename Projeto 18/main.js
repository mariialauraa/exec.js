function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'orange', 'pink']
    let radomColor = colors[Math.floor(Math.random() * colors.length)]
    // Trocar a cor de fundo
    document.body.style.backgroundColor = radomColor
}