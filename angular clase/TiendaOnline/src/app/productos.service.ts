import { Injectable } from '@angular/core';
import{Http, RequestOptions, Headers} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
   baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl='http://neolandshop.ngrok.io/items/'
  }

  getAllProductos(){
    let url = `${this.baseUrl}`;

    //this.http.get(url).subscribe((response)=>{
      //  console.log(response.json().results)
   // })
   return this.http.get(url).toPromise()
  }

  getProductosUrl(pUrl){
    console.log(pUrl)
    return this.http.get(pUrl).toPromise()
  }

  postCrearCarrito(){
    return this.http.post('http://neolandshop.ngrok.io/items/newcart', {}).toPromise()
}
  postAddCarrito(itemId){
    let  url ='http://neolandshop.ngrok.io/items/new'
    let headers = new Headers ()
    headers.append('Cart-Token',localStorage.getItem('cartId'))
    headers.append('Content-Type', 'application/json')
    let opts = new RequestOptions()
    opts.headers = headers

    return this.http.post('http://neolandshop.ngrok.io/items/new', {'item_id': itemId}, opts ).toPromise()
  }
  getRecuperarCarrito(){
    let url = 'http://neolandshop.ngrok.io/items/cart'
    let headers = new Headers ()
    headers.append('Cart-Token',localStorage.getItem('cartId'))
    let opts = new RequestOptions()
    opts.headers = headers
    return this.http.get(url, opts).toPromise()
  }
}
