import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../../services/reading/reading-service.service';
import { categories } from '../../models/reading/i-reading/categories.model';
import { category } from '../../models/reading/i-reading/category.model';

@Component({
  selector: 'app-i-reading',
  templateUrl: './i-reading.component.html',
  styleUrls: ['./i-reading.component.scss']
})
export class IReadingComponent implements OnInit {

  categoriesArr: category[];
  categories: categories = new categories(null);
  menu_config = [{
    name:"i-reading-menu" , content:"assets/data/reading/i-reading/menu.json"
  }]
  constructor(private readingservice: ReadingService) { }

  ngOnInit() {
    for(let entry of this.menu_config){
      this.loadMenu(entry.content);
    }
  }
  loadMenu(entry: string){
    this.readingservice.get(entry).subscribe(res => {
      this.categories = new categories(res); 
      this.categoriesArr = this.categories.content;

    })
  }

}
