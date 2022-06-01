//src\app\app.component.ts
import { Component } from '@angular/core';
import { WebsocketService } from '../../servicios/websocket/websocket.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './pespera.component.html',
  styleUrls: ['./pespera.component.css'],
  providers: [WebsocketService],
})
export class PesperaComponent {
  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  constructor(
    private socket: WebsocketService,
    private api: ApiService,
    private router: Router
  ) {
    if (api.getUserTokken()) {
      let stompClient = this.socket.connect();
      stompClient.connect({}, (frame: any) => {
        stompClient.subscribe('/topic/'+api.getUserAgency()+'/'+api.getUserChannel(), (notifications: any) => {
          this.showGreeting(notifications.body);
        });
      });
    }
  }
  showGreeting(message: any) {
    if (message === 'null') {
      this.socket._disconnect();
      setTimeout(() => {
        location.reload();
      }, 500);
    }
    this.router.navigate(['/dashboard']);
  }
}
