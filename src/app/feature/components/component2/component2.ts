import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component2',
  imports: [CommonModule],
  templateUrl: './component2.html',
  styleUrl: './component2.css'
})
export class Component2 {
    isVisible: boolean = true;
    users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 3, name: 'Charlie', age: 35 }
    ];

    userRole: string = 'admin';

    changeRole(newRole: string) {
        this.userRole = newRole;
    }
}
