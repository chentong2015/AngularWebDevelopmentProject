import { Component } from '@angular/core';

// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { ModalComponent } from './layout/modal/modal.component';

export class TestDiaslogComponent {

  // constructor(private modalService: BsModalService) { }

  // 将对话框的服务封装到一个service中使用 !!
  public showModal(data: any): void {
    const initialState = {
      topic: "attention",
      config: {
        title: "Users Infomation",
        save: "Save",
        cancel: "Cancel"
      },
      message: 'test message',
      userInfo: {
        username: 'DaiDH',
        password: 'Admin',
      }
    };
    
    const dialogInfo = {
        title: "",
        message: ""
    }

    /*
    this.modalService.show(ModalComponent, {
      initialState,   补充弹框中的内容信息
      animated: true, 设置是否以动画的效果弹出
      backdrop: 'static', 设置整个弹框的背景颜色是否hi变暗
      class: 'modal-md'
    }); */
  }
}
