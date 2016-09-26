import { Component } from 'angular2/core';
import { ArticleList } from './ArticleList/article-list.component';

@Component({
  selector: 'a2f-app',
  templateUrl: 'app/app.component.html',
  directives: [ArticleList]
})
export class AppComponent {

}
