import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {


  @Input() Datas:any[] = [];

  @Input() titles:any[] = [];

  @Input() Actions:any[] = [];


  constructor() { }

  ngOnInit(): void {
  }



  goTo(event: Event) {
    event.preventDefault();
    event.stopPropagation();
   
  };
}
