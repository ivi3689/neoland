const db = require('../db')

//este fichero contiene todas las funciones para trabajar con la tabla ALUMNOS

exports.getAll = (done)=>{
    db.get().query('SELECT * FROM alumnos', (err, rows)=>{
        if(err) return done(err.message)
        done(null, rows)
    })
} 

//el metodo query recibe 3 parametros
//1- la sentencia sql
//2- (solo si hay interrogaciones en la sentencia ) un array on los valores a sustituir en la query
//3- funcion anonima con el error y el resultado

exports.insert = ({nombre, apellido, nacimiento, promedio, sexo, fk_idEscuela}, done) => {
    db.get().query('INSERT INTO alumnos VALUES (?,?,?,?,?,?,?)', [null, nombre, apellido, nacimiento, promedio, sexo, fk_idEscuela], (err, result) =>{
        if(err) return done(err.message)
        done(null, result.insertId)
    })
}

exports.getAlumnoById = (idAlumno, done) => {
    db.get().query('SELECT * FROM alumnos WHERE id=?', [idAlumno], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
 }

exports.getById = (idAlumno, done) =>{
    db.get().query('SELECT * FROM alumnosmateria LEFT JOIN alumno ON alumnosmateria.fk_idalumnos = alumno.id RIGHT JOIN materia ON alumnosmateria.fk_idmaterias= materia.id WHERE alumno.id = ?', [idAlumno], (err, rows)=>{
        if(err) return done(err)
        done(null,rows)
    })
}

exports.orderByPromedio = (orden, done) =>{
    db.get().query(`SELECT * FROM alumnos ORDER BY promedio ${orden}`,
    (err, rows)=>{
        if(err) return done(err.message)
        done(null, rows)
    })
}

exports.getByIdEscuela = (escuela, done) =>{
    db.get().query('SELECT * FROM alumnos WHERE alumnos.fk_idEscuela = ?', [escuela], (err, rows)=>{
        if(err) return done(err.message)
        done(null, rows)
    })
}
