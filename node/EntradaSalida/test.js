// const exec = require('child_process').exec

// // exec('open htp:wwww.googgle.es')
// exec('explorer "http://www.google.es"')

// exec('dir', (err, stdout)=>{
//   if(err) return console.log(err)
//   console.log(stdout)
//   //exec(`say ${stdout}`) solo funciona con mac
// })
let fs = require('fs')

if(fs.existsSync('bin')){
  console.log('el directorio  ya exite')
}else {
  fs.mkdir('bin', (err)=>{
    if(err){
      console.log(' se ha producido un error ${err.message')
    }else{
      console.log('directorio creado correctamente')
    }

  })

}

// fs.renameSync('./bin/prueba1.json', './bin/config.json')
// fs.rename('./bin/config.json', './lib/config.json', (err) => {
//   if(err){
//     console.log(`se ha producido en error ${err.message}`)
//   }else{
//     console.log('se ha movido el fichero')
//   }
// })
fs.copyFile('./lib/config.json', './lib/configTmp.json')
fs.unlinkSync('./lib/config.json')
