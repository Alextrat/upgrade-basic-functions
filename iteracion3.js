const numbers = [1, 2, 3, 5, 45, 37, 58];
let suma = 0

function sumNumbers(array) {

    for (i=0;i<array.length;i++) {
    suma = suma + array[i]
    }
 return suma
}

sumNumbers(numbers)
console.log(suma)