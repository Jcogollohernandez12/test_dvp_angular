import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: any[] = [];
  displayedColumns: string[] = ['title', 'status', 'actions'];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      {
        next: (data: any) => {
          this.tasks = data;
        },
        error: (error: any) => {
          console.error('Error fetching tasks', error);
        }
      }
    );
  }

  viewTask(task: any) {
    this.router.navigate(['/tasks', task.id]);
  }

  updateTaskStatus(task: any) {
    // Aquí puedes implementar la lógica para cambiar el estado de la tarea
  }
}
