import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  @Output() markTaskToDo = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteTask.emit(this.index);
  }

  markToDo() {
    this.markTaskToDo.emit(this.index);
  }
}
