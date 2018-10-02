const http = require('http')

let server = http.createServer((req, res)=>{
  res.end('hola mundo server')
})

server.listen(3000)
