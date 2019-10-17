//创建一个音频上下文
var ctx;
var sounds = [130, 147, 165, 175, 196, 220, 246, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1047];
// 得到一个音频上下文
function setContext() {
    if (!ctx) {
        //保证，多次调用该函数，只创建一个上下文
        ctx = new AudioContext();
    }
}

//发声
function makeSound(index) {
    setContext(); //设置上下文
    var osc = ctx.createOscillator(); //得到音频振荡器
    var g = ctx.createGain(); //得到音量控制对象

    osc.connect(g); //连接 振荡器 和 音量控制对象
    osc.type = "sine"; //设置波形
    osc.frequency.value = sounds[index]; //设置频率
    var duration = 1.5; //声音持续的时间

    g.connect(ctx.destination); //连接到系统默认设备
    g.gain.value = 0; //控制音量


    osc.start(); //不传递时间，则立即播放
    //音量在0.01秒内，从0变到0.6
    g.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.01);
    //1.5秒后停止
    osc.stop(ctx.currentTime + duration);
    //音量在1.5秒内，从0.6变到0.01
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
}
/**
 * 改变li的背景颜色
 * @param {*} li 
 */
function changeColor(li) {
    li.style.background = "#ccc";
    setTimeout(function () {
        li.style.background = "#fff";
    }, 100);
}
//ul元素
var container = document.getElementById("container");

/**
 * 得到指定的li是父元素的第几个子元素（下标）
 * @param {*} li 
 */
function getLiIndex(li) {
    var ul = li.parentNode; //获取父元素
    // Array.from(类数组) 返回真数组
    var children = Array.from(ul.children);
    return children.indexOf(li);
}

container.onclick = function (e) {
    // e.target:  ul  li  span
    if (e.target.tagName === "UL") {
        return;
    }
    // li  span
    var li = e.target; //先假设点击的就是li
    if (e.target.tagName === "SPAN") {
        li = e.target.parentNode; //找到span的父元素li
    }
    changeColor(li);
    var index = getLiIndex(li);
    makeSound(index)
}

window.onkeydown = function (e) {
    var selector = "li[key=\"" + e.key + "\"]";
    //通过css选择器选中单个元素
    var li = document.querySelector(selector)
    if (li) {
        changeColor(li);
        var index = getLiIndex(li);
        makeSound(index)
    }
}