import { Component } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-container',
  // standalone: true,
  // providers: [
  //   TodosComponent,
  //   AddTodoComponent
  // ],
  // imports: [
  //   FormsModule
  // ],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss'
})
export class TodoContainerComponent {

}
