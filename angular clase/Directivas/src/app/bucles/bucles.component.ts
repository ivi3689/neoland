import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bucles',
	templateUrl: './bucles.component.html',
	styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

	personas: any

	constructor() { 

		this.personas = [
		{nombre:'mario', apellidos:'c', edad:'1'},
		{nombre:'pedro', apellidos:'e', edad:'2'},
		{nombre:'pep', apellidos:'f', edad:'3'},
		{nombre:'pepe', apellidos:'g', edad:'4'}

		]
	}

	ngOnInit() {
	}

}
