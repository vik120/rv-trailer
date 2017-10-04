import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-trailer-detail',
  templateUrl: './trailer-detail.component.html',
  styleUrls: ['./trailer-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerDetailComponent implements OnInit {

  rForm: FormGroup;
  listing: any = [];
  features: any;
  allListing: any = [];

  listingFeatures: any = [{feature: 'Wifi'}, {feature: 'Built-in Speakers'}, {feature: 'TV/DVD'}, {feature: 'CD Player'}, {feature: 'Vanity'}, {feature: 'Pet Friendly'}, {feature: 'Dish Washer'}, {feature: 'Bathtub'}, {feature: 'Family/Kid Friendly'}, {feature: 'Outside Shower'}, {feature: 'Smoke Free'}, {feature: 'Bluetooth'},
                          {feature: 'Pull-out sofa Bed'}, {feature: 'Outdoor Kitchenette'}, {feature: 'Delivery Avilable'}, {feature: 'Lines Provided'}, {feature: 'Heating / Cooling'}, {feature: 'BBQ'}, {feature: 'Automatic Awning'}, {feature: 'Camping Chairs'}, {feature: 'Basic Cookwaer / Cultery'},
                          {feature: 'Closets and Storage Space'}, {feature: 'Full Winter Rental Avilable'}, {feature: 'Boardgames and Movies'}];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService) {

                this.allListing = localStorage.getItem('listing');
                if (this.allListing === null || this.allListing.length === 0) {
                    console.log();
                } else {
                  this.listing = JSON.parse(localStorage.getItem('listing'));
                }

                console.log('step3');
                console.log(this.listing);

                this.rForm = this.fb.group({
                    'details_ad_title' : [null, Validators.required],
                    'details_ad_description' : [null, Validators.required],
                    'details_feature' : this.fb.array([]),
                    'details_no_of_beds' : [null, Validators.required],
                    'details_no_of_bathrooms' : [null, Validators.required],
                });
              }

  ngOnInit() {
  }

  onSubmitDetail() {
     const detail = this.rForm.value;
     console.log(detail);
     this.listing['details_feature'] = detail.details_feature;
     //console.log(this.listing['detail']);
     //console.log(this.listing);
     localStorage.setItem('listing', JSON.stringify(this.listing));
     this.router.navigate(['list-trailer/pricing']);
  }

  onChange(feature: string, isChecked: boolean) {
      const emailFormArray = <FormArray>this.rForm.controls.details_feature;
      if (isChecked) {
        emailFormArray.push(new FormControl(feature));
      } else {
        const index = emailFormArray.controls.findIndex(x => x.value === feature);
        emailFormArray.removeAt(index);
      }
  }

}
