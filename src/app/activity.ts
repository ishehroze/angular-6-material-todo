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
    private activityTitle: string,
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
  getActivityTitle(): string {
    return this.activityTitle;
  }
  getTimeStamp(): string {
    return this.timestamp.toISOString();
  }
}

