import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

const INITIAL_TASKLIST = [
  new Task('Task 1', false),
  new Task('Task 2', false),
  new Task('Task 3', true)
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = INITIAL_TASKLIST;

  addTask(task: Task) {
    this.taskList.push(task);
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
