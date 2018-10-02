const fs = require('fs')

let preguntas = [
  "¿Cual es tu nombre?",
  "¿Cual es tu edad?",
  "¿Donde vives?"
]
let respuestas = []


function preguntar(num) {
  process.stdout.write(`\n\n${preguntas[num]} >`)
}

  process.stdin.on('data', (data)=>{
    respuestas.push(data.toString())
    if(respuestas.length < preguntas.length){
      preguntar(respuestas.length)
    }else{
      process.exit()
    }
})
process.on('exit', ()=>{
  process.stdout.write(`Nombre: ${respuesta[0]}. Edad: ${respuesta[1]}. Vive en: ${respuesta[2]}.`)
})
preguntar(respuestas.length)





