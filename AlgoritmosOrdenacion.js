//Binary Search
function binarySearch(arr, elem){
  var start = 0;
  var end = arr.length -1;
  var middle = Math.floor((start + end)/2);
  while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]) end = middle -1;
    else start = middle +1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem = middle : -1;
}


  // Insertion Sort
  function insertionSort(array){
      for(var i = 1; i < array.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && array[j] > currentVal; j--){
          array[j+1] = array[j];
        }
        array[j+1] = currentVal;
      }
      return array;
  }
  // Merge Sort

  // Function that merges two lists
  function merge(arr1, arr2){
      let results = []
      let i = 0;
      let j = 0;
      while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i])
          results.push(arr1[i++]);
        else
          results.push(arr2[j++]);
      }
      while(i < arr1.length){
        results.push(arr1[i++]);
      }
      while(j < arr2.length){
        results.push(arr2[j++]);
      }
      return results;
  }

  function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }


  // QuickSort
  function pivot(arr, start = 0, end = arr.length-1){
      const swap = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
      var pivot = arr[start];
      var swapIdx = start;
      for(var i = start+1; i < end; i++){
        if(pivot > arr[i]){
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
      swap(arr, start, swapIdx);
      return swapIdx;
  }
  function quickSort(arr, left =0, right = arr.length){
          if(left < right){
            let pivotIndex = pivot(arr, left, right);
            quickSort(arr, left, pivotIndex-1);
            quickSort(arr, pivotIndex+1, right);
          }
          return arr;
  }
  let t1 = performance.now();
  console.log(quickSort([1,6,8,5,34]));
  let t2 = performance.now();
  console.log("Call to doSomething took " + (t2 - t1) + " milliseconds.");

  // RadixSort

  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
