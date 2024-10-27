import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // 这里的属性必须在构造器或者init()方法中进行初始化
  name: string;
  age: number;
  address: Address;
  title: any;
  isEditingUser: boolean;
  courses: string[]; 
  
  // 类型的构造器
  constructor() {
    this.name = "victor"
    this.age = 20;
    this.address = {
      city: "new york",
      street:" fisrt street"
    }
    this.title = "anything";
    this.isEditingUser = false;
    this.courses = ["Angular", "Java", "C++"];
  } 

  // 在component初始化加载的时候，调用的init方法
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("call test component init")
  }

  // 触发是否可以编辑User的hobbies
  editUserCources(){
    this.isEditingUser = !this.isEditingUser;
  }

  // 定义Web页面响应用户操作的一些方法
  // course: string 这里需要定义方法参数的类型，否则会implicitly has an 'any' type !!
  addCourse(course: string){
    console.log("add: " + course);
    // push will put to the end of the list  
    this.courses.push(course);
  }

  deleteCourse(course: string){
    console.log("delete: " + course);
    for(let i = 0; i < this.courses.length; i++){
      if(this.courses[i] == course){
         this.courses.splice(i, 1);
      }
    }
  }
}

// 自定义创建一个数据类型
interface Address {
  city: string,
  street: string,
}
