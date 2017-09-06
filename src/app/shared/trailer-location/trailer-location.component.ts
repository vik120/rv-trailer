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
  users: any = [];
  user: any = [];
  step1: any = [];

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService)
              {

                this.listing = JSON.parse(localStorage.getItem('listing'));

                  this.rForm = fb.group({
                    'street' : [null, Validators.required],
                    'city' : [null, Validators.required],
                    'province' : [null, Validators.required],
                    'postal' : [null, Validators.required],
                  });

              }

  ngOnInit() {
  }

    onSubmitLocation() {
      const location = this.rForm.value;
      this.listing['location'] = location;
      localStorage.setItem('listing', JSON.stringify(this.listing));
      this.router.navigate(['list-trailer/details']);
  }

}
