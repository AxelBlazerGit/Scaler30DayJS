// Challenge 5: 
// Write a JavaScript exercise to get the filename extension.
function getExtension(fileName){
    const $breakUp=fileName.split('.');
    if($breakUp.length>1){
        return $breakUp[$breakUp.length-1];
    }else{
        return "invalid filename..";
    }
}
console.log(getExtension(speech.txt));
console.log(getExtension(cats.jpg));
console.log(getExtension(chapter1.pdf));
console.log(getExtension(chromeUnfinishedDownload));
