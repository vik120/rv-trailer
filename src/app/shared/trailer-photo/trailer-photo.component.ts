import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'rv-trailer-photo',
  templateUrl: './trailer-photo.component.html',
  styleUrls: ['./trailer-photo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrailerPhotoComponent implements OnInit {

rForm: FormGroup;
listing: any = [];
public uploader:FileUploader = new FileUploader({url: URL});


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
          //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
          this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
          //overide the onCompleteItem property of the uploader so we are
          //able to deal with the server response.
          this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
                console.log("ImageUpload:uploaded:", item, status, response);
            }
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

  // onSubmitPhoto() {

  //   const photo = this.rForm.value;
  //   console.log(this.listing);
  //   const photo_data = Object.assign({}, this.listing, photo);
  //   console.log(photo_data);

  //   this.apiService.addListTrailer(photo_data).then((result) => {
  //     const id = result['_id'];
  //     this.router.navigate(['/']);
  //    }, (err) => {
  //     console.log(err);
  //   });

  // }

}
