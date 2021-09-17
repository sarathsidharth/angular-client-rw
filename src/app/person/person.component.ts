import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../shared/person.model';
import { PersonService } from '../shared/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person:Person[]=[]
  public persons:any
  
  constructor(private personService:PersonService,private router:Router) { }

  ngOnInit(): void {
    this.get()    
  }

get(){
  this.personService.getperson().subscribe((data)=>{this.persons=data})
}

delete(id:Number){
  this.personService.deleteperson(id)
  .subscribe((data)=>{alert("data deleted")},(err)=>{alert("not deleted"+err)})
  this.get()
}

}
