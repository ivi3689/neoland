import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Pedido } from '../models/pedido.model';

@Component({
	selector: 'teclado',
	templateUrl: './teclado.component.html',
	styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

	comida: Producto[]
	bebida: Producto[]
	ped: Pedido

	constructor() {
		this.comida = [
		new Producto('Arroz', 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1280x1280/1280x1280-1456923930-hero1.jpg?resize=100:*', 12.00),
		new Producto('Pasta', 'https://www.hola.com/imagenes/cocina/escuela/2013012863039/recetas-con-pasta/0-226-722/recetas_pasta_-e.jpg', 12.00),
		new Producto('Cordero', 'https://hips.hearstapps.com/dm.h-cdn.co/assets/16/23/980x980/square-1465583416-chuletitas-de-cordero-en-hojaldre.jpg?resize=100:*', 12.00),
		new Producto('Pollo', 'https://i.pinimg.com/236x/bb/ed/c3/bbedc3fda2f154ef28ce1478ac9deaa5.jpg', 12.00),
		new Producto('Secreto', 'http://www.las-golondrinas.es/sites/default/files/styles/menu_square_thumbnail/public/menus/ensalada-restaurante-las-golondrinas.jpg?itok=gksL46NB', 15.50),
		new Producto('Costillar', 'https://4.bp.blogspot.com/-8-olzeB6Ru8/WYyyW5qAsHI/AAAAAAABBR0/tR0eCZ6etnYDPEMWDqOsBEd6OSn5bzgVACEwYBhgL/s100-c/Costillas-al%2Bestilo-chino.jpg', 12.00),
		new Producto('Entrecot', 'http://alo.co/sites/default/files/imagecache/Miniatura_100_100_receta/buey_0.jpg', 18.50),
		new Producto('Lubina', 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1280x1280/1280x1280-1456920475-hero1.jpg?resize=100:*', 12.00),
		new Producto('Emperador', 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1280x1280/1280x1280-1456846741-hero1.jpg?resize=100:*', 12.00),
		new Producto('Atun', 'https://i0.wp.com/lepremierealbacete.es/wp-content/uploads/2017/02/Tataki-atun8.jpg?resize=100%2C100&ssl=1', 12.00),
		new Producto('Merluza', 'http://enmilbatallas.com/wp-content/uploads/2011/06/Merluza-en-salsa-con-langostinos-1-modif-100x100.jpg', 12.00),
		new Producto('Tarta', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1488190512-receta-bombas-de-tomate-1522482320.jpg?crop=0.708xw:1.00xh;0.0847xw,0&resize=100:*', 12.00),
		new Producto('Crepe', 'https://canalcocina.es/medias/_cache/zoom-adbb0501044f8091c8d32fa99ddf51e2-100-100.png', 12.00),
		new Producto('Pastel', 'https://i.pinimg.com/736x/2d/e9/15/2de91572d27fe5910ab321f750918aaf--fudge-recipes-candy-recipes.jpg', 12.00),
		new Producto('Fruta', 'https://www.hola.com/imagenes/cocina/recetas/2012060458845/recetas-postres-presentacion-copas-vasitos/0-205-682/postres_copa_-e.jpg', 12.00),

		]

		this.bebida = [
		new Producto('Tinto', 'https://mantequeriaslatienda.com/525-small_default/vino-tinto-ponce-pf-pie-franco-manchuela.jpg', 4.00),
		new Producto('Rosado', 'https://mantequeriaslatienda.com/527-small_default/corazon-loco-rosado-biniesta.jpg', 4.00),
		new Producto('Blanco', 'https://www.casapia.com/midietetica/21385-small_default/vino-blanco-de-viticultura-ecologica-pedregosa-750-ml.jpg', 4.00),
		new Producto('Cerveza', 'https://comprarcervezasartesanas.es/wp-content/uploads/2017/09/sanfrutos-trigo-100x100.jpg', 4.00),
		new Producto('Champan', 'https://www.cavapack.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/c/a/cava-gran-montesquius-reserva-brut.jpg', 4.00),
		new Producto('Sidra', 'data:image/jpeg;base64,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', 4.00),
		new Producto('Refrescos', 'https://images.ssstatic.com/sobre-bebida-instantanea-bolero-27050912s0-09524267.jpg', 4.00),
		new Producto('Agua', 'http://elprofe.fr/wp-content/uploads/2015/10/escasez-del-agua-100x100.jpg ', 4.00),
		new Producto('Gaseosa', 'https://res.cloudinary.com/almacendo/image/upload/h_100,w_100/v1526587979/Agua%20Perrier/Agua-Mineral-Natural-con-Gas-Perrier-_750ml_-Back.jpg ', 4.00),
		new Producto('Licores', 'http://pasillogh.com/central-de-abasto/sites/default/files/styles/thumbnail/public/bebidas-100-100.jpg?itok=YLkXGCYx', 6.00),
		]
		this.ped = new Pedido()


	}
	agregarAPedido(pProducto){
		this.ped.agregarProducto(pProducto)
		console.log(this.ped.productos)
	}

	

	ngOnInit() {
	}
	
  }


