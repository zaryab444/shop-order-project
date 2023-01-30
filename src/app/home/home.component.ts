import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public myForm: FormGroup;
  items: FormArray;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.myForm = this.fb.group({
      name:[null],
      items: this.fb.array([this.createItem()])
    });
    this.items = this.myForm.get('items') as FormArray;
  }

  createItem():FormGroup{
    return this.fb.group({
      name:[''],
      quantity:['']
    })
  }
  addItem() {
    this.items.push(this.createItem());
  }
  
  removeItem(index) {
    this.items.removeAt(index);
  }
  submit(){
    console.log(this.myForm.getRawValue());
  }
}
