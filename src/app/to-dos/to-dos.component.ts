import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  toDoTasks: Task[];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
    this.getToDoTasks();
  }

  getToDoTasks() {
    this.taskService.getToDoTasks().subscribe(
      tasks => { this.toDoTasks = tasks }
    )
  }

}
