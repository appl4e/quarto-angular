import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {

  selectedSort = 1;
  sorts = [
    { id: 1, name: 'A-Z' },
    { id: 2, name: 'Z-A' },
    { id: 3, name: 'Most Viewed' },
    { id: 4, name: 'Date' }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
