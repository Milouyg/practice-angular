import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-blob',
    templateUrl: './blob.component.html',
    styleUrls: ['./blob.component.scss']
})
export class BlobComponent implements AfterViewInit {
    // Blob
    @Input() isBlobImg:boolean = false;
    @Input() id:string = "";
    @Input() blobText:string = "";
    @Input() drag:boolean = false;
    @Input() width:number = 50;
    @Input() top:number = 10;
    @Input() left:number = 20;
    // Styling Blob
    @Input() strokeWidth:number = 0;
    @Input() fill:string = "url(#gradient)";
    @Input() strokeColor:string= "#d1d8e0";
    @Input() rotate:boolean = false;
    @Input() isChangingWidth:boolean = false;
    // BlobImg
    @Input() urlLink:string = "";

    @Output() projectClickEvent = new EventEmitter<void>();
    @Output() projectHoverEvent = new EventEmitter<void>();

    blobAnimations: string[] = [
        "M402,269.5Q370,289,406.5,339.5Q443,390,416.5,416.5Q390,443,346.5,427.5Q303,412,276.5,437.5Q250,463,217.5,456Q185,449,153.5,437.5Q122,426,114.5,390Q107,354,79.5,334Q52,314,54,282Q56,250,80,226Q104,202,76,152.5Q48,103,86.5,91Q125,79,161,83.5Q197,88,223.5,81Q250,74,279.5,71Q309,68,324,97.5Q339,127,383,124Q427,121,427,157Q427,193,430.5,221.5Q434,250,402,269.5Z;M419,281.5Q445,313,414.5,330Q384,347,381.5,387.5Q379,428,338.5,412.5Q298,397,274,390Q250,383,212.5,432.5Q175,482,173.5,420Q172,358,149,349Q126,340,123.5,316Q121,292,118.5,271Q116,250,84.5,218Q53,186,66,156Q79,126,114,118Q149,110,179,116Q209,122,229.5,99Q250,76,270.5,100Q291,124,325.5,111Q360,98,372,125.5Q384,153,379,181.5Q374,210,383.5,230Q393,250,419,281.5Z;M402,269.5Q370,289,406.5,339.5Q443,390,416.5,416.5Q390,443,346.5,427.5Q303,412,276.5,437.5Q250,463,217.5,456Q185,449,153.5,437.5Q122,426,114.5,390Q107,354,79.5,334Q52,314,54,282Q56,250,80,226Q104,202,76,152.5Q48,103,86.5,91Q125,79,161,83.5Q197,88,223.5,81Q250,74,279.5,71Q309,68,324,97.5Q339,127,383,124Q427,121,427,157Q427,193,430.5,221.5Q434,250,402,269.5Z",

        "M439,289.5Q427,329,422,382Q417,435,368.5,451Q320,467,275.5,451Q231,435,180.5,446Q130,457,91.5,425Q53,393,32,347Q11,301,58.5,260Q106,219,90,170.5Q74,122,102,82Q130,42,179,43.5Q228,45,267,61Q306,77,320.5,116Q335,155,401,154.5Q467,154,459,202Q451,250,439,289.5Z;M441.5,292Q439,334,425.5,382Q412,430,353.5,409Q295,388,261.5,425Q228,462,178,461.5Q128,461,109,413.5Q90,366,71,329Q52,292,80.5,256Q109,220,107.5,182.5Q106,145,146.5,143.5Q187,142,210,117.5Q233,93,279.5,54.5Q326,16,351,63Q376,110,427,129.5Q478,149,461,199.5Q444,250,441.5,292Z;M470.5,300Q475,350,410.5,353.5Q346,357,333,410.5Q320,464,273.5,466.5Q227,469,202,423Q177,377,115.5,384.5Q54,392,56.5,341.5Q59,291,85.5,256Q112,221,81,162.5Q50,104,92.5,77.5Q135,51,184.5,76Q234,101,262,114Q290,127,333.5,118Q377,109,399,141.5Q421,174,443.5,212Q466,250,470.5,300Z;M439,289.5Q427,329,422,382Q417,435,368.5,451Q320,467,275.5,451Q231,435,180.5,446Q130,457,91.5,425Q53,393,32,347Q11,301,58.5,260Q106,219,90,170.5Q74,122,102,82Q130,42,179,43.5Q228,45,267,61Q306,77,320.5,116Q335,155,401,154.5Q467,154,459,202Q451,250,439,289.5Z",

        "M466,290Q470,330,432,350Q394,370,370.5,394Q347,418,318,445Q289,472,258,426.5Q227,381,198.5,384.5Q170,388,149.5,369.5Q129,351,101,332.5Q73,314,62,282Q51,250,50.5,213.5Q50,177,95.5,168Q141,159,147,120.5Q153,82,183,61Q213,40,248.5,49.5Q284,59,321.5,60Q359,61,386,87Q413,113,442.5,141Q472,169,467,209.5Q462,250,466,290Z;M418,281.5Q424,313,397,332Q370,351,356.5,381.5Q343,412,308.5,399Q274,386,245.5,410.5Q217,435,176,442Q135,449,128.5,403.5Q122,358,98.5,336Q75,314,39,282Q3,250,27.5,214Q52,178,75,150.5Q98,123,140,127.5Q182,132,200,100Q218,68,248,81Q278,94,306.5,98Q335,102,363,116.5Q391,131,395,163.5Q399,196,405.5,223Q412,250,418,281.5Z;M443.5,287.5Q456,325,416,340Q376,355,344.5,357Q313,359,301,414.5Q289,470,248,482Q207,494,177,461.5Q147,429,145.5,384Q144,339,80.5,337Q17,335,40,292.5Q63,250,63,216Q63,182,77.5,150Q92,118,138.5,128Q185,138,205.5,126Q226,114,254.5,88Q283,62,323.5,57.5Q364,53,388,83.5Q412,114,417.5,150.5Q423,187,427,218.5Q431,250,443.5,287.5Z;M466,290Q470,330,432,350Q394,370,370.5,394Q347,418,318,445Q289,472,258,426.5Q227,381,198.5,384.5Q170,388,149.5,369.5Q129,351,101,332.5Q73,314,62,282Q51,250,50.5,213.5Q50,177,95.5,168Q141,159,147,120.5Q153,82,183,61Q213,40,248.5,49.5Q284,59,321.5,60Q359,61,386,87Q413,113,442.5,141Q472,169,467,209.5Q462,250,466,290Z;"
    ]

    isDragging: boolean = false;

    ngAfterViewInit(): void { // Wanneer de HTML gerenderd is wordt dit uitgevoerd
        if(this.isBlobImg === false){
            this.styleBlobAnimation();
            this.styleBlobFigure();
            this.styleBlobPath();
        }
        else{
            this.blobImg();
        }
        this.moveBlob();
        if(this.isChangingWidth === true){
            this.animateBlobWidth();
        }
    }

    styleBlobAnimation(){
        const randomAnimation = this.blobAnimations[Math.floor(Math.random() * this.blobAnimations.length)];
        const blob = document.getElementById(this.id + "-animation");
        blob?.setAttribute("values", randomAnimation);
    }

    styleBlobFigure(){
        const blobFigure = document.getElementById(this.id);
        blobFigure!.style.left = this.left + "rem";
        blobFigure!.style.top = this.top + "rem";
        blobFigure!.style.width = this.width + "rem";

        if(this.rotate === true){
            blobFigure!.animate([
                {transform: 'rotate(0deg)'},
                {transform: 'rotate(180deg)'}
            ], {
                duration: 50000,
                iterations: Infinity
            })
        }
    }

    styleBlobPath(){
        const blobPath = document.getElementById(this.id + "-path");
        blobPath!.setAttribute("fill", this.fill);
        blobPath!.setAttribute("stroke-width", this.strokeWidth + 'rem');
        blobPath!.setAttribute("stroke", this.strokeColor);
    }

    startDragging() {
        if(this.drag === true){
            this.isDragging = true;
        }
    }

    moveBlob() {
        document.addEventListener("mousemove", (e) => {
            if (this.isDragging === true) {
                const blob = document.getElementById(this.id);
                blob!.style.left = (e.clientX - this.width * 7.5) + "px";
                blob!.style.top = (e.clientY - this.width * 7.5) + "px";
            console.log(e)}
        });
    }

    animateBlobWidth(){
        const blob = document.getElementById(this.id);
            blob!.style.transition = "all 1s ease-in-out";
            blob!.animate([
                {transform: 'scale(.5)'},
                {transform: 'scale(1)'},
                {transform: 'scale(.5)'}
            ], {
                duration: 17500,
                iterations: Infinity
            });

    }

    stopDragging(){
        this.isDragging = false;
    }

    hover(){
        if(this.drag === true){
            const blob = document.getElementById(this.id + "-path");
            blob!.style.cursor = "grab";
        }
        this.projectHoverEvent.emit();
    }

    click(){
        this.projectClickEvent.emit();
    }

    // ----------------------Blob Image -------------------------

    blobImg(){
        const blobImg = document.getElementById(this.id + '-blobImg');
        blobImg?.setAttribute("href", this.urlLink);
        blobImg?.setAttribute("clip-path", "url(#" + this.id + "-shape)");


        this.blobImgFigure();
        this.blobImgAnimation();
    }

    blobImgAnimation(){
        const randomizerBlobImg = this.blobAnimations[Math.floor(Math.random() * this.blobAnimations.length)]
        const blobImgAnimation = document.getElementById(this.id + '-blobImgAnimation')
        blobImgAnimation?.setAttribute("values", randomizerBlobImg);
    }

    blobImgFigure(){
        const blobFigure = document.getElementById(this.id);
        blobFigure!.style.left = this.left + "rem";
        blobFigure!.style.top = this.top + "rem";
        blobFigure!.style.width = this.width + "rem";
    }
}


