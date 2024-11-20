import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  public logEntries: Activity[] = [];
  constructor(
    public historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getLogEntries();
  }

  getLogEntries() {
    this.historyService.getActivityList().subscribe(
      (activityList: Activity[]) => { this.logEntries = activityList; }
    )
  }

  clearLogEntries() {
    this.historyService.clearActivityList();
    this.getLogEntries();
  }
}
