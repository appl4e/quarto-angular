import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocument implements OnInit {

  constructor() { }

  public options: Object ={
    charCounterCout: true,
    heightMin:  500,
    pluginsEnabled: ['image', 'video', 'table', 'list']
  }
  ngOnInit() {
  }

}
