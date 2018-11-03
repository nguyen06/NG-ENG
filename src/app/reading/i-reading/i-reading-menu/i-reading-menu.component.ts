import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../../../services/reading/reading-service.service';
import { readingModel } from '../../../models/reading/reading.model';
import { readingLessons } from '../../../models/reading/lessons.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-i-reading-menu',
  templateUrl: './i-reading-menu.component.html',
  styleUrls: ['./i-reading-menu.component.scss']
})
export class IReadingMenuComponent implements OnInit {

  lessons: readingLessons = new readingLessons(null);
  lessonsArr: readingModel[];
  lessonTitle: string;
  id: string;

  reading_config = [{
    name: "health", content: "assets/data/reading/"
  }];

  constructor(
    private readingservice: ReadingService,
    private route: ActivatedRoute
    ) {
      route.params.subscribe(params => {this.id = params['id'];});
     }


  ngOnInit() {
    console.log(this.id);
    for(let entry of this.reading_config){
        this.loadLesson(entry.content);
    }
  }

  loadLesson(para: string){
    let url = para + this.id + "/" + this.id  + ".json";
    this.readingservice.get(url).subscribe(res => {
      this.lessons = new readingLessons(res);
      this.lessonsArr = this.lessons.lessons;
    
    });
  }

}
