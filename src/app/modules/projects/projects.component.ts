import { Component, OnInit } from '@angular/core';
import { Swiper, Navigation, Autoplay, Pagination } from 'swiper';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swiper.use([Navigation, Autoplay, Pagination]);
  }
}
