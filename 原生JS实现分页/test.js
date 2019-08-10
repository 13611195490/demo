function test() {
    this = {};

    this.xxx = xxx;

    return this;
}

test();


var t = new test();


var defaultProps = {
    total: 0, //总数据量
    current: 1, //当前页码，最小为1
    limit: 10, //页容量
    container: document.querySelector(".pager"), //页码容器
    firstText: "首页", //首页显示的文字
    prevText: "上一页", //上一页显示的文字
    nextText: "下一页",
    lastText: "尾页",
    panelNumber: 10 //分页面板中，数字页码最多有多少个
}

var options = {
    total: 1000
}