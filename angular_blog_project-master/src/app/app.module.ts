import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogHttpService } from './blog-http.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    BlogAboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    //routerModule forRoot method to declare the possible routes in a app.
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path:'about', component:BlogAboutComponent},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'create', component:BlogCreateComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'**', component:NotFoundComponent}

    ])

  ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
