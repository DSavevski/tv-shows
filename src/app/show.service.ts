import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {toPromise} from 'rxjs/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShowService {
  private apiUrl = 'http://api.tvmaze.com/shows';

  private handleError = error => {
    console.log(error);
    return Promise.reject('Error in API occurred');
  };

  constructor(private http: Http) {}

  getShows(): Observable<any []> {
    // return this.http.get(this.apiUrl)
    //   .toPromise()
    //   .then(response => response.json())
    //   .catch(this.handleError);

    return this.http.get(this.apiUrl)
      .map(response => response.json());
  }

  getShow(id: number): Promise<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getCast(id: number): Promise<any []> {
    return this.http.get(`${this.apiUrl}/${id}/cast`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getEpisodes(id: number): Promise<any []>{
    return this.http.get(`${this.apiUrl}/${id}/episodes`)
      .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

}
