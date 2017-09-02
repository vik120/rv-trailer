import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';



@Injectable()
export class ApiService {

  headers:any = {'Content-Type': 'application/json'};

  constructor(private http: Http) { }

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

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('usre', JSON.stringify(user));
  }

}
