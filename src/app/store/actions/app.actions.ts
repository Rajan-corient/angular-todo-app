import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: number }>()
);
