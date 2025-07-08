import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';
import { UiButtonComponent } from '../../../shared/components/ui-button/ui-button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.html',
  styleUrls: ['./image-loader.css'],
  imports : [SharedModule, RouterModule]
})
export class ImageLoaderComponent {
    img = 'assets/angular.jpeg';
    status = '';
    isLoading = false;

    handleClick() {
        this.isLoading = true;
        this.status = "Loading new image...";
        setTimeout(() => {
            this.img = 'assets/angular-old.png';
            this.status = "Image updated!";
            this.isLoading = false;
        }, 1500);
    }

}
