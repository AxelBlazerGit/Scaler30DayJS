//Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'
function capText(text){
    const words=(text.split(" ")).map(word =>{
        if(word.length>0){
            return word[0].toUpperCase()+word.slice(1);

        }
        return " ";
    })

    return words.join(' ');
}
console.log(capText(prompt("Enter Text to Capitalize: ")));