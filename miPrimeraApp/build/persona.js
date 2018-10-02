export default class Persona {

	constructor(pNombre, pApellido, pEdad) {
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.edad = pEdad;
	}
	mostrarPersona() {
		return `Hola, me llamo ${this._nombre} ${this._apellido} y mi edad es ${this._edad} años`;
	}
}