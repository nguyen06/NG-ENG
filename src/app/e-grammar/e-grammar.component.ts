import { Component, OnInit, Input } from '@angular/core';
import { question } from '../shared/dataStructure/question';
import { tense}  from '../shared/dataStructure/tense';
import { TenseService } from '../services/tense.service';
import { option } from '../shared/dataStructure/option';
import { answer } from '../shared/dataStructure/ans';
import { ANSWERS } from '../shared/s-present-Ans';

@Component({
  selector: 'app-e-grammar',
  templateUrl: './e-grammar.component.html',
  styleUrls: ['./e-grammar.component.scss']
})
export class EGrammarComponent implements OnInit {
@Input() name: string;
  page = {
    index: 0,
    size: 1,
    count: 1
  }
  

  id: number;
  flag1: boolean;
  flag2: boolean;
  flag3: boolean;
  isAns: boolean;
  flag4: string;

  confirm: boolean;


  questionArr: question[];
  quest: question[];
  optionsArr: option[];
 

  tenseData: tense;

  tenseName: string | null;
  selectTense: string = "SELECT TENSE";
  selectForm: string = "SELECT FORM";

  correct: string;
  incorrect: string;

  selectItemArr:string[] = new Array();
  ansObj: answer[] = new Array() as answer[];

  constructor(private dataService: TenseService) { }

  selectTenses(item:string){
    this.selectTense = item;
    this.selectItemArr[0]=this.selectTense;
    this.flag1 = true;
    if(this.flag1 === true && this.flag2 === true){
      this.page.index = 0;
      this.selectedTense();
      
    }
  }
  selectForms(item: string){
    this.selectForm = item;
    this.selectItemArr[1]=this.selectForm;
    this.flag2 = true;
    if(this.flag1 === true && this.flag2 === true){
      this.page.index = 0;
      this.selectedTense();
      this.flag4 = 'start';
      
    }
  }
  selectedTense(){
    this.tenseName = this.selectItemArr[0] +" "+ this.selectItemArr[1];
    this.getQuestionData(this.tenseName);
  }

  getQuestionData(name: string){
    this.isAns = false;
    this.confirm = false;
    this.id = 0;
    this.tenseData = this.dataService.getTenses(name);
    this.flag3 = true;
    this.questionArr = this.dataService.getQuestions(this.tenseData);
    this.quest = (this.questionArr) ? this.questionArr.slice(this.page.index, this.page.index+ this.page.size) : [];
    this.page.count = this.questionArr.length;
  }

  onSelect(op: option){
    if(this.isAns === true){
      this.confirm = false;
    }else{
      this.confirm = true;
      this.id = op.id;
    }

    //this.ansList = this.dataService.getAns(te);
    // if(this.page.index >= 0 && this.page.index < this.page.count){
    //   this.flag4="start";
    //   this.getQuestionData(te.name);
    // }else{
    //   this.page.index = this.page.index - 1;
    //   this.flag4="start";
    //   console.log(this.flag4);
    // }
  }
  checkAns(que: question, op: option){
    this.ansObj = this.dataService.getAns(this.tenseName);
    let i: number;
    this.isAns = false;

    for(i = 0; i < this.ansObj.length; i++){
      if(this.ansObj[i].id === que.id && this.ansObj[i].id === op.id){
        this.isAns = true;
        this.correct = "Correct, congradulation";
      }
    }
  }
  goto(te: tense, num: number){
    if(num >= 0 && num < this.page.count){
      this.page.index = num;
      this.flag4="start";
      this.getQuestionData(te.name);
    }

  }

  ngOnInit() {
  }

}
