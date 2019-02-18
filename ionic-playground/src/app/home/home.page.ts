import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private http: HttpClient) {
        this.incrementScore();
    }

    private title = '';

    private extract = '';
    private imageSource = '';
    isToggled = true;

    getTitle(): string {
        return 'Wiki Dosage';
    }

    getArticleTitle() {
        return this.title;
    }

    toggleChange() {
        if (!this.isToggled) {
            this.isToggled = true;
        }

        if (this.isToggled) {
            this.isToggled = false;
        }
    }

    getStory() {
        return this.extract;
    }

    getImage() {
        return this.imageSource;
    }

    incrementScore() {
        this.http.get('https://en.wikipedia.org/api/rest_v1/page/random/summary').subscribe((response) => {
            this.title = response.title;
            this.extract = response.extract;
            this.imageSource = response.thumbnail.source;
        });
    }

}
