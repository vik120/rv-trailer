import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('I am here');

    
  }

}
