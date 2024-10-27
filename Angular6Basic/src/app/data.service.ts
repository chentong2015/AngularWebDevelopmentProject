import { Injectable } from '@angular/core';

// import HttpClient 
import { HttpClient } from '@angular/common/http';

@Injectable()
// use this service to communicate with an API
export class DataService {

  // create an instance of HttpClient
  constructor(private httpClient: HttpClient) { }

  // use free site web API : jsonplaceholder
  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  // get a single user 
  getUser(userID) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+ userID);
  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}
