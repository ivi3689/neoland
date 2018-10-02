import { Injectable } from '@angular/core';
import{Http, RequestOptions, Headers} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string

  constructor(private http: Http) { }

  getPremio(){
    let url = 'http://registrate.ngrok.io/premio'
    let headers = new Headers ()
    headers.append('user-token', 'H,YvEM&.&CdD3IAR$dIv')
    let opts = new RequestOptions()
    opts.headers = headers
    return this.http.get(url, opts).toPromise()
  }
  postBuscandoPremio(objetoParams){
    console.log(objetoParams)

    return this.http.post('http://registrate.ngrok.io/register', objetoParams).toPromise()
  }
  postContinuarBuscandoPremio(objetoParams){
     return this.http.post('http://registrate.ngrok.io/login', objetoParams).toPromise()
  }
}
