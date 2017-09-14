import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-faq-owner',
  templateUrl: './faq-owner.component.html',
  styleUrls: ['./faq-owner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqOwnerComponent implements OnInit {

  constructor() { }

  brandSlideVisible: boolean;
  ngOnInit() {
    this.brandSlideVisible = true;
  }

}
