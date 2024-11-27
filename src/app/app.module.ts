import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskDialogComponent, TodoContainerComponent } from './todo-container/todo-container.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { HistoryContainerComponent } from './history-container/history-container.component';
import { LogComponent } from './log/log.component';
import { LogEntryComponent } from './log-entry/log-entry.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskDialogComponent } from './todo-container/todo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    ToDoItemComponent,
    DoneItemComponent,
    HistoryContainerComponent,
    LogComponent,
    LogEntryComponent,
    AddTaskComponent,
    EditTaskDialogComponent,
    AddTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    EditTaskDialogComponent,
    AddTaskDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
