import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

console.log('src/app/notifications/notifications.component.ts');

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  /**
   * Notifier service
   */
  private notifier: NotifierService;

  /**
   * Constructor
   *
   * @param {NotifierService} notifier Notifier service
   */
  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

/*  constructor() { }*/


  ngOnInit() {
  }


  /**
   * Show a notification
   *
   * @param {string} type    Notification type
   * @param {string} message Notification message
   */
  public showNotification( type: string, message: string ): void {
    console.log('Show ' + type + ': ' + message);
    this.notifier.notify( type, message );
  }

  /**
   * Hide oldest notification
   */
  public hideOldestNotification(): void {
    console.log('hide Oldest');
    this.notifier.hideOldest();
  }

  /**
   * Hide newest notification
   */
  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  /**
   * Hide all notifications at once
   */
  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  /**
   * Show a specific notification (with a custom notification ID)
   *
   * @param {string} type    Notification type
   * @param {string} message Notification message
   * @param {string} id      Notification ID
   */
  public showSpecificNotification( type: string, message: string, id: string ): void {
    this.notifier.show( {
      id,
      message,
      type
    } );
  }

  /**
   * Hide a specific notification (by a given notification ID)
   *
   * @param {string} id Notification ID
   */
  public hideSpecificNotification( id: string ): void {
    this.notifier.hide( id );
  }
}

