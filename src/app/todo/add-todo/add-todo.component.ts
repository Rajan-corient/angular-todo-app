import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  noteId:any
  title: string = "";
  description:string = "";

  constructor(private activeRoute: ActivatedRoute){
  
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({id}) => {
      const notes = JSON.parse(localStorage.getItem('notes') || "[]");
      const noteObj = notes.find((item:any) => item.id === Number(id));
      this.title = noteObj.title;
      this.description = noteObj.description;
    });
  }

  save() {
    const obj = {
      id: Math.random(),
      title: this.title,
      description: this.description
    }

    const notes  = JSON.parse(localStorage.getItem('notes') || "[]");
    notes.push(obj);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}
