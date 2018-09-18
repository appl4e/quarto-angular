import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocument implements OnInit {

  public isCollapsed = false;
  public attchCollapsed = false;

  collapse(){
    
    this.isCollapsed = !this.isCollapsed;

    return false;
  }

  attchCollapse(){
    this.attchCollapsed = !this.attchCollapsed;

    return false;
  }
  // Defining sections array
  sections = [
    { title: 'Introduction', description: '', id: 1, completed: false},
    { title: 'How to start', description: 'Description of How to start', id: 2, completed: false},
    { title: 'Topic Body', description: 'Description of Topic Body', id: 3, completed: false},
    { title: 'Conclusion', description: 'Description of Conclusion', id: 4, completed: false}
  ];
  // Defining variables for section list actions
  inputSections = null;
  addSectionArray = null;
  selectedSectionId = null;
  sectionCompleted = null;
  percentageComplete = 0;
  allIds = [];

  // Section edit form
  sectionForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    id: '',
    completed: ''
  });

  constructor(private fb: FormBuilder) { }

  // Getting section info on click on section list item
  getSectionInfo(section){
    this.sectionForm.controls.title.setValue(section.title);
    this.sectionForm.controls.description.setValue(section.description);
    this.selectedSectionId = section.id;

    return false;
  }

  // Adding new section item on the section list
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
  // On click submit of section form
  sectionSubmit() {
    var x = this.selectedSectionId;   
    var index = this.sections.findIndex(y=> y.id==x);
    this.sectionForm.controls.id.setValue(x);
    this.sectionForm.controls.completed.setValue(true);    
    

    this.sections[index] = this.sectionForm.value;

    this.percentCalculate();
    
  }
  // Calculating the percent completion of section
  percentCalculate(){
    var total = this.sections.length;
    var complete = this.sections.filter(obj => {
      return obj.completed == true;
    });
    var comp = complete.length;

    this.percentageComplete = Math.round((comp / total) * 100);
  }
  // Delete section from section list
  deleteSection(i){
    this.sections = this.sections.filter(obj => obj != i);
    
    return false;
  }

  // Froala Wysiwyg editor initialization options
  public options: Object ={
    charCounterCout: true,
    heightMin:  500,
    pluginsEnabled: ['image', 'video', 'table', 'list']
  }


  ngOnInit() {
  }

}
