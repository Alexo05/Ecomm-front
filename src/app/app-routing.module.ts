import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { IndexComponent } from './body/index/index.component';
import { LoginComponent } from './authorization/login/login.component';
import { CartComponent } from './catalogue/cart/cart.component';
import { PayamentComponent } from './catalogue/payament/payament.component';
import { WhyUsComponent } from './body/why-us/why-us.component';
import { AllProductsComponent } from './catalogue/all-products/all-products.component';
import { RootCategoryComponent } from './catalogue/root-category/root-category.component';
import { SubCategoryComponent } from './catalogue/sub-category/sub-category.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { RegisterComponent } from './authorization/register/register.component';
import { CheckoutComponent } from './catalogue/checkout/checkout.component';
import { AuthtorizationGuard } from './authorization/guards/authtorization.guard';
import { UserProfilComponent } from './catalogue/user-profil/user-profil.component';
import { NotfountComponent } from './errors/notfount/notfount.component';
import { ChangePasswordComponent } from './authorization/change-password/change-password.component';
import { ResetPasswordComponent } from './authorization/reset-password/reset-password.component';


const routes: Routes = [
  
  { path : '' ,redirectTo:'index', pathMatch: 'full' },
  { path : "index" , component:IndexComponent},
  { path : "contact-us" , component:ContactUsComponent},
  { path : "login" , component : LoginComponent},
  { path : "cart" , component : CartComponent},
  {
    path: 'payment',
    component: PayamentComponent
  },
  { path : "register",component:RegisterComponent},
  { path : "about-us" , component : WhyUsComponent},
  { path : "checkout",component:CheckoutComponent,canActivate: [AuthtorizationGuard]},
  { path : "profilUser" , component : UserProfilComponent, canActivate:[AuthtorizationGuard]},
  { path : "allProducts" , component : AllProductsComponent},
  { path : 'reset-password',component:ResetPasswordComponent},
  { path : 'change-password',component:ChangePasswordComponent},
  { path : ':rootSlug', component: RootCategoryComponent},
  { path : ':rootSlug/:subSlug',component: SubCategoryComponent},
  { path : ':rootSlug/:subSlug/:productSlug',component: ProductDetailsComponent},

  { path: '**', component: NotfountComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
