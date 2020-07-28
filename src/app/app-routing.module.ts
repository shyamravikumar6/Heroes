import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from '../app/forms/form/form.component';
import{TodoComponent} from '../app/todo/todo.component';
const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
