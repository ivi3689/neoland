const moment = require(`moment`)

let currentDate = moment (new Date())

let fechaPasada = moment ('2012/05/21', 'YYYY/MM/DD')
console.log(currentDate)
console.log(fechaPasada)

Console.LOG(currentDate.diff(fechaPasada, 'months'))