import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'rv-signup-renter',
  templateUrl: './signup-renter.component.html',
  styleUrls: ['./signup-renter.component.scss']
})
export class SignupRenterComponent implements OnInit {

  rForm: FormGroup;
  user: {};
  messageClass;
  message;

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService,
              private flashMessagesService: FlashMessagesService) {

      this.rForm = fb.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'renter' : [ true ],
      'approved' : [ false ],
      'validate' : ''
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
      console.log("Duplicate username");
        this.flashMessagesService.show('This E-mail Id is Registered.', {cssClass: 'alert-danger'});
    });
  }

}
