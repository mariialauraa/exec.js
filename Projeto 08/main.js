let nota = Number(prompt('Digite a nota do aluno: '))

if (nota > 100) {
    alert('Nota inválida, digite um valor entre 0 a 100')
} 
else if (nota >= 90) {
    alert('Parabéns! Você tirou A.')
} 
else if (nota >= 80) {
    alert('Você tirou B.')
} 
else if (nota >= 70) {
    alert('Você tirou C.')
} 
else if (nota >= 60) {
    alert('Você tirou D.')
} 
else {
    alert('Você reprovou!')
}
