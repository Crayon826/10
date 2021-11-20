import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  x:number = 0;

  ngOnInit(): void {
  }

  handleClick(): void{
    this.x = 1;
  }

}
