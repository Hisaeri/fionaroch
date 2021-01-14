import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    SwiperModule
    // ProjectsRoutingModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
