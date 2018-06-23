import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { TenseDetailComponent } from './tense-detail/tense-detail.component';

@Component({
  selector: 'app-e-grammar',
  templateUrl: './e-grammar.component.html',
  styleUrls: ['./e-grammar.component.scss']
})
export class EGrammarComponent implements OnInit {
  @ViewChild(TenseDetailComponent) child:TenseDetailComponent ;

  selectTense: string = "SELECT TENSE";
  selectForm: string = "SELECT FORM";
  tenseName: string;
  tenseUrl: string;
  goto: boolean;

  constructor() { }
  ngOnInit() {
  }

  selectTenses(item: string){
    this.selectTense = item;
    this.getTenseName();
  }

  selectForms(item: string){
    this.selectForm = item;
    this.getTenseName();
    
  }

  getTenseName(){
    if(this.selectTense !== 'SELECT TENSE' && this.selectForm !== 'SELECT FORM'){
      this.tenseName = this.selectTense +  " " + this.selectForm;
      this.goto = true;
          
    }
  }
 }
  
