const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array) {
    array.sort()
      // console.log(array)

       for(let i = array.length-1; i>=0; i--){ 
            if(array[i]===array[i-1]){
            // console.log("Si, el array que es i ahora "+ array[i] + " es igual que el array de i-1 " + array[i-1]);
            array.splice(i,1)
            }
       }
       return array
  }
removeDuplicates(duplicates)

console.log(duplicates)
   
  
  
  //   for (let i= 0; i<array.length; i++){
  //     let igual = array[i]
  //        for(let j= 0; j< array.length; j++){       
  //           if(array[j].includes(igual)){
  //         console.log("si")
  //         }else{
  //           console.log("no")
  //         }
  //     }
  //   }