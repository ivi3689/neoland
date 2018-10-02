var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require('moment')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/escritor/:escritorId/libros/:libroId', (req, res)=>{
  console.log(req.params.escritorId)
  res.send('manejando params')
})

app.get('/ejemplo/a', (req, res, next)=>{
  req.currentDate = new Date()
  next()
},(req, res)=>{
  console.log(req.currentDate)
  res.send(req.currentDate)
})




let handler1 = (req, res, next) =>{
  req.currentDate = moment(new Date())
  next()
}

let handler2 = (req, res, next) =>{
  console.log(req.currentDate.format('DD-MM-YY hh:mm'))
  next()
}



app.get('/ejemplo/b', [handler1, handler2], (req, res)=>{
  res.send('respondiendo a la ruta /ejemplo/b')
})

app.get('/ejemplo/c', [handler1, handler2], (req, res)=>{
  req.send('respondiendo ala reta/ejemplo/c')
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
