import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
 constructor(private router:Router){}
 Listar(){
  this.router.navigate(["listar"]);
 }
 Nuevo(){
  this.router.navigate(['add']);
 }
}
