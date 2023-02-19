import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  // body
  {
    path:'',component:BodyComponent
  },
  {
    path:'add',component:AddFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
