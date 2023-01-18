import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  static getProducts(): any[] {
    throw new Error('Method not implemented.');
  }
  products: any[] =[
    {
      id: 1,
      title: 'Cuidar mis plantas',
      img: 'https://okdiario.com/img/2018/08/19/como-cuidar-plantas-de-interior-pasos-655x368.jpg'
    },

    {
      id: 2,
      title: 'Jugar con mis gatos',
      img:'https://petsbioforestal.es/wp-content/uploads/2020/11/como-jugar-con-mi-gato.jpg'
    },

    {
      id: 3,
      title: 'Aprender nuevas cosas',
      img:'https://www.aauniv.com/s/blog/wp-content/uploads/2020/03/empezar-estudiar-en-linea-en-casa-1280x720.jpg'
    }
  ]

  constructor(
  ) { }

  getProducts() { 
    return this.products;
  }

  getProduct(id: number) { 
    return this.products[id];
  }
}