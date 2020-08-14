import { Component } from '@angular/core';
import { BlogHttpService } from './blog-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARS Blog';
  public loadBarProgress = 100;
  
  constructor(BlogHttpService:BlogHttpService){

  }
}
