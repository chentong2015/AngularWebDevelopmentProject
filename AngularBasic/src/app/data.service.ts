import { Injectable } from '@angular/core';
import { Quesiton } from './model/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listQuestion: Quesiton[];

  constructor() {
     this.listQuestion = [
      {
        "name": "How to show version of node.js ?",
        "answers": [ "node -v","node -s","node -c","node -d"],
        "answerId": 0,
        "selectedId": -1
     },
     {
        "name": "How to create angular component ?",
        "answers": [ "ng g com","ng g c","ng g -c","ng component"],
        "answerId": 1,
        "selectedId": -1
     },
     {
        "name": "How to create angular service ?",
        "answers": [ "ng g ss","ng g serve","ng g s","ng service"],
        "answerId": 2,
        "selectedId": -1
     },
     {
        "name": "How to run angular project ?",
        "answers": [ "ng build","ng service","ng serve","ng s"],
        "answerId": 2,
        "selectedId": -1
     },
     {
        "name": "What's the full name fo 'npm' ?",
        "answers": [ "ng package manager","node pack manager","node package manager","node project manager"],
        "answerId": 2,
        "selectedId": -1
     },
     {
        "name": "How to use ng 'if' condition ?",
        "answers": [ "*ngIf","nif","ngif","*ng if"],
        "answerId": 0,
        "selectedId": -1
     },
     {
        "name": "How to use ng 'for' condition ?",
        "answers": [ "*ngFor","ng for","ngfor","*ng for"],
        "answerId": 0,
        "selectedId": -1
     }
     ]
   }

  getQuestionLength() {
    return this.listQuestion.length;
  }

  getQuestionByIndex(index: number): Quesiton {
    // index >= 0 && index < length
     return this.listQuestion[index];
  }

  getAllQuestions() {
    return this.listQuestion;
  }

}
