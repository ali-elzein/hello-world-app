import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyFeature {
    getMessage(): string {
        return 'Hello from the service.'
    }

    getMessageAsync() {
    return of('Hello from Resolver!').pipe(
    //   delay(5000)
    );
  }
  constructor() { }
}
