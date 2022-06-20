import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule,FormGroup, Validators, FormControl } from '@angular/forms';

import {
  MatDivider, MatListModule, MatListItem,
  MatIconModule, MatDividerModule, MatRadioModule, MatCheckboxModule, MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [HttpClientModule, BrowserModule,ReactiveFormsModule, FormsModule,
    MatDividerModule, MatListModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatFormFieldModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
