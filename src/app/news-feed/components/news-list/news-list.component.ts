import {Component, OnInit} from '@angular/core';
import {NewsFeed} from '../../models/NewsFeed';
import {NewsFeedService} from '../../service/news-feed.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: NewsFeed[] = [];

  constructor(private newsFeedService: NewsFeedService) {
  }

  ngOnInit() {
    this.loadNews();
  }

  private loadNews() {
    this.newsFeedService.getAllList().subscribe(x => {
      console.log(x);
      this.newsList = x;
    });
  }
}
