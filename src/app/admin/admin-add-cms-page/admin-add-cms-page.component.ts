import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'rv-admin-add-cms-page',
  templateUrl: './admin-add-cms-page.component.html',
  styleUrls: ['./admin-add-cms-page.component.scss']
})
export class AdminAddCmsPageComponent implements OnInit {

rForm: FormGroup;
cmspage: {};

  constructor(private fb: FormBuilder,
              public router:Router,
              public apiService:ApiService) {

      this.rForm = fb.group({
      'slug' : [null, Validators.required],
      'body' : [null, Validators.required],
      });

  }

  ngOnInit() {
  }

  onSubmitNewCmsPage() {
    this.apiService.addCmsPage(this.rForm.value).then((result) => {
      console.log(this.rForm.value);
       let id = result['_id'];
       this.router.navigate(['admin/cmspage']);
     }, (err) => {
       console.log(err);
     });
  }

    onSubmit() {
    this.apiService.addUser(this.rForm.value).then((result) => {
     // console.log(this.rForm.value);
      let id = result['_id'];
      this.router.navigate(['admin/user']);
    }, (err) => {
      console.log(err);
    });
  }

}
