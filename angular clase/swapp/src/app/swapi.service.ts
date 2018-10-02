import { Injectable } from '@angular/core';
import{Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl: string

  constructor(private http: Http, private swapiService: SwapiService) {
    this.baseUrl='https://swapi.co/api/'
  }

  getAllplanets(){
    let url = `${this.baseUrl}planets/?format=json`

    //this.http.get(url).subscribe((response)=>{
      //  console.log(response.json().results)
   // })
   return this.http.get(url).toPromise()
  }

  getPlanetFormUrl(pUrl){
    return this.http.get(pUrl).toPromise()
  }
  postNumeroAleatorio(objetoParams){
      return this.http.post('https://orange-goose-75.localtunnel.me/numero/aleatorio', objetoParams).toPromise()

  }
}
