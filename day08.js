// *Challenge 8*  
//  Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
// Sample array : \[1, 2, 3\] and subset length is 2  
// Expected output : \[\[2, 1\], \[3, 1\], \[3, 2\], \[3, 2, 1\]\]
// *Challenge 7*  
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function getSubsets(inputSet) {
    const result = [];
    function generateSubset(index, currentSubset) {
        if (index === inputSet.length) {
            result.push([...currentSubset]);
            return;
        }
        currentSubset.push(inputSet[index]);
        generateSubset(index + 1, currentSubset);
        currentSubset.pop();
        generateSubset(index + 1, currentSubset);
    }
    generateSubset(0, []);
    return result;
}
const inputSet = [1, 2, 3];
console.log(getSubsets(inputSet));
