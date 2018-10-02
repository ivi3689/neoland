const request = require('sync-request');
const cheerio = require ('cheerio');
const chalk = require('chalk');

let res = request('GET','https://www.tripadvisor.es/Hotels-g262064-Zamora_Province_of_Zamora_Castile_and_Leon-Hotels.html')

let $ = cheerio.load(res.getBody())

let listItems = $ ('.listItem .main_col')
console.log(listItems.length)

for(let i= 0; i<listItems.length; i++){
    let name = listItems[i].children[0].children[0].children[0].children[0].data
    console.log(chalk.red(`${name}`))
    let pernight = listItems[i].children[1].children[0].children[0].children[0].children[0].next.attribs['data-pernight']
    let vendorName = listItems[i].children[1].children[0].children[0].children[0].children[0].next.attribs['data-vendorname']
    console.log(`${name}
    PPN: ${pernight}€
    VENDOR: ${vendorName}`)
}