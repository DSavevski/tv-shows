import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-details-cast',
  templateUrl: './show-details-cast.component.html',
  styleUrls: ['./show-details-cast.component.css']
})
export class ShowDetailsCastComponent implements OnInit {
  cast: any[];
  constructor(private service: ShowService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.service.getCast(id)
        .then(data => {
          this.cast = data;
          console.log(data);
        });
    });
  }

  onBack() {
    this.location.back();
  }
}
