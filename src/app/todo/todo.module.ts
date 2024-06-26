import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    AddTodoComponent
  ],
  imports: [
    TodoRoutingModule,
    FormsModule
  ],
  providers: []
})
export class TodoModule { }
