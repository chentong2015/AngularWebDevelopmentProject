import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: BsModalService, private bsModalRef: BsModalRef) { }

  // cancel 
  showWithoutConfirm(title: string, message: string) {
    this.fireDialog(title, message);
  }

  // cancel + confirm
  showWithConfirm(title: string, message: string, callback:Function) {
    this.fireDialog(title, message);
    this.bsModalRef.content.hasConfirmButton=true;
    this.bsModalRef.content.callback=callback;
  }

   fireDialog(title: string, message: string) {
     this.bsModalRef = this.modalService.show(DialogComponent, {
       animated: true,
       backdrop: 'static'
     });
     this.bsModalRef.content.title = title;
     this.bsModalRef.content.body = message;
   }
}
