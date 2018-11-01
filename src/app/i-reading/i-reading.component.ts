import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../services/reading/reading-service.service';
import { readingModel } from '../models/reading/reading.model';
import { readingLessons } from '../models/reading/lessons.model';

@Component({
  selector: 'app-i-reading',
  templateUrl: './i-reading.component.html',
  styleUrls: ['./i-reading.component.scss']
})
export class IReadingComponent implements OnInit {

  page = {
    index:0,
    size: 1,
    num: 1
  }

  lessons: readingLessons = new readingLessons(null);
  lessonTitle: string;
  lessonAudio: string;
  lessonContent: string;

  reading_config = [{
    name: "health", content: "assets/data/reading/health/health.json"
  }];


  constructor(private readingservice: ReadingService) { }

  ngOnInit() {
    debugger;
    for(let entry of this.reading_config){
    
        this.loadLesson(entry.content);
      
    }
  }
  loadLesson(le: string){
    debugger;
    this.readingservice.get(le).subscribe(res => {
      debugger;
      this.lessons = new readingLessons(res);
      this.page.num = this.lessons.lessons.length;
      this.page.index= 0;
      this.page.size=1;
    })
  }
  get lesson(){
    debugger;
    return (this.lessons.lessons)? this.lessons.lessons.slice(this.page.index, this.page.index + this.page.size) : [];
  }

  goto(index: number){
    debugger;
    this.page.index = index;
  }

}
