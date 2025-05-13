import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  name: string;
  age: number;
  address: Address;
  title: any;
  isEditingUser: boolean;
  courses: string[];

  constructor() {
    this.name = "victor";
    this.age = 20;
    this.title="anything";
    this.address = {
      city: "new york",
      street: "first street"
    }
    this.isEditingUser = false;
    this.courses = ["Angular", "Java", "C++"]
  }

  editUserInfo() {
    this.isEditingUser = !this.isEditingUser;
  }

  addCourse(course: string) {
     this.courses.push(course);
  }

  deleteCourse(course: string) {
    for(let i = 0; i < this.courses.length; i++) {
      if(this.courses[i] == course) {
        this.courses.splice(i, 1);
      }
    }
  }

}

interface Address {
  city: string,
  street: string;
}
