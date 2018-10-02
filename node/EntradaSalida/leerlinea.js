const readline = require('readline')
const fs = require('fs')
let rl = readline.createInterface(process.stdin, process.stdout)

let respuestas = []


rl.question('¿Cuál es tu nombre?', (answer) => {
  respuestas.push(answer)
  fs.appendFile(`./mds/${answer}.md`, `###Fichero de ${answer}<br>`, (err)=>{
    if (err) return console.log(err)
  })
  rl.setPrompt('Dime algo')
  rl.prompt()

  rl.on('line', (input) => {
    if (input.toLowerCase().trim() === 'exit') {
      rl.close()

    } else {
      respuestas.push(input)
      fs.appendFile(`./mds/${answer}.md`, `<br>*${input}`, (err)=>{
        if(err) return console.log(err)
      })
      rl.setPrompt('¿Qué más me dices?')
      rl.prompt()
    }
  })
})

rl.on('close', ()=>{
  respuestas.forEach(item=>console.log(item))
})


