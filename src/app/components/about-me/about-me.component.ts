
import { AfterViewInit, Component } from '@angular/core';
import data from './../../../assets/json/info.json';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit{
    title?:string;
    description?:string;
    constructor() {
        this.title = data['about-me'].title;
        this.description = data['about-me'].desciption;
    }

    ngAfterViewInit(): void {
        this.resize400()
    }


    resize400() {
        window.addEventListener("resize", () => {
            const blob14 = document.getElementById("blob14");
            const blob15 = document.getElementById("blob15");
            const blob16 = document.getElementById("blob16");
            if (blob14 && blob15 && blob16) {
                if (window.matchMedia("(max-width: 400px)").matches) {
                    blob14.style.left = "5rem";
                    blob15.style.left = "-3rem";
                    blob16.style.left = "15rem";
                }
                else{

                }
            }
        })
    }
}
