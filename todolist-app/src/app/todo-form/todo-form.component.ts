import { Component, OnInit } from '@angular/core';
import { TodosService, Task } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public title:string = "";
  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  public addTask() {
    let task: Task = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date().toLocaleString()
    }
    this.todosService.addTaskToArray(task);
    this.title = '';
  }
}
