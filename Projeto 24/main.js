let startInput = document.getElementById('start');
let endInput = document.getElementById('end');
let outputDiv = document.getElementById('output');

function showOddNumbers() {
  let start = Number(startInput.value);
  let end = Number(endInput.value);

  let i = start; // a variavel 'i' inicia com start
  let output = 0;

  // Do While:
  do {
    if (i % 2 != 0) {
      output = output + i + ' '
      outputDiv.innerHTML = output
    }
    i++
  } while (i <= end)
  
  /*
  while (i <= end) {
    if (i % 2 != 0) {
        output = output + i + ' ' // espaços entre os números
        outputDiv.innerHTML = output
    }
    i++
  }  
  */
}