import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  {path: "", redirectTo:"todos", pathMatch: "full"},
  {path: "todos", component: TodosComponent},
  {path: "add-todo", component: AddTodoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TodoRoutingModule { }
