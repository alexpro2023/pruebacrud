import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  UsuariosId:any;
  messageUpdate:any;
  formUser: FormGroup;
  datosUsuario:any

  constructor(    
    private router:Router,
    private apiService:ServiceService,
    public formulario:FormBuilder,
    private activeRouter:ActivatedRoute,  
  ) { 
    this.formUser=this.formulario.group({
      nombre:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      precio:['', [Validators.required]],
      cantidad:['' , [Validators.required]],
      cantidad_min:['' , [Validators.required]],
      categorias:['', [Validators.required]]      
    })
  }
  ngOnInit(): void {
    this.UsuariosId=this.activeRouter.snapshot.paramMap.get('id')  
    this.getUserId(this.UsuariosId)
  }

  getUserId(id:any){
    this.apiService.getMenuId(id).subscribe(res=>{
      this.datosUsuario=res

      this.formUser.setValue({
        nombre: this.datosUsuario.nombre,
        descripcion: this.datosUsuario.descripcion,
        precio: this.datosUsuario.precio,
        cantidad: this.datosUsuario.cantidad,
        cantidad_min: this.datosUsuario.cantidad_min,
        categorias: this.datosUsuario.categorias        
      }); 
      console.log(this.datosUsuario)
    })
  }
  
  actualizaDatos(id:any){
    this.apiService.updateMenu(id, this.formUser.value).subscribe(res=>{
      this.messageUpdate=res
      alert(this.messageUpdate.message)
      this.router.navigate(['listar']);    
    })    
  }

  registros(){
    this.router.navigate(['listar']);    

  }

}
