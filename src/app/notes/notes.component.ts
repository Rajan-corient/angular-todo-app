import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

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
