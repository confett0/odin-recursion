// helper function for merging two sorted arrays

const merge = (arr1, arr2) => {
    const sortedArray = [];
    
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        sortedArray.push(arr1.shift());
      } else {
        sortedArray.push(arr2.shift());
      }
    }
    return [...sortedArray, ...arr1, ...arr2];
  }
  
  const mergeSort = (arr) => {
    
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    
    return merge(left, right);
   
  };