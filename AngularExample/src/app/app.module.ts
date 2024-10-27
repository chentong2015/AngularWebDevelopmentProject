import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
// 必须添加这里的Modal模块
import { ModalModule } from 'ngx-bootstrap/modal';

// Service必须自定义添加 !!
import { AuthentificationService } from './services/authentification.service';
import { DataService } from './services/data.service';

// 新的component会被自动的添加到app.module.ts文件中 
// 通过配置路径Router可以实现在不同Component直接的跳转，Web页面的切换
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionComponent } from './question/question.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReportComponent } from './report/report.component';

// 将路由的路径提取出来
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'user', component: UserComponent},
  {path: 'report', component: ReportComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    QuestionComponent,
    DialogComponent,
    ReportComponent
  ],
  // 添加的新的引入的表单模块
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  // 在provider提供的是services服务
  providers: [AuthentificationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
