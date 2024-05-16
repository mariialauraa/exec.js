let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')

checkButton.addEventListener('click', function() {
    let age = ageInput.value // Puxa o valor digitado no input
    let message = (age >= 18) ? "Você é um adulto" : "Você não é um adulto"
    alert(message) // Retorna a mensagem
    ageInput.value = ''
})

