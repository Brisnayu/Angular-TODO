import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { Todo } from '../models/todo.models';
import { CreateTodoComponent } from '../shared/components/create-todo/create-todo.component';

const TODO_LIST_KEY = 'TODO_LIST';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent, CreateTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];

  public ngOnInit() {
    const todoList = window.localStorage.getItem(TODO_LIST_KEY);
    if (todoList) {
      this.todos = JSON.parse(todoList);
    }
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
    this.persistTodos();
  }

  public persistTodos() {
    window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(this.todos));
  }
}
