import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rv-trailer-photo',
  templateUrl: './trailer-photo.component.html',
  styleUrls: ['./trailer-photo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerPhotoComponent implements OnInit {

rForm: FormGroup;
  listing: any = [];
  listing1 : any = [];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {
                this.listing = JSON.parse(localStorage.getItem('listing'));
                this.rForm = fb.group({
                    'photo' : [null],
                    });
              }

  ngOnInit() {
  }

  onSubmitPhoto() {
     const photo = this.rForm.value;
     console.log(photo);
     this.listing['photo'] = photo;
     localStorage.setItem('listing', JSON.stringify(this.listing));
    //localStorage.setItem('listing', this.listing);
    console.log("All Lising Details :" + this.listing);

     this.listing1 = JSON.parse(localStorage.getItem('listing'));
     console.log("get Item" + this.listing1);

    this.apiService.addListTrailer(this.listing).then((result) => {
      const id = result['_id'];
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });

  }

}
