import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {



  todo: string = '';


  todoList: any[] = [];

  addTodo() {
    this.todoList.push(this.todo);
  }
  deleteItem(index: number) {
    this.todoList.splice(index, 1);
  }
}
