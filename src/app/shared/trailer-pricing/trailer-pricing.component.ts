import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-trailer-pricing',
  templateUrl: './trailer-pricing.component.html',
  styleUrls: ['./trailer-pricing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerPricingComponent implements OnInit {
  public bsValue: any ;

  rForm: FormGroup;
  listing: any = [];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {

                this.listing = JSON.parse(localStorage.getItem('listing'));

                  this.rForm = fb.group({
                    'security_deposit' : [null, Validators.required],
                    'delivery_charges' : [null, Validators.required],
                    'high_rate_hour' : [null, Validators.required],
                    'high_rate_week' : [null, Validators.required],
                    'high_rate_month' : [null, Validators.required],
                    'low_rate_hour' : [null, Validators.required],
                    'low_rate_week' : [null, Validators.required],
                    'low_rate_month' : [null, Validators.required],
                    'highest_season_date_range_from' : [null, Validators.required],
                    'highest_season_date_range_to' : [null, Validators.required]
                  });

              }

  ngOnInit() {
  }

  onSubmitPricing() {
     const pricing = this.rForm.value;
     this.listing['pricing'] = pricing;
     localStorage.setItem('listing', JSON.stringify(this.listing));
     this.router.navigate(['list-trailer/photo']);
  }

}
