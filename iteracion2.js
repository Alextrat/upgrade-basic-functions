
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
  let longest  = array[0];
    for(let i = 0; i<array.length;i++){
      if(array[i].length > longest.length ){
        console.log(array[i]+' es mas largo que '+ longest );
        longest = array[i]
        }      
       
    }
   return longest
}
findLongestWord(avengers)
// console.log(findLongestWord(avengers))



