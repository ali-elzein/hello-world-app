import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFeature {
    getMessage(): string {
        return 'Hello from the service.'
    }
  constructor() { }
}
