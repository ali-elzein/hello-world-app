import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    getDataAsObservable(): Observable<string> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next('Hello from Observable!');
                observer.complete();
            }, 1000);
        });
    }

    getDataAsPromise(): Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Hello from Promise!');
            }, 2000);
        });
    }
}
