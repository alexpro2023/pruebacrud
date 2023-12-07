import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './screen/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './screen/login/login.component';
import { RegistroComponent } from './screen/registro/registro.component';
import { ProductosComponent } from './screen/productos/productos.component';
import { ProductoIdComponent } from './screen/producto-id/producto-id.component';
import { PrivacidadComponent } from './screen/privacidad/privacidad.component';
import { SobreNosotrosComponent } from './screen/sobre-nosotros/sobre-nosotros.component';
import { PerfilUsuarioComponent } from './screen/perfil-usuario/perfil-usuario.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './screen/crud/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ProductosComponent,
    ProductoIdComponent,
    PrivacidadComponent,
    SobreNosotrosComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
