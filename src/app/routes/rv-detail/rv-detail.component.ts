import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { RecaptchaModule } from 'ng2-recaptcha';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';

@Component({
  selector: 'rv-detail',
  templateUrl: './rv-detail.component.html',
  styleUrls: ['./rv-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RvDetailComponent implements OnInit {

  renterdetail: any = [];

  public max: number = 5;
  public rate: number = 4;
  public isReadonly: boolean = true;
  public features: string[];
  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
  };

  public isFavourite = true;
  public favourite = {};
  public fav_id: string;
  private listing_id: string;
  private user_id: string;
  saveSuccess: boolean;


  constructor(private app: AppComponent,
              public router: Router,
              public apiService: ApiService,
              private route: ActivatedRoute,
              private flashMessagesService: FlashMessagesService
              ) {
                  this.app.brandSlideVisible = false;
            }

              brandSlideVisible: boolean;

  ngOnInit() {
    this.brandSlideVisible = true;
    this.getRenterDetail(this.route.snapshot.params['id']);
    this.listing_id = this.route.snapshot.params['id'];
    this.checkFavourite();


  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

onSubmit(form) {

console.log(this.listing_id);

  form.value.listing_id = this.listing_id;
  form.value.user_id = this.user_id;
  console.log(form.value);

  this.apiService.createMessage(form.value)
  .subscribe( (response) => {
    if (response) {
        this.saveSuccess = true;
    } else {
        this.saveSuccess = false;
    }
  });
}

  getRenterDetail(id) {
    this.apiService.showListTrailer(id).subscribe((res) => {
      this.renterdetail = res;
      console.log(this.renterdetail);
      this.user_id = this.renterdetail.user_id;
      this.features = this.renterdetail.details_feature;
    }, (err) => {
      console.log(err);
    });
  }

  onFavouriteClick() {
    let user = JSON.parse(localStorage.getItem('user'));
    let user_id = user.id;
    let trailer_id =  this.route.snapshot.params['id'];
      const favourite = {
        user_id: user_id,
        trailer_id: trailer_id
      };
      console.log(favourite);

    this.apiService.addFavourite(favourite).subscribe((result) => {
      let id = result['_id'];
      console.log(id);
    }, (err) => {
      console.log(err);
    });

    location.reload();

  }

  checkFavourite() {

    let user = JSON.parse(localStorage.getItem('user'));
    let user_id = user.id;
    let trailer_id =  this.route.snapshot.params['id'];

    let params = {user_id: user_id, trailer_id: trailer_id };
    console.log(params);

    this.apiService.getFav(params).subscribe((result) => {
      console.log(result);
      if (result === null ) {
        this.isFavourite = false;
        console.log('show fav icon');

      } else {
        console.log('do not show fav icon');
        this.fav_id = result._id;
        this.isFavourite = true;
        console.log(this.fav_id);
      }
    });

  }

  delFav() {
    let id = this.fav_id;
    this.apiService.delFav(id).subscribe((result) => {
        console.log(result);
    });
    location.reload();
  }



}
