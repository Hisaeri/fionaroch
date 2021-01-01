import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
