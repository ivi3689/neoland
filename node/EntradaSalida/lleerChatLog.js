const fs = require('fs')

let stream = fs.createReadStream('./bin/chat.log', 'UTF-8')

let datosFichero = ""
let cont = 0

stream.once('data', ()=>{
  console.log('comenzamos a leer el fichero')
})

stream.on('data', (chunk)=>{
  cont++
  datosFichero += chunk
})

stream.on('end', ()=>{
  console.log(`se ha terminado de descargar el fichero: ${datosFichero.length}`)
  console.log(`numero de chunk: ${cont}`)
})
