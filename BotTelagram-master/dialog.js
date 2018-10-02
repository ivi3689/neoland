const Promise = require('bluebird')
const fs = require('fs')

module.exports =  (message) => {
    return new Promise ((resolve, reject)=>{
        if(message.nlu.entities && message.nlu.entities.intent.length > 0){
            // resolve('Todo esta claro como el agua!!')
            if(message.nlu.entities.intent[0].confidence>0.8){
                fs.readFile(`./frases/${message.nlu.entities.intent[0].value}`, (err, data)=>{
                    let frases = data.toString().split('/n')
                    let fraseEnvio = frases[Math.round(Math.random()*frases.length)]
                    reolve(fraseEnvio)
                })
            }else{
                resolve('No tengo confianza')
            }
        }else {
            resolve('No entiendo tus palabras')
        }
    })
}