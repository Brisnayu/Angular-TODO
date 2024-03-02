import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { Todo } from '../models/todo.models';
import { CreateTodoComponent } from '../shared/components/create-todo/create-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent, CreateTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public todos: Todo[] = [];

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
