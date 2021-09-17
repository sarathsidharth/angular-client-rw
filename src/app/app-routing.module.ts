import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { PersonComponent } from './person/person.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:PersonComponent},
  {path:"add",component:AddComponent},
  {path:"update/:_id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
