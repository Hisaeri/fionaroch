import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
