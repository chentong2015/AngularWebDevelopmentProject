import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modelService: BsModalService, private bsModalRef: BsModalRef) { }

  // 显示对话框的时候，传递参数 => 通过BsModalRef来传递参数
  showWithoutConfirm(title: String, message: string) {
    this.fireDialog(title, message);
  }

  // 带有确认按钮，通过确认来执行回调方法 !!
  showWithConfirm(title: String, message: string, callback: Function) {
     this.fireDialog(title, message);
     this.bsModalRef.content.hasConfirmButton = true;
     this.bsModalRef.content.callback = callback;
  }

  fireDialog(title: String, message: string) {
    // 第二个参数传递的时候显示的配置 ModalOptions 
     const config: ModalOptions = {
      initialState: {
        key: "value"
      },
      animated: true,
      backdrop: 'static' // 可以设置成true，或者是false 确定是否显示背景颜色
    }

     this.bsModalRef = this.modelService.show(DialogComponent, {
        animated: true, 
        backdrop: 'static'
     }); 
     this.bsModalRef.content.title = title;
     this.bsModalRef.content.body = message;
  }
}
