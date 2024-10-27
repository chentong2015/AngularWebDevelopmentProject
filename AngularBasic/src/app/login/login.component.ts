import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { LocalStorageHelper } from '../LocalStorageHelper';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   isRemember: boolean;

   constructor(private authService: AuthentificationService, 
               private dialogServie: DialogService,
               private router: Router) {
      this.isRemember = false;
   }

   loginUser(username: string, password: string) {
      if(LocalStorageHelper.checkLoginInfo(username, password)) {
         this.router.navigate(['/question']);
      }
         
      const result = this.authService.loginUser(username, password);
      if(result) {
         if(this.isRemember) {
            LocalStorageHelper.addLoginInfo(username, password);
         }
         this.dialogServie.showWithoutConfirm("Success", "login success !");
         this.router.navigate(['/question']);
      } else {
         this.dialogServie.showWithoutConfirm("Failed", "login failed! please check username and password are correct.");
      }
   }
}
