import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';

@Component({
  selector: 'rv-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOwnerComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.brandSlideVisible = false;
   }


  ngOnInit() {
  }

}
