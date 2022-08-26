import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

}
