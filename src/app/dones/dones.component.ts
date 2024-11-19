import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',
  styleUrls: ['./dones.component.css']
})
export class DonesComponent implements OnInit {
  doneTasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getDoneTasks();
  }
  
  getDoneTasks() {
    this.taskService.getDoneTasks().subscribe(
      tasks => { this.doneTasks = tasks; }
    )
  }
}
