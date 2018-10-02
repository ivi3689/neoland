const https = require('https')
const fs = require('fs')

let options = {
   hostname:'es.wikipedia.org',
   port: 443,
   path: '/wiki/George_Washington',
   method: 'GET'
}

let req = https.request(options, (res)=> {
   console.log(`estado servidor: ${res.statusCode}`)
  // console.log(res.headers)

  let responseBody = ""

  res.setEncoding('UTF-8')

  res.once('data', (chunk)=>{
      console.log(`comienza la descarga de la pagina`)
  })

  res.on('data', (chunk)=>{
      responseBody += chunk

  })

  res.on('end', ()=>{
      fs.writeFile('GeorgeWashington.html', responseBody, (err)=>{
          if(err){
          console.log('se ha producido un error ${err}')
      } else {
          console.log('se ha descargado correctamente')
      }})
  })
  
  })
  req.on('err', (err)=>{
    console.log('se ha producido un error en la peticion ${err}')
})

req.end()