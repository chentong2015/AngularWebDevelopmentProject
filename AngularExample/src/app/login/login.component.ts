import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

import { DialogService } from '../services/dialog.service';
import { AuthentificationService } from '../services/authentification.service';
import LocalStorageHelper from '../services/LocalStorgaeHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   isRemember: boolean = false;
   constructor(private authService: AuthentificationService, 
               private dialogService: DialogService,
               private router: Router) { }

   loginUser(username: string, password: string) {
      if(LocalStorageHelper.checkItem(username, password)) {
         this.router.navigate(['/question']);
      }

      const result = this.authService.loginUser(username, password);
      if (result) {
         // 同一个浏览器中，只有不同的username才会被存储
         if(this.isRemember) {
            LocalStorageHelper.saveItem(username, password);
         }

         // 这里登录成功的显示可以不需要 !!
         this.dialogService.showWithoutConfirm("Success", "login success !");
         
         this.router.navigate(['/question']);
      } else {
         this.dialogService.showWithoutConfirm("Failed", "login failed, make sure username and password are correct !");
      }
   }
}
