const readline = require('readline')
const fs = require('fs')
let rl = readline.createInterface(process.stdin, process.stdout)

let respuestas = []


rl.question('¿Cuál es tu nombre?', (answer) => {
  respuestas.push(answer)
  let stream = fs.createWriteStream(`./mds/${answer}.md`)
  stream.write(`fichero de ${answer}\n==================\n`)
  rl.setPrompt('Dime algo')
  rl.prompt()

  rl.on('line', (input) => {
    if (input.toLowerCase().trim() === 'exit') {
      stream.close()
      rl.close()

    } else {
      respuestas.push(input)
      stream.write(`\n*${input}`)
      rl.setPrompt('¿Qué más me dices?')
      rl.prompt()
    }
  })
})

rl.on('close', ()=>{
  respuestas.forEach(item=>console.log(item))
})
