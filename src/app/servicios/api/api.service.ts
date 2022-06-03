import { Injectable } from '@angular/core';
import{ LoginI } from '../../modelos/login.interface';
import{ ResponseI } from'../../modelos/response.interface';
import{HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable, observable} from'rxjs';
import { Content } from 'src/app/modelos/content.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://178.62.200.136:4701/api/users/v2/login";
  //url: string = "http://localhost:4701/api/users/v1/login"
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
}
