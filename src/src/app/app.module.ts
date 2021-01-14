import { DataService } from 'src/app/services/data.service';
import { MaskDirective } from './directives/mask.directive';
import { FramePageComponent } from './pages/master/frame.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SigupPageComponent } from './pages/account/sigup-page/sigup-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AuthService } from './services/auth.service';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SigupPageComponent,    
    ProductsPageComponent,
    PetsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added https://www.npmjs.com/package/ngx-toastr
    AppRoutingModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
