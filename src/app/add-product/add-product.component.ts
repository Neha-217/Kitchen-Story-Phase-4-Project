import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../services/list.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  /*addProduct=new FormGroup({
    id: new FormControl(''),
    price: new FormControl(''),
    name: new FormControl(''),
    cookTime: new FormControl(''),
    origins: new FormControl(''),
    tags: new FormControl('')
  })
  products: any;
  constructor(private listService:ListService) { }

  ngOnInit(): void {
  }
  createProduct(){
    //console.log(this.addProduct.value);
    this.products.push(this.addProduct)
    
    
  }*/

  addForm!: FormGroup;
  submitted: boolean = false;
  constructor(private builder: FormBuilder){}
  
  ngOnInit(): void {
    this.addForm = this.builder.group({
      id: ['', Validators.required],
      price: ['', Validators.required],
      name: ['', Validators.required],
      cookTime: ['', Validators.required],
    })
  }
  get form() {
    return this.addForm.controls;
  }
  addProd() {
    this.submitted = true;
    setTimeout(()=>{this.submitted=false},3000)
    if (this.addForm.invalid)
      return;
    else
      alert("Product Added!!")
  }

  }


