import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private personservice:PersonService,private router:ActivatedRoute) { }
  updateperson=new FormGroup({
    name:new FormControl(''),
    place:new FormControl(''),
    state:new FormControl(''),
    pin:new FormControl('')    
  })
  ngOnInit(): void {
    console.log(this.router.snapshot.params._id)
    this.personservice.getpersonbyid(this.router.snapshot.params._id).subscribe((data:any)=>{
      this.updateperson=new FormGroup({
        name:new FormControl(data['name']),
        place:new FormControl(data['place']),
        state:new FormControl(data['state']),
        pin:new FormControl(data['pin'])    
      })
    })
  }
update(){
  console.log(this.updateperson.value)
  this.personservice.updateperson(this.router.snapshot.params._id,this.updateperson.value)
  .subscribe((data)=>{alert("Data Updated")},(err)=>{alert("not updated"+err)})
}
}
