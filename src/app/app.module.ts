import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule, MatButtonModule, DragDropModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
