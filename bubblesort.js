function bubbleSort(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < (numeros.length - 1); j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temporaria = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temporaria;
            }
        }
    }
}

function exemplo() {
    let numeros = [33, 103, 3, 726, 200, 984, 198, 764, 9];
    document.getElementById('ex1').innerHTML = "Array antes da ordenação: [" + numeros + "]";
    console.log("Antes da ordenação:");
    console.log(numeros);
    bubbleSort(numeros);
    console.log("Depois da ordenação:");
    console.log(numeros);
    document.getElementById('ex2').innerHTML = "Array depois da ordenação: [" + numeros + "]";
}

function addNumber() {
    let element = document.querySelector("input").value;
    numbers.push(element);
    document.getElementById('elements').innerHTML = 'Array: [' + numbers + ']';
    element = '';
    document.querySelector("input").value = "";
}

function orderElements() {
    numbers = numbers.map(Number);
    bubbleSort(numbers);
    document.getElementById('ordenedElements').innerHTML = 'Array: [' + numbers + ']';
}
let numbers = [];