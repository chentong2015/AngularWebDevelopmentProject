import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public title: string = "";
  public body: string = "";
  public hasConfirmButton: boolean = false;
  public callback: Function = () => console.log();
 
  constructor(private bsModalRef: BsModalRef) {
  }

  // 关闭弹出的对话框
  // 如果点击的是确认按钮，则会执行指定的callback回调方法
  confirm() {
    this.bsModalRef.hide();
    this.callback();
  }

  close() {
    this.bsModalRef.hide();
  }
}
