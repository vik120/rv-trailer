import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';

@Component({
  selector: 'rv-subscribe-plan',
  templateUrl: './subscribe-plan.component.html',
  styleUrls: ['./subscribe-plan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribePlanComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.brandSlideVisible = false;
   }

  brandSlideVisible: boolean;
  ngOnInit() {
    this.brandSlideVisible = true;
  }

}
