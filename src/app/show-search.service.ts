import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<any []> {
    console.log('Service called with term: ', term);
    return this.http.get(`http://api.tvmaze.com/search/shows?q=${term}`)
      .map(response => response.json());
  }
}
