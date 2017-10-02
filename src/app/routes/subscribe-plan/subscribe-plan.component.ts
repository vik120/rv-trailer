import { ApiService } from './../../api.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';

@Component({
  selector: 'rv-subscribe-plan',
  templateUrl: './subscribe-plan.component.html',
  styleUrls: ['./subscribe-plan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribePlanComponent implements OnInit {

  packages: any[] = [];

  constructor(private app: AppComponent,
              private apiService: ApiService)
              {
                this.app.brandSlideVisible = false;
              }

  brandSlideVisible: boolean;
  ngOnInit() {
    this.brandSlideVisible = true;
    this.getPackagePlanDetails();
  }

  getPackagePlanDetails() {
    this.apiService.getPackages().subscribe((res) => {
      this.packages = res;
    });
  }

}
