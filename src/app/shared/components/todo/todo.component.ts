import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() public description?: string;
  @Input() public isCompleted: boolean = false;
  @Output() public isCompletedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public toggleIsCompleted() {
    this.isCompletedChange.emit(!this.isCompleted);
  }
}
