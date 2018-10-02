var express = require('express');
var router = express.Router();

let alumnosRouter = require ('./api/alumnos')
let escuelasRouter = require ('./api/escuelas')

//esta linea gestiona todas las peticiones que se realicen sobre /api/alumnos
router.use('/alumnos', alumnosRouter)

//esta linea gestiona todas las peticiones que se realicen sobre /api/escuelas
router.use('/escuelas', escuelasRouter)

module.exports = router;
