import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginalogo',
  templateUrl: './paginalogo.component.html',
  styleUrls: ['./paginalogo.component.css']
})
export class PaginalogoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/pespera']);
  }, 5000);
  }

}
