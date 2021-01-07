import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/types/toDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() toDos: Array<ToDo>;
  constructor() { }

  ngOnInit(): void {
  }

}
