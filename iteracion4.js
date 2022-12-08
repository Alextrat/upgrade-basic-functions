const numbers = [12, 21, 38, 5, 45, 37, 6];
let suma = 0
let promedio

function average(array) {
  for (let i = 0; i < array.length; i++) {
     suma = suma + array[i];
     console.log(suma)
     promedio = suma/array.length

  }
  return promedio
}

console.log(average(numbers))