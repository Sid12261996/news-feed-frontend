import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsFeedRoutingModule} from './news-feed-routing.module';
import {NewsListComponent} from './components/news-list/news-list.component';
import {MaterialDesignModule} from '../material-design/material-design.module';


@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    MaterialDesignModule
  ]
})
export class NewsFeedModule {
}
