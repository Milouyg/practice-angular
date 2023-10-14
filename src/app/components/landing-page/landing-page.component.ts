import { AfterViewInit, Component } from '@angular/core';
import data from './../../../assets/json/info.json';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {
    title?:string;
    leftButton?:string;
    rightButton?:string;

    constructor() {
        this.title = data['landing-page'].title;
        this.leftButton = data['landing-page'].buttons.leftButton;
        this.rightButton = data['landing-page'].buttons.rightButton;


    }
    ngAfterViewInit(): void {
        this.animation("blob2", 15000, "3");
        this.animation("blob3", 16000, "3");
        this.animation("blob4", 12000, "0");
        this.animation("blob5", 14000, "0");
        this.resize1000();
        this.resize500();
    }

    animation(id:string, speed:number, zIndex:string){
        const blob = document.getElementById(id);
        blob!.style.zIndex = zIndex;

        blob!.style.transition = "all 1s ease-in-out";
        setTimeout(() => {
            blob!.animate([
                {transform: "translateX(-10rem)"},
                {transform: "translateX(2rem)"}
            ],{
                duration: speed,
                iterations: Infinity
            });
        }, 0);
    }

    resize1000() {
        window.addEventListener("resize", () => {
            const blob2 = document.getElementById("blob2");
            const blob3 = document.getElementById("blob3");
            const blob4 = document.getElementById("blob4");
            const blob5 = document.getElementById("blob5");
            if (blob2 && blob3 && blob4 && blob5) {
                if (window.matchMedia("(max-width: 1000px)").matches) {
                    blob2.style.display = "none";
                    blob3.style.display = "none";
                    blob4.style.display = "none";
                    blob5.style.display = "none";
                }
                else{
                    blob2.style.display = "block";
                    blob3.style.display = "block";
                    blob4.style.display = "block";
                    blob5.style.display = "block";
                }
            }
        })
    }

    resize500() {
        window.addEventListener("resize", () => {
            const blob1 = document.getElementById("blob1");

            if (blob1) {
                if (window.matchMedia("(max-width: 400px)").matches) {
                    blob1.style.top = "5rem";
                    blob1.style.left = "-7rem";
                }
            }
        });
    }
}

