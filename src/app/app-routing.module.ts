import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';
import { RegistroComponent } from './screen/registro/registro.component';
import { ProductosComponent } from './screen/productos/productos.component';
import { ProductoIdComponent } from './screen/producto-id/producto-id.component';
import { PrivacidadComponent } from './screen/privacidad/privacidad.component';
import { SobreNosotrosComponent } from './screen/sobre-nosotros/sobre-nosotros.component';
import { PerfilUsuarioComponent } from './screen/perfil-usuario/perfil-usuario.component';
import { ListarComponent } from './screen/crud/listar/listar.component';
import { AddComponent } from './screen/crud/add/add.component';
import { EditComponent } from './screen/crud/edit/edit.component';
import { CrudComponent } from './screen/crud/crud.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'registro', component:RegistroComponent },
  {path:'productos', component:ProductosComponent },
  {path:'producto/:id', component:ProductoIdComponent },
  {path:'privacidad', component:PrivacidadComponent },
  {path:'sobreNosotros', component:SobreNosotrosComponent },
  {path:'perfilUsuario/:id', component:PerfilUsuarioComponent },
  {path:'listar', component:ListarComponent },
  {path:'add', component:AddComponent },
  {path:'edit/:id', component:EditComponent },
  {path:'crud', component:CrudComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
