import {Component, OnInit} from '@angular/core';
import {ShowService} from '../show.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: any;

  constructor(private service: ShowService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.service.getShow(id)
        .then(data => {
          this.show = data;
          this.show['summary'] = this.show['summary'].replace(/<\/?[^>]+>/gi, '');
        });
    });
  }

  onBack() {
    this.location.back();
  }
}
