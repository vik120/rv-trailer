import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../api.service';


@Component({
  selector: 'rv-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.scss']
})
export class AdminViewUserComponent implements OnInit {

  rForm: FormGroup;
  users: any = [];

  constructor(private fb: FormBuilder,
              public router: Router,
              public apiService: ApiService,
              private route: ActivatedRoute) {

      this.rForm = fb.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'newsletter_owner' : [ false ],
      'newsletter_renter' : [ false ],
      'validate' : ''
    });
  }

  ngOnInit() {

      this.getUsers(this.route.snapshot.params['id']);
  }

  getUsers(id) {
    this.apiService.showUser(id).then((res) => {
      this.users = res;
      console.log(this.users);
    }, (err) => {
      console.log(err);
    });
  }

}
