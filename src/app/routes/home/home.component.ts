import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  listtrailers: any = [];
  dollers: any[] = [
    {
      doller_sign: '$',
    }
  ]

  testimonials: any[] = [
    {
      userPic: 'user-1.png',
      userName: 'Anne Doe',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-2.png',
      userName: 'Jhon Doe',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-3.png',
      userName: 'Mark Leo',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-2.png',
      userName: 'Johnny Aston',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
  ];


    constructor(public router: Router,
                public apiService: ApiService,
                private route: ActivatedRoute
               ) { }

  brandSlideVisible: boolean;

  ngOnInit() {
    this.brandSlideVisible = true;
    this.getListTrailerList();
  }

  getListTrailerList() {
    this.apiService.getAllListTrailer().subscribe((res) => {
      this.listtrailers = res;
      console.log(this.listtrailers);
    });
  }

}
