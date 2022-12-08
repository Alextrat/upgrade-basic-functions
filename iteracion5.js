const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let sumaTotal = 0
let suma = 0
let sumaCadena = 0
function averageWord(array) {
  for (let i = 0; i < array.length; i++) {
  
    if(typeof array[i] === 'number'){
        suma = suma +array[i];

        // console.log(suma)
    }else{
        sumaCadena = sumaCadena + array[i].length
        // console.log(sumaCadena)
        // suma = suma + sumaCadena
    }
    sumaTotal = suma+sumaCadena
  }
  return sumaTotal
}
console.log(averageWord(mixedElements))