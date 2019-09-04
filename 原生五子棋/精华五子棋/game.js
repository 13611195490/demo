//配置
var config = {
    rows: 15, //行数
    cols: 15, //列数
    gameDom: document.getElementById("game"),//游戏的dom元素
    splitSize: 40, //棋子之间间隔的像素值
    infoDom: document.getElementById("info"),
    btnReset: document.getElementById("reset") //获取重置按钮
}

//棋盘
//棋盘中有很多棋子
//0: 没有棋子，1：黑子，2：白子
var board;
var nextChess = 1; //下一个棋子的类型
var isGameOver = false; //游戏是否结束
/**
 * 初始化所有棋子
 */
function initBoard() {
    board = new Array(config.rows);
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(config.cols);//每一行是由很多列组成的数组
        //给数组的每一项赋值为0
        board[i].fill(0); //fill是数组的方法，用于将数组的每一项填充为某个值
    }
}

/**
 * 初始化
 */
function init() {
    nextChess = 1; //初始化为下一个棋子为黑棋
    isGameOver = false; //游戏还未结束
    config.gameDom.innerHTML = ""; //清空之前的内容
    initBoard();
    regEvent();
    showInfo();
}

/**
 * 向指定的行和列放置一个棋子
 */
function putChess(row, col) {
    //验证行和列
    if (row < 0 || col < 0 || row > config.rows - 1 || col > config.cols - 1) {
        return; //无效的行或列
    }
    if (board[row][col]) {
        //这个位置不为0，有棋子
        return;
    }
    board[row][col] = nextChess;
    //创建dom并显示
    var div = document.createElement("div");
    div.className = "chess " + (nextChess === 1 ? "black" : "white");
    //坐标
    div.style.left = col * config.splitSize + "px";
    div.style.top = row * config.splitSize + "px";
    config.gameDom.appendChild(div);
    if (nextChess === 1) {
        //之前是黑子
        nextChess = 2;
    }
    else {
        //之前是白棋
        nextChess = 1;
    }

    //胜负判断
    if (hasWin(row, col)) {
        //游戏结束了
        isGameOver = true;
        config.gameDom.onclick = null; //事件取消
    }
    showInfo();
}

/**
 * 得到棋盘上指定的行和列上的内容，0，1，2
 * @param {*} row 
 * @param {*} col 
 */
function getChess(row, col) {
    if (board[row] === undefined) {
        return; //没有这一行
    }
    else if (board[row][col] === undefined) {
        return; //没有这一列
    }
    return board[row][col];
}

/**
 * 是否有人胜利了
 * 传递的参数：落子的行和列
 */
function hasWin(row, col) {
    var chess = getChess(row, col); //得到当前的棋子, 1, 2
    //横向是否有五子相连
    var line = 1;
    for (var i = col - 1; getChess(row, i) === chess; i--) {
        line++; //计数+1
    }
    for (var i = col + 1; getChess(row, i) === chess; i++) {
        line++; //计数+1
    }
    if (line >= 5) {
        return true; //游戏结束
    }
    //纵向是否有五子相连
    var line = 1;
    for (var i = row - 1; getChess(i, col) === chess; i--) {
        line++; //计数+1
    }
    for (var i = row + 1; getChess(i, col) === chess; i++) {
        line++; //计数+1
    }
    if (line >= 5) {
        return true; //游戏结束
    }
    //正斜线
    var line = 1;
    for (var i = row - 1, j = col + 1; getChess(i, j) === chess; i-- , j++) {
        line++; //计数+1
    }
    for (var i = row + 1, j = col - 1; getChess(i, j) === chess; i++ , j--) {
        line++; //计数+1
    }
    if (line >= 5) {
        return true; //游戏结束
    }
    //反斜线
    var line = 1;
    for (var i = row - 1, j = col - 1; getChess(i, j) === chess; i-- , j--) {
        line++; //计数+1
    }
    for (var i = row + 1, j = col + 1; getChess(i, j) === chess; i++ , j++) {
        line++; //计数+1
    }
    if (line >= 5) {
        return true; //游戏结束
    }
}


/**
 * 注册点击事件
 */
function regEvent() {
    config.gameDom.onclick = function (e) {
        if (e.target.classList.contains("chess")) {
            //如果鼠标点击的dom，类样式中包含了chess，则表示，你点击的是棋子
            //不做任何操作
            return;
        }
        var x = e.offsetX - 20,
            y = e.offsetY - 20;
        var col = Math.round(x / config.splitSize)
        var row = Math.round(y / config.splitSize)
        putChess(row, col);
    }

    config.btnReset.onclick = init;
}

/**
 * 显示信息
 */
function showInfo() {
    if (isGameOver) {
        var who;
        if (nextChess === 1) {
            who = "白棋胜利"
        }
        else {
            who = "黑棋胜利"
        }
        config.infoDom.innerHTML = "游戏结束！" + who;
    }
    else {
        var who;
        if (nextChess === 1) {
            who = "轮到黑棋"
        }
        else {
            who = "轮到白棋"
        }
        config.infoDom.innerHTML = who;
    }
}

init();