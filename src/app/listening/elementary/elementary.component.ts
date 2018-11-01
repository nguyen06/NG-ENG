import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementary',
  templateUrl: './elementary.component.html',
  styleUrls: ['./elementary.component.scss']
})
export class ElementaryComponent implements OnInit {
  selectedLesson : string = "SELECT LESSON";
  selectedLessonTranfer: string;
  goto = false;
  constructor() { }

  ngOnInit() {
  }

  selectLesson(lesson: string){
    this.selectedLesson = lesson;
    this.selectedLessonTranfer = this.selectedLesson.replace(/\s/g,'');
    this.goto = true;
  }

}
