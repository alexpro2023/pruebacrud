import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor() {}

  requestPermission(): Promise<NotificationPermission> {
    return Notification.requestPermission();
  }

  showNotification(title: string, options?: NotificationOptions): void {
    if (Notification.permission === 'granted') {
      // Agregar la propiedad 'image' al objeto options para incluir una imagen
      options = {
        ...options,
        icon: '../../assets/logo.png',
      };

      new Notification(title, options);
    }
  }
}
