import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MatCardModule
    // ContactRoutingModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
