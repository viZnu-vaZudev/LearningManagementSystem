import { Component } from '@angular/core';

@Component({
  selector: 'searchComponent',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  panelOpenState = false;
  courseName: string|undefined;
  technology: string|undefined;
  courseDurationFrom:number|undefined;
  courseDurationTo:number|undefined;
  constructor(){}
}
