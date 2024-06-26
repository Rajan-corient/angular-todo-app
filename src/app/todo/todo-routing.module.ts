import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';


const routes: Routes = [
  {path: "", component: TodoContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TodoRoutingModule { }
