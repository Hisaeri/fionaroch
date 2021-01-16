import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  clickOnResume() {
    this.gaService.sendEvent('VIEW_ITEM', 'resume');
  }

}
