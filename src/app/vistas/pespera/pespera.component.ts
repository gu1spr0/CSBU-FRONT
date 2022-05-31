//src\app\app.component.ts
import { Component } from '@angular/core';
import { WebsocketService } from "../../servicios/websocket/websocket.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./pespera.component.html",
  styleUrls: ["./pespera.component.css"],
  providers: [WebsocketService]
})

export class PesperaComponent {
  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  constructor(
    private socket: WebsocketService,
    private router:Router) {
    let stompClient = this.socket.connect();
        stompClient.connect({}, (frame:any) => {
          stompClient.subscribe('/topic/redirect', (notifications:any) => {
            this.showGreeting(notifications.body);
          })
        });
  }
  showGreeting(message:any) {
    console.log(message);
    if (message === 'null') {
      this.socket._disconnect();
      setTimeout(() => { location.reload() }, 500);
    }
    console.log(message);

    this.router.navigate(['dashboard']);
  }
}