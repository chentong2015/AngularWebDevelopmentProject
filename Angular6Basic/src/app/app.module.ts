import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import common modules
import { AppRoutingModule } from './app-routing.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

// Import service modules
import { HttpClientModule } from '@angular/common/http';
// Provider: data services
import { DataService } from './data.service';

// Import Components 
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [  // for all components
    AppComponent, 
    SidebarComponent, 
    PostsComponent, 
    UsersComponent, 
    DetailsComponent, 
    NavbarComponent
  ],
  imports: [  // for all modules
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    HttpClientModule
    //BrowserAnimationsModule,
  ],
  providers: [DataService],   // for all the services : NullInjectorError: No provider for DataService!
  bootstrap: [AppComponent]
})
export class AppModule { }
