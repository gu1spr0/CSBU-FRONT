import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(private apiService: ApiService,
   ) { }

  ngOnInit(): void {
    this.cargarDataDomains();
  }
  
  
  public cargarDataDomains(){
    this.apiService.get(``).subscribe((respuesta) => {
      console.log(respuesta);
    })
  }



  onLogout ():void{
    this.apiService.logout();
  }
}
function http(http: any) {
  throw new Error('Function not implemented.');
}

