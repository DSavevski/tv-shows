import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';
import {ShowsComponent} from '../shows/shows.component';
import {ShowDetailsCastComponent} from '../show-details-cast/show-details-cast.component';
import {ShowDetailsEpisodesComponent} from '../show-details-episodes/show-details-episodes.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'shows',
    pathMatch: 'full'
  },
  {
    path: 'shows',
    component: ShowsComponent
  },
  {
    path: 'detail/:id',
    component: ShowDetailsComponent
  },
  {
    path: 'detail/:id/cast',
    component: ShowDetailsCastComponent
  },
  {
    path: 'detail/:id/episodes',
    component: ShowDetailsEpisodesComponent
  },
  {
    path: '**',
    redirectTo: 'shows'
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
