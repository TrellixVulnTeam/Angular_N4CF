import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './todos.service'

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(tasks: Task[], filters: string): Task[] {
    if(!filters.trim()) {
      return tasks;
    }
    
    return tasks.filter(task=> {
      return (task.title.toLowerCase().indexOf(filters.toLowerCase()) !== -1)
    });
  }

}
