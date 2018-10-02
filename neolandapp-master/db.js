const mysql = require('mysql')

let pool = null

exports.connect = (done)=>{

	pool = mysql.createPool({
		
		// ----HEROKU-------
		host: 'eu-cdbr-west-02.cleardb.net',
		user: 'b50793e3966437',
		password: 'bafd754c',
		database: 'heroku_edf8765d6cf06d2',
		port: 3306

	})
	done()
}


exports.get = () => {

	return pool

}
