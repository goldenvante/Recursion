
function mergeSort(array) {
  
  if (array.length <= 1) {
    return array;
  }

  
  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

 
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  
  return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
