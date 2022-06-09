import { Injectable } from '@angular/core';
import{ LoginI } from '../../modelos/login.interface';
import{HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable, observable} from'rxjs';
import { Content } from 'src/app/modelos/content.interface';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://178.62.200.136:4701/api/users/v1/login";
  router: any;
  //url: string = environment.URL_API+"api/users/v1/login"
  constructor(
    private http: HttpClient,
    private handler: HttpBackend) { 
      this.http = new HttpClient(this.handler);
    }

  loginbyEmail(form:LoginI):Observable<Content>{
    return this.http.post<Content>(this.url,form);
  }
   isLoginUser(): boolean {
    return !!localStorage.getItem('token');
  }
  getUserTokken() {
    return localStorage.getItem('token');
  }
  getUserAgency(){
    return localStorage.getItem('agencia');
  }
  getUserChannel(){
    return localStorage.getItem('canal');
  }
  close(){
    localStorage.clear();
  }

  //cerrar sesion

  public logout():void
  {
    localStorage.removeItem('token');
    localStorage.removeItem('agencia');
    localStorage.removeItem('canal');
    this.router.navigate(['login']);
  }

  //mantener sesion iniciada
  public verifyLogged():boolean{
    const token=localStorage.getItem('token');
    return token ? true :false;
  }
  ////////////////////////
  
}
