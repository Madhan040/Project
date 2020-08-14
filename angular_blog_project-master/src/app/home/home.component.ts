// this is a by default statement.
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//temp imports
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs:object;
  public isLoaded:boolean;

  //dummy blog var is allBlogs
  constructor(private BlogHttpService:BlogHttpService, private _http:HttpClient) { 

  }

  async ngOnInit() {
    /*Set isLoaded to false so that this component's templating doesn't
    active prematurely before the data is called.*/ 
    this.isLoaded = false;
    
    //Get all of the blogs and then set isLoaded to true.
    this.allBlogs = await this.getAllBlogs();
    this.isLoaded = true;
  }

  async getAllBlogs(){
    let tempallBlogs;

    await this.BlogHttpService.requestApiData().toPromise().then( data => {
      tempallBlogs = data['data'];
    })

    return tempallBlogs;
  }
  
  ngOnDestroy(){

  }

}

