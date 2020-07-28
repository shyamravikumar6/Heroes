import { Injectable } from '@angular/core';
import {Todo} from '../../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos:Todo[];
private Id:number;

  constructor() {
    
    this.todos=[{id:1,title:'todo one',completed:true},{id:2,title:'todo two',completed:false},{id:3,title:'todo three',completed:false}]
   this.Id=3;
  }
        reset():void{
          this.Id=0;
        }
      
         gettodos():Todo[]{
             return this.todos;
         }
   
             delettodo(id:number):void{
                   this.todos = this.todos.filter(todo=>todo.id!=id);
             }
             addTodo(todo:string){
                 let todos = {id:this.genId(),title:todo,completed:false};
                    this.todos.push(todos);
             }

             genId():number{
                  return  (this.todos==null?0:this.todos.length)+1;
             }
}
