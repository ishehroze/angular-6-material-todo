import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = [];

  addTask(task: Task): number {
    this.taskList.push(task);
    return this.taskList.length - 1;
  }
  updateTaskDescription(ix: number, description: string) {
    this.taskList[ix].description = description;
  }
  toggleTaskDone(ix: number) {
    this.taskList[ix].done = !this.taskList[ix].done;
  }
  deleteTask(ix: number):void {
    this.taskList.splice(ix, 1);
  }
  moveTaskUp(ix: number):void {
    if (ix === 0) {
      throw new RangeError('Cannot move the first task up');
    } else {
      this.taskList.splice(ix - 1, 2, this.taskList[ix], this.taskList[ix - 1]);
    }
  }
  moveTaskDown(ix: number):void {
    if (ix === this.taskList.length - 1) {
      throw new RangeError('Cannot move the last task down');
    } else {
      this.taskList.splice(ix, 2, this.taskList[ix + 1], this.taskList[ix]);
    }
  }
  getTasks(): Observable<Task[]> {
    return of(this.taskList);
  }
}
