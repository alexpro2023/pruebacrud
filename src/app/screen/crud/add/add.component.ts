import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  formUser: FormGroup;
  respuestaRegistro:any;

  constructor(    
    private router:Router,
    private apiService:ServiceService,
    public formulario:FormBuilder
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
    throw new Error('Method not implemented.');
  }

  refistrarUsuario(){
    if (this.formUser.valid) {
      this.apiService.addMenu(this.formUser.value).subscribe(res=>{
        this.respuestaRegistro=res;
        alert(this.respuestaRegistro.message)
      })
    }
    else{
      alert("Llene todos los datos")
    }
  }


}
