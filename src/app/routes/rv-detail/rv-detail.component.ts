import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../../shared/app/app.component';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../api.service';

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
  calendarOptions:Object = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };

  public isFavourite = true;
  public favourite = {};
  public fav_id: string;

  constructor(private app: AppComponent,
              public router: Router,
              public apiService: ApiService,
              private route: ActivatedRoute
              ) {
                  this.app.brandSlideVisible = false;
            }

  ngOnInit() {
    this.getRenterDetail(this.route.snapshot.params['id']);
    this.checkFavourite();
  }

  getRenterDetail(id) {
    this.apiService.showListTrailer(id).subscribe((res) => {
      this.renterdetail = res;
      console.log(this.renterdetail);
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
