import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  selectedPerson: Person = new Person;
  person:Person[]=[];

  private BASE_url="http://localhost:3000/persons/";
  private get_url="http://localhost:3000/persons";
  
  constructor(private http:HttpClient) { 
    this.selectedPerson=new Person()
  }
  getperson(){
    return this.http.get(this.get_url);
  }
  postperson(pers:Person){
    return this.http.post<Person>(this.get_url,pers);
  }
  deleteperson(id:Number){
    return this.http.delete<Person>(this.BASE_url+id);
  }
  updateperson(id:Number,pers:Person){
    return this.http.put<Person>(this.BASE_url+id,pers)
  }
  getpersonbyid(id:Number){
    return this.http.get<Person>(this.BASE_url+id);
  }
}
