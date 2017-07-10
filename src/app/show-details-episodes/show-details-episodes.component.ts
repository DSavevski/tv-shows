import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-details-episodes',
  templateUrl: './show-details-episodes.component.html',
  styleUrls: ['./show-details-episodes.component.css']
})
export class ShowDetailsEpisodesComponent implements OnInit {
  episodes: any[];

  constructor(private service: ShowService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.service.getEpisodes(id)
        .then(data => {
          this.episodes = data;
          for (let i = 0; i < this.episodes.length; i++) {
            this.episodes[i]['summary'] = this.episodes[i]['summary'].replace(/<\/?[^>]+>/gi, '');
          }
        });
    });
  }

}
