
import { AfterViewInit, Component } from '@angular/core';
import data from './../../../assets/json/info.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
    title:string;
    description:string;

    constructor() {
        this.title = data["contact"].title;
        this.description = data["contact"].description;
    }

    ngAfterViewInit(): void {
        this.resize400()
    }

    resize400() {
        window.addEventListener("resize", () => {
            const blob17 = document.getElementById("blob17");
            const blob23 = document.getElementById("blob23");
            const blob24 = document.getElementById("blob24");
            if (blob17 && blob23 && blob24) {
                if (window.matchMedia("(max-width: 400px)").matches) {
                    blob17.style.left = "11rem";
                    blob17.style.top = "38rem";
                    blob23.style.left = "-3rem";
                    blob23.style.top = "36rem";
                    blob24.style.left = "-1rem";
                    blob24.style.top = "0rem";
                }
                else{

                }
            }
        })
    }


}
