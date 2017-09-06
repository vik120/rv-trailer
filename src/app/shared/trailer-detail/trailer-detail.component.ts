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

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService)
              {
                this.listing = localStorage.getItem('listing');
              }

  ngOnInit() {
  }

}
