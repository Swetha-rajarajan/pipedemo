import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
    export class AppComponent{

        title = 'angular-text-search-highlight';
        searchText = '';
        characters = [
    'Swetha',
    'Padma',
    'Sundar',
    'Vikas',
    'Bharat',
    'Twinkle',
    'Deepika',
    'Jyoti',

  ]
    
}