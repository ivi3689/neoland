const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hola Mundo Express')
})

app.get('/', (req, res)=>{
    res.send('Hola Mundo Express')
})

app.post('/config.json', (req, res)=>{
    res.json({
        width:300,
        height:200,
        color:['blue', 'red', 'yellow']
    })
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando sobre el puerto 3000')
})

