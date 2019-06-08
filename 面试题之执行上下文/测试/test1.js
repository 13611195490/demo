// user1指向用户对象
// user1持有用户对象的引用
var user1 = {
    name: "abc",
    age: 123
}

var user2 = user1;

user2.name = "张三";

console.log(user1.name, user2.name);

function bar(){
    var i = 1;
    console.log(i);
}

bar();