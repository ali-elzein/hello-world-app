import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-basic-demo',
    templateUrl: './observable-demo.component.html'
})
export class ObservableDemoComponent implements OnInit {

    observableMessage = '';
    promiseMessage = '';

    private subscription!: Subscription;


    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.subscription = this.dataService.getDataAsObservable().subscribe(data => {
            this.observableMessage = data;
        });

        this.dataService.getDataAsPromise().then(data => {
            this.promiseMessage = data;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
