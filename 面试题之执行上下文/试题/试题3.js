console.log(foo); // fn 指向C
var foo = "A";
console.log(foo)  //A
var foo = function () {
    console.log("B");
}
console.log(foo); //fn 指向B
foo(); //B
function foo(){
    console.log("C");
}
console.log(foo) //fn 指向B
foo(); //B