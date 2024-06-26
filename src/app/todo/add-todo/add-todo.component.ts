import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodos } from 'src/app/store/selectors/app.selectors';
import { Todo } from '../todo.model';
import { addTodo } from 'src/app/store/actions/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  title: string = "";
  description:string = "";
  products$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.title && this.description) {
      const id = +(Math.random() * 10).toFixed(4);
      const todo:Todo = {
        id: id,
        title: this.title,
        description: this.description
      }
      this.store.dispatch(addTodo({ todo }));
    }
  }

}
