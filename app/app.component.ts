import { Component } from 'angular2/core';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AdapterService } from './services/adapter.service';
import { AjaxService } from './services/ajax.service';
import { ArticleList } from './ArticleList/article-list.component';

@Component({
  selector: 'a2f-app',
  templateUrl: 'app/app.component.html',
  directives: [ArticleList],
  providers: [AdapterService, AjaxService, HTTP_PROVIDERS]
})
export class AppComponent {

}
