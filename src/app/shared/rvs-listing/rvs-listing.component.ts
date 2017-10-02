import { ApiService } from './../../api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'rvs-listing',
  templateUrl: './rvs-listing.component.html',
  styleUrls: ['./rvs-listing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RvsListingComponent implements OnInit {

  public rvList: any[] = [
    {
      rvimage: 'rv-1.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    }
  ];

  public items: any[];

  constructor(private apiService: ApiService) { }

  brandSlideVisible: boolean;

  ngOnInit() {
    this.brandSlideVisible = true;
    this.allItems();
  }

  filterSearch(params) {
    console.log("I am from filter search");
    console.log(params);

    //Search listing and get data

    this.getItems(params);
  }

  getItems(params) {
    this.apiService.filterSearch(params)
      .subscribe( (result) => {
        console.log(result);
        this.items = result;
      });
  }

  allItems() {
    this.apiService.getAllListTrailer()
          .subscribe( (result) => {
            this.items = result;
          });
  }

}
