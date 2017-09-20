import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rv-listview',
  templateUrl: './rvlist-listview.component.html',
  styleUrls: ['./rvlist-listview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RvlistListviewComponent implements OnInit {

  listtrailers: any = [];

  @Input('rvInfo') element:{
    rvimage: any,
    rvName: string,
    rvPrice: string,
    location: string,
    rating: number,
    year: number,
    guest: number,
    ownerName: string,
    ownerImage: any
  }

  @Input() rvimage: any;
  @Input() rvName: string;
  @Input() rvPrice: string;
  @Input() location: string;
  @Input() rating: number
  @Input() year: number;
  @Input() guest: number;
  @Input() ownerName: string;
  @Input() ownerImage: any;

  public max:number = 5;
  public rate:number = 3;
  public isReadonly: boolean= true;

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
    }, (err) => {
      console.log(err);
    });
  }

}
