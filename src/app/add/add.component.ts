import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb:FormBuilder ,private personService:PersonService) { }

  public persons:any
  ngOnInit(): void {
  }
  personForm=this.fb.group({
    name:[""],
    place:[""],
    state:[""],
    pin:[]    
  })

  get(){
    this.personService.getperson().subscribe((data)=>{this.persons=data})
  }
  onSubmit(){
      this.personService.postperson(this.personForm.value)
      .subscribe((data)=>{alert("Data Added")},(err)=>{alert("Data Not Added"+err)})
  }
}
