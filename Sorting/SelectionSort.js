const nums = [87, 56, 42, 45, 12, 3, 99, 10];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

SelectionSort(nums);
console.log(nums);
