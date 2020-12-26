import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {NewsFeed} from '../models/NewsFeed';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private url: string = environment.apiUrl + 'news/';

  constructor(private http: HttpClient) {
  }

  getAllList(): Observable<NewsFeed[]> {
    return this.http.get<NewsFeed[]>(this.url + 'newsListing').pipe(filter(x => x.length > 0));
  }
}
