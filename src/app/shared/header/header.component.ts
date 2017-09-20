import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'rv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  logindata: any = [];
  user: any = [];

   constructor(public router: Router,
              public apiService: ApiService,
              private formBuilder: FormBuilder,
              private flashMessagesService: FlashMessagesService)
              {
                
                

                if(this.logindata  === null ) {
                  console.log()
                } else {
                  this.logindata = JSON.parse(localStorage.getItem('user'));
                }
                
              }

  ngOnInit() {
    
    if(this.logindata  !== null ) {
      this.getUserData(this.logindata.id); 
    }
    
  }

  getUserData(id) {
    this.apiService.showUser(id).subscribe((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }

  onMyAccount() {
    if (this.user.renter === 'renter') {
        this.router.navigate(['/renter']);
    }else {
        this.router.navigate(['/owner']);
    }
  }

}


