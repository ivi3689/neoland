const TelegrafWit = require('telegraf-wit')
const Promise = require('bluebird')

const wit = new TelegrafWit('AWQIWXFWJB3IMC6VENPJSJYGG3VCK4HJ')

module.exports = (message)=> {
    return new Promise((resolve, reject)=>{
        wit.meaning(message.text)
        .then(result =>{
            message.nlu = result
            resolve(message)
        })
    })
}