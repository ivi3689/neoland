var express = require('express');
var router = express.Router();
const modelAlumno = require ('../models/alumno.js')

//REST API
router.get('/index', (req, res)=>{
    modelAlumno.getAll((err, rows)=>{
        if (err) return console.log(rows)
        res.render('alumnos/index', {
            alumnos: rows
    })   
  })
})

router.get('/new', (req, res)=>{
    res.render('alumnos/new')  
})

router.get('/:idAlumno', (req, res)=>{
    modelAlumno.getAlumnoById(req.params.idAlumno, (err, rows)=>{
        if(err)console.log(err)
        console.log(rows[0])
        res.render('alumnos/show', {
            alumno: rows[0]
        })
    })
})




router.post('/create', (req, res)=>{
   console.log(req.body)
   modelAlumno.insert(req.body,(err, result)=>{
       res.redirect('./index')
   })
})

module.exports = router;