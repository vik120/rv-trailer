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

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService)
              {
                this.listing = JSON.parse(localStorage.getItem('listing'));
                console.log('kirti123');
                console.log(this.listing);
                this.rForm = fb.group({
                    'photo' : [null],
                });
              }

  ngOnInit() {
  }

  // onSubmitPhoto() {
  //    const photo = this.rForm.value;
  //    console.log(photo);
  //    this.listing['photo'] = photo;
  //    console.log(this.listing);

  //    this.apiService.addListTrailer(this.listing).then((result) => {
  //     const id = result['_id'];
  //     this.router.navigate(['/']);
  //    }, (err) => {
  //     console.log(err);
  //   });

  // }

  onSubmitPhoto() {

    const photo = this.rForm.value;
    console.log(this.listing);
    const photo_data = Object.assign({}, this.listing, photo);
    console.log(photo_data);

    this.apiService.addListTrailer(photo_data).then((result) => {
      const id = result['_id'];
      this.router.navigate(['/']);
     }, (err) => {
      console.log(err);
    });

  }

}
