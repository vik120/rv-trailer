import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../shared/app/app.component';

@Component({
  selector: 'rv-list-trailer',
  templateUrl: './list-trailer.component.html',
  styleUrls: ['./list-trailer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTrailerComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.brandSlideVisible = false;
  }

}
