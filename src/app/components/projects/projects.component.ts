
import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import data from './../../../assets/json/info.json';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    description:string = "";
    constructor() {
        this.description = data["projects"].desciption;
    }

    projects: Project[] = [
        {
            id: "blob10",
            width: 20,
            top: 5,
            left: 7,
            title: "Udemy",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia enim sint molestiae, animi ea alias quas ut amet esse impedit eius sunt distinctio, atque, at molestias commodi illum expedita mollitia!",
            link: "",
            imgData: {
                scr: "https://placehold.co/300x200",
                alt: ""
            },
            visible: false
        },
        {
            id: "blob11",
            width: 20,
            top: 25,
            left: 50,
            title: "Collection of Happiness",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia enim sint molestiae, animi ea alias quas ut amet esse impedit eius sunt distinctio, atque, at molestias commodi illum expedita mollitia!",
            link: "",
            imgData: {
                scr: "https://placehold.co/300x200",
                alt: ""
            },
            visible: false
        },
        {
            id: "blob12",
            width: 20,
            top: 5,
            left: 95,
            title: "Yubtub",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia enim sint molestiae, animi ea alias quas ut amet esse impedit eius sunt distinctio, atque, at molestias commodi illum expedita mollitia!",
            link: "",
            imgData: {
                scr: "https://placehold.co/300x200",
                alt: ""
            },
            visible: false
        }
    ]

    hover(project:Project){
        if(project.visible === true){
            const blob = document.getElementById(project.id + "-path");
            blob!.style.cursor = "default";
            const section = document.getElementById("projects");
            section!.style.cursor = "pointer";
        }
        else{
            const blob = document.getElementById(project.id + "-path");
            blob!.style.cursor = "pointer";
            const section = document.getElementById("projects");
            section!.style.cursor = "default";
        }
    }

    moveAnimation(clickedProject: Project) {
        this.projects.forEach(project => {

            const projectElement = document.getElementById(project.id);
            const section = document.getElementById("projects");

            const windowX = section!.clientWidth / 2;
            const windowY = section!.clientHeight / 2;

            projectElement!.style.left = windowX + "px";
            projectElement!.style.top = windowY + "px";

            projectElement!.style.transition = "all 1s ease-in-out";
            projectElement!.style.transform = "translate(-50%, -50%)";
            document.getElementById(clickedProject.id)!.style.zIndex = "3";
        })

        setTimeout(() => {
            document.getElementById(clickedProject.id + "-blobtext")!.style.display = "none";
            document.getElementById(clickedProject.id)!.style.width = "50rem";
            this.showInfo(clickedProject);
        }, 1000);
    }

    showInfo(projectInfo: Project) {
        setTimeout(() => {
            projectInfo.visible = true;
        }, 1000);

    }

    closeInfo(){
        const visibleProject = this.projects.find((project) => project.visible === true);
        if(visibleProject !== undefined){
            this.projects.forEach(project => {
                project.visible = false;

                const projectElement = document.getElementById(project.id);

                projectElement!.style.left = project.left + "rem";
                projectElement!.style.top = project.top + "rem";
                projectElement!.style.width = project.width + "rem";
                projectElement!.style.zIndex = "2";

                projectElement!.style.transition = "all 1s ease-in-out";
                projectElement!.style.transform = "translate(0%, 0%)";

                document.getElementById(project.id + "-blobtext")!.style.display = "block";
            })
        }
    }
}
