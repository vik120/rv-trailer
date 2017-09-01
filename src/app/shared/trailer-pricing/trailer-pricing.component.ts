import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-trailer-pricing',
  templateUrl: './trailer-pricing.component.html',
  styleUrls: ['./trailer-pricing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerPricingComponent implements OnInit {
  public bsValue: any ;
  constructor() { }

  ngOnInit() {
  }

}
