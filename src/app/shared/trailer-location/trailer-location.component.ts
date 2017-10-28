import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobaldataService } from './../../globaldata.service';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-trailer-location',
  templateUrl: './trailer-location.component.html',
  styleUrls: ['./trailer-location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerLocationComponent implements OnInit {

  rForm: FormGroup;
  listing: any = [];
  allListing: any = [];

    location_street: any = [];
    location_city: any = [];
    location_province: any = [];
    location_postal: any = [];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService,
              private gd: GlobaldataService) {

                this.allListing = this.gd.ListingObj['global'];
                if (this.allListing === undefined) {
                    console.log();
                } else {
                  this.listing = this.gd.ListingObj['global'];
                }

                console.log('Location Data');
                console.log(this.listing);

              }

  ngOnInit() {
      this.allListing.location = this.gd.ListingObj['global'].location;
    if (this.allListing.location === undefined) {
        console.log();
    } else {
      this.listing = this.gd.ListingObj['global'];
      this.location_street = this.listing.location.location_street;
      this.location_city = this.listing.location.location_city;
      this.location_province = this.listing.location.location_province;
      this.location_postal = this.listing.location. location_postal;
      console.log(this.location_postal);
    }
  }

  onSubmitLocation({value, valid}) {
      this.gd.ListingObj['global'].location = value;
      this.listing = this.gd.ListingObj['global'];
      console.log(this.listing);
      this.router.navigate(['list-trailer/details']);
  }

}
