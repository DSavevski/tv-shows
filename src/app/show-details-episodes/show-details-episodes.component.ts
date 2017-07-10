import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-details-episodes',
  templateUrl: './show-details-episodes.component.html',
  styleUrls: ['./show-details-episodes.component.css']
})
export class ShowDetailsEpisodesComponent implements OnInit {
  episodes: any[];

  constructor(private service: ShowService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    console.log('ROUTE: ', this.route.toString());
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.service.getEpisodes(id)
        .then(data => {
          this.episodes = data;
        });
    });
  }

  onBack() {
    this.location.back();
  }

}
