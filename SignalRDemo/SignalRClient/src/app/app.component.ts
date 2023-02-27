import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalRClient';

  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl('https://localhost:7219/offers')
      .configureLogging(LogLevel.Information)
      .build();
    this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server'));

    this.hubConnectionBuilder.on('SendOffersToUser', (data: any) => {
      this.offers.push(data);
    });

}
}