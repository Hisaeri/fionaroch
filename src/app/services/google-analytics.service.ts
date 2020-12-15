import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  private eventName: any = {
    'VIEW_ITEM': {
      'gName': 'view_item',
      'gCateg': 'engagement',
      'fName': 'ViewContent',
    },
  }

  constructor(private router: Router) { }

  /** ********************************************************************************************
  ******************************************************************************* PUBLIC METHODS
  **********************************************************************************************/

  // Initialize analytics
  public init() {
    if (environment.production) {
      this.listenForRouteChanges();
      this.initGoogleAnalytics();
    }
  }

  // Send events to all analytics services
  public sendEvent(event: string, label: string = null,): void {
    const eventType: any = this.eventName[event];
    if (environment.production) {
      if (eventType) {
        this.sendGoogleEvent(this.eventName[event].gCateg, this.eventName[event].gName, label);
      } else {
        console.error('ERROR: No event ', event);
      }
    }
  }

  /** ********************************************************************************************
  ******************************************************************************* PRIVATE METHODS
  **********************************************************************************************/

  // Send event to google analytics
  private sendGoogleEvent(eventCategory: string, eventAction: string,
    eventLabel: string = null, eventValue: number = null,
    transaction_id: string = null): void {
    const gData: any = {
      'event_category': eventCategory,
      'event_label': eventLabel,
      'value': eventValue,
    };
    if (transaction_id) {
      gData.transaction_id = transaction_id;
    }
    gtag('event', eventAction, gData);
  }

  // On route change, send page view analytics events
  private listenForRouteChanges(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          'page_path': event.urlAfterRedirects,
        });
      }
    });
  }

  // Initialize google analytics scripts
  private initGoogleAnalytics(): void {
    try {
      // Add google tag manager script to page
      const script1 = document.createElement('script');
      script1.async = true;;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.googleAnalyticsId;
      document.head.appendChild(script1);

      // Init google script
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '` + environment.googleAnalyticsId + `', {'send_page_view': true});
      `;
      document.head.appendChild(script2);
    } catch (ex) {
      console.error('Error : Couldn\'t initialize google analytics');
      console.error(ex);
    }
  }
}
