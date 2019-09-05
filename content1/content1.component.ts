import { Component, OnInit } from '@angular/core';
import {List} from '../ts_files/content-list';
import {List2} from '../ts_files/content-list';
@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {
  list = List;
  list2 = List2;
  constructor() { }

  ngOnInit() {
  }
  back() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
