import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsListComponent} from './components/news-list/news-list.component';
import {PublishNewsComponent} from './components/publish-news/publish-news.component';
import {NewsInDetailComponent} from './components/news-in-detail/news-in-detail.component';


const routes: Routes = [{
  path: 'news/list', component: NewsListComponent
}, {
  path: 'news/details/:id', component: NewsInDetailComponent
}, {
  path: 'news/publish', component: PublishNewsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule {
}
