const http = require('http')
const fs = require('fs')
const path = require ('path')

http.createServer((req, res)=>{
    console.log(`Método ${req.method}. Url: ${req.url}`)
    // res.end('Hola Mundo')

    if(req.url === '/'){
        fs.readFile('./public/index.html', 'UTF-8',(err, content)=>{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(content)
        })
    }else if (req.url.match(/.css$/)){
        console.log(`La hoja de estilos es ${req.url}`)
        let rutaCss = path.join(__dirname, 'public', req.url)
        fs.readFile(rutaCss, 'UTF-8', (err, content)=>{
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.end(content)   
        })

    }else if (req.url.match(/.png$/)){
        let rutaPng = path.join(__dirname, 'public', req.url)
        fs.readFile(rutaPng, (err, content)=>{
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.end(content) 
        })  
    }
        else{
        res.writeHead(404, {'Content-Type': 'text-plan'})
        res.end('404 Page Not Found')
    }
}).listen(3000)

