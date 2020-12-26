import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsListComponent} from './components/news-list/news-list.component';


const routes: Routes = [{
  path: 'news/list', component: NewsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule {
}
