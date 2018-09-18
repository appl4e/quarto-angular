import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocument implements OnInit {

  inputSections = null;
  sections = [
    { title: 'Introduction', description: '', id: 1, completed: false},
    { title: 'How to start', description: 'Description of How to start', id: 2, completed: false},
    { title: 'Topic Body', description: 'Description of Topic Body', id: 3, completed: false},
    { title: 'Conclusion', description: 'Description of Conclusion', id: 4, completed: false}
  ];

  addSectionArray = null;
  selectedSectionId = null;
  sectionCompleted = null;
  percentageComplete = 0;
  allIds = [];

  sectionForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    id: '',
    completed: ''
  });

  constructor(private fb: FormBuilder) { }

  getSectionInfo(section){
    this.sectionForm.controls.title.setValue(section.title);
    this.sectionForm.controls.description.setValue(section.description);
    this.selectedSectionId = section.id;

    return false;
  }

  addSection() {
    var newId;
    this.sections.filter(obj => {
      newId = Math.max(this.allIds.push(obj.id));
    });
    
    newId = newId +1;

    this.addSectionArray = { title: this.inputSections, description: '', id: newId, completed: false };

    this.sections.push(this.addSectionArray);

    this.percentCalculate();

    console.log(this.sections);
  }

  sectionSubmit() {
    var x = this.selectedSectionId;   
    var index = this.sections.findIndex(y=> y.id==x);
    this.sectionForm.controls.id.setValue(x);
    this.sectionForm.controls.completed.setValue(true);    
    

    this.sections[index] = this.sectionForm.value;

    this.percentCalculate();
    
  }

  percentCalculate(){
    var total = this.sections.length;
    var complete = this.sections.filter(obj => {
      return obj.completed == true;
    });
    var comp = complete.length;

    this.percentageComplete = Math.round((comp / total) * 100);
  }

  deleteSection(i){
    this.sections = this.sections.filter(obj => obj != i);
    
    return false;
  }

  public options: Object ={
    charCounterCout: true,
    heightMin:  500,
    pluginsEnabled: ['image', 'video', 'table', 'list']
  }
  ngOnInit() {
  }

}
