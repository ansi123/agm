import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="ram";
  latitude = 51.678418;
  longitude = 7.809007;

  onChoseLocation(event)
  {
  //  this.latitude=event.c.latitude;
  //  this.longitude = event.c.longitude;
    console.log(event);
    
  }
}
