import { Component, OnInit, OnChanges } from '@angular/core';
import { ReadingService } from '../../../services/reading/reading-service.service';
import { readingModel } from '../../../models/reading/reading.model';
import { readingLessons } from '../../../models/reading/lessons.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-i-reading',
  templateUrl: './i-reading-detail.component.html',
  styleUrls: ['./i-reading-detail.component.scss']
})
export class IReadingDetailComponent implements OnInit, OnChanges {

  page = {
    index:0,
    size: 1,
    num: 1
  }

  lessons: readingLessons = new readingLessons(null);
  category: string;
  lessonAudio: string;
  lessonContent: string;
  lesson: readingModel[];
  id: string;

  reading_config = [{
    name: "health", content: "assets/data/reading/"
  }];


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
    console.log(this.id);
    console.log(this.category);

    for(let entry of this.reading_config){
        this.loadLesson(entry.content);
    }
  }
  ngOnChanges() {

    //TODO: NEED TO DOUBLE CHECK SECURE FOR THIS.ID AND THIS.CATEGORY
    for(let entry of this.reading_config){
        this.loadLesson(entry.content);
    }
  }
  loadLesson(le: string){
    let index = 0;
    let url = le  + "/" + this.category  + "/"+ this.category+".json";
    this.readingservice.get(url).subscribe(res => {
      this.lessons = new readingLessons(res);
      this.lesson = this.lessons.lessons;
      for(let entry of this.lesson){
        if(entry.id === parseInt(this.id) && entry.id !== 0){
          this.page.index = entry.id;
        }     
      }
      this.page.num = this.lessons.lessons.length;
      //this.page.index= 0;
      this.page.size=1;
      this.getlesson(this.page.index);
    })
  }
  getlesson(indexArr: number){
    this.lesson = (this.lessons.lessons)? this.lessons.lessons.slice(indexArr, indexArr + this.page.size):[];
  }

  goto(index: number){
    if(index >= 0 && index < this.page.num){
      this.page.index = index;
      this.router.navigate(['/i-reading-detail/' + this.category + '/' + this.page.index], {relativeTo: this.route});
      this.getlesson(this.page.index );
    }
    
  }

}
