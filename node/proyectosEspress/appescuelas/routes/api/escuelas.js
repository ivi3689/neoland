var express = require('express');
var router = express.Router();

const modelEscuela = require('../../models/escuela')
const modelAlumno = require('../../models/alumno')

//http://localhost:3000/api/escuelas/
router.get('/', (req, res) =>{
    modelEscuela.getAll((err, rows)=>{
       if(err) console.log(err)
       res.json(rows)
    })
})

//post http://localhost:3000/api/escuelas/create

router.post('/create', (req, res) =>{
    console.log(req.body)
    modelEscuela.insert(req.body, (err, result) =>{
        if(err) console.log(err)
        res.json(result)
    })
})

router.get('/:idEscuela/full', (req, res)=>{
    modelEscuela.getByEscuelaId(req.params.idEscuela, (err, rows)=>{
        let datosEscuela = rows[0]
        modelAlumno.getByIdEscuela(datosEscuela.id, (err,rows)=>{
            let datosAlumnos = rows
            console.log(datosAlumnos)
            datosEscuela.alumnos = datosAlumnos
            res.json(datosEscuela)
            
        })
    })
})
module.exports = router;
