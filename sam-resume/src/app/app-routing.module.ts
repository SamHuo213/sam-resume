import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { VolunteerExperienceComponent } from './volunteer-experience/volunteer-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{
	path: '',
	redirectTo: '/workExperience',
	pathMatch: 'full'
}, {
	path: 'workExperience',
	component: WorkExperienceComponent
}, {
	path: 'volunteerExperience',
	component: VolunteerExperienceComponent
}, {
	path: 'education',
	component: EducationComponent
}, {
	path: 'skills',
	component: SkillsComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
