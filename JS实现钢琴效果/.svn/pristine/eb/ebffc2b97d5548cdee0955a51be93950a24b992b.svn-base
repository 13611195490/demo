//  将UTC时间字符串转为当地时间字符串
export function formatTime(utcString) {
  const UTCyear = utcString.slice(0, 4)
  const UTCmonth = utcString.slice(4, 6)
  const UTCday = utcString.slice(6, 8)
  const UTChour = utcString.slice(9, 11)
  const UTCminute = utcString.slice(11, 13)
  const UTCsecond = utcString.slice(13, 15)
  const utcTime = new Date(UTCyear + '-' + UTCmonth + '-' + UTCday + ' ' + UTChour + ':' + UTCminute + ':' + UTCsecond)
  const locTime = new Date(utcTime.getTime() + 8 * 60 * 60 * 1000).toLocaleString('chinese', { hour12: false })
  return locTime
}
// 返回时间字符串需要加0时的处理
function addZero(timeNum, addFlag) {
  if (addFlag) {
    return timeNum + 1 < 10 ? '0' + (timeNum + 1) : '' + (timeNum + 1)
  } else {
    if (timeNum === 0) {
      return '00'
    } else {
      return '' + timeNum
    }
  }
}
// 将当地时间转为UTC时间
export function locTimeToUTC(time) {
  const utc = new Date(time).getTime() - 8 * 60 * 60 * 1000
  const utcDate = new Date(utc)
  const utcYear = addZero(utcDate.getFullYear(), false)
  const utcMonth = addZero(utcDate.getMonth(), true)
  const utcDay = addZero(utcDate.getDate(), false)
  const utcHour = addZero(utcDate.getHours(), false)
  const utcMin = addZero(utcDate.getMinutes(), false)
  const utcSec = addZero(utcDate.getSeconds(), false)
  return utcYear + utcMonth + utcDay + 'T' + utcHour + utcMin + utcSec
}
// 将时间戳转为时间字符串
export function timeStampTOStr(timeStamp) {
  return new Date(timeStamp).toLocaleString('chinese', { hour12: false })
}
