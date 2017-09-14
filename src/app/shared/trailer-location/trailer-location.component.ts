import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {

                this.listing = JSON.parse(localStorage.getItem('listing'));
                console.log('ravi');
                console.log(this.listing);

                  this.rForm = fb.group({
                    'location_street' : [null, Validators.required],
                    'location_city' : [null, Validators.required],
                    'location_province' : [null, Validators.required],
                    'location_postal' : [null, Validators.required],
                  });

              }

  ngOnInit() {
  }

  onSubmitLocation() {
     const location = this.rForm.value;
     console.log(location);
     this.listing['location'] = location;
     console.log(this.listing['location']);
     localStorage.setItem('listing', JSON.stringify(this.listing));
     this.router.navigate(['list-trailer/details']);
  }

}
