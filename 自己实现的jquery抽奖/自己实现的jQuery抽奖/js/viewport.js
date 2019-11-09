// ~(function () {
//   function remSize() {
//     let winW = document.documentElement.clientWidth;
//     winW = winW > 750 ? 750 : winW;
//     document.documentElement.style.fontSize = winW / 750 * 100 + 'px';
//   }
//   remSize() //根据屏幕缩小自适应
//   window.addEventListener('resize', remSize);
// })();

~ function anonymous(window) {
  var computedREM = function computedREM() {
    var winW = document.documentElement.clientWidth,
      desW = 750
    if (winW >= 750) {
      document.documentElement.style.fontSize = '100px'
      return
    }
    document.documentElement.style.fontSize = winW / desW * 100 + 'px'
  };
  computedREM()
  window.addEventListener('resize', computedREM)
}(window)

//顶部导航栏返回按钮事件
function navBackBtnAction() {
  if (mobileType == 1) {
    window.target.action(1);
  } else if (mobileType == 2) {
    history.back(-1);
    // window.location.href = "${rc.contextPath}/api/income/h5Page"; //返回到'我的收益'页面
  }
}
//安卓手机底部返回键事件
function requestGoBack() {
  window.target.action(1);
}

//IOS:APP返回到h5时响应的事件，例如充值后返回到补签页面
function viewWillAppear() {
  window.location.reload();
}