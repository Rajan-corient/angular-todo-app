import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeTodo } from 'src/app/store/actions/app.actions';
import { selectTodos } from 'src/app/store/selectors/app.selectors';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  title = "Todo App";
  todos$:Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit() {
    
  }

  removeTodo(id:number) {
    this.store.dispatch(removeTodo({ id }));
  }

}
