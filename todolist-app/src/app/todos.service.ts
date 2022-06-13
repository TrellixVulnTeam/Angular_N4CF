import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'  //for internet data source
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export class Task {
  id: number = 0;
  title: string = '';
  completed: boolean = false;
  date?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public tasks: Task[] = [];

  public constructor(private httpClient: HttpClient) { }

  public fetchTasks() : Observable<Task[]> {
    return this.httpClient
      .get<Task[]>('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .pipe(map(response => this.tasks = response))
  }

  onToggle(id: number): void {
    const index = this.tasks.findIndex(t => t.id === id);
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id)
  }

  addTaskToArray(task: Task): void {
    this.tasks.push(task);
  }
}
