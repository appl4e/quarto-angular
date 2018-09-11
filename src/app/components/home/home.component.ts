import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quarto-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ExploreCatSort = 1;
  sorts = [
    { id: 1, name: 'A-Z' },
    { id: 2, name: 'Z-A' },
    { id: 3, name: 'Most Viewed' },
    { id: 4, name: 'Date' }
  ];

  videoSorts = 1;
  vidSorts = [
    { id: 1, name: 'A-Z' },
    { id: 2, name: 'Z-A' },
    { id: 3, name: 'Most Viewed' },
    { id: 4, name: 'Date' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
