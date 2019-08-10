//通用的页码插件

/**
 * 创建一个页码对象
 * @param {object} options 配置对象
 */
function Pager(options) {
    //默认配置
    var defaultOptions = {
        total: 0, //总数据量
        current: 1, //当前页码，最小为1
        limit: 10, //页容量
        container: document.querySelector(".pager"), //页码容器
        firstText: "首页", //首页显示的文字
        prevText: "上一页", //上一页显示的文字
        nextText: "下一页",
        lastText: "尾页",
        panelNumber: 10, //分页面板中，数字页码最多有多少个
        onPageChange: null //这是一个回调函数，当页码发生改变时，会调用该函数
    }
    //混入 mixin 得到最终的配置
    this.options = Object.assign(defaultOptions, options)

    this.show();//直接显示
    this.registEvent();
}


/**
 * 根据当前的配置，重新显示页码
 */
Pager.prototype.show = function () {
    //容器清空
    this.options.container.innerHTML = "";
    //创建首页
    var disabled = "";
    if (this.options.current === 1) {
        //第一页的情况
        disabled = "disabled"
    }
    this.createPagerItem("first " + disabled, this.options.firstText);
    //创建上一页
    this.createPagerItem("prev " + disabled, this.options.prevText);
    //创建数字页码
    this.createNumbers();

    //创建下一页
    var pageNumber = this.getPageNumber(); //总页数
    disabled = "";
    if (this.options.current === pageNumber) {
        disabled = "disabled"
    }
    this.createPagerItem("next " + disabled, this.options.nextText);
    //创建尾页
    this.createPagerItem("last " + disabled, this.options.lastText);

    //创建页码文本
    var span = document.createElement("span");
    span.className = "pager-text";
    span.innerHTML = `<i class="current">${this.options.current}</i> / <i class="total">${pageNumber}</i>`;
    this.options.container.appendChild(span);
}

Pager.prototype.createNumbers = function () {
    //要显示最小数字
    var min = this.options.current - Math.floor(this.options.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    //要显示的最大数字
    var max = min + this.options.panelNumber - 1;
    var pageNumber = this.getPageNumber();
    if (max > pageNumber) {
        max = pageNumber;
    }
    for (var i = min; i <= max; i++) {
        var cls = "";
        if (i === this.options.current) {
            cls = "active"
        }
        this.createPagerItem("number " + cls, i);
    }
}

/**
 * 创建单个页码
 * extraClassName: 额外的类名
 * content：内容
 */
Pager.prototype.createPagerItem = function (extraClassName, content) {
    var a = document.createElement("a");
    a.className = "pager-item " + extraClassName;
    a.innerText = content;
    this.options.container.appendChild(a);
    return a;
}

/**
 * 根据配置，得到总页数（最大页码）
 */
Pager.prototype.getPageNumber = function () {
    return Math.ceil(this.options.total / this.options.limit);
}

/**
 * 注册事件
 */
Pager.prototype.registEvent = function () {
    var that = this;
    this.options.container.addEventListener("click", function (e) {
        //事件委托
        if (e.target.classList.contains("first")) {
            //点击的元素是否包含类名first
            //跳转页码
            that.toPage(1);
        }
        else if (e.target.classList.contains("prev")) {
            that.toPage(that.options.current - 1);
        }
        else if (e.target.classList.contains("next")) {
            that.toPage(that.options.current + 1);
        }
        else if (e.target.classList.contains("last")) {
            that.toPage(that.getPageNumber());
        }
        else if (e.target.classList.contains("number")) {
            that.toPage(+e.target.innerText);
        }
    });
}

/**
 * 跳转到指定页码
 * page:新的页码
 */
Pager.prototype.toPage = function (page) {
    if (page < 1) {
        page = 1;//页码最小为1
    }
    var pageNumber = this.getPageNumber();
    if (page > pageNumber) {
        page = pageNumber; //页码为最大页码
    }

    if (this.options.current === page) {
        //页码无变化
        return;
    }
    this.options.current = page;
    this.show();
    if (this.options.onPageChange) {
        this.options.onPageChange(page)
    }
}