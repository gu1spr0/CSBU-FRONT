import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appendFile } from 'fs';
import { ApiService } from 'src/app/servicios/api/api.service';
import { WebsocketService } from 'src/app/servicios/websocket/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {

  constructor(
    private socket: WebsocketService,
    private auth: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.close();
    this.socket._disconnect();
    this.router.navigate(['/login']);
  }

}
