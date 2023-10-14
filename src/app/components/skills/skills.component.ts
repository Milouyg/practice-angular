import { transition } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import data from './../../../assets/json/info.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit{
    title:string;
    description:string;
    constructor() {
        this.title = data["skills"].title;
        this.description = data["skills"].desciption;
    }

    ngAfterViewInit(): void {
        this.movingUpAndDown("blob18-blobImg", 0);
        this.movingUpAndDown("blob19-blobImg", 500);
        this.movingUpAndDown("blob20-blobImg", 2000);
        this.movingUpAndDown("blob21-blobImg", 500);
        this.movingUpAndDown("blob22-blobImg", 0);
        this.resize400();
    }

    movingUpAndDown(id:string, amount:number){
        const blob = document.getElementById(id);
        setTimeout(() => {
            blob!.style.transition = "all 1s ease-in-out";
            blob!.animate([
                {transform: 'translateY(0rem)'},
                {transform: 'translateY(-15%)'},
                {transform: 'translateY(0rem)'},
                {transform: 'translateY(-15%)'},
                {transform: 'translateY(0rem)'},
            ], {
                duration: 10000,
                iterations: Infinity
            })
        }, amount);
    }

    resize400(){
        window.addEventListener("resize", () => {
            const blob18 = document.getElementById("blob18");
            const blob19 = document.getElementById("blob19");
            const blob20 = document.getElementById("blob20");
            const blob21 = document.getElementById("blob21");
            const blob22 = document.getElementById("blob22");
            if (blob18 && blob19 && blob20 && blob21 && blob22) {
                if (window.matchMedia("(max-width: 400px)").matches) {
                    blob18.style.left = "0.5rem";
                    blob19.style.left = "9.5rem";
                    blob20.style.left = "18rem";


                    blob21.style.top = "15rem";
                    blob22.style.top = "15rem";
                    blob21.style.left = "5.5rem";
                    blob22.style.left = "13.5rem";
                }
                else{

                }
            }
        })
    }
}
