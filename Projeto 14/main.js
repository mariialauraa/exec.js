/*
let firstColor = prompt('Digite a cor #1: ')
let secondColor = prompt('Digite a cor #2: ')
let thirdColor = prompt('Digite a cor #3: ')

alert(`Sua lista de cores ficou assim: ${firstColor}, ${secondColor}, ${thirdColor}`)


for (let i = 1; i <= 5; i++) {
    console.log(i + '. Hi')
}
*/

let colorList = []

for (let i = 1; i <= 3; i++) {
    userColor = prompt('Digite a cor #' + i + ':')
    colorList.push(userColor)
}

document.getElementById("color").innerHTML = 'Sua lista de cores ficou assim: ' + colorList