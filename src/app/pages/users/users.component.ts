import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';





@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [];
  displayedColumns: string[] = ['username', 'role', 'actions'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  assignRole(user: any) {
    // Lógica para asignar un rol
  }

  deleteUser(user: any) {
    // Lógica para eliminar un usuario
  }
}
