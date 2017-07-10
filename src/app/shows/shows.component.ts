import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {ShowSearchService} from '../show-search.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  //shows: any [];

  shows: Observable<any []>;
  private searchTerms = new Subject<string>();

  constructor(private showSearchService: ShowSearchService,
              private showService: ShowService,
              private router: Router) {}

  search(term: string): void {
    console.log('The term is: ', term);
    this.searchTerms.next(term);
  }

  ngOnInit() {
    if(this.searchTerms != null)
      /*this.showService.getShows().then(data => {
       this.shows = data;
       for (let i = 0; i < this.shows.length; i++) {
       this.shows[i]['summary'] = this.shows[i]['summary'].replace(/<\/?[^>]+>/gi, '');
       }
       });*/
      this.shows = this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
          // return the http search observable
          ? this.showSearchService.search(term)
          // or the observable of empty heroes if there was no search term
          : Observable.of<any[]>([]))
        .catch(error => {
          // TODO: add real error handling
          console.log('This is the error: ', error);
          return Observable.of<any[]>([]);
        });
    console.log('Shows: ', this.shows);
  }

  gotoDetail(show: any): void {
    let link = ['/detail', show.id];
    this.router.navigate(link);
  }
}
