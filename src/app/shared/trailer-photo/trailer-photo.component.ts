import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// const URL = 'http://localhost:3001/upload';

const URL: string = 'http://165.227.23.237:3001';


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
fileName: String;
userID: any = [];


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
          this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
          this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
                //console.log("ImageUpload:uploaded:", item, status, response);
             //   console.log(response);
                const responseResult = JSON.parse(response);
                this.fileName = responseResult.filename;
                console.log(this.fileName);
             //   console.log(responseResult.filename);
          }
        }


  onSubmitPhoto() {


    //console.log(this.fileName);
    const photo = {'photo': this.fileName};
    this.userID = JSON.parse(localStorage.getItem('user'));
    const photo_data = Object.assign({}, this.listing, photo, {user_id: this.userID.id});
    console.log(photo_data);

    this.apiService.addListTrailer(photo_data).then((result) => {
      const id = result['_id'];
      this.router.navigate(['/rv']);
     }, (err) => {
      console.log(err);
    });

  }

}
