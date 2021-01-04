import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button'
import { SkillsModule } from '../skills/skills.module';
import { HeroModule } from '../hero/hero.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    SkillsModule,
    HeroModule
  ]
})
export class HomeModule { }
