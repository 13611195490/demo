/**
 * 产生一个通用的计时器对象
 * @param duration 间隔时间
 */
function getTimer(duration) {
    var timerId;
    return {
        start: function () {
            //this -> 当前计时器对象
            if (timerId) {
                //已经有计时器了
                return;
            }
            var that = this; //保存this的指向
            timerId = setInterval(function () {
                if (that.onTick) {
                    that.onTick();
                }
            }, duration)
        },
        stop: function () {
            clearInterval(timerId);
            timerId = null;
        },
        onTick: undefined
    }
}

//天空
var sky = {
    dom: document.querySelector(".sky"), //对应的dom对象
    width: 800, //宽度
    height: 488, //高度
    left: 0,
    timer: getTimer(20), //天空移动的计时器
    show: function () { //重新显示天空
        this.dom.style.left = this.left + "px";
    }
}

sky.timer.onTick = function () {
    sky.left--;
    if (sky.left <= -sky.width) {
        sky.left = 0;
    }
    //重新显示天空
    sky.show();
}

//大地
var land = {
    dom: document.querySelector(".land"), //对应的dom对象
    width: 800, //宽度
    left: 0,
    timer: getTimer(20), //大地移动的计时器
    show: function () { //重新显示大地
        this.dom.style.left = this.left + "px";
    }
}

land.timer.onTick = function () {
    land.left -= 2;
    if (land.left <= -land.width) {
        land.left = 0;
    }
    //重新显示大地
    land.show();
}

//小鸟
var bird = {
    dom: document.querySelector(".bird"),
    width: 33,
    height: 26,
    left: 200,
    top: 150,
    maxTop: 488 - 26,//top的最大值
    speed: 0, //当前速度：像素/秒
    g: 1200, //加速度：像素/秒²
    swingStatus: 0, //翅膀摆动的状态：0，1，2
    show: function () {
        //显示一只小鸟
        this.dom.style.top = this.top + "px";
        //根据swingStatus设置背景图位置
        if (this.swingStatus === 0) {
            this.dom.style.backgroundPosition = "-8px -10px";
        }
        else if (this.swingStatus === 1) {
            this.dom.style.backgroundPosition = "-60px -10px";
        }
        else {
            this.dom.style.backgroundPosition = "-113px -10px";
        }
    },
    swingTimer: getTimer(150), //煽动翅膀的计时器
    dropTimer: getTimer(20), //往下掉的计时器
    jump: function () {
        //往上跳
        bird.speed = -400;
    }
}

bird.swingTimer.onTick = function () {
    bird.swingStatus = (bird.swingStatus + 1) % 3;
    // bird.swingStatus++;
    // if (bird.swingStatus === 3) {
    //     bird.swingStatus = 0;
    // }
    bird.show();
}

bird.dropTimer.onTick = function () {
    var t = 0.02; //0.02秒移动一段
    var dis = bird.speed * t + 0.5 * bird.g * t * t; //距离
    var newSpeed = bird.speed + bird.g * t; //新的速度
    bird.top += dis; //更新坐标
    if (bird.top > bird.maxTop) {
        //超过了最大纵坐标
        bird.top = bird.maxTop;
    }
    bird.speed = newSpeed; //更新速度
    bird.show(); //重新显示
}

/**
 * 得到最小值到最大值之间的随机整数
 * @param {*} min 
 * @param {*} max 取不到
 */
function getRandom(min, max) {
    //百度：产生一个最小值到最大值之间的随机数
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 得到一个新创建的柱子对
 */
function createPipePair() {
    var pair = {
        left: sky.width, //横坐标
        width: 52,
        up: {//上边的柱子,
            dom: document.createElement("div")
        },
        down: {//下边的柱子
            dom: document.createElement("div")
        },
        show: function () {
            this.up.dom.style.height = this.up.height + "px";
            this.down.dom.style.height = this.down.height + "px";

            this.up.dom.style.left = this.down.dom.style.left = this.left + "px";
        }
    }
    //计算两个数字的高度
    var spaceHeight = 150;//空隙的高度
    var minHeight = 70;
    var maxHeight = sky.height - spaceHeight - minHeight;
    pair.up.height = getRandom(minHeight, maxHeight); //随机产生上面柱子的高度
    pair.down.height = sky.height - spaceHeight - pair.up.height; //求下面柱子的高度
    pair.up.top = 0;
    pair.down.top = pair.up.height + spaceHeight;

    //初始化设置dom对象
    pair.up.dom.className = "pipeup";
    pair.down.dom.className = "pipedown";
    game.dom.appendChild(pair.up.dom);
    game.dom.appendChild(pair.down.dom);

    pair.show();

    return pair;
}

//柱子对产生器
var pairProducer = {
    pairs: [], //保存所有的柱子对
    produceTimer: getTimer(2000), //产生柱子对的计时器
    moveTimer: getTimer(20) //移动所有柱子的计时器
}

pairProducer.produceTimer.onTick = function () {
    var pair = createPipePair();
    pairProducer.pairs.push(pair);
}

pairProducer.moveTimer.onTick = function () {
    for (var i = 0; i < pairProducer.pairs.length; i++) {
        var pair = pairProducer.pairs[i];
        pair.left -= 2;
        //判断该柱子是否需要移除
        if (pair.left < -pair.width) {
            //移除？
            pairProducer.pairs.splice(i, 1); //从数组中删除
            i--;
            pair.up.dom.remove();
            pair.down.dom.remove();
        }
        pair.show();
    }
    gameJudgement();
}

//判定游戏结束
function gameJudgement() {
    if (bird.top === bird.maxTop) {
        //游戏结束
        game.over();
        return;
    }

    //小鸟碰到柱子
    for (var i = 0; i < pairProducer.pairs.length; i++) {
        var pair = pairProducer.pairs[i]; //拿到一个柱子对
        //判断小鸟和pair是否碰撞
        if (isHit(pair)) {
            game.over();
        }
    }
}
/**
 * 判断小鸟和柱子对是否碰撞
 * @param {*} pair 
 */
function isHit(pair) {
    var bx = bird.left + bird.width / 2;//鸟的中心点横坐标
    var by = bird.top + bird.height / 2; //鸟的中心点纵坐标
    var upx = pair.left + pair.width / 2; //上柱子中心点横坐标
    var downx = upx; //下柱子中心点横坐标
    var upy = pair.up.height / 2; //上柱子中心点纵坐标
    var downy = pair.down.top + pair.down.height / 2;
    var isHitUp = Math.abs(bx - upx) < (bird.width + pair.width) / 2 && Math.abs(by - upy) < (bird.height + pair.up.height) / 2;//是否和上边的柱子相交
    var isHitDown = Math.abs(bx - downx) < (bird.width + pair.width) / 2 && Math.abs(by - downy) < (bird.height + pair.down.height) / 2;//是否和上边的柱子相交
    return isHitUp || isHitDown;
}

//游戏对象
var game = {
    dom: document.getElementById("game"),
    isStop: true, //是否已停止
    isOver: false, //是否游戏结束
    over: function () {   //游戏结束方法
        this.isOver = true;
        var divOver = document.querySelector(".over");
        divOver.style.display = "block";
        this.stop();
    },
    start: function () {
        sky.timer.start();
        land.timer.start();
        bird.swingTimer.start();
        bird.dropTimer.start();
        pairProducer.produceTimer.start();
        pairProducer.moveTimer.start();
        this.isStop = false;
    },
    stop: function () {
        sky.timer.stop();
        land.timer.stop();
        bird.swingTimer.stop();
        bird.dropTimer.stop();
        pairProducer.produceTimer.stop();
        pairProducer.moveTimer.stop();
        this.isStop = true;
    }
}

//事件
window.onkeydown = function (e) {
    if (e.key === "Enter") {
        if (game.isOver) {
            //重新开始
            location.reload();
            return;
        }
        //按下的是回车
        if (game.isStop) {
            game.start();
        }
        else {
            game.stop();
        }
    }
    else if (e.key === " ") {
        //按下的是空格
        bird.jump();
    }
}