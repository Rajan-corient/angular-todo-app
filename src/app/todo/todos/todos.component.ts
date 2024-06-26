import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  notes:any = [];
  
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem("notes") || "[]");
  }

  navigateToDetails(id:number) {
    this.router.navigateByUrl(`note-details/${id}`);
  }

  addNotes() {
    this.router.navigateByUrl("/add-note")
  }
}
