import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormComponent } from './forms/form/form.component';
import { TodoService } from './services/todo.service';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './module/material/material.module';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    FormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  
  providers: [TodoService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
