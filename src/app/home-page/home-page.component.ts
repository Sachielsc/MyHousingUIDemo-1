import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadHome() {
    this.router.navigate(['/home']);
  }

  onLoadSearch() {
    // put some process here
    this.router.navigate(['/search']);
  }
}
