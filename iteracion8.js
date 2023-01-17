const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(array) {
    let palabrasContador = []
    for (const palabra of array){  
      // console.log(palabrasContador)
      if(palabrasContador[palabra]){
        palabrasContador[palabra] ++
      }else{
        palabrasContador[palabra]= 1
      }
    }
      return palabrasContador
    }
console.log(repeatCounter(counterWords)) 
//repeatCounter(counterWords)