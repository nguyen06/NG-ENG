import { Component, OnChanges, Input } from '@angular/core';
import { TenseService } from '../../services/tense.service';
import {question} from "../../shared/dataStructure/question.model";
import {answer} from "../../shared/dataStructure/an";
import { Quiz } from '../../shared/dataStructure/quiz.model';


@Component({
  selector: 'app-tense-detail',
  templateUrl: './tense-detail.component.html',
  styleUrls: ['./tense-detail.component.scss']
})
export class TenseDetailComponent implements OnChanges {
  @Input() tenName : string

  page = {
    index: 0,
    size: 1,
    num: 1
  }

  quiz: Quiz = new Quiz(null);
  tenseUrl: string;
  isVisited: boolean = false;
  ansOptId: number = 0;
  correctColor: string;
  uncorrectColor: string;
  hind: string;
  correct: boolean;
  correctQues: number = 0;
  percentRight: number = 0;
  percent: string = '0%';
  tense_config = [
    {name: "Present Simple", content: "assets/data/PresentSimple.json"},
    {name: "Past Simple", content: "assets/data/PastSimple.json"}
  ]

  constructor(private tenseService: TenseService ) { 
    
  }

  ngOnChanges() {
    for(let entry of this.tense_config){
      if(entry.name === this.tenName){
        this.tenseUrl = entry.content;
        this.loadQuiz(this.tenseUrl);
      }
    }
  }


  loadQuiz(tenseUrl: string){
    this.tenseService.get(tenseUrl).subscribe( res => {
      this.quiz = new Quiz(res);
      this.page.num = this.quiz.questions.length;
      this.page.index = 0;
      this.page.size = 1;
      this.isVisited = false;
      this.ansOptId = 0;
      this.correctColor = '';
      this.uncorrectColor = '';
      this.hind = '' ;
      this.correct = null;
      this.correctQues= 0;
      this.percentRight= 0;
      this.percent='0%';
      
    })
  }

  get questions(){
    return (this.quiz.questions)? this.quiz.questions.slice(this.page.index, this.page.index + this.page.size) : [];
  }

  getAnswer(qu:number, op: number):boolean{
    if(!this.quiz.questions[qu-1].isVisited){
      this.quiz.questions[qu-1].isVisited = true;
      this.isVisited = this.quiz.questions[qu-1].isVisited;
      for(let option of this.quiz.questions[qu-1].options){
        if(option.isAnswer === true && option.id === op && this.quiz.questions[qu-1].answered.corrected === false){
          this.quiz.questions[qu-1].answered.corrected = true;
          this.quiz.questions[qu-1].answered.option_id = op;
          this.ansOptId = this.quiz.questions[qu-1].answered.option_id;
          this.correctColor = '#4285F4';
          this.correct = this.quiz.questions[qu-1].answered.corrected;
          this.hind = this.quiz.questions[qu-1].answered.hindUrl;
          this.correctQues ++;
          this.percentRight = Math.floor((this.correctQues/this.page.num) * 100);
          this.percent = this.percentRight + "%";
          return false;
        }else{
          this.correct = this.quiz.questions[qu-1].answered.corrected;

          this.hind = this.quiz.questions[qu-1].answered.hindUrl;
        } 
      }
    }
  }

  goto(index: number){
    if(index >= 0 && index < this.page.num){
      this.correct = this.quiz.questions[index].answered.corrected;
      this.ansOptId = this.quiz.questions[index].answered.option_id;
      console.log(this.correct);
      //console.log(this.quiz.questions[index].isVisited);
      if(this.quiz.questions[index].isVisited === false){
        this.correct = null;
      }else{
        this.correct = this.quiz.questions[index].answered.corrected;
      }
      this.page.index = index;
      if(index <= this.page.num && this.quiz.questions[index].isVisited){
        this.isVisited = true;
        
      }else{
        this.isVisited = false;
      }   
    }
  }
}
