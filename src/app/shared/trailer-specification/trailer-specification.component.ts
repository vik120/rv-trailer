import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-trailer-specification',
  templateUrl: './trailer-specification.component.html',
  styleUrls: ['./trailer-specification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerSpecificationComponent implements OnInit {

  public trailerType = 1;

  constructor() { }

  ngOnInit() {
  }

  trailerspec(value){
  	this.trailerType = value;
  }

}
