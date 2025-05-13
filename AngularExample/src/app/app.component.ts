import { Component } from '@angular/core';

// Component组件的注解配置，html文件路径，css文件路径 !!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
}
