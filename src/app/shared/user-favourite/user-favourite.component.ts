import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent} from '../../shared/app/app.component';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../api.service';

@Component({
  selector: 'rv-user-favourite',
  templateUrl: './user-favourite.component.html',
  styleUrls: ['./user-favourite.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserFavouriteComponent implements OnInit {

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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
  ]



  favDetails: any = [];
  userId: any;
  public FavTrailer_id: any = [];
  public user:any;
  public favListArray:string[] = [];
  private myIds: Array<Object>;

  constructor(private app: AppComponent,
              public router: Router,
              public apiService: ApiService,
              private route: ActivatedRoute
              ) {


               }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.userId = this.user.id;
    }

    if (this.userId) {
      console.log(this.userId);
      //this.getFav(this.userId);

      this.apiService.ListByFavId(this.userId).subscribe( (result) => {
      this.myIds = result;
      console.log(this.myIds);

        this.favListArray = result.find(myIds => myIds.trailer_id === 1);
        console.log(this.favListArray);
      });
    }



  }

  getFav(id) {
      this.apiService.ListByFavId(id).subscribe( (result) => {
       console.log(result);

      });

      console.log(this.myIds);

  }

  getAllFavTrailerList(FavTrailer_id) {
    //  console.log('array passing');
    // console.log(this.FavTrailer_id);

  //     this.apiService.showFavListTrailer(FavTrailer_id).subscribe((res) => {
  //       console.log('hey i am at dat');
  //     this.favDetails = res;
  //     console.log(this.favDetails);
  // });
  }

}
