import { Component } from '@angular/core';
import { Question } from '../model/Question';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  questions: Question[];
  countCorrect: number = 0;

  constructor(private dataService: DataService) {
    this.questions = dataService.getAllQuestions();
    console.log(this.questions.length);
    this.countCorrectAnswer();
  }

  countCorrectAnswer() {
    for(let i = 0; i < this.questions.length; i++){
      if(this.questions[i].answerId == this.questions[i].selectedId){
         this.countCorrect++;
      }
    }
    console.log(this.countCorrect);
  }
}
