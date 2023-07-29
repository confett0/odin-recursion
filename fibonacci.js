// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.

const fibs = (n) => {
    const arr = [0, 1];
  
    if (n <= 0) {
      return [];
    }
  
    if (n === 1) {
      return [0];
    }
  
    for (i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  };

  // Solve the same problem recursively

  const fibsRec = (n) => {
    if (n < 1) {
      return 'Please enter a valid parameter';
    }
    if (n === 1) {
      return [0];
    }
    if (n === 2) {
      return [0,1];
    }
    else {
      return [...fibsRec(n - 1), fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]];
    }
  };