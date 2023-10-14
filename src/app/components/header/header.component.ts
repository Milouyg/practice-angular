import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor() {

    }

    onClick(){
        const menuItem = document.getElementById("mobile-menu");
        menuItem?.classList.toggle("hidden");
    }
}
