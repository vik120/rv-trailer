import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
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

  listingFeatures: any[] = [
     {feature: 'Brijesh'},
     {feature: 'Kirti'},
  ];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {
                this.listing = JSON.parse(localStorage.getItem('listing'));

                this.rForm = this.fb.group({
                    'details_ad_title' : [null, Validators.required],
                    'details_ad_description' : [null, Validators.required],
                    'details_feature' : [null, Validators.required],
                    'details_no_of_beds' : [null, Validators.required],
                    'details_no_of_bathrooms' : [null, Validators.required],
                });

              }

  ngOnInit() {
  }

  onSubmitDetail() {
     const detail = this.rForm.value;
     this.listing['detail'] = detail;
     console.log(this.listing);
     localStorage.setItem('listing', JSON.stringify(this.listing));
     this.router.navigate(['list-trailer/pricing']);
  }



}
