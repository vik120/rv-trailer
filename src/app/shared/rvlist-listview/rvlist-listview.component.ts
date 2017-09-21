import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


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

  public max:number = 10;
  public rate:number = 3;
  public isReadonly: boolean= true;

  //homeSearchValues

  constructor(public router: Router,
              public apiService: ApiService,
              private activatedRoute: ActivatedRoute
              ) { }

  brandSlideVisible: boolean;
  ngOnInit() {

    //Get values of search coming from home page
    this.activatedRoute.params.subscribe((params: Params) => {
      
      if(params.homeSearch === 'true') {
        
        console.log('I am from home');
        console.log(params.location);
        this.searchTrailers(params.location);
      } else {
        this.getListTrailerList();
        console.log('I am not from home');
      }
      console.log(params.homeSearch);
      
    });


    this.brandSlideVisible = true;
    
  }

  searchTrailers(location) {
    let searchTerm = {location: location};
    this.apiService.searchTrailers(searchTerm).subscribe((res) => {
      
      this.listtrailers = res;
      console.log(this.listtrailers);
    });
  }

  getListTrailerList() {
    this.apiService.getAllListTrailer().subscribe((res) => {
      this.listtrailers = res;
      console.log(this.listtrailers);
    });
  }

}
