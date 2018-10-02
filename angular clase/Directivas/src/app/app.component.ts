import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	estilos: any
	fSize: number
	colores: string[]
	colorActivo: number
	oculto: boolean

	constructor() 
	{
		this.oculto = false
		this.colores =['blue', 'red', 'purple', 'brown', 'grey']
		this.colorActivo = 0
		this.fSize= 32
		this.estilos = 
		{
			'background-color':'green',
			'font-size': `${this.fSize}px`,
			'color': this.colores[this.colorActivo]
		}
	}

	ngOnInit()
	{
		setInterval(()=>{
			this.colorActivo++
			if(this.colorActivo === this.colores.length){
				this.colorActivo = 0
			}
			this.estilos.color =this.colores[this.colorActivo]
		},3000)
	}

	cambiaColor() {
		this.estilos.backgroundColor = 'yellow'
	}
	modificarTexto(incrementa)
	{
		if(incrementa)
		{
			this.fSize ++

		}else
		{
			this.fSize --
		}
		this.estilos.fontSize = `${this.fSize}px`

	}
	desapareceParrafo(){
		this.oculto = !this.oculto
	}
}
