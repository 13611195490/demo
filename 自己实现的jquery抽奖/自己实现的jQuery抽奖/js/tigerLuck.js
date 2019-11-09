var documentHeight = $(document).outerHeight(true);
$(".overLay").css({
  "height": documentHeight
});

//中奖用户滚动
function autoScroll(obj) {
  $(obj).find("ul").animate({
    marginTop: "-0.3rem"
  }, 1000, function () {
    $(this).css({
      marginTop: "0"
    }).find("li:eq(0)").appendTo(this);
  })
}

//显示弹框
function showPop(id) {
  $('#' + id).show();
  $(".overLay").show();
}

function hidePop(id) {
  $('#' + id).hide();
  $(".overLay").hide();
}

//开始游戏按钮事件
var flag = false; //控制play按钮按下后 4s以内 再触发无反应
function init() {
  if (!flag) {
    flag = true;
    play();
  }
}

function play() {
  $.ajax({
    url: '${rc.contextPath}/web/lottery/slot/commit',
    type: 'post',
    timeout: 10000,
    dataType: 'json',
    cache: false,
    contentType: 'application/json;charset=utf-8',
    headers: {
      'header-encrypt-code': '$!{encrypt}'
    },
    success: function (result) {
      if (result.code == 0) {

        var data = result.data;
        //设置停止位置
        var s1 = data.indexes[0];
        var s2 = data.indexes[1];
        var s3 = data.indexes[2];

        // [0, -2, -4, -6, -8, -10]
        var num0 = [0.3, -1.7, -3.7, -5.7, -7.7, -9.7][s1] + 'rem';
        var num1 = [0.3, -1.7, -3.7, -5.7, -7.7, -9.7][s2] + 'rem';
        var num2 = [0.3, -1.7, -3.7, -5.7, -7.7, -9.7][s3] + 'rem';
        var count = 0;

        // $(selector).animate(styles,speed,easing,callback)
        $(".slotCon0").animate({
          "top": -550
        }, 1000, "linear", function () {
          $(this).css("top", 0).animate({
            "top": num0
          }, 1000, "linear", function () {
            if (++count >= 3) {
              (data);
            }
          });
        });
        $(".slotCon1").animate({
          "top": -550
        }, 1000, "linear", function () {
          $(this).css("top", 0).animate({
            "top": num1
          }, 1800, "linear", function () {
            if (++count >= 3) {
              showIt(data);
            }
          });
        });
        $(".slotCon2").animate({
          "top": -550
        }, 1000, "linear", function () {
          $(this).css("top", 0).animate({
            "top": num2
          }, 1300, "linear", function () {
            if (++count >= 3) {
              showIt(data);
            }
          });
        });

      } else if (num0 == 0 && num1 == 0 && num2 == 0) {
        console.log('全是小红果')
      } else if (21010 == result.code) {
        //抽奖余额不足
        showPop('noMoneyPop');
        flag = false;
      } else {
        alert(result.codemsg);
        flag = false;
      }
    },
    error: function () {
      alert("系统错误！");
      flag = false;
    }
  });
}
// 请求成功弹窗
function showIt(data) {
  setTimeout(function () {
    if (data.award > 0) {
      // 获得钻石数
      $("#prize").text(data.award);
      showPop('successPop');
      // 中奖记录
      $("#scrollCon ul").append('<li>恭喜<span class="nickname">' + data.nickname + '</span>获得<span>' + data.bei +
        '倍</span>钻石奖励</li>');
    } else {
      showPop('thanksPop');
    }
    // 今日剩余次数
    // $("#chanceNum").text(0);
    //钻石数
    $("#zuanNum").text(data.balance);

    flag = false;
  }, 50);
}
//设置初始化时显示第几个奖品
function reset() {
  $(".slotCon0").css({
    "top": 0.3 + 'rem'
  });
  $(".slotCon1").css({
    "top": 0.3 + 'rem'
  });
  $(".slotCon2").css({
    "top": 0.3 + 'rem'
  });
}

$(function () {
  //调用中奖用户滚动
  setInterval('autoScroll("#scrollCon")', 5000);
  //调用初始显示第几个奖品
  reset();
  //开始按钮事件
  $("#begin").click(function () {
    init();
  });
  $("#beginP").click(function () {
    init();
  });
  //弹窗再玩一次事件
  $(".playAgainBtn").click(function () {
    $(this).parents(".pop").hide();
    $(".overLay").hide();
    setTimeout(init, 50);
  });
});