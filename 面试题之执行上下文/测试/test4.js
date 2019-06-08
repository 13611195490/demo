function foo(a, b){
    console.log(a); // 3
    console.log(b); // 4

    var a = function(){
        console.log("b");
    }

    a(); // b

    var a = 10;

    console.log(a); //10
}


foo(3, 4);