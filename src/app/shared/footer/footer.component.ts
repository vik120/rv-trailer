import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';

@Component({
  selector: 'rv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form) {
      this.apiService.getNewsLetters(form.value)
      .subscribe( (response) => console.log(response));
  }

}
