import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from '../actions/app.actions';
import { Todo } from 'src/app/todo/todo.model';

export interface TodoState {
    todos: Todo[]
}

export const initialState: TodoState = {
    todos: []
};

const _todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    return {
      ...state,
      todos: [...state.todos, todo ],
    };
  }),
  on(removeTodo, (state, { id }) => {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
      };
  })
);

export function todosReducer(state: any, action: any) {
  return _todosReducer(state, action);
}
