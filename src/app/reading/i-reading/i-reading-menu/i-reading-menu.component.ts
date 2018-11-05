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

  lessonsArr: readingModel[];
  lessonCate: string;
  id: string;
  loading: boolean;

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
    this.loadLesson(this.id);
  }

  loadLesson(para: string){
    debugger;
    this.loading = true;
    this.readingservice.getMenu(para).subscribe(res => {
      debugger;
      if(res.length !== 0){
        this.loading = false;
        this.lessonCate = res[0].category;
        this.lessonsArr = res
      }
    
    });
  }

}
