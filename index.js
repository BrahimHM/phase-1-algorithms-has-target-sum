function hasTargetSum(array, target) {
  const arraySet = new Set();
  for (let num of array) {
    if (arraySet.has(target - num)) {
      return true;
    }
    arraySet.add(num);
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n) complexity
*/
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I am using a hash map for make a complexity code in O(n) 
  first I create a arraySet variable as a Set() then
  we have a neasted loop and on each iteration we verified if the (target - cuurent value )there exist on the arraySet() or not
  if exist that's mean exist an other value in array with the current value adds up to the target number but 
  if doesn't exist (target - cuurent value ) on the arraySet() we put the current value to the arraySet .
  finally after the loop we return false that's mean if the code run this instruction ,we didn't find any pair adds up to the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
