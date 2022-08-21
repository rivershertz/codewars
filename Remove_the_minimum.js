// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    const newArr = numbers.map(item => item)
    if (newArr.length == 1) {
      return ([]);
    }
    let lowNum = newArr[0]
    for (i = 0; i<newArr.length; i++) {
      if (newArr[i] < lowNum) {
          lowNum = newArr[i]
      }
    }
    const index = newArr.indexOf(lowNum)
    if (index > -1) {
      newArr.splice(index, 1)
    }
    return (newArr)
  }
