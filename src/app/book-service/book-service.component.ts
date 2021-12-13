import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projectcount:number= 0;
  clientcount:number = 0;

  projectcountstop:any = setInterval( () => {
    this.projectcount++;
    if(this.projectcount == 1000) {
      clearInterval(this.projectcountstop)
    }
  })

  clientcountstop:any = setInterval( () => {
    this.clientcount++;
    if(this.clientcount == 500) {
      clearInterval(this.clientcountstop)
    }
  })

}
