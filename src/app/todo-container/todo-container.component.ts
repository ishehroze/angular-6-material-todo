import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HistoryService } from '../history.service';
import { Activity, ActivityType } from '../activity';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  tasks: Task[];
  doneTaskCount: number;
  firstUndoneTaskIx: number;
  lastUndoneTaskIx: number;

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
      tasks => {
        this.tasks = tasks;
        this.updateProperties();
      }
    )
  }

  updateProperties():void {
    let doneTaskCount = 0;
    let firstUndoneTaskIx = 0;
    let lastUndoneTaskIx = 0;
    
    let ix = 0;
    let taskCount = this.tasks.length;

    for (ix = 0; ix < taskCount; ix++) {
      if (!this.tasks[ix]['done']) {
        firstUndoneTaskIx = ix;
        break;
      } else {
        doneTaskCount++;
      }
    }

    lastUndoneTaskIx = ix;

    for (ix = ix + 1; ix < taskCount; ix++) {
      if (!this.tasks[ix]['done']) {
        lastUndoneTaskIx = ix;
      } else {
        doneTaskCount++;
      }
    }

    this.firstUndoneTaskIx = firstUndoneTaskIx;
    this.lastUndoneTaskIx = lastUndoneTaskIx;
    this.doneTaskCount = doneTaskCount;
  }

  addTask():void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let ix = this.taskService.addTask(result);
        this.historyService.addActivity(new Activity(ix, result.description, ActivityType.ADD));
        this.getTasks();      
      }
    })
  }

  deleteTask(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.deleteTask(ix);
    this.historyService.addActivity( new Activity(ix, task.description, ActivityType.DELETE) );
    this.getTasks();
  }

  toggleTask(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.toggleTaskDone(ix);
    this.historyService.addActivity(
      new Activity(
        ix,
        task.description,
        task.done ? ActivityType.MARK_DONE : ActivityType.MARK_TO_DO
      )
    );
    this.getTasks();
  }

  moveTaskUp(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.moveTaskUp(ix);
    this.historyService.addActivity(
      new Activity(ix, task.description, ActivityType.MOVE_UP)
    );
    this.getTasks();
  }

  moveTaskDown(ix:number):void {
    let task = this.tasks[ix];
    this.taskService.moveTaskDown(ix);
    this.historyService.addActivity(
      new Activity(ix, task.description, ActivityType.MOVE_DOWN)
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
        let task = this.tasks[ix];
        this.taskService.updateTaskDescription(ix, result);
        this.historyService.addActivity(new Activity(ix, task.description, ActivityType.EDIT));
        this.getTasks();
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

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html'
})
export class AddTaskDialogComponent {
  public task: Task = new Task("", false);
  
  constructor (
    public addTaskDialogRef: MatDialogRef<AddTaskDialogComponent>
  ) {}

  onEnter() {
    this.addTaskDialogRef.close(this.task);
  }
}
