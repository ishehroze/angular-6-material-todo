import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityType } from '../activity';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.css']
})
export class LogEntryComponent implements OnInit {
  @Input() logEntry: Activity;
  
  getActivityRemarks(): string{
    switch (this.logEntry.getActivityType()) {
      case ActivityType.ADD: return "Task added";
      case ActivityType.EDIT: return "Task edited";
      case ActivityType.DELETE: return "Task deleted";
      case ActivityType.MOVE_UP: return "Task moved up from position " + (this.logEntry.getIndex() + 1);
      case ActivityType.MOVE_DOWN: return "Task moved down from position " + (this.logEntry.getIndex() + 1);
      case ActivityType.MARK_DONE: return "Task marked as done";
      case ActivityType.MARK_TO_DO: return "Task marked as to-do";
      default: throw new Error("Invalid activity type");
    }
  }
  
  getActivityIcon(): string {
    switch (this.logEntry.getActivityType()) {
      case ActivityType.ADD: return "add_task";
      case ActivityType.EDIT: return "edit";
      case ActivityType.DELETE: return "delete";
      case ActivityType.MOVE_UP: return "keyboard_arrow_up";
      case ActivityType.MOVE_DOWN: return "keyboard_arrow_down";
      case ActivityType.MARK_DONE: return "checkbox";
      case ActivityType.MARK_TO_DO: return "check_box_outline_blank";
      default: throw new Error("Invalid activity type");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
