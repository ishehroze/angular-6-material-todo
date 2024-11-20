import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(
    private activityList:Activity[]
  ) {
    this.activityList = [];
  }

  getActivityList(){
    return this.activityList;
  }
}
