import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './navbar/navbar.component';

import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { VolunteerExperienceComponent } from './volunteer-experience/volunteer-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
	declarations: [
		AppComponent,
		ResumeComponent,
		NavbarComponent,
		WorkExperienceComponent,
		VolunteerExperienceComponent,
		EducationComponent,
		SkillsComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
