import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      {name: 'All', count: 10},
      {name: 'FastFood', count: 9},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 6},
      {name: 'Snacks', count: 4},

    ];

  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Veg Cheesy Spicy Pizza',
        price: 10,
        cookTime: '20-30',
        origins: ['Italy', 'India'],
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Spicy Chicken Burger',
        price: 6,
        cookTime: '10-15',
        origins: ['America', 'India'],
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Burger', 'Lunch']
      },
      {
        id: 3,
        name: 'Crispy Chicken Nuggets',
        price: 7,
        cookTime: '10-15',
        origins: ['America'],
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Nuggets', 'Lunch']
      },
      {
        id: 4,
        name: 'Potato Fries',
        price: 5,
        cookTime: '10-12',
        origins: ['America', 'India'],
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fries', 'Snacks']
      },
      {
        id: 5,
        name: 'Mysore Masala Dosa',
        price: 15,
        cookTime: '20-25',
        origins: ['India'],
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Dosa', 'Snacks']
      },
      {
        id: 6,
        name: 'Downtown Samosa',
        price: 5,
        cookTime: '8-10',
        origins: ['India'],
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Samosa', 'Snacks']
      },
      {
        id: 7,
        name: 'Pepporoni Pizza',
        price: 12,
        cookTime: '20-30',
        origins: ['Italy', 'America'],
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Burrito',
        price: 10,
        cookTime: '20-25',
        origins: ['Mexican'],
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Burrito', 'Lunch']
      },
      {
        id: 9,
        name: 'Creamy Spicy Pasta',
        price: 15,
        cookTime: '10-15',
        origins: ['Italy', 'India'],
        imageUrl: '/assets/food-9.jpeg',
        tags: ['FastFood', 'Pasta', 'Lunch']
      },
      {
        id: 10,
        name: 'Dahi Vada',
        price: 10,
        cookTime: '10-12',
        origins: ['India'],
        imageUrl: '/assets/food-10.jpg',
        tags: ['FastFood', 'Dahi Vada', 'Snacks']
      }

    ];
  }
}
