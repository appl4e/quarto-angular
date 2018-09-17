import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocument implements OnInit {

  sections = [
    { title: 'Introduction', description: 'Description of introduction'},
    { title: 'How to start', description: 'Description of How to start'},
    { title: 'Topic Body', description: 'Description of Topic Body'},
    { title: 'Conclusion', description: 'Description of Conclusion'}
  ];

  sectionTitle = null;
  sectionDescription = null;

  constructor() { }

  getSectionInfo(section){
    this.sectionTitle = section.title;
    this.sectionDescription = section.description;
  }
  public options: Object ={
    charCounterCout: true,
    heightMin:  500,
    pluginsEnabled: ['image', 'video', 'table', 'list']
  }
  ngOnInit() {
  }

}
