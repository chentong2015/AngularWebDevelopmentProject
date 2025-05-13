import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public title: string;
  public body: string;
  public hasConfirmButton: boolean = false;
  public callback: Function;

  constructor(private bsModalRef: BsModalRef) {
  }

  close() {
    this.bsModalRef.hide();
  }

  confirm() {
    this.bsModalRef.hide();
    this.callback();
  }
}
