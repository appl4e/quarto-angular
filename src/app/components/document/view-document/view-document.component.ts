import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocument implements OnInit {

  isCollapsed = false;

  // Defining sections array
  sections = [
    { title: 'Introduction', description: '', id: 1, completed: false },
    { title: 'How to start', description: 'Description of How to start', id: 2, completed: false },
    { title: 'Topic Body', description: 'Description of Topic Body', id: 3, completed: false },
    { title: 'Conclusion', description: 'Description of Conclusion', id: 4, completed: false }
  ];

  constructor() { }
  

  collapse(){
    this.isCollapsed = !this.isCollapsed;
    return false;
  }

  ngOnInit() {
  }

}
