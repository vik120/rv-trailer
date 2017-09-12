import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';



@Injectable()
export class ApiService {

  authToken;
  user;
  cmspage;
  options;

  headers:any = {'Content-Type': 'application/json'};

  constructor(private http: Http) { }

  createAuthenticationHeaders(){
    this.loadToken()
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

    getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/user')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }


    showUser(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/api/user/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }


    addUser(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/saveuser', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateUser(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/api/user/' + id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/api/user/'+ id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  login(user) {
      return this.http.post('/api/login', user)
          .map(res => res.json());
  }

  clientLogin(user) {
      return this.http.post('/api/clientLogin', user)
          .map(res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired();
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  viewPassword() {
    this.createAuthenticationHeaders();
    return this.http.get('/api/viewPass', this.options).map(res => res.json());
  }

  changePassword(id, users) {
    console.log(users);
    return new Promise((resolve, reject) => {
        this.http.put('/api/changePass/', users)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  onSubmitSpecification() {
    var listing = JSON.parse(localStorage.getItem('listing'));
    return listing;
  }

    onSubmitStep2() {
    var listing12 = JSON.parse(localStorage.getItem('listing12'));
    return listing12;
  }


  addListTrailer(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/list_trailers', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

   getAllCmsPages() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/cmspage')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }

  showCmsPage(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/api/cmspage/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  addCmsPage(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/savecmspage', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

    updateCmsPage(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/api/cmspage/' + id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

    deleteCmsPage(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/api/cmspage/'+ id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}


