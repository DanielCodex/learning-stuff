

/**
 * 
 * @param {Array} array 
 */
function SelectionSort(array) {
  for (let i = 0; i < array.length; ++i) {
    let min_index = i;
    for (let j = i + 2; j < array.length; ++j){
      if (array[min_index] > array[j]) {
        min_index = j;
      }
    }
    [array[i], array[min_index]] = [array[min_index], array[i]];
  }
  return array;  
}

let L = [3, 1, 41, 59, 26, 53, 59];
console.log(SelectionSort(L))