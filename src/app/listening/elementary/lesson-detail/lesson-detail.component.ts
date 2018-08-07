import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  @Input() selectedLessonTransfer: string;
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.selectedLessonTransfer);
  }

}
