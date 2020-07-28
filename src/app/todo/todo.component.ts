import { Component, OnInit,Input } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 todos:Todo[];
   todotext:string; 
  @Input() todo:Todo;
  constructor(private todoService:TodoService) { this.todotext=''; }


  ngOnInit(): void {
    this.todos=this.todoService.gettodos();
    this.todoService.gettodos().forEach(tod=>console.log(tod.completed,tod.id,tod.title));   
    if(this.todos==null) this.todoService.reset();
  }
    addTodo(){

      if(this.todotext!=null|| this.todotext.length!=0){this.todoService.addTodo(this.todotext);}
     this.todotext='';
    }

    delete():void{
      this.todoService.delettodo(this.todo.id);
      
      
    }

}
