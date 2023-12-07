import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../Modelo/Menu';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private httpClient: HttpClient ) { }

  private apiUrl = 'https://educacionespecialmx.site/alex_menu/public_html/api';

  getMenu(){
    return this.httpClient.get(`${this.apiUrl}/getMenu`);
  }

  getMenuId(id:any){
    return this.httpClient.get(`${this.apiUrl}/getMenuId/`+id);
  }

  addMenu(datos:any) {
    return this.httpClient.post(`${this.apiUrl}/addMenu`, datos);
  }

  updateMenu(id:any,datos:any) {
    return this.httpClient.post(`${this.apiUrl}/updateMenu/`+id, datos);
  }

  deleteMenu(id:any){
    return this.httpClient.delete(`${this.apiUrl}/deleteMenu/`+id);
  }

  
}
