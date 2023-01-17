const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, nombre) {
    let posicion 
    for (let i=0; i<array.length; i++) {
        if(array.includes(nombre)){
            posicion= array.indexOf(nombre)

            return console.log(true, posicion)
        }else{
          return console.log(false)
        }
    }
  }
finderName(nameFinder, 'Peter')
