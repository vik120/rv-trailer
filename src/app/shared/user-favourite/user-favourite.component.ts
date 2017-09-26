import { Http } from '@angular/http';
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

  public rvList: any[] = [];
  private userId: string;

  public lists: any;

  constructor(public apiService: ApiService, private http: Http) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.userId = user.id;
    }

    this.getFavIds()
      .then( data => {
        console.log(data);
        let ids = data;
        this.apiService.getTrailersByIds(ids).subscribe( (response) => {
          console.log(response);
          this.rvList = response;
        });
      });
  }

  getFavIds() {
    this.userId = '59c62d269f6def33938d40d3';

    return new Promise((resolve, reject) => {
      let favIds: string[] = [];
      this.apiService.myFav(this.userId)
        .subscribe( response => {
          if (response.length === 0) {
            console.log("no fav list found");
          } else {
            response.map(function (favObj){
              favIds.push(favObj.trailer_id)
            });

            resolve(favIds);
           
          }
          //console.log(response);
          
        });
    

    });
      
        
    
    
  }

  getFavTrailers(ids) {
    //console.log(ids);

    this.apiService.getTrailersByIds(ids).subscribe( result => {
      console.log(result);
    })
  }

  getTrailerByIds(ids) {
    ids = ["59c0ece15f808253fff0f2aa", "59c101cc213c4665379ed8e6", "59c2750349d47a36a610ae85"];



  }

    // if (this.userId) {
    //   console.log(this.userId);
    //   //this.getFav(this.userId);

    //   this.apiService.ListByFavId(this.userId).subscribe( (result) => {
    //   this.myIds = result;
    //   console.log(this.myIds);

    //     this.favListArray = result.find(myIds => myIds.trailer_id === 1);
    //     console.log(this.favListArray);
    //   });
    //}



  

  // getFav(id) {
  //     this.apiService.ListByFavId(id).subscribe( (result) => {
  //      console.log(result);

  //     });

  //     console.log(this.myIds);

  // }

  // getAllFavTrailerList(FavTrailer_id) {
  //   //  console.log('array passing');
  //   // console.log(this.FavTrailer_id);

  // //     this.apiService.showFavListTrailer(FavTrailer_id).subscribe((res) => {
  // //       console.log('hey i am at dat');
  // //     this.favDetails = res;
  // //     console.log(this.favDetails);
  // // });
  // }

}
