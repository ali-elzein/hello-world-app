import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MyFeature } from './my-feature';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageResolver implements Resolve<string> {
  constructor(private service: MyFeature) {}

  resolve(): Observable<string> | Promise<string> | string {

    return this.service.getMessageAsync();
  }
}