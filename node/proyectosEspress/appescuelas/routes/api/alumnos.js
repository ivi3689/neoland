var express = require('express');
var router = express.Router();
const modelAlumno = require('../../models/alumno')

//http://localhost:3000/api/alumnos/
router.get('/', (req, res) => {
    modelAlumno.getAll((err, rows) =>{
        res.json(rows)
    })
})

//http://localhost:3000/api/alumnos/3
router.get('/:idAlumno', (req, res)=>{
    modelAlumno.getById(req.params.idAlumno, (err, rows)=>{
        if(rows.length >0){
            res.json(rows)
        }else{
            res.json({
                error:'No existe ningún usuario para ese ID'
            })
        }        
    })
})



//http://localhost:3000/api/alumnos/order/promedio/asc
//http://localhost:3000/api/alumnos/order/promedio/desc
router.get('/order/promedio/:orden', (req, res)=>{
    modelAlumno.orderByPromedio(req.params.orden, (err, rows)=>{
        if(err) return console.log(err)
        
            res.json(rows)
    })
})

//POST http://localhost:3000/api/alumnos/create
router.post('/create', (req, res) =>{
    console.log(req.body)
    modelAlumno.insert(req.body, (err, result) =>{
        res.json(result)
    })
})

//get http://localhost:3000/api/alumnos/escuela/2
router.get('/escuela/:idEscuela', (req, res)=>{
    modelAlumno.getByIdEscuela(req.params.idEscuela, (err, rows)=>{
        if(rows.length > 0){
            res.json(rows) 
        }else{
            res.json({error: 'buscate otra escuela'})
        }                
    })
})


module.exports = router;
