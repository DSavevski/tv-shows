import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppComponent } from './app.component';
import {ShowService} from "./show.service";
import {HttpModule} from "@angular/http";
import { ShowDetailsComponent } from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailsCastComponent } from './show-details-cast/show-details-cast.component';
import { ShowDetailsEpisodesComponent } from './show-details-episodes/show-details-episodes.component';
import {ShowSearchService} from './show-search.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    ShowsComponent,
    ShowDetailsCastComponent,
    ShowDetailsEpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShowService, ShowSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
