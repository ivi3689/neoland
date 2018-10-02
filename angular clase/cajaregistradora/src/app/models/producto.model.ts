export class Producto{

	//propiedades
	nombre: string
	imagen: string
	precio: number


	constructor(pNombre, pImagen, pPrecio) {
		this.nombre = pNombre
		this.imagen = pImagen
		this.precio = pPrecio
	}

	precioFormateado(simbolo){
		return `${this.precio}${simbolo}`
	}
}