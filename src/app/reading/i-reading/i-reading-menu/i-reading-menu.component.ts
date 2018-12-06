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
  config = "assets/configure/config.json";

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
    //get the studentID from localStorage
    let studentId = JSON.parse(localStorage.getItem('currentUser'));
    this.loading = true;
    let categoryName;
    this.readingservice.getMenu(para, studentId).subscribe(res => {
      if(res.length !== 0){
        this.readingservice.get(this.config).subscribe((response: any) => {
          
          let hardCodeArr = response.content;
          let arrHardCode = [...hardCodeArr];
  
          for(let index = 0 ; index < arrHardCode.length ; index ++){
            if(arrHardCode[index].categoryId === res[0].categoryId){
              categoryName = arrHardCode[index].categoryName;
            }
          }
          this.loading = false;
          this.lessonCate = categoryName;
          
          this.lessonsArr = res
          
        })

      }
    
    });
  }

}
