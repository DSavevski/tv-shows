import {Component, OnInit} from '@angular/core';
import {ShowService} from '../show.service';
import {ActivatedRoute, Router} from '@angular/router';
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
              private location: Location,
              private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.service.getShow(id)
        .then(data => {
          this.show = data;
        });
    });
  }

  onBack() {
    this.location.back();
  }

  gotoDetailCast(show: any): void {
    let link = ['/detail', show.id, '/cast'];
    this.router.navigate(link);
  }

  gotoDetailEpisodes(show: any): void {
    let link = ['/detail', show.id, '/episodes'];
    this.router.navigate(link);
  }
}
