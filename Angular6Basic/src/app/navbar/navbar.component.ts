import { Component, OnInit } from '@angular/core';
// import router for navigationBar
import { Router, NavigationEnd, Route } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentBarUrl: String;

  constructor(private router: Router ) { 
    // Get the router event of navigation !!
    router.events.subscribe((_: NavigationEnd) => this.currentBarUrl = _.url);
  }

  ngOnInit() {
  }

}
