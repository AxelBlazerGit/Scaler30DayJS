// ## Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function inRange(a,b){
    if((a>49 && a<100) || (b>49 && b<100)){
        return true;
    }else{
        return false;
    }
}
console.log(inRange(21,102));
console.log(inRange(44,69));
console.log(inRange(55,73));