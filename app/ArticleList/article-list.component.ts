import { Component } from 'angular2/core';
import { AjaxService } from '../services/ajax.service';
import { IArticle } from '../interfaces/article.interface';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  templateUrl: 'app/articleList/article-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ArticleList {
  articles: IArticle[];

  constructor(private _ajaxService: AjaxService){ }

  ngOnInit(): void{
    this._ajaxService.getArticleList().subscribe(
      articles => this.articles = articles
    );
  }
}
