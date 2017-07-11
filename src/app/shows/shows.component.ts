import {Component, OnInit} from '@angular/core';
import {ShowSearchService} from '../show-search.service';
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

  shows: Observable<any []>;
  private searchTerms = new Subject<string>();
  searchValue = '';

  constructor(private showSearchService: ShowSearchService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.shows = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.showSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any []>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any []>([]);
      });
  }
}
