import { Task } from "./task";

export enum ActivityType {
  ADD,
  EDIT,
  DELETE,
  MOVE_UP,
  MOVE_DOWN,
  MARK_DONE,
  MARK_TO_DO
}

export class Activity {
  private timestamp: Date;

  constructor(
    private task: Task,
    private activityType: ActivityType,
  ) {
    this.timestamp = new Date();
  }

  getActivityIcon(): string {
    switch (this.activityType) {
      case ActivityType.ADD: return "add_task";
      case ActivityType.EDIT: return "edit";
      case ActivityType.DELETE: return "delete";
      case ActivityType.MOVE_UP: return "keyboard_arrow_up";
      case ActivityType.MOVE_DOWN: return "keyboard_arrow_down";
      case ActivityType.MARK_DONE: return "checkbox";
      case ActivityType.MARK_TO_DO: return "checkbox_outline";
      default: throw new Error("Invalid activity type");
    }
  }
  getActivityRemarks(): string{
    switch (this.activityType) {
      case ActivityType.ADD: return "Task added";
      case ActivityType.EDIT: return "Task edited";
      case ActivityType.DELETE: return "Task deleted";
      case ActivityType.MOVE_UP: return "Task moved up";
      case ActivityType.MOVE_DOWN: return "Task moved down";
      default: throw new Error("Invalid activity type");
    }
  }
  getTaskDescription(): string {
    return this.task.description;
  }
  getTimeStamp(): string {
    return this.timestamp.toISOString();
  }
}

