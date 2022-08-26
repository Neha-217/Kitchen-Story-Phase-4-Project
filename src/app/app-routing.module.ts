import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'adminLogIn', component:AdminLoginComponent},
  {path:'productList', component:ProductListComponent},
  {path:'add-product', component:AddProductComponent},
  {path: 'delete', component:DeleteProductComponent},
  {path:'change-password', component:ChangePasswordComponent},
  {path:'payment', component:PaymentComponent},
  {path:'ordersummary', component:OrderSummaryComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
