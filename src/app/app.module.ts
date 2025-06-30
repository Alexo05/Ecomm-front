import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './body/navbar/navbar.component';
import { IndexComponent } from './body/index/index.component';
import { AllProductsComponent } from './catalogue/all-products/all-products.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { FooterComponent } from './body/footer/footer.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { CartComponent } from './catalogue/cart/cart.component';
import { WhyUsComponent } from './body/why-us/why-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './catalogue/checkout/checkout.component';
import { RootCategoryComponent } from './catalogue/root-category/root-category.component';
import { SubCategoryComponent } from './catalogue/sub-category/sub-category.component';
import { UserProfilComponent } from './catalogue/user-profil/user-profil.component';
import { NotfountComponent } from './errors/notfount/notfount.component';
import { ResetPasswordComponent } from './authorization/reset-password/reset-password.component';
import { ChangePasswordComponent } from './authorization/change-password/change-password.component';
import { PayamentComponent } from './catalogue/payament/payament.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ContactUsComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    WhyUsComponent,
    CheckoutComponent,
    RootCategoryComponent,
    SubCategoryComponent,
    UserProfilComponent,
    NotfountComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    PayamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /** offre les Gestion de l'état asynchrone , Création dynamique des formulaires, Validation avancée, Suivi des états et des erreurs , Gestion des groupes .... */
    HttpClientModule,  /**  Offre les classes pour consummer une service Web  GET POST DELETE UPDATE.. */
    HttpClientModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
