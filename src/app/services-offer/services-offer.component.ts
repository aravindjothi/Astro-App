import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-offer',
  templateUrl: './services-offer.component.html',
  styleUrls: ['./services-offer.component.css']
})
export class ServicesOfferComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
