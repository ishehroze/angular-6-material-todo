import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public activityList:Activity[] = [];

  getActivityList(): Observable<Activity[]> {
    return of(this.activityList);
  }
  addActivity(activity: Activity): void{
    this.activityList.push(activity)
  }
  clearActivityList(): void{
    this.activityList = [];
  }
}
