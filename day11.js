// **Challenge 11
// **Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// // Sample Output: name,sclass,rollno
var student = {
    name: "AxelBlazer",
    sclass: "cse1",
    rollno: 24};
function listProperties(obj) {
    var result = [];
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            result.push(property);
        }
    }
    return result;
}
var propertiesList = listProperties(student);
console.log(propertiesList.join(','));

