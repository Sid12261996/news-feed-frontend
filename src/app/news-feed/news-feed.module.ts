import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsFeedRoutingModule} from './news-feed-routing.module';
import {NewsListComponent} from './components/news-list/news-list.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { NewsInDetailComponent } from './components/news-in-detail/news-in-detail.component';
import { PublishNewsComponent } from './components/publish-news/publish-news.component';


@NgModule({
  declarations: [NewsListComponent, NewsInDetailComponent, PublishNewsComponent],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    MaterialDesignModule
  ]
})
export class NewsFeedModule {
}
