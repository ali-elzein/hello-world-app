import { Component } from '@angular/core';
import { MyFeature } from '../../my-feature';
import { MyPipePipe } from '../../my-pipe-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-component1',
  imports: [MyPipePipe, RouterLink],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {
  message = '';

  constructor(private service: MyFeature) {}

  ngOnInit(): void {
    this.message = this.service.getMessage();
  }
}
