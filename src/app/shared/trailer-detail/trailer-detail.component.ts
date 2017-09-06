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

  listing: any = [];
  rForm: FormGroup;


  listingFeatures: any[] = [
     {name: 'Brijesh'},
     {name: 'Kirti'},
  ];

  //name = "kjj";



  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService)
              {
                this.listing = localStorage.getItem('listing');

                this.rForm = this.fb.group({
                    'ad_title' : [null, Validators.required],
                    'ad_description' : [null, Validators.required],
                    'province' : [null, Validators.required],
                    'postal' : [null, Validators.required],
                });

              }



  ngOnInit() {
  }

  onSubmitLocation(){

  }

}
