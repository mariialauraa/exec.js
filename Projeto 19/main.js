let radomNumber = Math.floor(Math.random() * 100)
let tries = 0

function checkGuess() {
    // Qual número foi digitado:
    let guessUser = document.getElementById('guess').value
    // Variável da mensagem de retorno:
    let showMessage = document.getElementById('message')
    tries++

    if (guessUser == radomNumber) {
        showMessage.innerHTML = ("Parabéns, você adivinhou o número em " + tries + " tentativas!")
    }
    else if (guessUser < radomNumber) {
        showMessage.innerHTML = ("Muito baixo. Tente de novo!")
    }
    else {
        showMessage.innerHTML = ("Muito alto. Tente de novo!")
    }
}