//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return first recurring character 2

//[2,1,1,2,3,5,1,2,4]
//should return 1

//[2,3,4,5]
//should return undefined

function firstRecurringCharacter(arr) {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    } else {
      dict[arr[i]] = true;
    }
  }
  return;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
