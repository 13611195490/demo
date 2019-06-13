<template>
  <div class="nsd-captcha" >
    <input type="hidden" id="prov" :value="captchaCode" />
    <canvas id="canvas" @click="refreshCode" width="120" height="60"></canvas>
  </div>
</template>
<script>

export default {
  props: {
    captchaCode: {
      type: String,
      default: ''
    },
    identifyCodes: {
      type: String,
      default: '0123456789qwertyuiopasdfghjklzxcvbnm'
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },
    backgroundColorMin: {
      type: Number,
      default: 180
    },
    backgroundColorMax: {
      type: Number,
      default: 240
    },
    colorMin: {
      type: Number,
      default: 50
    },
    colorMax: {
      type: Number,
      default: 160
    },
    lineColorMin: {
      type: Number,
      default: 40
    },
    lineColorMax: {
      type: Number,
      default: 180
    },
    dotColorMin: {
      type: Number,
      default: 0
    },
    dotColorMax: {
      type: Number,
      default: 255
    },
    contentWidth: {
      type: Number,
      default: 112
    },
    contentHeight: {
      type: Number,
      default: 38
    }
  },
  mounted: function() {
    this.makeCode(this.identifyCodes, 4)
    this.drawPic()
  },
  methods: {
    // 生成一个随机数
    randomNum: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 生成一个随机的颜色
    randomColor: function(min, max) {
      var r = this.randomNum(min, max)
      var g = this.randomNum(min, max)
      var b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    drawPic: function() {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      // 绘制背景
      // ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
      ctx.fillStyle = 'rgb(230,230,250)'
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      // 绘制文字
      for (var i = 0; i < this.captchaCode.length; i++) {
        this.drawText(ctx, this.captchaCode[i], i)
      }
      this.drawLine(ctx)
      // this.drawDot(ctx)
    },
    drawText: function(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      var x = (i + 1) * (this.contentWidth / (this.captchaCode.length + 1))
      var y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
      var deg = this.randomNum(-45, 45)
      // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0)
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
    drawLine: function(ctx) {
      // 绘制干扰线
      for (var i = 0; i < 5; i++) {
        ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
        ctx.beginPath()
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        ctx.stroke()
      }
    },
    drawDot: function(ctx) {
      // 绘制干扰点
      for (var i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    },
    makeCode: function(o, len) {
      for (var i = 0; i < len; i++) {
        this.captchaCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
    },
    refreshCode: function() {
      // 刷新验证码
      this.captchaCode = ''
      this.makeCode(this.identifyCodes, 4)
      this.drawPic()
    }
  }
}
</script>
<style scoped>

</style>
