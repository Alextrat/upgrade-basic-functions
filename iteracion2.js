
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
  let longest  = array[0];
    for(let i = 0; i<=array.length;i++){
      if(array[i].length >= longest.length ){
        console.log(longest+' es mas largo que '+ array[i]);
        array[i]=longest

        }
        return longest
    }

}

console.log(findLongestWord(avengers))



