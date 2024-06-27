import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  {path: "", redirectTo:"notes", pathMatch: "full"},
  {path: "notes", component: NotesComponent},
  {path: "add-note", component: AddNoteComponent},
  {path: "note-details/:id", component: AddNoteComponent},
  {path: "todos", loadChildren:()=> import('./todo/todo.module').then(m=> m.TodoModule)},  
  {path: "shopping", loadChildren:()=> import('./shopping/shopping.module').then(m=> m.ShoppingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
