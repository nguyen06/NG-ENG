import { Injectable } from '@angular/core';
import { tense } from '../shared/dataStructure/tense';
import { sPresent_Q } from '../shared/s-present';
import {question} from '../shared/dataStructure/question';
import { pProgressive_Q} from '../shared/pProgressive';
import { answer } from '../shared/dataStructure/ans';
import { ANSWERS } from '../shared/s-present-Ans';

@Injectable({
  providedIn: 'root'
})
export class TenseService {

  question: tense[];
  constructor() { }

  getTenses(name: string): tense {
    if(name === "Present Simple"){
      return sPresent_Q;
    }else if (name === "Present Progressive"){
      return pProgressive_Q;
    }

  }
  getQuestions(tense: tense): question[]{
    return tense.questions;
  }

  getAns(tense: string): answer[] {
    if(tense === "Present Simple"){
      return ANSWERS;
    }
  }

}
