function bubbleSort(numeros) {
    let tamanho = numeros.length;
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < (tamanho - 1); j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temporaria = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temporaria;
            }
        }
    }
}

let numeros = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log("Antes da ordenação");
console.log(numeros);



bubbleSort(numeros);
console.log("Depois da ordenação");
console.log(numeros);
