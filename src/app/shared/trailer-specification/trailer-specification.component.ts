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
  getListing: any = [];
  logindata: any = [];
  allListing: any = [];


  public trailerType: string = 'rvCottage';
  RV_Cottage : string = 'RV Cottage';
  Travel_Trailer : string = 'Travel Trailer';
  Motor_Home : string = 'Motor Home';

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {



                this.rForm = fb.group({
                  'specification_make' : [null, Validators.required],
                  'specification_model' : [null, Validators.required],
                  'specification_year' : ['Year', Validators.required],
                  'specification_length' : [null, Validators.required],
                  'specification_gross_weight' : [null, Validators.required],
                  'specification_tough_weight' : [null, Validators.required],
                  'specification_guest' : [null, Validators.required],
                  'specification_slide_out' : [null, Validators.required],
                  'traveltrailer': [null],
                  'fifthwheel': [null],
                  'tenttrailer': [null],
                  'vintage': [null],
                  'hybrid': [null],
                  'toyhauler': [null],
                  'motor_class_a': [null],
                  'motor_class_b': [null],
                  'motor_class_c': [null],
                  'rvCottage': [null],
                  'rvTrailer': [null],
                  'rvmotor':[null]
              });
  }

  ngOnInit() {
    console.log(this.trailerType);

    this.allListing = localStorage.getItem('listing');
    if (this.allListing === null || this.allListing.length === 0) {
        console.log();
    } else {
      this.listing = JSON.parse(localStorage.getItem('listing'));
    }
  }


  onSubmitSpecification() {
      if(this.trailerType == null) {
        this.trailerType = 'RV Cottage';
      }else{
        this.trailerType = this.trailerType;
      }
        let rvCottage = {'rvCottage': this.trailerType};
        let listingSpecification  =  Object.assign({}, this.rForm.value, rvCottage);
        // console.log(listingSpecification);
        // this.listing["specification"] = listingSpecification;
        // console.log(this.listing);
        localStorage.setItem('listing', JSON.stringify(listingSpecification));
        this.router.navigate(['list-trailer/location']);
  }

  trailerspec(value) {
    this.trailerType = value;
    console.log(this.trailerType);
  }


}
