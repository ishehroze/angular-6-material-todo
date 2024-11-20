import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HistoryService } from '../history.service';
import { Activity, ActivityType } from '../activity';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  toDoTasks: Task[];

  constructor(
    public taskService: TaskService,
    public historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getToDoTasks();
  }

  getToDoTasks() {
    this.taskService.getToDoTasks().subscribe(
      tasks => { this.toDoTasks = tasks }
    )
  }

  deleteToDoTask(ix) {
    this.taskService.deleteTask(ix);
    this.historyService.addActivity( new Activity(this.toDoTasks[ix], ActivityType.DELETE) );
    this.getToDoTasks();
  }

}
