import { Component } from '@angular/core';
import { Quesiton } from '../model/Question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  questions: Quesiton[];
  countCorrectAnswers: number = 0;

  constructor(private dataService: DataService) {
     console.log("console infor for debug");
     this.questions = dataService.getAllQuestions();
     for(let i=0; i < this.questions.length; i++) {
       if(this.questions[i].answerId == this.questions[i].selectedId) {
          this.countCorrectAnswers++;
       }
     }
  }
}
