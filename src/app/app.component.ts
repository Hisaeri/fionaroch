import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private googleAnalytics: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.googleAnalytics.init();
  }
}
