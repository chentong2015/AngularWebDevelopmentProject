import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { User } from '../model/User';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthentificationService, 
              private dialogService: DialogService,
              private routes: Router) {
  }

  registerUser(event: any) {
     const target = event.target;
     const isAgreeTerms = target.querySelector('#registerCheck').checked;
     if(!isAgreeTerms) {
       this.dialogService.showWithoutConfirm("Failed", "please agree the terms");
     } else {
       const user: User = {
         username: target.querySelector('#username').value,
         password: target.querySelector('#password').value,
         email: target.querySelector('#email').value,
       }
       
       if(this.authService.hasFoundUsername(user)) {
         this.dialogService.showWithoutConfirm("Failed", "username exist");
       } else {
         this.authService.registerUser(user);
         this.routes.navigate(['/login']);
       }
     }
  }
}
