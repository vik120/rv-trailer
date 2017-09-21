import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'rv-signup-owner',
  templateUrl: './signup-owner.component.html',
  styleUrls: ['./signup-owner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupOwnerComponent implements OnInit {

rForm: FormGroup;
  user: {};

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService,
              private flashMessagesService: FlashMessagesService) {

      this.rForm = fb.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'owner' : [ true ],
      'approved' : [ false ],
      'validate' : '',
      'type': 'owner'
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.addUser(this.rForm.value).then((result) => {
     // console.log(this.rForm.value);
      let id = result['_id'];
      alert('Please Loggin With Your Email and Password');
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
      this.flashMessagesService.show('This E-mail Id is Registered.', {cssClass: 'alert-danger'});
    });
  }

}
