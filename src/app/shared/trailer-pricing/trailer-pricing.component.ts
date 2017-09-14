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

  rForm: FormGroup;
  listing: any = [];


    constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {
                this.listing = JSON.parse(localStorage.getItem('listing'));
                console.log('step 4');
                console.log(this.listing);

                this.rForm = fb.group({
                    'pricing_security_deposit' : [null, Validators.required],
                    'pricing_delivery_charges' : [null, Validators.required],
                    'pricing_high_rate_hour' : [null, Validators.required],
                    'pricing_high_rate_week' : [null, Validators.required],
                    'pricing_high_rate_month' : [null, Validators.required],
                    'pricing_low_rate_hour' : [null, Validators.required],
                    'pricing_low_rate_week' : [null, Validators.required],
                    'pricing_low_rate_month' : [null, Validators.required],
                    'pricing_highest_season_date_range_from' : [null, Validators.required],
                    'pricing_highest_season_date_range_to' : [null, Validators.required],
                });

              }

  ngOnInit() {
  }

  onSubmitPricing() {

     const pricingSubmit = this.rForm.value;
     this.listing['pricingSubmit'] = pricingSubmit;
     console.log(this.listing['pricingSubmit']);
     console.log(this.listing);
     localStorage.setItem('listing', JSON.stringify(this.listing));
     this.router.navigate(['list-trailer/photo']);
  }

}
