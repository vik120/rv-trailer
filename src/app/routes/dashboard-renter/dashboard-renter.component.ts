import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';

@Component({
  selector: 'rv-dashboard-renter',
  templateUrl: './dashboard-renter.component.html',
  styleUrls: ['./dashboard-renter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardRenterComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.brandSlideVisible = false;
   }


  ngOnInit() {
  }

}
