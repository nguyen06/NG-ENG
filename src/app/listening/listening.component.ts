import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.scss']
})
export class ListeningComponent implements OnInit {
  selectedLesson : string = "SELECT LESSON";
  constructor() { }

  ngOnInit() {
  }

  selectLesson(lesson: string){
    this.selectedLesson = lesson;
  }
}
