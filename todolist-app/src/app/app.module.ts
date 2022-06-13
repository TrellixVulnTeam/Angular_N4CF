import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
// import { TooPipe } from './too.pipe';
import { TodosFilterPipe } from './todos-filter.pipe'

@NgModule({
  //component declaration
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe
  ],
  //imports(regestration) modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
