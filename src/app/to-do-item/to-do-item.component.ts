import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  @Output() markTaskDone = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteTask.emit(this.index);
  }

  markDone() {
    this.markTaskDone.emit(this.index);
  }

}
