import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Products } from '../shared/models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  //ls: ListService = new ListService;
  prod: Products[] = new Array();

  constructor(private listService: ListService) { 
    //this.ls = listService;
    this.prod.push();
  }
  ngOnInit(): void {
   
  }

 
    
}

  
