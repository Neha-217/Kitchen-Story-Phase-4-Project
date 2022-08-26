import { Injectable } from '@angular/core';
import { Products } from '../shared/models/product';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  getProductList(): Products[]{
    return[
      {

        id: 1,
        name: 'Veg Cheesy Spicy Pizza',
        price: 10,
        cookTime: '20-30',
        origins: ['Italy', 'India'],
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Spicy Chicken Burger',
        price: 6,
        cookTime: '10-15',
        origins: ['America', 'India'],
       
        tags: ['FastFood', 'Burger', 'Lunch']
      },
      {
        id: 3,
        name: 'Crispy Chicken Nuggets',
        price: 7,
        cookTime: '10-15',
        origins: ['America'],
        
        tags: ['FastFood', 'Nuggets', 'Lunch']
      },
      {
        id: 4,
        name: 'Potato Fries',
        price: 5,
        cookTime: '10-12',
        origins: ['America', 'India'],
       
        tags: ['FastFood', 'Fries', 'Breakfast']
      },
      {
        id: 5,
        name: 'Mysore Masala Dosa',
        price: 15,
        cookTime: '20-25',
        origins: ['India'],
       
        tags: ['FastFood', 'Dosa', 'Breakfast']
      },
      {
        id: 6,
        name: 'Downtown Samosa',
        price: 5,
        cookTime: '8-10',
        origins: ['India'],
       
        tags: ['FastFood', 'Samosa', 'Evening Snack']
      },
      {
        id: 7,
        name: 'Pepporoni Pizza',
        price: 12,
        cookTime: '20-30',
        origins: ['Italy', 'America'],
       
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Burrito',
        price: 10,
        cookTime: '20-25',
        origins: ['Mexican'],
       
        tags: ['FastFood', 'Burrito', 'Lunch']
      },
      {
        id: 9,
        name: 'Creamy Spicy Pasta',
        price: 15,
        cookTime: '10-15',
        origins: ['Italy', 'India'],
        
        tags: ['FastFood', 'Pasta', 'Lunch']
      },
      {
        id: 10,
        name: 'Dahi Vada',
        price: 10,
        cookTime: '10-12',
        origins: ['India'],
        
        tags: ['FastFood', 'Dahi Vada', 'Snacks']
      }


    ]
  }

/*deleteProdById(id:number){
 Products.splice(Products.id);
}
*/
deleteProdById(productId:number) {
  Products.forEach((value,index)=>{
    if(value.id==productId) Products.splice(index,1)
  });
}
}
