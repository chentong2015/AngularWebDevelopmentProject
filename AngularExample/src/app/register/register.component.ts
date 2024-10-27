import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

import { DialogService } from '../services/dialog.service';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthentificationService, 
              private dialogService: DialogService,
              private router: Router) { }

  // 在提交的时候创建user: get input text by jQuary ==> select id 
  regiserUser(event: any) {
    const target = event.target;
    const isAgreeTerms = target.querySelector('#registerCheck').checked;
    if(!isAgreeTerms) {
       this.dialogService.showWithoutConfirm("Attention", "Please agree the terms !");
    } else {
      const user: User = {
        username: target.querySelector('#username').value,
        password: target.querySelector('#password').value,
        email: target.querySelector('#email').value,
      }
      if(this.authService.hasFoundUserName(user)) {
        this.dialogService.showWithoutConfirm("Attention", "Register Failed, username exist !");
      } else {
        this.authService.registerUser(user);
        this.router.navigate(['/login']);
      }
    }
  }
}
