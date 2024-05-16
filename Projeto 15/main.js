let fruits = ['Banana', 'Abacate', 'Kiwi', 'Maçã', 'Cereja']
let numberList = document.getElementById("numberList")

for (let i = 0; i < 5; i++) {
    let listItem = document.createElement('li')
    // Cria um novo nó de texto dentro do documento HTML
    listItem.appendChild(document.createTextNode(fruits[i])) 
    //listItem.textContent = 'Item ' + i
    numberList.appendChild(listItem)
}

