import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Products } from '../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //products:Products[]=[];
  //alert: boolean = false;

  products: Products[] = new Array();

  //IsForUpdate: boolean = false;
  newProduct: any = {};
  //updatedProd: any;

  constructor(private listService:ListService, private router:ActivatedRoute) { 
    this.products.push();

  }
  addProd(){
    this.products.push(
      this.newProduct
    );
  }

  deleteProd(id: number){
    this.products.splice(id,1);
  }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      this.products = this.listService.getProductList();
    })
  }
  

}
