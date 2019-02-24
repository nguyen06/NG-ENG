import { Component, OnInit} from '@angular/core';
import { ReadingService } from '../../../services/reading/reading-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {questions} from "../../../models/reading/i-reading/questions.model";
import {oneLesson} from '../../../models/reading/i-reading/lesson.model';
@Component({
  selector: 'app-i-reading',
  templateUrl: './i-reading-detail.component.html',
  styleUrls: ['./i-reading-detail.component.scss']
})
export class IReadingDetailComponent implements OnInit{

  page = {
    index:0,
    size: 1,
    num: 1
  }

  category: string;
  id: string;
  loading: boolean;
  reading: boolean;
  correct: boolean;
  visited: boolean;
  countVisited: number;
  countRightAnswer: number;

  questions: questions[];
  arrayQuestions: questions[];
  oneLesson: oneLesson = new oneLesson(null);

  // test
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(
    private readingservice: ReadingService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      route.params.subscribe(params => {
        this.id = params['id'];
        this.category = params['lesson'];
      });
     }

  ngOnInit() {
    this.countVisited = 0;
    this.countRightAnswer = 0;
    this.getOneLesson(this.id.toString());
  }

  getOneLesson(lessonId: string){
    this.loading = true;
    this.reading= true;
    this.visited = true;
    this.readingservice.getLessonService(lessonId).subscribe(res => {
      this.loading = false;
      this.oneLesson = new oneLesson(res);      
    })
  }

  goPratice(){
    this.reading = false;
    this.page.num = this.oneLesson.questions.length;
    this.arrayQuestions = [...this.oneLesson.questions];
    this.questions = this.arrayQuestions.slice(this.page.index, this.page.index + this.page.size);
  
  }

  goRead(){
    this.reading= true;
  }

  goto(index:number){
    if(index >= 0 && index < this.page.num){
      this.page.index = index;
      this.visited=true;
      this.questions = this.oneLesson.questions.slice(index, index + this.page.size);
    }
  } 

  getAnswer(lessionId,questionId,optionId){
      this.countVisited++;
      let arrayFilter = this.arrayQuestions.reduce((filtered, question) =>{
        
        question.multipleChoices.forEach(el => {
            if(questionId === question.questionId && el.id=== optionId){
              question['correct'] = el.answer;
              question['visited'] = true;
              debugger;
              this.countRightAnswer= el.answer ? ++this.countRightAnswer : this.countRightAnswer;
            }
        });
        filtered.push(question);

        return filtered;
      },[]);
      this.questions = arrayFilter.slice(this.page.index, this.page.index + this.page.size);
      debugger;
      this.page.num =2;
      if(this.countVisited === this.page.num){
        //calculate the percentage
        let percent = (this.countRightAnswer*100)/this.page.num;
        //call to server and update database
        this.readingservice.updateGrade(lessionId,percent).subscribe(res => {
          this.router.navigate(['/i-reading-menu/'+res.categoryId]);        
        });
      }else{
        this.goto(this.page.index+1);
      }
  }
}
