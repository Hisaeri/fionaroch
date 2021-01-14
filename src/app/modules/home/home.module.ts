import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button'
import { SkillsModule } from '../skills/skills.module';
import { HeroModule } from '../hero/hero.module';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    SkillsModule,
    HeroModule,
    ContactModule,
    AboutModule,
    ProjectsModule
  ]
})
export class HomeModule { }
