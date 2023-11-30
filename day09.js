// *Challenge 9*  
// Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'
function firstUnrepeatedChar(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
const str = 'abacddbec';
const result = firstUnrepeatedChar(str);
console.log(result); //
