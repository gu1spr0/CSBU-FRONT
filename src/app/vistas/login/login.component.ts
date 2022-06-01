import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import {LoginI} from '../../modelos/login.interface';
import {Router} from '@angular/router';
import{ResponseI} from '../../modelos/response.interface'
import { WebsocketService } from 'src/app/servicios/websocket/websocket.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




    loginForm=new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  constructor(
    private api:ApiService,
    private router:Router) {}

  ngOnInit(): void {
  }
  onLogin(form:LoginI){
  this.api.loginbyEmail(form).subscribe(data =>{
   let dataResponse:ResponseI=data;
   console.log(dataResponse);
     localStorage.setItem("token",dataResponse.token);
     localStorage.setItem("agencia",""+dataResponse.id_agencia);
     localStorage.setItem("canal",""+dataResponse.id_canal);
     this.router.navigate(['/pespera']);
   
  });
    
  }

}
