import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-listview',
  templateUrl: './rvlist-listview.component.html',
  styleUrls: ['./rvlist-listview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RvlistListviewComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
