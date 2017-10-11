import { ApiService } from './../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-user-detail-message',
  templateUrl: './user-detail-message.component.html',
  styleUrls: ['./user-detail-message.component.scss']
})
export class UserDetailMessageComponent implements OnInit {

  trailerID: any = [];
  trailerDetails: any[] = [];

  constructor(private route: ActivatedRoute,
              public apiService: ApiService) { }

  ngOnInit() {
    this.getTrailerId(this.route.snapshot.params['id']);
  }

  getTrailerId(id) {
     console.log(id);
      this.apiService.messagesDetails(id).subscribe( (response) => {
      this.trailerID = response.listing_id;
      this.getTrailerDetails();
      });
  }

  getTrailerDetails() {
      this.apiService.showListTrailer(this.trailerID).subscribe((res) => {
      this.trailerDetails = Array.of(res);
    });
  }

  onSubmit(form) {

  }

}
