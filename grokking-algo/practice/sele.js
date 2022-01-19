
/**
 * 
 * @param {Array} array 
 */
function selectionSort(array) {
  for (let i = 0; i < array.length; ++i){
    let min_index = i;
    for (let j = 1+i; j < array.length; ++j){
      if (array[min_index] > array[j]) {
        min_index = j;
      }
    }
    [array[min_index], array[i]] = [array[i], array[min_index]];
  }
  return array;
}

let L = [3, 1, 41, 59, 26, 53, 59];
console.log(selectionSort(L))