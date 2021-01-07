import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/_services/API.service';
import { ToDo } from 'src/types/toDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  toDos: Array<ToDo>;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListTodos().then(event => {
      this.toDos = event.items;

      this.api.OnCreateTodoListener.subscribe((event: any) => {
        const newToDo = event.value.data.onCreateTodo;
        this.toDos = [newToDo, ...this.toDos];
      });
    });
  }

}
