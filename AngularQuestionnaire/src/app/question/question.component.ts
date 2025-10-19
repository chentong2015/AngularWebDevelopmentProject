import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'; 

import { Question } from '../model/Question';
import { DialogService } from '../services/dialog.service';

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
   currentQuestion: Question;

   constructor(private dialogService: DialogService, 
               private router: Router,
               private dataService: DataService) {
      this.idQuestion = 0;
      this.totalQuestion = this.dataService.getQuestionLength();
      this.refresh();
      /*
      this.currentQuestion = this.dataService.getQuestionByIndex(this.idQuestion);
      this.percent = Math.ceil((this.idQuestion + 1) / this.totalQuestion * 100);
      this.percentWidth = this.percent + "%"; */
   }

   refresh() {
      this.currentQuestion = this.dataService.getQuestionByIndex(this.idQuestion);
      this.percent = Math.ceil((this.idQuestion + 1) / this.totalQuestion * 100);
      this.percentWidth = this.percent + "%";
   }

   isFirstQuestion() {
      return this.idQuestion == 0;
   }

   isLastQuestion() {
      return this.idQuestion == this.totalQuestion - 1;
   }
  
   // 恢复的时候，需要恢复之前选择的答案，否则没有默认选择
   previousQuestion() {
      if(this.idQuestion > 0) {
         this.idQuestion--;
      }
      this.refresh();
   }

    // 设置：如果没有选择答案，不能跳转到下一个问题
    // 判断是否是最后一个问题，如果是，则执行跳转
   nextQuestion() {
      if(this.currentQuestion.selectedId == -1) {
         this.dialogService.showWithoutConfirm("No Answer", "Please select your answer for this question.");
      } else {
         if(this.idQuestion == this.totalQuestion - 1) {
            this.dialogService.showWithConfirm("Submit", "Are you sure want to submit ?", () => this.router.navigate(['/report']));
         } else {
            this.idQuestion++;
            this.refresh();
         }
      }
   }

   // 选择radio的时候更新当前问题的选择答案
   updateAnswer(index: number) {
      this.currentQuestion.selectedId = index;
   }
}
