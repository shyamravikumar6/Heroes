import { Injectable } from '@angular/core';
import {Todo} from '../../models/Todo';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
public todos:Todo[]=[];
private Id:number;

  constructor() {
    
  //   this.todos=[{id:1,title:'todo one',completed:true},{id:2,title:'todo two',completed:false},{id:3,title:'todo three',completed:false}]
  //  this.Id=3;
  //  this.todos= JSON.parse(localStorage.getItem('todos')).todos;
     this.todos=this.gettodos();
      
  }
        reset():void{
          this.Id=0;
        }
      
         gettodos():Todo[]{
              let localstore = JSON.parse(localStorage.getItem('todos'));
                return  localstore==null?[]:localstore.todos;
                                   
         }
   
             delettodo(id:number):void{
                     
              let todos = this.todos.filter(todo=>todo.id!=id);
                   this.setLocal(todos);
                   this.todos=this.gettodos();
                  
                     
             }
             addTodo(todotext:string){
                if(todotext!=''|| todotext!=null){
                 let todo = {id:this.genId(),title:todotext,completed:false};
                      this.todos.push(todo);
                      let todos=this.todos;
                    this.setLocal(todos);
                }
             }

             genId():number{
                  return  (this.todos==null?0:this.todos.length)+1;
             }


             setLocal(todo:Todo[]){
               localStorage.setItem('todos',JSON.stringify({todos:todo}));
             }

}
