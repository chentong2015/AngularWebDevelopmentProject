import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  // 初始化为空数组
  userArray: User[] = [];

  constructor(private httpClient: HttpClient) {}

  hasFoundUserName(user: User) {
    const found = this.userArray.find(value => value.username == user.username);
    return found != undefined;
  }
  
  // 注册用户：将数据存储在本地，没有向后端Web Service发送请求 => POST
  registerUser(user: User) {
    this.userArray.push(user);
  }

  // 这里需要向后台发送post请求，验证
  loginUser(username: string, password: string): boolean {
    for(let index = 0; index < this.userArray.length; index++) {
       const user = this.userArray[index];
       if(user.username==username && user.password==password) {
         return true;
       }
    }
    return false;
  }
}
