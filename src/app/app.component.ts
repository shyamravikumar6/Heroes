import { Component } from '@angular/core';
import{TodoService} from './services/todo.service';
import{Todo} from '../models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  opened=false;
  constructor(public todoservice:TodoService) {
     if(todoservice.gettodos()===null){this.todoservice.reset();}
  }
   
  
        
        
  }
