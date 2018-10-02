var express = require('express');
var router = express.Router();
const Producto = require('../models/producto')

app.get('/activos/:flag', function (req, res, next){
    productos.activos(req.params.flag, function(err, result){
        res.render('productos/activos', {prod: productos})
    })
});

router.get('/new', (req, res)=>{
    res.render('productos/new')
})

router.post('/create', (req, res)=>{
    Producto.insert(req.body, function(err, result){
        res.json(result)
    })
})

module.exports = router;
