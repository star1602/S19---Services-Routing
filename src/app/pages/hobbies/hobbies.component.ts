import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})

export class HobbiesComponent implements OnInit{
  products: any [] = []

  constructor(
    private route:Router,
    private ProductsService : ProductsService
  ){
    this.products = ProductsService.getProducts();
  }
  showProduct(id: number) { 
    this.route.navigate([id]); 
  }
  
  ngOnInit(): void{}

}
