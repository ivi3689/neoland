const mysql = require('mysql')

let pool = null

exports.connect = (done)=>{

	pool = mysql.createPool({
		
		// ----LOCAL-------
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'asistencia',
		port: 8889

	})
	done()
}


exports.get = () => {

	return pool

}
