import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input()todo:Todo;
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }
       setClasses(){
         let classes={
           todo:true,
           'is-complete':this.todo.completed
         }
              return classes;
       }
            onToggle(todo){
              this.todo.completed=!this.todo.completed;
            }
            onDelete(todo){
              
                this.todoservice.delettodo(this.todo.id);
            }
      }