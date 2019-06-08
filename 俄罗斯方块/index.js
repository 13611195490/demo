var tetris = document.getElementById("tetris");//游戏的棋盘框
var elementType = [];//元素类型，每一种俄罗斯方块的形状就是一种类型
var squareSet;//小方块的集合，
var nextElement = null;//下一个元素
var dynamicElement = null;//当前正在动得元素
var colorType = ["#49bdff", "#fe8602", "#26e552", "#f71d30","#ffdb01"];//小方块得颜色
var score = 0;//分数
var timer;//游戏总定时器

function createSquare(color, x, y) {//创建小方块
    var temp = document.createElement("div");
    temp.classList.add("square");
    temp.style.background = color;
    temp.style.left = 30 * x + "px";
    temp.style.top = 30 * y + "px";
    temp.x = x;
    temp.y = y;
    return temp;
}

class TetrisElement {
    constructor(x, y, nowStatus, elementType) {
        this.basePoint = {x: x, y: y};
        this.squareList = [];
        this.status = [];
        this.nowStatus = nowStatus;
        this.elementType = elementType;
    }
    rotate(val) {//小方块旋转，因为还需要反向旋转，所以需要传个参数，如果不传，默认为1
        val = val ? val : 1;
        this.nowStatus = (this.nowStatus + val) % 4;//改变当前得状态值
        this.refresh();//刷新所有小方块得位置
    }
    drop() {//下降，只需要修改基准点。
        this.basePoint.y += 1;
        this.refresh();
    }
    refresh() {//刷新所有小方块得基准点
        for (var i = 0 ; i < this.squareList.length ; i ++) {
            this.squareList[i].x = this.basePoint.x + this.status[this.nowStatus][i].offsetX;
            this.squareList[i].y = this.basePoint.y + this.status[this.nowStatus][i].offsetY;
        }
    }
    show(parent) {//将小方块添加到界面里
        for (var i = 0 ; i < this.squareList.length ; i ++) {
            parent.appendChild(this.squareList[i]);
        }
    }
}

function clear(arr) {//清除需要消除的行
    for (var i = 0 ; i < arr.length ;  i ++) {
        for (var j = 0 ; j < squareSet[arr[i]].length ; j ++) {
            tetris.removeChild(squareSet[arr[i]][j]);//将小方块从界面上删除
        }
        squareSet.splice(arr[i], 1);//数组的整行删除
    }
    for (var i = 0 ; i < arr.length ; i ++) {//删除几行就需要添加进来几行新的
        var tempArr = new Array(10);
        squareSet.unshift(tempArr);
    }
    score += arr.length * 10;//加分数
    render(true);//渲染全局
}

function checkClear() {//检查哪些行是需要被消除的
    var result = [];
    for (var i = 0 ; i < squareSet.length ; i ++) {
        var flag = true;
        for (var j = 0 ; j < squareSet[i].length ; j ++) {
            if (!squareSet[i][j]) {//任何一个位置是空位就不能消除
                flag = false;
                break;
            }
        }
        if (flag) {
            result.unshift(i);
        }
    }
    return result;
}

function fixed() {//将动态的元素进行固定，并且置空
    try {
        for (var i = 0 ; i < dynamicElement.squareList.length ; i ++) {
            squareSet[dynamicElement.squareList[i].y][dynamicElement.squareList[i].x] = dynamicElement.squareList[i];
        }
        dynamicElement = null;
        clear(checkClear());//清除掉需要清除的行
        if (checkFinish()) {//检查是否需要结束
            clearInterval(timer);
            alert("游戏结束，分数为：" + score);
        }
    } catch (e) {
        clearInterval(timer);
        alert("游戏结束，分数为：" + score);
    }
}

function isDrop() {//判断是否还能下降
    for (var i = 0 ; i < dynamicElement.squareList.length ; i ++) {
        if (squareSet[dynamicElement.squareList[i].y + 1]
            && squareSet[dynamicElement.squareList[i].y + 1][dynamicElement.squareList[i].x] //下个位置有小方块，需要停止
            || dynamicElement.squareList[i].y == 19) {//到达最后一行需要停止
            fixed();
            return true;
        }
    }
    return false;
}

function render(all) {//渲染界面上的小方块
    if (dynamicElement){//动态元素存在的时候才需要渲染
        for (var k = 0 ; k < dynamicElement.squareList.length ; k ++) {
            dynamicElement.squareList[k].style.left = 30 * dynamicElement.squareList[k].x + "px";
            dynamicElement.squareList[k].style.top = 30 * dynamicElement.squareList[k].y + "px";
        }
    }
    if (all) {//当传入true的时候，渲染全部小方块，不是每次都全部渲染以保证性能
        for (var i = 0 ; i < squareSet.length ; i ++) {
            for (var j = 0 ; j < squareSet[i].length ; j ++) {
                if (squareSet[i][j] != null) {
                    squareSet[i][j].x = j;
                    squareSet[i][j].y = i;
                    squareSet[i][j].style.left = 30 * squareSet[i][j].x + "px";
                    squareSet[i][j].style.top = 30 * squareSet[i][j].y + "px";
                }
            }
        }
    }
}

function checkOutOfRange() {//检查出界
    var max = 0;
    for (var i = 0 ; i < dynamicElement.squareList.length ; i ++) {
        if ((dynamicElement.squareList[i].x < 0 || dynamicElement.squareList[i].x > 9) //有小方块出界
            && Math.abs(dynamicElement.squareList[i].x - 5) - 4 > Math.abs(max)) {//记录出界最大的那个小方块
            max = dynamicElement.squareList[i].x < 0 ? 0 - dynamicElement.squareList[i].x : 9 - dynamicElement.squareList[i].x;
        }
    }
    dynamicElement.basePoint.x += max;//将基准点校正
    dynamicElement.refresh();
}

function randomGenerateElement() {//随机生成一个元素
    var elementTypeNum = Math.floor(Math.random() * elementType.length);
    var statusNum = Math.floor(Math.random() * 4);
    var colorTypeNum = Math.floor(Math.random() * colorType.length);
    return new elementType[elementTypeNum](5, -2, statusNum, colorType[colorTypeNum]);
}

function initSquareSet() {//初始化小方块二维数组
    squareSet = new Array(20);
    for (var i = 0 ; i < 20 ; i ++){
        squareSet[i] = new Array(10);
    }
}

function checkFinish() {//检查结束
    for (var i = 0 ; i < 10 ; i ++){
        if (squareSet[0] && squareSet[0][i]) {
            return true;
        }
    }
    return false;
}

function checkCrash() {//检查是否会与其他小方块碰撞
    for (var i = 0 ; i < dynamicElement.squareList.length ; i ++){
        var tempX = dynamicElement.squareList[i].x;
        var tempY = dynamicElement.squareList[i].y;
        if (squareSet[tempY] && squareSet[tempY][tempX] != null){
            return true;
        }
    }
    return false;
}

function init(){
    initSquareSet();
    timer = setInterval(function () {
        if (nextElement == null) {//如果下一个为空，则创建新的元素
            nextElement = randomGenerateElement();
        }
        if (dynamicElement == null) {//如果动态元素为空，则把下一个变为动态元素
            dynamicElement = nextElement;
            nextElement = randomGenerateElement();
            dynamicElement.show(tetris);
        }
        if (!isDrop()) {//判断能否下降，能下降则执行drop
            dynamicElement.drop();
        }
        render();//因为之前的所有操作都在操作数据，执行render之后，刷新到界面上。
    }, 1000);
    window.addEventListener("keydown", function (event) {//添加键盘绑定事件
        if (dynamicElement == null){//如果动态元素为空则什么都不需要做
            return;
        }
        if (event.key == "ArrowUp") {//向上进行旋转
            dynamicElement.rotate();//执行旋转
            dynamicElement.refresh();//刷新小方块数据
            checkOutOfRange();//检查是否会出界，并进行校正
            if (checkCrash()){//检查是否会碰撞，如果会碰撞，则状态返回，因为没有进行刷新，用户视觉无影响
                dynamicElement.rotate(-1);
                dynamicElement.refresh();
            }
        } else if (event.key == "ArrowLeft") {//向左
            dynamicElement.basePoint.x -= 1;//将基准点左移
            dynamicElement.refresh();//刷新小方块位置数据
            checkOutOfRange();//判断出界
            if (checkCrash()){//判断碰撞，如果碰撞，将数据还原并刷新数据
                dynamicElement.basePoint.x += 1;
                dynamicElement.refresh();
            }
        } else if (event.key == "ArrowRight") {//向右
            dynamicElement.basePoint.x += 1;//将基准点右移
            dynamicElement.refresh();//刷新小方块位置数据
            checkOutOfRange();//判断出界
            if (checkCrash()){//检查碰撞，如果碰撞，将数据还原并刷新数据
                dynamicElement.basePoint.x -= 1;
                dynamicElement.refresh();
            }
        } else if (event.key == "ArrowDown") {//按向下
            if (isDrop()) {//判断是否已经碰撞，如果碰撞则结束
                return;
            }
            dynamicElement.drop();//不会碰撞则下降
        }
        render();//刷新界面，将改变的数据显示在界面上
    });
}

window.onload = function () {
    init();
}