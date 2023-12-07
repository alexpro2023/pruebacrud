import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent  implements OnInit {
  idMenu:any

  Menus:any;
  deleteMessage:any;
  constructor(    
    private router:Router,
    private service:ServiceService,
    private activeRouter:ActivatedRoute, 
  ) { 
    
  }
  
  ngOnInit(): void {
    this.idMenu=this.activeRouter.snapshot.paramMap.get('id')  
    this.getMenu()    
  }

  editarUsuario(id:any){
    this.router.navigate(['edit/', id]);    
  }

  borrarMenu(id:any){
    this.service.deleteMenu(id).subscribe(res=>{
      this.deleteMessage=res
      alert(this.deleteMessage.message)
      this.getMenu()
    })   
  }


  

  getMenu(){
    this.service.getMenu().subscribe(res=>{
      console.log(res)
      this.Menus=res;
    })
  }


}
