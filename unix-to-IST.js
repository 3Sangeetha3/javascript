//convert unix timestamp to IST
let timestamp = 1708565548;
let date = new Date(timestamp * 1000);
console.log(date.toUTCString())
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
