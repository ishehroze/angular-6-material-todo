import { Task } from "./task";

enum ActivityType {
  ADD,
  EDIT,
  DELETE,
  MOVE_UP,
  MOVE_DOWN
}

export class Activity {
  private timestamp: Date;

  constructor(
    private task: Task,
    private activityType: ActivityType,
    private activityRemarks: string
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
      default: throw new Error("Invalid activity type");
    }
  }
  getTaskDescription(): string {
    return this.task.description;
  }
  getTimeStamp(): string {
    return this.timestamp.toISOString();
  }
  getRemarks(): string {
    return this.activityRemarks;
  }
}

