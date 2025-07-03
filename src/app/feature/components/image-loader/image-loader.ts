import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-image-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-loader.html',
  styleUrls: ['./image-loader.css']
})
export class ImageLoaderComponent {
    img = 'assets/angular.jpeg';
}
