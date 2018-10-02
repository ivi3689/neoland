const request = require('sync-reuest')
const cheerio = require ('cheerio')

let res = request('GET','https://www.tripadvisor.es/Hotels-g262064-Zamora_Province_of_Zamora_Castile_and_Leon-Hotels.html')

console.log(res.getBody())