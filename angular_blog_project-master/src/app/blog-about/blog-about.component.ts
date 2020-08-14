import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-about',
  templateUrl: './blog-about.component.html',
  styleUrls: ['./blog-about.component.css']
})
export class BlogAboutComponent implements OnInit {
  public windowHeight;
  constructor() { }

  ngOnInit() {
    let orientationEvent = "onorientationchange" in window ? "orientationchange" : "resize";
    
    this.windowHeight = `${document.documentElement.clientHeight - 79.13}px`;

    window.addEventListener(orientationEvent, function() {

      if(window.orientation === 0 || window.orientation === 180){
        this.windowHeight = `${document.documentElement.clientHeight - 79.13}px`;
        console.log(window.orientation + " " + this.windowHeight)
      }
      else{
        this.windowHeight = `${document.documentElement.clientHeight - 79.13}px`;
        console.log(window.orientation + " " + this.windowHeight)
      }
    }, false);
  }

}
