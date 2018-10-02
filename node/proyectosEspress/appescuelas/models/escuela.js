const db = require('../db')

exports.getAll = (done) =>{
    db.get().query('SELECT * FROM escuela', (err, rows)=>{
        if(err) return done(err.message)
        done(null, rows)
    })
}

exports.insert = ({titulo, ciudad}, done) => {
    db.get().query('INSERT INTO escuela VALUES (?,?,?)', [null, titulo, ciudad], (err, result) =>{
        if(err) return done(err.message)
        done(null, result.insertId)
    })
}

exports.getByEscuelaId = (idEscuela, done) =>{
    db.get().query('SELECT * FROM escuela WHERE id=?', [idEscuela], (err, rows)=>{
        if(err) return done(err.message)
        done(null,rows)
    })
}