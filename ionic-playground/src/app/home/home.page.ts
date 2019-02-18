import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private storage: Storage) {
        this.storage.get('counter').then((val) => {
            if (val) {
                this.count = val;
            }

        });
    }

    private count = 0;

    getCounter(): string {
        return '' + this.count;
    }

    incrementScore() {
        this.count++;
        this.storage.set('counter', this.count);
    }


}
