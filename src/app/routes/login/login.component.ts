import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

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

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }

  facebookLogin() {
        this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
      }

  googleLogin() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

}
