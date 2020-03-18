const formatTime = date => {
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

// return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
return [year, month, day].map(formatNumber).join('-')
}

/**
 * 倒计时
 */
const countdown = (addTime, no, collback) => {
const downDay = (no + 1) * 24 * 3600 * 1000;
const add_time = addTime * 1000;
const newDate = new Date().getTime();
const num = downDay - (newDate - add_time);
var leave1 = num % (24 * 3600 * 1000)  //计算天数后剩余的毫秒数
var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
var leave3 = leave2 % (60 * 1000)   //计算分钟数后剩余的毫秒数
const day = Math.floor(num / (24 * 3600 * 1000));
const hour = Math.floor(leave1 / (3600 * 1000));
const minute = Math.floor(leave2 / (60 * 1000));
const second = Math.round(leave3 / 1000);

let itemStr = `${day - 1}天${hour}小时${minute}分钟${second}秒`;

if(day <= 0) {
    itemStr = `${hour}小时${minute}分钟${second}秒`;
} else if (hour <= 0) {
    itemStr = `00小时${minute}分钟${second}秒`;
} else if (minute <= 0) {
    itemStr = `00小时00分钟${second}秒`;
} else if (second <= 0) {
    collback();
}

return itemStr;
}

const formatNumber = n => {
n = n.toString()
return n[1] ? n : '0' + n
}

module.exports = {
formatTime: formatTime,
countdown: countdown,
}
  