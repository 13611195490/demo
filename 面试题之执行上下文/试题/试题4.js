var foo = 1;


function bar(a) {
    var a1 = a;
    var a = foo;
    function a() {
        console.log(a);
    }
    a1();
}

bar(3);

// a的上下文

// vo{
	
// }
// bar的上下文
// vo {
// 	a: 1,
// 	a1: 指向函数a
// }
// 全局上下文
// vo {
// 	bar: 指向函数bar,
// 	foo: 1
// }