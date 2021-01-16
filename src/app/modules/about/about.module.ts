import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatButtonModule
    // AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
