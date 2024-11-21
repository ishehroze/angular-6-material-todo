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
    private index: number,
    private task: Task,
    private activityType: ActivityType,
  ) {
    this.timestamp = new Date();
  }

  getIndex(){
    return this.index;
  }
  getActivityType(): ActivityType {
    return this.activityType;
  }
  getTask(): Task {
    return this.task;
  }
  getTimeStamp(): string {
    return this.timestamp.toISOString();
  }
}

