import { Component } from '@angular/core';
import { Quesiton } from '../model/Question';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

    percent: number;
    percentWidth: string;
    
    idQuestion: number;
    totalQuestion: number;
    currentQuesiton: Quesiton;

    constructor(private dataService: DataService, 
                private dialogService: DialogService,
                private router: Router)  {
      this.idQuestion = 0;
      this.totalQuestion = dataService.getQuestionLength();
      this.refresh();
    }

    refresh() {
       this.currentQuesiton = this.dataService.getQuestionByIndex(this.idQuestion);
       this.percent = Math.ceil((this.idQuestion + 1) / this.totalQuestion * 100);
       this.percentWidth = this.percent + "%";
    }

    updateAnswer(index: number) {
       this.currentQuesiton.selectedId = index;
    }

    previousQuestion() {
      if(this.idQuestion > 0) {
        this.idQuestion--;
      }
      this.refresh();
    }

    nextQuestion() {
      if(this.currentQuesiton.selectedId == -1) {
         this.dialogService.showWithoutConfirm("No Answer", "please select one anwser !");
      } else {
         if(this.idQuestion == this.totalQuestion - 1) {
            this.dialogService.showWithConfirm("Submit", "are you sure to submit ?",
              () => this.router.navigate(['/report']));
         } else {
            this.idQuestion++;
            this.refresh();
         }
      }
    }

    isFirstQuestion() {
      return this.idQuestion == 0;
    }

    isLastQuestion() {
      return this.idQuestion == this.totalQuestion - 1;
    }
}
