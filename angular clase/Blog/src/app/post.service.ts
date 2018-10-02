import { Injectable } from '@angular/core';
import { POSTS } from './data/post.db';
import { Post } from './models/post.model'


@Injectable()
export class PostService {
  listaPost: Post[]

  constructor() {

    this.listaPost= []
  }

  getAll(): Promise<Post[]> {
  let prom: Promise<Post[]> = new Promise((resolve,reject) =>{
    resolve(POSTS)
  })
    return prom
  }
  agregarPost(postFormulario){
    this.listaPost.push(postFormulario)
    console.log(this.listaPost)

  }
}
