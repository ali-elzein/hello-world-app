import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBindingComponent {
    username = 'Ali';
    imageUrl = 'assets/einstein.jpg';

    isActive = true;
    textColor = 'blue';

    handleClick() {
        alert(`Hello, ${this.username}!`);
    }

}
