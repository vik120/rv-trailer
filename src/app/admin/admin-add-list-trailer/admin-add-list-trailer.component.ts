import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:3001/upload';
// const URL = 'http://165.227.23.237:3001/upload';

@Component({
  selector: 'rv-admin-add-list-trailer',
  templateUrl: './admin-add-list-trailer.component.html',
  styleUrls: ['./admin-add-list-trailer.component.scss']
})
export class AdminAddListTrailerComponent implements OnInit {

rForm: FormGroup;
user: {};
listingFeatures: any[] = [
     {feature: 'Brijesh'},
     {feature: 'Kirti'},
];
public uploader:FileUploader = new FileUploader({url: URL});
fileName: String;

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService) {

      this.rForm = fb.group({
          'specification_make' : [null, Validators.required],
          'specification_model' : [null, Validators.required],
          'specification_year' : [null, Validators.required],
          'specification_length' : [null, Validators.required],
          'specification_gross_weight' : [null, Validators.required],
          'specification_tough_weight' : [null, Validators.required],
          'specification_guest' : [null, Validators.required],
          'specification_slide_out' : [null, Validators.required],
          'location_street' : [null, Validators.required],
          'location_city' : [null, Validators.required],
          'location_province' : [null, Validators.required],
          'location_postal' : [null, Validators.required],
          'details_ad_title' : [null, Validators.required],
          'details_ad_description' : [null, Validators.required],
          'details_feature' : [null, Validators.required],
          'details_no_of_beds' : [null, Validators.required],
          'details_no_of_bathrooms' : [null, Validators.required],
          'pricing_security_deposit' : [null, Validators.required],
          'pricing_delivery_charges' : [null, Validators.required],
          'pricing_high_rate_hour' : [null, Validators.required],
          'pricing_high_rate_week' : [null, Validators.required],
          'pricing_high_rate_month' : [null, Validators.required],
          'pricing_low_rate_hour' : [null, Validators.required],
          'pricing_low_rate_week' : [null, Validators.required],
          'pricing_low_rate_month' : [null, Validators.required],
          'pricing_highest_season_date_range_from' : [null, Validators.required],
          'pricing_highest_season_date_range_to' : [null, Validators.required],
          'photo' : [null],

    });

  }

  ngOnInit() {
          //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
                //console.log("ImageUpload:uploaded:", item, status, response);
           //   console.log(response);
              const responseResult = JSON.parse(response);
              this.fileName = responseResult.filename;
              console.log(this.fileName);
           //   console.log(responseResult.filename);
      }
    }

  onSubmitListTrailer() {

    console.log(this.fileName);
    const photo = {'photo': this.fileName};
    const Listing_Data = Object.assign({}, this.rForm.value, photo);
    console.log(Listing_Data);

    this.apiService.addListTrailer(Listing_Data).subscribe((result) => {
     // console.log(this.rForm.value);
      let id = result['_id'];
      this.router.navigate(['admin/list-trailer']);
    }, (err) => {
      console.log(err);
    });
  }

}
