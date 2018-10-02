
let prom = new Promise((resolve, reject)=>{
	setTimeout(() =>{

	let num = Math.random() * 100

	if (num > 70)
	{
		reject(num)
	}
	 else{
	 	resolve(num)
	 }
}, 3000)
})

prom.then((num) => {
	console.log('la promesa se resuelve con exito')
	console.log(`el numero es ${num}`)
}).catch((num) =>{
	console.log('la promesa se resuelve con error')
	console.log(`el numero es ${num}`)
})