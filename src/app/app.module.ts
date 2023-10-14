import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BlobComponent } from './components/blob/blob.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
    declarations: [
        AppComponent,
        BlobComponent,
        HeaderComponent,
        LandingPageComponent,
        AboutMeComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    exports: [

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
