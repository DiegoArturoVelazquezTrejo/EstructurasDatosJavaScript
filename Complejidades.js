* Big O Notation
    // Two algorithms that do the same task
    function addUpTo1(n){
        let total = 0;
        for(let i = 1; i <= n; i++){
            total+=i;
        }
        return total;
    }
    function addUpTo2(n){
        return n * (n+1) / 2;
    }
    console.log(addUpTo1(10));
    // Goes faster (measuring duration)
    let t1 = performance.now();
    addUpTo2(100000000);
    let t2 = performance.now();
    console.log('Time elapsed: ${(t2 - t1) / 1000} seconds. ')

    // Lets count the number of simple operations the computer has to perform.

    addUpTo2(n) -> performs 3 simple ops.
    addUpTo1(n) -> performs n(+) + n(=) + n(i++) + 1(total = 0) + n(<) + n(=)
                -> 5n + 2 ops.

    // Official intro de Big O
    O(f(n)) if the number of simple operations the computer has to do is
    eventually less than a constant times f(n), as n increases,

    // Space Complexity
    How much additional memory do we need to allocate in order to run the code in our algorithm.
    Auxiliary space.


  Patterns

  function same(arr1, arr2){
      if(arr1.length != arr2.length) {
          return false;
      }
      for(let i = 0; i < arr1.length; i++){
          let correctIndex = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1)
              return false;
          arr2.splice(correctIndex, 1)
      }
      return true;
  }

  same([1,2,3,9], [1,4,9,16])
  // ANAGRAM
  function validAnagram(string1, string2){
    if(string1.length != string2.length)
      return false;
    // add whatever parameters you deem necessary - good luck!
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    let occ1 = {}
    let occ2 = {}
    for(let character of string1){
        occ1[character] = (occ1[character] || 0) + 1;
    }
    for(let character of string2){
        occ2[character] = (occ2[character] || 0) + 1;
    }
    for(let key in occ1){
        if(occ1[key] !== occ2[key])
          return false;
    }
    return true;

    //Pointers technique
    function countUniqueValues(array){
        // add whatever parameters you deem necessary - good luck!
        if(array.length == 1) return 1;
        let i = 0;
        let j = 1;
        while(j < array.length){
            if(array[i] === array[j]){
                j++;
            }
            else{
                i++;
                array[i] = array[j];
            }
        }
        return i +1;
  }
