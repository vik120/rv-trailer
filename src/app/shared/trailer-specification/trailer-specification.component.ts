import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-trailer-specification',
  templateUrl: './trailer-specification.component.html',
  styleUrls: ['./trailer-specification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerSpecificationComponent implements OnInit {

  rForm: FormGroup;
  users: any = [];
  user: any = [];
  listing: any = [];

  public trailerType: string = 'traveler';
  RV_Cottage : string = 'RV Cottage';
  Travel_Trailer : string = 'Travel Trailer';
  Motor_Home : string = 'Motor Home';

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {

                const getListing = localStorage.getItem('listing');

                // if ( getListing.length === 0 ) {
                //   this.listing = localStorage.setItem('listing', this.listing);
                // } else {
                //   this.listing = localStorage.getItem('listing');
                // }


                this.rForm = fb.group({
                  'make' : [null, Validators.required],
                  'model' : [null, Validators.required],
                  'year' : [null, Validators.required],
                  'length' : [null, Validators.required],
                  'gross_weight' : [null, Validators.required],
                  'tough_weight' : [null, Validators.required],
                  'guest' : [null, Validators.required],

              });
  }

  ngOnInit() {
  }


  onSubmitSpecification() {
      const listingSpecification  = this.rForm.value;

      console.log(listingSpecification);
      // //this.listing["specification"] = specification;


      this.listing['listingSpecification'] = listingSpecification;
        console.log(this.listing);
      localStorage.setItem('listing', this.listing);

      this.router.navigate(['list-trailer/location']);
  }

}
