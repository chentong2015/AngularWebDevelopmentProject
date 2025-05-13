import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private serviceUrl = "http://www.test.com/";
  userArray: User[] = [];

  constructor(private httpClient: HttpClient) { }

  hasFoundUsername(user: User) {
    const found = this.userArray.find(value => value.username == user.username);
    return found != undefined;
  }

  registerUser(user: User) {
     this.userArray.push(user);
  }

  loginUser(username: string, password: string): boolean {
     for(let i=0; i <this.userArray.length; i++) {
       const user = this.userArray[i];
       if(user.username == username && user.password == password) {
          return true;
       }
     } 
     return false;
  }

  getDataFromWebService() {
    // this.httpClient.
    this.httpClient.get(this.serviceUrl).subscribe(
        result => console.log(result)
    );
  }
  


}
