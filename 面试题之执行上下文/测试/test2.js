var a = 2;

function bar(){
    var i = 3;
    function foo(){
        var b = 4;
        method();
    }

    foo();
    console.log("123");
}

function method(){
    console.log("abc")
}

bar();