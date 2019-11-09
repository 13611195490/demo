var httpHeader;
var wrap = document.getElementById('wrap'); //幸运转盘大背景
var alertBg = document.getElementById('alertBg'); //弹框背景
var alertBgRed = document.getElementById('alertBgRed'); //弹框背景
var close = document.getElementById('close'); //关闭X

var luckDoload = document.getElementById("luckDoload"); //奖品盘

// 接口地址 /web/lottery/roulette/commit
//code = 0,显示3份字段，title(中奖了) text(恭喜你获得了500钻) index(停下的位置)
//code = 21010,提醒小红花不足
//获取转盘数据
function Roulette() {
  $.ajax({
    url: '${rc.contextPath}/web/lottery/roulette/commit',
    method: 'POST',
    async: true,
    cache: false,
    dataType: 'json',
    contentType: 'application/json;charset=utf-8',
    headers: {
      'header-encrypt-code': httpHeader
    },
    success(data) {
      if (data.code == 0) {
        go(random, data)
        prizeWindow()
        window.queryRoulette = data;
        console.log(window.queryRoulette, '请求成功的window.queryRoulette');
      }

      if (data.code == 21010) {
        // code = 21010,弹出小红花不足
        prizeNotWindow()
      }
    },
    error: function (err) {
      console.log(err);
    }
  });
}

// 绑定中奖数据
function bindPrize(winData) {
  var str = '';
  str += '<b id="close">'
  str += '<img class="closeImg" src="./img/close.png" alt="">'
  str += '</b>'
  str += '<h3>' + winData.title + '</h3>'
  str += '<span>' + winData.text + '</span>'
  str += '<p id="changeBtn">'
  str +=
    '<img  id="tryAgainBtn" class="alertImg" src="./img/tablechange.png" alt="">'
  str += '</p>'
  alertBg.innerHTML = str;
}

var doing = false; //设置转盘是否转动 ，默认否
var rotateNum = 4; //旋转的圈数
var defNum = rotateNum * 360; //4是所需要转动的次数;
var random = Math.round(Math.random() * 8) * 45; //旋转到45的倍数，指针在中间位置

function go(random, data) {
  if (doing) {
    return;
  }
  doing = true;
  // var ranDeg = random + defNum; //随机度数 45的倍数* 360*4圈
  var winIndex = data.data.index; //返回的data.index值
  var messAlert = winIndex * 45; //返回的data.index 的值 *45
  var posDeg = defNum - messAlert; // 转了 360*4圈 - 45*n 度

  $('#boxCir').attr("data-deg", posDeg); //设置自定义属行，旋转停下来就是指定的度数
  console.log(posDeg, '第一次转的度数')

  //让转盘转起来
  luckDoload.style.transform = "rotate(" + posDeg + "deg)";
  luckDoload.style.transition = "all 5s";
}

$('#boxBtn').click(function () {
  // $('#alertBg').hide();
  //是否包含这个类名
  if ($(this).hasClass('start') && !doing) {
    // 点击按钮请求数据，请求成功开始旋转
    Roulette();
  } else {
    //活动未开始的提示逻辑
  }
})

//中奖点击返回抽奖页面
function prizeWindow() {

  $('.closeImg').on('click', function () {
    $('#alertBg').hide();
  })
  $('.alertImg').on('click', function () {
    $('#alertBg').hide();
    Roulette();
  })
}

//指针指向的位置的度数  = 360 - 转盘转动的度数
var transitionend = 'transitionend' || 'webkitTransitionEnd';
luckDoload.addEventListener(transitionend, function () {
  doing = false;
  var winData = window.queryRoulette.data;
  var winIndex = window.queryRoulette.data.index; //返回的data.index 的 值
  var messAlert = winIndex * 45; //返回的data.index 的值 *45
  var posDeg = 360 - messAlert; // 转了315度
  var indexDeg = messAlert / 45; //转了45的几倍

  console.log(winData, 'winData')
  console.log(indexDeg, 'indexDeg')

  luckDoload.style.transform = "rotate(" + posDeg + "deg)";
  luckDoload.style.transition = "none";

  getPrize(indexDeg, winData);
}, false)


//中奖信息
function getPrize(indexDeg, winData) {

  console.log("恭喜您中奖了:" + indexDeg);
  console.log(indexDeg, 'indexDeg')

  if (indexDeg == 7) {

    console.log('谢谢惠顾')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 6) {

    console.log('华为Mate30')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 5) {

    console.log('500钻')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 4) {

    console.log('100元抵扣卷')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 3) {

    console.log('50钻')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 2) {

    console.log('10钻')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 1) {

    console.log('2钻')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else if (indexDeg == 0) {

    console.log('vivo x27')
    $('#alertBg').show();
    bindPrize(winData)
    prizeWindow();

  } else {
    return
  }
}

//未中奖点击返回抽奖页面
function prizeNotWindow() {
  $('#alertBgRed').show();
  $('#closeImgRed').on('click', function () {
    $('#alertBgRed').hide();
  })
  $('#alertImgRed').on('click', function () {
    $('#alertBgRed').hide();
  })
}

// 消息上移
function mesTops() {

  $(".m-buyer").bootstrapNews({
    newsPerPage: 2,
    autoplay: true,
    pauseOnHover: true,
    navigation: false,
    direction: 'up',
    newsTickerInterval: 2000,
    onToDo: function () {
      //console.log(this);
    }
  });
}
mesTops()