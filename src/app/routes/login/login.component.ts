import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../api.service';

// Do not import from 'firebase' as you'd lose the tree shaking benefits

import * as firebase from 'firebase/app';

@Component({
  selector: 'rv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  messageClass;
  message;
  processing = false;
  form: FormGroup;
  email: string;
  loggedInUser:any;
  logindata: any = [];

  constructor(public af: AngularFireAuth,
              public router:Router,
              public apiService:ApiService,
              private formBuilder: FormBuilder)
              {
                this.createForm();
                if(this.logindata  === null ) {
                  console.log()
                } else {
                  this.logindata = JSON.parse(localStorage.getItem('user'));
                }
              }

  facebookLogin() {
        this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
      }

  googleLogin() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

  createForm() {
      this.form = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'validate' : ''
    });
  }

  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
  }

  brandSlideVisible: boolean;
  ngOnInit() {
    this.brandSlideVisible = true;

  }

    onLoginSubmit() {
    console.log(this.form.value);
      this.email = this.form.get('email').value;
      this.processing = true;
      this.disableForm();
      const user = {
        email: this.form.get('email').value,
        password: this.form.get('password').value
      }


    this.apiService.clientLogin(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Username or Password are Not Found.';
        this.processing = false;
        this.enableForm();
      } else {
       // this.getUserByEmail();
        console.log(this.loggedInUser);

        this.messageClass = 'alert alert-success';
        this.message = 'Success';
        this.apiService.storeUserData(data.token, data.user);
        setTimeout(() => {
            this.router.navigate(['/']);
           }, 2000);
      }
    });

}

// getUserByEmail() {
//   this.apiService.userByEmail(this.email)
//     .subscribe( data => {
//       console.log('brijesh');
//       console.log(data);
//       localStorage.setItem('loggedInUser', data);
//       this.loggedInUser = data;
//     });
// }

}
