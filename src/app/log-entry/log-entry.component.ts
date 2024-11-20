import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.css']
})
export class LogEntryComponent implements OnInit {
  @Input() logEntry: Activity;
  constructor() { }

  ngOnInit() {
  }

}
