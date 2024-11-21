import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HistoryService } from '../history.service';
import { Activity, ActivityType } from '../activity';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  tasks: Task[];

  constructor(
    public taskService: TaskService,
    public historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks():void {
    this.taskService.getTasks().subscribe(
      tasks => { this.tasks = tasks; }
    )
  }

  deleteTask(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.deleteTask(ix);
    this.historyService.addActivity( new Activity(ix, task, ActivityType.DELETE) );
    this.getTasks();
  }

  toggleTask(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.toggleTaskDone(ix);
    this.historyService.addActivity(
      new Activity(
        ix,
        task,
        task.done ? ActivityType.MARK_DONE : ActivityType.MARK_TO_DO
      )
    );
  }

  moveTaskUp(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.moveTaskUp(ix);
    this.historyService.addActivity(
      new Activity(ix, task, ActivityType.MOVE_UP)
    );
    this.getTasks();
  }

  moveTaskDown(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.moveTaskDown(ix);
    this.historyService.addActivity(
      new Activity(ix, task, ActivityType.MOVE_DOWN)
    );
    this.getTasks();
  }

}
