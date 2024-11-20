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
  toDoTasks: Task[];
  doneTasks: Task[];

  constructor(
    public taskService: TaskService,
    public historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getToDoTasks();
    this.getDoneTasks();
  }

  getToDoTasks() {
    this.taskService.getToDoTasks().subscribe(
      tasks => { this.toDoTasks = tasks }
    )
  }

  getDoneTasks() {
    this.taskService.getDoneTasks().subscribe(
      tasks => { this.doneTasks = tasks; }
    )
  }

  deleteToDoTask(ix) {
    this.taskService.deleteTask(ix);
    this.historyService.addActivity( new Activity(this.toDoTasks[ix], ActivityType.DELETE) );
    this.getToDoTasks();
    this.getDoneTasks();
  }
}
