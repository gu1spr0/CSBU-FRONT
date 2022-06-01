import { Injectable } from '@angular/core';
import{ LoginI } from '../../modelos/login.interface';
import{ ResponseI } from'../../modelos/response.interface';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable, observable} from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://178.62.200.136:4701/api/login";
  //url: string = "http://localhost:4701/api/login"
  constructor(private http:HttpClient) { }
  loginbyEmail(form:LoginI):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url,form);
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
