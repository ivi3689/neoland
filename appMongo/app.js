var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Persona = require('./models/persona')
const Producto = require('./models/producto')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const db = require('./db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/nuevapersona', (req, res) => {
  let p = new Persona()
  p.nombre = 'TestDB3'
  p.apellidos = 'ApellidosTest3'
  p.save((err) => {
    if (err) throw err
    console.log('Se ha creado la persona')
  })
  res.json(p.nombre_completo)
}) 

app.get('/nuevapersona2', (req, res) => {
  Persona.create({ nombre: 'Rosa', apellidos: 'Martinez' }, function (err, persona) {
    if (err) throw err
    res.json(persona.nombre_completo)
  })
})

app.get('/recuperarpersonas', (req, res) => {
  Persona.find({ nombre: 'Mario' }, function (err, personas) {
    if (err) throw err
    res.json(personas)
  })
})
app.get('/recuperaractivos', (req, res) =>{
  Producto.activos(function(err, productos){
    res.json(productos)
  })
})  
app.get('/mismodepartamento', (req, res) =>{
  let p = new Producto()
  p.departamento = 'tecnologia'
  p.mismoDepartamento(function(err, productos){res.jon(productos)})
})



app.get('/editarpersona', (req, res) => {
  Persona.findById('5b8e58d6b19b500be9d1ba14', function (err, persona) {
    persona.nombre = 'NombreEditado'
    persona.apellidos = 'ApellidosEditados'
    persona.save(function (err) {
      res.json(persona)
    })
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
