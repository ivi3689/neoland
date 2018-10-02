export class Producto{

	nombre:string
	precio: number
	departamento: string

	constructor(pNombre, pPrecio, pDepartamento){
		this.nombre = pNombre
		this.precio = pPrecio
		this.departamento = pDepartamento
	}

	mostrarProducto(): string{
		return `${this.nombre} ${this.precio} ${this.departamento}E - Dept: ${this.departamento}`
	}
}