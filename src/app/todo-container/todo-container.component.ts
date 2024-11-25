import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HistoryService } from '../history.service';
import { Activity, ActivityType } from '../activity';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  tasks: Task[];

  constructor(
    public taskService: TaskService,
    public historyService: HistoryService,
    public dialog: MatDialog
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

  openEditTaskDialog(ix:number):void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '400px',
      data: this.tasks[ix].description

    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.updateTaskDescription(ix, result);
        this.historyService.addActivity(new Activity(ix, this.tasks[ix], ActivityType.EDIT));
      }
    })
  }
}

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html'
})
export class EditTaskDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:string
  ){}
}
