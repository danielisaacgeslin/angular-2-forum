import 'rxjs/Rx';
import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AdapterService } from './services/adapter.service';
import { AjaxService } from './services/ajax.service';
import { ArticleList } from './articleList/article-list.component';
@Component({
  selector: 'a2f-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [AdapterService, AjaxService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/', name: 'ArticleList', component: ArticleList, useAsDefault: true }
])
export class AppComponent {

}
