import { Component } from '@angular/core';
import { MyFeature } from '../../my-feature';
import { MyPipePipe } from '../../my-pipe-pipe';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [MyPipePipe, RouterLink],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {
  message = '';
  resolvedMessage = '';

  constructor(
    private service: MyFeature,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = this.service.getMessage();
    
    this.resolvedMessage = this.route.snapshot.data['message'];
    
  }
}