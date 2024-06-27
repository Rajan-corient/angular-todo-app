import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../reducers/app.reducer';

export const selectTodosState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);
