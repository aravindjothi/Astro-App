import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event: any) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

  }

}
