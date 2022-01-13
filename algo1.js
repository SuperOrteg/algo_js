const fs = require("fs");

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, "utf8");

const numbers = [];

data.split(" ").forEach((d) => numbers.push(parseInt(d)));

const bubbleSort = (array) => {
  const bubble = array;
  let check = 0;
  let comparisons = 0;
  do {
    check = 0;
    for (j = 0; j < bubble.length; j++) {
      if (bubble[j] > bubble[j + 1]) {
        let current = bubble[j];
        bubble[j] = bubble[j + 1];
        bubble[j + 1] = current;
        comparisons++;
      } else {
        check++;
      }
    }
  } while (check != bubble.length);
  return `Tri à bulle: ${comparisons} comparaisons - ${bubble}`;
};

console.log(bubbleSort(numbers));

const insertionSort = (array) => {
  const insertion = array;
  let comparisons = 0;
  let n = insertion.length;
  for (let i = 1; i < n; i++) {
    comparisons++;
    let current = insertion[i];
    let j = i - 1;
    while (j > -1 && current < insertion[j]) {
      insertion[j + 1] = insertion[j];
      j--;
    }
    insertion[j + 1] = current;
  }
  return `Tri par insertion: ${comparisons} comparaisons - ${insertion}`;
};

console.log(insertionSort(numbers));

function selectionSort(array) {
  const list = array;
  let comparisons = 0;
  for (i = 0; i < list.length; i++) {
    comparisons++;
    let min = i;
    for (j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) min = j;
    }
    if (min != i) {
      let swap = list[i];
      list[i] = list[min];
      list[min] = tmp;
    }
  }
  return `Tri par selection: ${comparisons} comparaisons - ${list}`;
}

console.log(selectionSort(numbers));

const quickSort = (array) => {
  const list = [...array];

  if (list.length < 2) {
    return list;
  }

  const pivot = list[0];

  const smaller = list.filter((item) => item < pivot);
  const bigger = list.filter((item) => item > pivot);

  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};

console.log(`Tri rapide: ${quickSort(numbers)}`);

const merge = (left, right) => {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  const mergeList = array;
  const half = mergeList.length / 2;

  // Base case or terminating case
  if (mergeList.length < 2) {
    return mergeList;
  }

  const left = mergeList.splice(0, half);
  return merge(mergeSort(left), mergeSort(mergeList));
};

console.log(`Tri merge: ${quickSort(numbers)}`);
